# Monorepo Drizzle

To get started, run:

    npm install
    npx turbo dev

Contains two workspaces:

* `core`: an internal package that exports a client to inetract with db and encapsulate some business logic. Drizzle is being used only in here.
* `web`: dummy nextjs app to have some client that uses the core package, see: `/src/app/page.tsx`

Thanks for your help!

Regards, Ben.