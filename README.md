# Angular4 Snippets

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0.
It is available for display at https://donhenton.github.io/angular4-snippets/public_html

##Install Angular ng client

npm install -g @angular/cli

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build. **NOTE: the base tag included in the generated index needs to be adjusted** The command to build is ng build --aot for ahead of time compiling.
Steps are below:

* in one copy of angular4-snippets for master run ng build --prod --aot this creates a dist folder
* create a folder called snippet-staging, one level above the snippets copy
* move the dist into snippet staging and rename it public_html
* in that public_html folder find index.html and rewrite the base tag to &lt;base href=""&gt;
* clone https://github.com/donhenton/angular4-snippets.git into the snippet-staging folder
* at this point, snippet-staging should have two folders angular4-snippets and public html
* cd into snippets-staging/angular4-snippets
* git checkout -t remotes/origin/gh-pages (to checkout existing gh-pages branch)
* __git checkout -b gh-pages__ then __git push --set-upstream origin gh-pages__ to create the gh-pages branch first time
* replace snippet-staging/angular4-snippets/public_html with snippet-staging/public_html
* commit and push



## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Source of Samples
http://www.concretepage.com/angular-2/
