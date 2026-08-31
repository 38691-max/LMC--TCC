import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { RootPage } from "@/components/landing-page";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container">
        <Header />
      </div>

      <main className="overflow-hidden">
        <RootPage />
      </main>
      <div className="container mx-auto px-4 py-8">
        <Footer />
      </div>
    </div>
  );
}