import Navbar from "@/components/common/navbar";
import Container from "@/components/common/container";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-5xl font-bold tracking-tight">
              Personal Book Manager
            </h1>

            <p className="mt-6 text-muted-foreground text-lg">
              Keep track of your books, monitor your reading progress, and build
              your personal library.
            </p>
          </div>
        </Container>
      </main>
    </>
  );
}
