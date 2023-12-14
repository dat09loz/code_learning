# Update: Dropped
I can't get this error to go away, it suddently popped up while I started to create an API route to create a new prompt to the database. Since I used next 14 and the tut is next 13, maybe some version mismatchs from other libraries caused it? ¯\_(ツ)_/¯

```
Uncaught (in promise) TypeError: mongoose__WEBPACK_IMPORTED_MODULE_0__.models is undefined
```

It points to the User model, which is weird since it worked fine then decided to throw the error later on. This [post](https://stackoverflow.com/questions/74786429/how-do-i-get-rid-of-this-error-when-working-with-mongoose) seems to capture the error similar to what I've encountered.


NextJS 13 Tutorial [link](https://www.youtube.com/watch?v=wm5gMKuwSYk&list=PLre0XcSr2JpjC1nMg5xYilsGkV5XpGETq)




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
