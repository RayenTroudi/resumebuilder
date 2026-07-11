import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/session";
import { SessionUserProvider } from "@/components/providers/session-user-provider";
import { DashboardShell } from "@/components/layout/dashboard-shell";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Defense-in-depth: proxy.ts already redirects unauthenticated users, but we
  // re-check at the data layer (the DB is the source of truth) so a stale/
  // deleted user can never render the dashboard.
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  return (
    <SessionUserProvider user={user}>
      <DashboardShell>{children}</DashboardShell>
    </SessionUserProvider>
  );
}
