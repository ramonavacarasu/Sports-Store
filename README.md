# SportsStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Containerizing the SportsStore Application

The first step is to download and install the Docker tools on your development machine, which is available from `www.docker.com/products`.

#### Preparing the Application

The first step is to create a configuration file for NPM that will be used to download the additional packages required by the application 
for use in the container (I created a file called deploy-package.json in theSportsStore folder).

#### Creating the Docker Container

To define the container, I added a file called Dockerfile (with no extension) to the SportsStore folder 




## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
