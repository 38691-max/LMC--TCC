import { betterAuth } from "better-auth";
import { prisma } from "./prisma";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import * as bcryptjs from "bcryptjs";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "mysql",
  }),
  emailAndPassword: {
    enabled: true,
    maxPasswordLength: 20,
    minPasswordLength: 6,
    autoSignIn: true,
    password: {
      async hash(password) {
        return await bcryptjs.hash(password, 10);
      },
      async verify({ password, hash }) {
        return await bcryptjs.compare(password, hash);
      },
    }
  },
  appName: "LMC+",
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  plugins: [nextCookies()],
  session: {
    expiresIn: 60 * 60 * 24 * 30, // 30 days
    disableSessionRefresh: false, // se true, a sessão não será renovada automaticamente
    freshAge: 60 * 60 * 24, // 24 hours (em segundos) - define o tempo para a sessão ser considerada "fresca"
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // 5 minutes
    }
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      accessType: "offline",
      prompt: "consent",
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }
  },
})