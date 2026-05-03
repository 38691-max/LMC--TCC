import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'
import {
  RiNextjsFill,
} from "react-icons/ri";
import {
  SiPrisma,
  SiGoogle,
  SiGithub,
  SiVercel,
  SiShadcnui,
  SiBetterauth,
} from "react-icons/si";
import { FaDocker } from "react-icons/fa6";

export default function Integrations() {
  return (
    <section>
      <div className="py-32">
        <div className="mx-auto max-w-5xl px-6 mt-32">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">Integrar com suas ferramentas favoritas</h2>
            <p className="text-muted-foreground mt-6">Conecte-se perfeitamente com plataformas e serviços populares para aprimorar seu fluxo de trabalho.</p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <IntegrationCard
              title="Next.js"
              link="https://nextjs.org/docs"
              description="Next js is a React framework that enables several extra features, including server-side rendering and generating static websites.">
              <RiNextjsFill />
            </IntegrationCard>

            <IntegrationCard
              title="Vercel"
              link="https://vercel.com/docs"
              description="Vercel is a cloud platform for static sites and Serverless Functions that fits perfectly with your workflow.">
              <SiVercel />
            </IntegrationCard>

            <IntegrationCard
              title="Google"
              link="https://developers.google.com/docs"
              description="google is a technology company that specializes in Internet-related services and products, including online advertising technologies, search engine, cloud computing, software, and hardware.">
              <SiGoogle />
            </IntegrationCard>

            <IntegrationCard
              title="Github"
              link="https://docs.github.com"
              description="Github is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features.">
              <SiGithub />
            </IntegrationCard>

            <IntegrationCard
              title="Shadcn/UI"
              link="https://ui.shadcn.com/docs"
              description="shadcn/ui is a collection of reusable components built using Radix UI and Tailwind CSS. It provides a set of pre-designed and customizable UI components that can be easily integrated into web applications.">
              <SiShadcnui />
            </IntegrationCard>

            <IntegrationCard
              title="Docker"
              link="https://docs.docker.com"
              description="Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.">
              <FaDocker />
            </IntegrationCard>

            <IntegrationCard
              title="Prisma ORM"
              link="https://www.prisma.io/docs"
              description="Prisma is a database toolkit that simplifies database access and management. It provides a type-safe database client for Node.js and TypeScript.">
              <SiPrisma />
            </IntegrationCard>

            <IntegrationCard
              title="Better Auth"
              link="https://www.better-auth.com/docs"
              description="Better Auth is an open-source authentication solution that provides a secure and customizable way to handle user authentication in web applications. It offers features such as passwordless login, social login, and multi-factor authentication.">
              <SiBetterauth />
            </IntegrationCard>
          </div>
        </div>
      </div>
    </section>
  )
}

const IntegrationCard = ({ title, description, children, link = 'https://github.com/meschacirung/cnblocks' }: { title: string; description: string; children: React.ReactNode; link?: string }) => {
  return (
    <Card className="p-6">
      <div className="relative">
        <div className="*:size-10">{children}</div>

        <div className="space-y-2 py-6">
          <h3 className="text-base font-medium">{title}</h3>
          <p className="text-muted-foreground line-clamp-2 text-sm">{description}</p>
        </div>

        <div className="flex gap-3 border-t border-dashed pt-6">
          <Button
            asChild
            variant="secondary"
            size="sm"
            className="gap-1 pr-2 shadow-none">
            <Link href={link}>
              Learn More
              <ChevronRight className="ml-0 !size-3.5 opacity-50" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  )
}