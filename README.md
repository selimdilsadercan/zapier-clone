- [x] "npx create-next-app@latest {project-name}" to initialize nextjs
- [x] create github repo, and connect
- [x] change layout, change page.tsx, delete assets
- [x] create .env file, add .env to .gitignore
- [x] add .prettierrc

- [x] "npx shadcn-ui@latest init" to initialize shadcn
- [x] html, body, :root { height: 100% } thing at app/globals.css

- [ ] "npx shadcn-ui@latest add sonner"
- [ ] add /providers/toast-provider.tsx and add to /layout.tsx

- [ ] "npm i @clerk/nextjs"
- [ ] create clerk project
- [ ] add .env keys
- [ ] add providers/clerk-provider.tsx and add wrap layout.tsx's children
- [ ] add middleware.ts
- [ ] make the signin button mode to modal

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

- primary stack: nextjs13-app-nosrc, react, shadcn, tailwind, clerk, neon, drizzle-orm, react-admin
- secondary stack: zustand, bun, react-circular-progressbar, react-confetti, react-use
- ui: font = nunito, icons = lucide
- extensions:

---

- .next içindeki dosyalar app folderının içine page.tsx dışında bir file oluşturunca açılıyor
- sayfa ile alakalı componentleri app klasörü içinde components folderı olmadan tanımladı
- gamish tarzda assetler için: https://kenney.nl/
- bayrak paketi: https://flagpack.xyz/
- microsoft emoji paketi: https://github.com/microsoft/fluentui-emoji
- yapay zeka ile ses doyaları için: https://elevenlabs.io/
- react cache ve revalidatePath ile basit düzey caching yapabiliyoruz
- drizzle schema'daki elemanları typeof kullanarak alabiliyoruz
- rid-cols-[repeat(auto-fill,minmax(210px,1fr))] ile auto grid yapabiliyoruz
- lucide icon kalınlığını stroke-[] vererek ayarlayabiliyosun
- ayrı ayrı await eklemek yerine hepsini tek seferde Promise.all diyerek fetchliyo
- normalde .ts dosyasını node ./a.ts diyerek eğer require kullandıysan çalıştırıyosun, ama tsx, tsnode ya da bun kullanabilirsin
- bun daha windows'a çıkmadı
- terminal komutlarını package.json'daki scripts'e ekleyerek kısaltabilirsin
- drizzle'da table ya da sütün isimlerinde conflict yaşandığında sorunu terminalden çözebiliyosun
- react-use useAudio ile ses çalabiliyosun
- react-use useKey ile çok daha kolay şekilde shortcutlar oluşturabiliyosun
- loading state'leri react startTransition ile yapıyor
- stripe account inceleme, hesap deaktive etmek
- 3d efektli buton nasıl yapılır
- react-admin paketi ile hızlı admin paneli yapılıyor
- react-adminle liste oluştururken Resource içine list kısmına ListGuesser kullanarak geçici bir şey kullanabiliyosun
- npm run build, npm run dev'de görüntülenmeyen ama vercelda görüntülenen bazı hataları gösteriyor
- npm run dev çalışırken npm run build yapamıyosun
