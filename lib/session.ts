import { cache } from "react";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export type CurrentUser = {
  id: string;
  name: string | null;
  email: string;
  image: string | null;
  role: "USER" | "ADMIN";
  plan: "FREE" | "WEEKLY" | "PRO";
  aiCreditsUsed: number;
  aiCreditsTotal: number;
};

/**
 * Server-side Data Access Layer helper. Reads the authenticated session and
 * loads the fresh user record from PostgreSQL. `cache` dedupes the DB hit
 * across a single request (layout + page). Returns null when unauthenticated.
 */
export const getCurrentUser = cache(async (): Promise<CurrentUser | null> => {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return null;

  const user = await db.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      role: true,
      plan: true,
      aiCreditsUsed: true,
      aiCreditsTotal: true,
    },
  });

  return user;
});

/** Require an authenticated user id or throw — for use inside server actions. */
export async function requireUserId(): Promise<string> {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) throw new Error("UNAUTHORIZED");
  return userId;
}
