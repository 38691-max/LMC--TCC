"use client"

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function DashboardPage() {
  const session = authClient.useSession;
  const data = session.get().data?.user;
  const isPending = session.get().isPending;
  const error = session.get().error;

  if (isPending) {
    return <p className="text-4xl font-semibold p-6">Carregando...</p>
  }

  if (error) {
    return (
      <div className="p-6">
        <p className="text-red-500 font-semibold">
          Erro ao carregar sessão.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="font-bold text-3xl mb-5">Página de Dashboard</h1>
      <p className="mb-5 text-2xl font-semibold">Bem-vindo, {data?.name}</p>
      <p className="mb-5 text-2xl font-semibold">E-mail: {data?.email}</p>
      <Button variant="destructive" onClick={() => authClient.signOut({
        fetchOptions: {
          async onSuccess() {
            redirect("/sign-in")
          },
        }
      })}>Sair</Button>
    </div>
  )
}