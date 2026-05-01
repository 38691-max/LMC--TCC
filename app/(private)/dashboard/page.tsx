"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="font-bold text-3xl mb-5">Página de Dashboard</h1>
      <Button variant="outline" onClick={() => authClient.signOut({ fetchOptions: { onSuccess: () => { redirect("/sign-in") } } })}>Logout</Button>
    </div>
  )
}