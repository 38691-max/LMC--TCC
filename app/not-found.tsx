import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
import { Header } from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "404 - Página Não Encontrada",
}

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <Card className="w-full max-w-md text-center shadow-lg">
          <CardContent className="flex flex-col items-center gap-4 p-8">
            <h1 className="text-5xl font-bold text-red-500">404</h1>

            <p className="text-lg font-medium">
              Página não encontrada
            </p>

            <p className="text-sm text-muted-foreground">
              A página que você está procurando não existe ou foi movida.
            </p>

            <Button asChild className="mt-4 w-full">
              <Link href="/dashboard">
                Voltar para o início
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
}
