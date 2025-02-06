# `getEnvVariable` test in different SDKs

This repository demonstrates and tests the isomorphic environment variable retrieval function in [#4985](https://github.com/clerk/javascript/pull/4985) that provides consistent config access across Node.js, Vite, and Cloudflare Workers environments.

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Set up environment variables:

   For Vue app (`apps/vue-app/.env.local`):
   ```
   VITE_CLERK_PUBLISHABLE_KEY=your_publishable_key
   ```

   For Next.js app (`apps/next-app/.env`):
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
   CLERK_SECRET_KEY=your_secret_key
   ```

## Development

Run the Vue.js app:
```bash
pnpm dev:vue
```

Run the Next.js app:
```bash
pnpm dev:next
```

## Structure

- `apps/vue-app`: Vite + Vue.js implementation
- `apps/next-app`: Next.js implementation
