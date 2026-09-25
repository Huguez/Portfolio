
<p align="center">
   <a href="https://nextjs.org/" target="blank">
      <img src="https://nextjs.org/_next/static/immutable/media/nextjs-logotype-light.00-_80jv8_dct.svg" width="550" alt="Next Logo" />
   </a>
</p>

<p align="justify">
An open-source, full-stack web development framework built on top of React. Created and maintained by Vercel, it is designed to handle both the frontend (what users see) and backend logic (like APIs and database communication) within a single codebase. 
</p>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


<h1 align="center">Personal Portfolio </h1>
<p align="justify">
   The purpose of this repository is to create a space for sharing software development projects, experiments, and examples that reflect my experience, learning, and evolution as a developer; it is also intended to be explored, analyzed, and used as a reference. I invite you to review the implementation, architecture, and technical decisions behind each project.
</p>

<br/>

<h3 align="left">Run in development</h3>

1.- Clone the repository
```bash
$ https://github.com/Huguez/Portfolio.git
```

2.- Install dependencies
```bash
$ npm install
```

3.- rename .env.template to .env and write variables
```
NEXT_PUBLIC_RESEND_API_KEY    = *******
NEXT_PUBLIC_RESEND_MX_SEND    = *******
NEXT_PUBLIC_RESEND_TXT_SEND   = *******
NEXT_PUBLIC_RESEND_TXT_RESEND = *******

NEXT_PUBLIC_BASEURL = *******

# default
NODE_ENV=develop 
```

4.- Run the service in development
```
$ npm run dev
```