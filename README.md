- [x] "npx create-next-app@latest {project-name}" to initialize nextjs
- [x] create github repo, and connect
- [x] change layout, change page.tsx, delete assets
- [x] create .env file, add .env to .gitignore
- [x] add .prettierrc

- [x] "npx shadcn-ui@latest init" to initialize shadcn
- [x] html, body, :root { height: 100% } thing at app/globals.css
- [x] "npx shadcn-ui@latest add button" to add button

- [x] "npm i framer-motion tailwind-merge clsx"
- [x] copy acernity ui components to /components/ui

- [x] "npx shadcn-ui@latest add sonner"
- [x] add /providers/toast-provider.tsx and add to /layout.tsx

- [x] "npm install next-themes"
- [x] add /providers/theme-provider.tsx and wrap layout.tsx's children
- [x] create ThemeToggle.tsx switch

- [x] "npm i @clerk/nextjs"
- [x] create clerk project
- [x] add .env keys and .env after sign out shits
- [x] add providers/clerk-provider.tsx and add wrap layout.tsx's children
- [x] add middleware.ts
- [x] add app/(auth) and add select-org

- [ ] create neon project
- [ ] copy connection string as DATABASE_URL to .env
- [ ] "npm i drizzle-orm @neondatabase/serverless"
- [ ] "npm i -D drizzle-kit pg"
- [ ] add "studio": "npx drizzle-kit studio", and "push": "npx drizzle-kit push:pg" to package.json scripts
- [ ] create /db/drizzle.ts
- [ ] create /db/schema.ts and create schemas
- [ ] "npm i dotenv" and create /drizzle.config.ts
- [ ] "npm i -g tsx" and add "seed": "tsx ./scripts/seed.ts" and run npm run seed to seed database

- [ ] "npm i stripe"
- [ ] create /lib/stripe.ts
- [ ] create new stripe account
- [ ] copy developers -> API Keys -> Secret Key as STRIPE_API_KEY to .env
- [ ] "C:\Users\dilsa\Documents\Uygulamalar\stripe_1.19.4_windows_x86_64\stripe.exe" login
- [ ] "C:\Users\dilsa\Documents\Uygulamalar\stripe_1.19.4_windows_x86_64\stripe.exe" listen --forward-to localhost:3000/api/webhooks/stripe
- [ ] open webook endpoint -> test in local env -> paste this webhooks key to .env as STRIPE_WEBHOOK_SECRET
- [ ] create /app/api/webhooks/stripe/route.ts
- [ ] add /api/webhooks/stripe to publicRoutes in middleware.ts
- [ ] search for customer portal, activate test link

- [ ] "npm run build"
- [ ] create vercel project
- [ ] copy .env keys and deploy to vercel
- [ ] change NEXT_PUBLIC_APP_URL without trailing slash
- [ ] create stripe hosted webhook endpoint with published domain and copy signin secret to vercel enviorment variables
- [ ] redeploy without cache

---

- primary stack: nextjs13-app-nosrc, react, shadcn, tailwind, clerk, neon, drizzle-orm
- secondary stack: tsparticles
- ui: font = DM_Sans, icons = lucide
- extensions:

---

- scripts'deki next dev --experimental-https yapınca https olarak localde çalışıyor
- backdrop-blur-lg ile camsı stil elde edebilirsin
