## Summary

This is a test for patterson. It is a web app where you can find the characters of rick and Morty. If the user selects one character the details will be shown. Also if the user selects 2 characters the episodes where these two characters appear will be shown.
Also there is a pagination in order to display the characters in several pages.

## Getting Started

npm install to install all the dependencies

then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project structure

App folder that contains several folders:

  - components: store all the components that can be re used.
  - lib: locate the data file whit all the APIs calls
  - ui: contains the client components
  - utils: contains the utils for the app (f.e types file)

## Components

The home page is located in the ui folder as it is the only client component. From here we store the data in the useState hook and provide the required data to the server components. To get the initial data, a call to the Apis are made from the lib folder and pass it to the other components via props

## Dependencies

No library has been use only the classnames to manage several classnames

## Things to improve

- improve the css.
- improve some of the components to make them more reusable
- improve responsive
- make tests!

  