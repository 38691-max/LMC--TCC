import { createAuthClient } from "better-auth/client"
import { nextCookies } from "better-auth/next-js"

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL,
  plugins: [nextCookies()],
})