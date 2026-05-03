import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { TextEffect } from "@/components/motion-primitivies/text-effect";

export default function About() {
  return (
    <>
      <Header />
      <section className='bg-muted py-8 sm:py-16 lg:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-36'>
          <div className='mb-12 space-y-4 text-center md:mb-16 lg:mb-24'>
            <TextEffect as="h2" speedSegment={0.3} preset="scale" className='text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl'>Sobre o LMC+</TextEffect>
            <TextEffect as="p" speedSegment={0.3} preset="fade" className='text-muted-foreground text-xl'>
              O LMC é uma plataforma desenvolvida como projeto de TCC inspirada no ecossistema da LMC+, criada para otimizar a programação televisiva e o gerenciamento de conteúdo para emissoras. A aplicação permite organizar grades de programação, controlar a exibição de episódios, anúncios e conteúdos audiovisuais, oferecendo mais eficiência, automação e praticidade no processo de transmissão.
            </TextEffect>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}