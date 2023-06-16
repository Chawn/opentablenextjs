This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

supabase project password
!nZYug.4*G%kBA3

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Database
- creat project on Supabase (online postgresql)
- copy connection string from Supabase and paste to .env
```
DATABASE_URL="postgres://postgres:!nZYug.4*G%kBA3@db.evjwlvfqnfhsetvvqooz.supabase.co:6543/postgres"
``` 

- install prisma
``` 
npm install prisma --save-dev
npx prisma init
```
- config schema.prisma
```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Restaurant {
  id          Int      @id @default(autoincrement())
  name        String
  main_image  String
  images      String[]
  description String
  open_time   String
  close_time  String
  slug        String   @unique
  price       PRICE
  items       Item[]
  location_id Int
  location    Location @relation(fields: [location_id], references: [id])
  cuisine_id  Int
  cuisine     Cuisine  @relation(fields: [cuisine_id], references: [id])
  created_at  DateTime @default(now())
  updated_at  DateTime @updatedAt
}

model Item {
  id            Int        @id @default(autoincrement())
  name          String
  price         Int
  description   String
  image         String
  restaurant_id Int
  restaurant    Restaurant @relation(fields: [restaurant_id], references: [id])
  created_at    DateTime   @default(now())
  updated_at    DateTime   @updatedAt
}

model Location {
  id          Int          @id @default(autoincrement())
  name        String
  restaurants Restaurant[]
  created_at  DateTime     @default(now())
  updated_at  DateTime     @updatedAt
}

model Cuisine {
  id          Int          @id @default(autoincrement())
  name        String
  restaurants Restaurant[]
  created_at  DateTime     @default(now())
  updated_at  DateTime     @updatedAt
}

enum PRICE {
  CHEAP
  REGULAR
  EXPENSIVE
}

```
- run command to create table
```
npx prisma db push
``` 

- Insert initial data by create file pages/api/seed.ts
``` 
...
await prisma.cuisine.createMany(...)
...
````
- open http://localhost:3005/api/seed in chrome to insert data
- 
