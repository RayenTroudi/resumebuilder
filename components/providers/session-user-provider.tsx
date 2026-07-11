"use client";

import { createContext, useContext } from "react";
import type { CurrentUser } from "@/lib/session";

const SessionUserContext = createContext<CurrentUser | null>(null);

export function SessionUserProvider({
  user,
  children,
}: {
  user: CurrentUser;
  children: React.ReactNode;
}) {
  return (
    <SessionUserContext.Provider value={user}>
      {children}
    </SessionUserContext.Provider>
  );
}

/** Access the authenticated user inside dashboard client components. */
export function useSessionUser(): CurrentUser {
  const user = useContext(SessionUserContext);
  if (!user) {
    throw new Error("useSessionUser must be used within a SessionUserProvider");
  }
  return user;
}
