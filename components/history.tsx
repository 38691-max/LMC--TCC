import { AnimatedGroup } from "@/components/motion-primitivies/animated-group";
import { TextEffect } from "@/components/motion-primitivies/text-effect";
import { Variants } from 'motion/react';

export const transitionVariants: {
  item: Variants;
} = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export function History() {
  const steps = [
    {
      number: "01",
      title: "Nossa História",
      description: "Com mais de 20 anos de experiência no mercado televisivo, com o objetivo de trazer pluralidade, inclusão, diversidade, diversão, educação e muito entretenimento para todas as TVs do Brasil, surgiu o LMC+."
    },
    {
      number: "02",
      title: "Programação",
      description: "De domingo à domingo, exibimos conteúdos cuidadosamente selecionados pela nossa equipe de curadoria."
    },
    {
      number: "03",
      title: "Conteúdos",
      description: "Vamos desde séries e desenhos infantis, até conteúdos de viagens pelo mundo, vida selvagem, esporte, música, filmes e muito mais."
    }
  ];

  return (
    <section className="bg-background pb-16 pt-16 md:pb-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Cabeçalho */}
        <div className="mb-12">
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="span"
            className="text-sm font-semibold uppercase tracking-wider text-primary"
          >
            LMC+ PLUS
          </TextEffect>
          
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.2}
            as="h2"
            className="mt-2 text-4xl font-bold md:text-5xl lg:text-6xl"
          >
            Nossa História
          </TextEffect>
          
          <TextEffect
            per="word"
            preset="fade"
            speedSegment={0.3}
            delay={0.4}
            as="p"
            className="mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            Conheça nossa trajetória
          </TextEffect>
        </div>

        {/* Steps com os conteúdos da History */}
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.3,
                },
              },
            },
            ...transitionVariants,
          }}
          className="grid gap-8 md:grid-cols-3"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border bg-card p-8 transition-all hover:shadow-lg"
            >
              {/* Número */}
              <div className="mb-4 text-4xl font-bold text-primary/20">
                {step.number}
              </div>

              {/* Título */}
              <h3 className="mb-3 text-xl font-semibold">
                {step.title}
              </h3>

              {/* Descrição */}
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>

              {/* Linha decorativa no hover */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}