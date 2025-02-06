import { clerkMiddleware } from '@clerk/nextjs/server'
import { getEnvVariable } from '@clerk/shared/getEnvVariable'

const PUBLISHABLE_KEY = getEnvVariable('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY')
console.log('next-app publishable key', PUBLISHABLE_KEY)

export default clerkMiddleware({
  publishableKey: PUBLISHABLE_KEY,
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}