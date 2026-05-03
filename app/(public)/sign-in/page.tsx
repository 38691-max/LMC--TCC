import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { AnimatedGroup } from "@/components/motion-primitivies/animated-group";
import { SignInForm } from "@/components/sign-in-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página de Login",
}

export default function SignInPage() {
  return (
    <>
      <Header />
      <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6 mt-36">
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
            <SignInForm />
          </AnimatedGroup>

        </div>
      </div>
      <Footer />
    </>
  )
}