# Testing

Testing is a huge thing for development, because it's a key thing you should utilise to ensure your code doesn't break when refactoring.

https://jestjs.io/docs/getting-started

```
npm init
pnpm install --save-dev jest
npm init jest@latest
npm install --save-dev babel-jest @babel/core @babel/preset-env
npx pnpm i --save-dev @types/jest
```

Babel transforms your code to what NodeJS requires. If you have ES6 code and want to test in ES5, Babel will convert your code to ES5. It also changes import and export to require and module.exports, which NodeJS requires.

```
import, export -> es modules -- browser supports this, but we don't test in our browser
require(), module.exports -- nodejs doesn't support es modules
```

Unit testing is more about input and output of functions.
