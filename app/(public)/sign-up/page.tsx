import { SignupForm } from "@/components/sign-up-form"
import Image from "next/image"
import Background from "@/public/background.png"
import { Metadata } from "next"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { AnimatedGroup } from "@/components/motion-primitivies/animated-group"

export const metadata: Metadata = {
  title: "Página de Cadastro",
}

export default function SignupPage() {
  return (
    <>
      <Header />
      <div className="grid min-h-svh lg:grid-cols-2">
        <div className="flex flex-col gap-4 p-6 md:p-10 mt-36">
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-xs">
              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        delayChildren: 0.35,
                      },
                    },
                  },
                  item: {
                    hidden: {
                      opacity: 0,
                      y: 20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        bounce: 0.3,
                        duration: 2.5,
                      },
                    },
                  },
                }}
              >
                <SignupForm />
              </AnimatedGroup>

            </div>
          </div>
        </div>
        <div className="relative hidden bg-muted lg:block">
          <Image
            src={Background}
            alt="Imagem de fundo para a página de cadastro"
            className="absolute inset-0 m-auto h-full object-cover dark:opacity-100"
          />
        </div>
      </div>
      <Footer />
    </>
  )
}
