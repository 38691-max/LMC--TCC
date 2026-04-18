import {
  Card,
  CardContent
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Shield, Database, Lock, User } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Logo from "@/public/logo.png"

export const metadata: Metadata = {
  title: "Política de privacidade de autenticidade"
}

export default function PrivacyPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6 space-y-10">

      <Image src={Logo} alt="Logo" className="h-24 w-32" />
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          <h1 className="text-4xl font-bold">Política de Privacidade</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl">
          Saiba como seus dados são tratados ao utilizar autenticação com provedores como Google.
        </p>
      </div>

      <Separator />

      <Card className="border-primary/30 bg-primary/5">
        <CardContent className="py-4 text-sm">
          Utilizamos autenticação via provedores confiáveis como Google.
          Apenas dados essenciais são acessados.
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="w-full space-y-4">

        <AccordionItem value="dados">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4" />
              Dados Coletados
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-3">
            <p>Coletamos apenas informações básicas:</p>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary">Nome</Badge>
              <Badge variant="secondary">Email</Badge>
              <Badge variant="secondary">Foto</Badge>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="uso">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Uso das Informações
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc ml-6 space-y-1">
              <li>Autenticação</li>
              <li>Identificação do usuário</li>
              <li>Experiência personalizada</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="seguranca">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Segurança
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Aplicamos boas práticas de segurança, mas dependemos também
            dos provedores externos.
          </AccordionContent>
        </AccordionItem>

      </Accordion>

      <p className="text-xs text-muted-foreground text-center pt-6">
        Última atualização: {new Date().toLocaleDateString()}
      </p>
    </main>
  )
}
