import Image from "next/image";
import Logo from "../../../public/logo.png"
import { SignInForm } from "@/components/sign-in-form";
import { Metadata } from "next";
import Link from "next/link";
import { AnimatedGroup } from "@/components/motion-primitivies/animated-group";
import { transitionVariants } from "@/components/hero-section";

export const metadata: Metadata = {
  title: "Página de Login",
}

export default function SignInPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
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
        <div className="flex w-full max-w-sm flex-col gap-6">
          <Link href="/" className="flex items-center gap-2 self-center font-medium">
            <div className="flex size-20 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Image src={Logo} alt="" />
            </div>
            LMC+
          </Link>
          <SignInForm />
        </div>
      </AnimatedGroup>

    </div>
  )
}