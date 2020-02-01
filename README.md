# Akber Iqbal test for bmp Test (AgularJS)

## Getting Started

To get you started you can simply clone the repository and install the dependencies (since node_modules isn't updated and is part of gitignore file) by 
```
npm install
```

* `node_modules` - contains the npm packages for the tools we need
* `app/lib` - contains the AngularJS framework files and other front end dependencies

*Note copying the AngularJS files from `node_modules` to `app/lib` makes it easier to serve the
files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].


## Directory Layout

```
services/             --> factory for the api call
  api.js                --> http get for the API 
app/                  --> all of the source files for the application
  app.css               --> default stylesheet
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  bar.html              --> template file for the bars
```


### Running the App in Production

run the command `grunt` to uglify, minify, convert scss files into the /dist folder
