import ProtectedRoute from "./components/ProtectedRoute";
import AdminWrapper from "./AdminWrapper";

export const metadata = {
  title: "Admin | Chandrabon",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <AdminWrapper>{children}</AdminWrapper>
    </ProtectedRoute>
  );
}
