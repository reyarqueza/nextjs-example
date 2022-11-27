This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), with changes for a complete working Next.js example.

<br />

# Next.js Example - The Most Common Use Case

<br />

## Multiple Page Types that pull data from a REST based API.

<br />

If you wanted to create a React Web App that also rendered on the server side, a developer would deep dive into the React documentation, and use [ReactDOMServer](https://reactjs.org/docs/react-dom-server.html) and [Hydrate](https://reactjs.org/docs/react-dom.html#hydrate), and integrate 3rd party modules like [React Router](https://reactrouter.com/) and have this running server side JavaScript with
[Express](https://expressjs.com/).

This approach had the benefit to have greater control, acquire deep knowledge of React and popular React modules, at the cost of having to write alot more code. This approach would even allow you to be able to create a React framework of your own.

But a mature react framework, Next.js, can help you make Isomorphic React Web Apps faster. By adopting this popular framework, you can create incredible React Web Apps with less code, and be more productive.

I created this example to demonstrate how easy it is to create Isomorphic React web apps.

<br />

## Client-side data fetching with SWR

<br />

My example is opinionated on its approach for client-side data fetching by using SWR (from the makers of Next.js). As a new user of the framework, its simple to just choose SWR because the documentation says [SWR is **highly recommended**](https://nextjs.org/docs/basic-features/data-fetching/client-side#client-side-data-fetching-with-swr). Not a convincing argument, with other choices out there such as [React Query](https://react-query-v3.tanstack.com/) or [RTK Query](https://redux-toolkit.js.org/rtk-query/overview), but for the purposes of a simple example, we'll stick with SWR. For a comparision of whats out there, read up on the [RTK Query comparison](https://redux-toolkit.js.org/rtk-query/comparison).

<br />

## As usual, you always npm install

```bash
npm install
```

<hr />
<br />

## How to develop

<br />

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<hr />
<br />

## Learn More

<br />

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

<hr />
<br />

## Deploy on Vercel

<br />

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
