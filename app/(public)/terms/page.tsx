import Footer from "@/components/footer"
import { Header } from "@/components/header"
import { AnimatedGroup } from "@/components/motion-primitivies/animated-group"
import { TextEffect } from "@/components/motion-primitivies/text-effect"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { FileText, ShieldCheck, Users } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termos de Serviço de autenticidade",
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto py-12 px-6 space-y-10">
        <div className="space-y-3 mt-36">
          <div className="flex items-center gap-2">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
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
                      duration: 2,
                    },
                  },
                },
              }}
            >
              <FileText className="w-6 h-6 text-primary" />
            </AnimatedGroup>

            <TextEffect className="text-4xl font-bold" as="h1" preset="fade-in-blur" speedSegment={0.3}>
              Termos de Serviço
            </TextEffect>
          </div>
          <TextEffect className="text-muted-foreground max-w-2xl" as="p" preset="fade-in-blur" speedSegment={0.3}>
            Regras de uso da aplicação e autenticação com serviços externos.
          </TextEffect>
        </div>
        <Separator />
        <AnimatedGroup variants={{
          container: {
            visible: {
              transition: {
                delayChildren: 1,
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
                duration: 2,
              },
            },
          },
        }}>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex gap-2 items-center">
                  <Users className="w-4 h-4" />
                  Aceitação
                </CardTitle>
              </CardHeader>
              <CardContent>
                Ao usar a aplicação, você concorda com login via Google e outros provedores.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex gap-2 items-center">
                  <ShieldCheck className="w-4 h-4" />
                  Autenticação
                </CardTitle>
              </CardHeader>
              <CardContent>
                O sistema utiliza autenticação externa e compartilha apenas dados básicos.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Uso</CardTitle>
              </CardHeader>
              <CardContent>
                Aplicação de caráter acadêmico, sem fins comerciais.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Responsabilidade</CardTitle>
              </CardHeader>
              <CardContent>
                Não garantimos funcionamento contínuo devido a dependências externas.
              </CardContent>
            </Card>

          </div>
        </AnimatedGroup>
        <TextEffect as="p" preset="fade-in-blur" speedSegment={0.3} className="text-xs text-muted-foreground text-center pt-6">
          {`Última atualização: ${new Date().toLocaleDateString()}`}
        </TextEffect>
      </main>
      <Footer />
    </>
  )
}
