import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("isAdmin");

  if (!isAdmin) {
    redirect("/admin/login");
  }

  return <>{children}</>;
}
