# Order Me
A prototype for a food ordering application using [AngularJS](http://angularjs.org) works on `localStorage`. 

An online demo is hosted on [Heroku](http://order-me.herokuapp.com/).

## Technical Details
### Used Tools
* [AngularJS](http://angularjs.org)
* [Twitter Bootstrap](http://getbootstrap.com)
* [Yeoman](http://yeoman.io)

### Angular Modules
* [ngRoute](http://docs.angularjs.org/api/ngRoute)
* [ngAnimate](http://docs.angularjs.org/api/ngAnimate)
* [angular-flash](https://github.com/wmluke/angular-flash)

## Deployment
### Requirnments
* Terminal
* [NodeJS](http://nodejs.org/) & [NPM](https://npmjs.org/‎) installed.

### Option 1
* Use any webserver to host the `dist/` directory

### Option 2
* Use the NodeJS server `web.js`
* Clone/download the repository and `cd` into it. 
* Run `npm install --production` to install application dependencies
* Run `node web.js` to launch web server
* Navigate your browser to `http://localhost:5000`

## Development
### Requirnments
* [NodeJS](http://nodejs.org/) & [NPM](https://npmjs.org/‎) installed.
* [GruntJS](http://gruntjs.com/) & [Bower](http://bower.io/) which you can install by installing [Yeoman](http://yeoman.io/gettingstarted.html) directly.

### Steps
* Clone/download the repo and `cd` into it.
* Install NodeJS dependencies `npm install`
* Install app dependencies listed in bower.json `bower install` which will download the dependencies to `app/bower_components` directory.
* Run `grunt serve` to open in browser with livereload.
* To Build run `grunt build` which will run the grunt build script tp minify and concatnate scripts/styles and save it in the `dist/` directory.
* App Files are located in the `app/` directory.