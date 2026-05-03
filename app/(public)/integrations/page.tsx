import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { transitionVariants } from "@/components/landing-page";
import Integrations from "@/components/integrations";
import { AnimatedGroup } from "@/components/motion-primitivies/animated-group";

export default function IntegrationsPage() {
  return (
    <>
      <Header />
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
        <Integrations />
      </AnimatedGroup>
      <Footer />
    </>
  )
}