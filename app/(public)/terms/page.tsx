import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { FileText, ShieldCheck, Users } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Logo from "@/public/logo.png"

export const metadata: Metadata = {
  title: "Termos de Serviço de autenticidade",
}

export default function TermsPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6 space-y-10">
      <Image src={Logo} alt="Logo" className="h-24 w-32" />

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          <h1 className="text-4xl font-bold">Termos de Serviço</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl">
          Regras de uso da aplicação e autenticação com serviços externos.
        </p>
      </div>

      <Separator />

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

      <p className="text-xs text-muted-foreground text-center pt-6">
        Última atualização: {new Date().toLocaleDateString()}
      </p>
    </main>
  )
}
