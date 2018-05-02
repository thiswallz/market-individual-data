# MarketSummaries

### This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Web App

### Customizable grid with animation

![Alt text](example1.gif?raw=true 'Grid and market summary')

## Proxy Server (Nginx) - Api rest at http://localhost:4000/

* Start Nginx with this configuration (In order to bypass CORS problems with the Bittrex API REST) i.e,

```sh
   server {
        listen       4000;
        location /getmarketsummaries {
            add_header Access-Control-Allow-Origin *;
            proxy_pass https://bittrex.com/api/v1.1/public/getmarketsummaries;
        }
        location ~* ^/getticker/(.*) {
            add_header Access-Control-Allow-Origin *;
            proxy_pass https://bittrex.com/api/v1.1/public/getticker/$1$is_args$args;
        }
   }
```

* You can use other tool/server/extension to bypass bittrex, like an Chrome CORS extension, just remember change the URL in src/environments/environment.ts and src/environments/environment.prod.ts

## Application Web (Angular using Material Design) - App at http://localhost:4001/

```sh
   npm i
   ng serve
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
