# Introduction

This sample application demonstrates implementation of [Angular-in-memory-web-api](https://github.com/angular/in-memory-web-api) in [Angular-seed](https://github.com/mgechev/angular-seed) project. 

# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7 but in order to be able to take advantage of the complete functionality we **strongly recommend node >=v6.5.0 and npm >=3.10.3**.

In order to start the seed use:


```bash
$ git clone --depth 1 https://github.com/SantoshSah/angular-seed-with-angular-in-memory-web-api-sample
$ cd angular-seed

# install the project's dependencies
$ npm install
# fast install (via Yarn, https://yarnpkg.com)
$ yarn install  # or yarn

# watches your files and uses livereload by default
$ npm start
# api document for the app
# npm run build.docs

# generate api documentation
$ npm run compodoc
$ npm run serve.compodoc


# to start deving with livereload site and coverage as well as continuous testing
$ npm run start.deving

# dev build
$ npm run build.dev
# prod build
$ npm run build.prod

# dev build of multiple applications (by default the value of --app is "app")
$ npm start -- --app baz
$ npm start -- --app foo
$ npm start -- --app bar
```
_Does not rely on any global dependencies._

# How to start with AoT compilation

**Note** that AoT compilation requires **node v6.5.0 or higher** and **npm 3.10.3 or higher**.

In order to start the seed with AoT use:

```bash
# prod build with AoT compilation
$ npm run build.prod.exp
```

# Dockerization

The application provides full Docker support. You can use it for both development as well as production builds and deployments.

## How to build and start the dockerized version of the application 

The Dockerization infrastructure is described in the `docker-compose.yml` (respectively `docker-compose.production.yml`.
The application consists of two containers:
- `angular-seed` - In development mode, this container serves the angular app. In production mode it builds the angular app, with the build artifacts being served by the Nginx container
- `angular-seed-nginx` - This container is used only production mode. It serves the built angular app with Nginx.

## Development build and deployment

Run the following:

```bash
$ docker-compose build
$ docker-compose up -d
```

Now open your browser at http://localhost:5555

## Production build and deployment

Run the following:

```bash
$ docker-compose -f docker-compose.production.yml build
$ docker-compose -f docker-compose.production.yml up angular-seed   # Wait until this container has finished building, as the nginx container is dependent on the production build artifacts
$ docker-compose -f docker-compose.production.yml up -d angular-seed-nginx  # Start the nginx container in detached mode
```

Now open your browser at http://localhost:5555

# Configuration

Default application server configuration

```js
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
$ npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

## Environment configuration

If you have different environments and you need to configure them to use different end points, settings, etc. you can use the files `dev.ts` or `prod.ts` in`./tools/env/`. The name of the file is environment you want to use.

The environment can be specified by using:

```bash
$ npm start -- --env-config ENV_NAME
```

Currently the `ENV_NAME`s are `dev`, `prod`, `staging`, but you can simply add a different file `"ENV_NAME.ts".` file in order to alter extra such environments.

# Running tests

```bash
$ npm test

# Development. Your app will be watched by karma
# on each change all your specs will be executed.
$ npm run test.watch
# NB: The command above might fail with a "EMFILE: too many open files" error.
# Some OS have a small limit of opened file descriptors (256) by default
# and will result in the EMFILE error.
# You can raise the maximum of file descriptors by running the command below:
$ ulimit -n 10480


# code coverage (istanbul)
# auto-generated at the end of `npm test`
# view coverage report:
$ npm run serve.coverage

# e2e (aka. end-to-end, integration) - In three different shell windows
# Make sure you don't have a global instance of Protractor
# Make sure you do have Java in your PATH (required for webdriver)

# npm install webdriver-manager <- Install this first for e2e testing
# npm run webdriver-update <- You will need to run this the first time
$ npm run webdriver-start
$ npm run serve.e2e
$ npm run e2e

# e2e live mode - Protractor interactive mode
# Instead of last command above, you can use:
$ npm run e2e.live
```

Please follow [angular-seed documentation](https://github.com/mgechev/angular-seed/blob/master/README.md) for more information about angular-seed project and [angular-in-memory-web-api dcoumentation](https://github.com/angular/in-memory-web-api/blob/master/README.md) for angular-in-memory-web-api information.



# License

MIT
