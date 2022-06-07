# express-api-es6-starter

[![N|Solid](https://camo.githubusercontent.com/3e864f6bece2c600de7b41588068a4b7ba0732bab937ae89603e2eb2cdf75929/68747470733a2f2f692e696d6775722e636f6d2f716541627874512e706e67)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)]()

### COme With :

- ES6 features/modules
- ES6 async/await
- Bookshelf ORM and Knex migrations
- PostgreSQL (default) with support for MySQL and SQLite
- ESLint for code linting
- Request validation using Joi
- Code formatting using Prettier
- Configuration management using dotenv
- Logging using winston
- VS Code built-in Debugger Support

## Prerequisites
- Node.js
- Yarn
- NPM
- PostgreSQL / MySQL / SQLite

## Setup
Clone the repository, install the dependencies and get started right away.
```js
$ git clone --depth=1 git@github.com:mesaugat/express-api-es6-starter.git <application-name>
$ cd <application-name>
$ rm -rf .git
$ yarn   # or npm install
```

Make a copy of .env.example as .env and update your application details and database credentials. Now, run the migrations and seed the database.
```
$ yarn migrate
$ yarn seed
```

Finally, start the application.
```sh
$ yarn start:dev (For development)
$ NODE_ENV=production yarn start (For production)
```
## Creating new Migrations and Seeds
These are the commands to create a new migration and corresponding seed file.
```sh
$ npm run make:migration <name>
$ npm run make:seeder <name>
```



## License

MIT

**Free Software, Hell Yeah!**


