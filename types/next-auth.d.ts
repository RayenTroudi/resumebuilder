import type { DefaultSession } from "next-auth";
import type { Role, Plan } from "@/lib/generated/prisma";

/**
 * Module augmentation so `session.user` and the JWT carry our custom
 * fields (id, role, plan) with full type-safety — no `as any` casts.
 */
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: Role;
      plan: Plan;
    } & DefaultSession["user"];
  }

  interface User {
    role: Role;
    plan: Plan;
  }
}

// `next-auth/jwt` only re-exports `@auth/core/jwt`, so the JWT interface must
// be augmented at its source module for the merge to take effect.
declare module "@auth/core/jwt" {
  interface JWT {
    id: string;
    role: Role;
    plan: Plan;
  }
}
