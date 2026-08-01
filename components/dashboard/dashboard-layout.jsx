import Navbar from "@/components/common/navbar";
import Container from "@/components/common/container";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-64px)] bg-background py-8">
        <Container>{children}</Container>
      </main>
    </>
  );
}
