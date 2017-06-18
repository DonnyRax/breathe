**React Bootstrap Boilerplate**

React boilerplate which contains bootstrap packages into it.
It has testing packages to test individual component.

### Features: ###
* It contains react with webpack configuration in it.
* It contains redux and react-redux.
* It has bootstrap package with webpack configuration to transpile bootstrap.
* It has Jquery package with webpack configuration.
* It has **class** attribute transpile into **className**.
* It has React router.
* It has testing packages - using Karma and Mocha as its testing framework.

### Webpack.configs contains: ###
* babels.
* jquery. 
* bootstrap.css and bootstrap.js.
* loaders needed for this boilerplate.

### karma.configs contains: ###
* testing configuration setting.
* Testing browser is Chrome.
* Testing framework is Mocha.

### Usages: ###
* Clone or download repo.
* run "npm install" command in command prompt as admin.
* run "webpack --w" command in command prompt as admin.
* run node server.js in command prompt as admin.
* put your component into components folder.
* Delete / rename Main.jsx file to be filename that is desired.

### No Jquery Configuration ###
If the project does not need JQuery, follow steps below:

* Clone repo
* Open package.json, remove jquery package from it.
* Open webpack.config.js, remove following codes at entry section:

    * `'script!jquery/dist/jquery.min.js'`

    * `'script!bootstrap/dist/js/bootstrap.min.js'`

* run npm install
* run webpack --w
* run node server.js

### Usages - Test: ###
* run npm test - it runs karma to test.
* It contains app.test.jsx as test example file.
* Add more test files in "tests" folder inside "app" folder.

### packages for testing ###
* mocha.
* expect.
* karma.
* karma-chrome-launcher, karma-chrome-launcher, karma-mocha.
* karma-mocha-reporter, karma-sourcemap-loader, karma-webpack.