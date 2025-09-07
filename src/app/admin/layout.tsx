import AdminWrapper from "./AdminWrapper";

export const metadata = {
  title: "Admin | Chandrabon",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <AdminWrapper>{children}</AdminWrapper>
    </div>
  );
}
