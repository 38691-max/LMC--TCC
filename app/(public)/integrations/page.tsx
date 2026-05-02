import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import { transitionVariants } from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-section";
import { AnimatedGroup } from "@/components/motion-primitivies/animated-group";

export default function IntegrationsPage() {
  return (
    <>
      <HeroHeader />
      <AnimatedGroup
        variants={{
          container: {
            visible: {
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.75,
              },
            },
          },
          ...transitionVariants,
        }}
      >
        <IntegrationsSection />
      </AnimatedGroup>
      <FooterSection />
    </>
  )
}