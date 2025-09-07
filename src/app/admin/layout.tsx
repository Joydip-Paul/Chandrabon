import AdminWrapper from "./AdminWrapper";
import ProtectedRoute from "./components/ProtectedRoute";

export const metadata = {
  title: "Admin | Chandrabon",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProtectedRoute>
        <div className="min-h-screen">
          <AdminWrapper>{children}</AdminWrapper>
        </div>
      </ProtectedRoute>
    </>
  );
}
