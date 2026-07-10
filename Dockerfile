FROM node:24-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat

# ---- Dependencies (full install, cached as its own layer) ----
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# ---- Development (used by docker-compose for local dev) ----
FROM base AS development
ENV NODE_ENV=development
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
EXPOSE 3000
CMD ["npm", "run", "dev"]

# ---- Builder (compiles the production build) ----
FROM base AS builder
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
RUN npm run build

# ---- Runner (production image deployed to Railway) ----
# Uses a conventional `next start`-compatible layout (full node_modules,
# full .next build output) rather than the trimmed `output: standalone`
# bundle, because Railway's configured Start Command runs `npm run start`
# directly and would override/bypass a standalone server.js entrypoint.
FROM base AS runner
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.config.ts ./prisma.config.ts
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/package.json ./package.json

COPY docker-entrypoint.sh ./
RUN chmod +x docker-entrypoint.sh \
 && chown -R nextjs:nodejs .next docker-entrypoint.sh

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["npm", "run", "start"]
