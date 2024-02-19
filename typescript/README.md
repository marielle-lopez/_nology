# Typescript

- A little bit like Java, an object-oriented programming language, a language that's type-based
- JavaScript but with strict types
- We use it to add an extra layer of safety to our code
- Bun could potentially allow us to run Typescript
  - At the moment, we have to turn TS files into JS files
    - Same situation with Sass and CSS, where we have to convert Sass to CSS for the browser to understand
- More of like a 'developer tool'
- If we have errors, our code won't compile

## Why Do We Want to Use TypeScript?

- It prevents us from making easily-avoidable mistakes such as passing the wrong data type to a function
- We find out about errors before we actually run our code
- A tool for better teamwork as it gives us a bit more context about how the code works

## What Are the Downsides of Using TypeScript?

- We need to compile our code
- Takes longer to write your code because you need to construct interfaces, type everything, etc., more work
  - We have a lot more boilerplate code
- No performance benefit versus JavaScript
- Sometimes we have to write really weird code in order for our code to work, to satisfy TypeScript

## Types and Interfaces

- Interfaces are encouraged over types
- Create an interface for the properties of a React component
  - You can use `?` to make a property optional

## Migrations

`npm install @mikro-orm/migrations`
`npm install --save-dev @mikro-orm/cli`

Create a `migrations` folder in the `src` folder of your project.

```JSON
// add this to package.json

"mikro-orm": {
  "useTsNode": true,
  "tsConfigPath": "./tsconfig.json",
  "configPaths": [
    "./mikro-orm.config.ts",
    "./dist/mikro-orm.config.js"
  ]
}
```

You need to then create an initial migration.

```
npx mikro-orm migration:create --initial
```

You run a migration when you want to update your actual database based on what you've done to your project files.

```
npx mikro-orm migration:up
```

Every time you create changes to your entities and want to apply this to your actual database, make sure to create a migration.

```
npx mikro-orm migration:create
```

- Version control system for changes in your database
- Keeps track of the changes we do to the database
- A full history of all of the SQL queries
- If something goes wrong, we can migrate to a different version of the database
- Allows you to navigate to different versions of your database
- MikroORM CLI lets you make and access migrations

### Database Seedings

- https://mikro-orm.io/docs/seeding
- https://fakerjs.dev/

`npm i @mikro-orm/seeder`

Seeders allow us to add data to the database quickly.

`npx mikro-orm seeder:create DatabaseSeeder`

`npm i @faker-js/faker --save-dev`
`npx mikro-orm migration:fresh --seed`

## Other Notes

- TypeScript gets compiled into an older version of JavaScript
- We will be using a library Playwright for end-to-end tests for the client project
- PATCH is a partial update, PUT revamps the whole resource of interest
- When you update entities, you must run a migration
- JWT

### NestJS

- `nest new <name>`
- `npm run start` to start Nest application, or use `npm run start:dev` to see real-time changes as it restarts the server every time a change is saved
  - Look at `scripts` in `package.json` to see what commands you can run
- `nest g resource`
- `<domain_name>.controller.ts`

### `.env`

Lets you import variables from an `.env` file.

Everything in an `.env` file comes back as a string when a variable of it is called in a different file.

```
npm install dotenv
```

Renames the `.env.example` to just `.env`.

```
mv .env.example .env
```

Copies the contents of `.env.example` into a new file called `.env`.

```
cp .env.example .env
```

```
npm install --save @nestjs/config
```

### JWT

`npm install @nestjs/jwt`

- https://acte.ltd/utils/randomkeygen

## Resources

- `tsc --version`
- `npm install -g typescript`
- `tsc intro.ts` to compile TS file to JS file
- `node intro.js` to run JS in command line
- `tldr tsc` to get brief descriptions of terminal commands
- `tsc --init` creates a `tsconfig.json` file
  - You can change the 'target' property to change which version JS the TS is compiled to, so you don't have to use flags like `--es6` in your command
  - You can change the 'outDir' property to change where the compiled TS file is created
- `tsc --build` to compile all TS files
- https://www.typescriptlang.org/
- https://www.typescriptlang.org/play#example/types-vs-interfaces
- https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript/52682220#52682220
- https://web-frameworks-benchmark.netlify.app/compare?f=nestjs-express,spring#totalRequestsPerS
- https://www.freecodecamp.org/news/what-is-an-orm-the-meaning-of-object-relational-mapping-database-tools/
- https://www.npmjs.com/package/fp-ts
- https://stackoverflow.com/questions/17703312/what-does-entitymanager-flush-do-and-why-do-i-need-to-use-it
- https://mikro-orm.io/docs/relationships
- https://mikro-orm.io/docs/query-conditions
- https://jwt.io/
- CSRF: https://www.youtube.com/watch?v=eWEgUcHPle0
- JWT: https://youtu.be/UBUNrFtufWo?si=kC5-SNL_iCM1FsXj

## Quick Guide

1. Create new NestJS project `nest new <name>`
2. Install MikroORM
