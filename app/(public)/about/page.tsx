import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";
import { Tv, Calendar, Clapperboard } from "lucide-react";
import Logo from "@/public/logo.png"
import Image from "next/image";

export default function About() {
  return (
    <>
      <Header />

      <section className="relative overflow-hidden py-24">
        {/* blobs de fundo */}
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

        <div className="container mx-auto px-4 pt-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* CARD ESQUERDO */}
            <div className="flex justify-center">
              <Card className="max-w-md rounded-3xl border-none bg-muted/50 shadow-xl backdrop-blur">
                <CardContent className="flex flex-col items-center gap-6 p-10 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <Image src={Logo} alt="LMC ++" />
                  </div>

                  <h2 className="text-3xl font-bold">
                    Plataforma LMC+
                  </h2>

                  <p className="text-muted-foreground leading-7">
                    Desenvolvida como Trabalho de Conclusão de Curso, a
                    plataforma busca modernizar a gestão de programação
                    televisiva, centralizando conteúdos, episódios e anúncios
                    em um único ambiente.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* TEXTO DIREITO */}
            <div className="space-y-8">
              <div>
                <span className="text-primary font-medium">
                  Sobre o Projeto
                </span>

                <h1 className="mt-3 text-4xl font-bold tracking-tight lg:text-5xl">
                  Tecnologia aplicada à gestão de emissoras.
                </h1>
              </div>

              <p className="text-lg text-muted-foreground leading-8">
                O LMC+ é uma plataforma inspirada no ecossistema da LMC,
                desenvolvida para tornar a programação televisiva mais
                eficiente e organizada.
              </p>

              <p className="text-lg text-muted-foreground leading-8">
                A aplicação permite organizar grades de programação,
                controlar a exibição de episódios, anúncios e conteúdos
                audiovisuais, oferecendo mais automação e praticidade no
                processo de transmissão.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Calendar className="mx-auto mb-3 h-8 w-8 text-primary" />
                    <p className="font-medium">Programação</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Clapperboard className="mx-auto mb-3 h-8 w-8 text-primary" />
                    <p className="font-medium">Conteúdo</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Tv className="mx-auto mb-3 h-8 w-8 text-primary" />
                    <p className="font-medium">Transmissão</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}