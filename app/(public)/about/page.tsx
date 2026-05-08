import Footer from "@/components/footer";
import { Header } from "@/components/header";

export default function About() {
  return (
    <>
      <Header />
      <section className='bg-muted py-8 sm:py-16 lg:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-36'>
          <div className='mb-12 space-y-4 text-center md:mb-16 lg:mb-24'>
            <p className='text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl'>Sobre o LMC+</p>
            <p className='text-muted-foreground text-xl'>
              O LMC é uma plataforma desenvolvida como projeto de TCC inspirada no ecossistema da LMC+, criada para otimizar a programação televisiva e o gerenciamento de conteúdo para emissoras. A aplicação permite organizar grades de programação, controlar a exibição de episódios, anúncios e conteúdos audiovisuais, oferecendo mais eficiência, automação e praticidade no processo de transmissão.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}