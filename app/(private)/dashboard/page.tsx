"use client"
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function dashboardPage() {
  return (
    <div>
      <h1>Página de Dashboard</h1>
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