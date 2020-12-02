# Department of Education Schools Management System

## Problem

Spreadsheets are versitle powerful tools that companies use for everything from finance to marketing analytics. However, spreadsheets have its limitations, they're clunky, messy, and prone to human error.

#### The problem with using spreadsheets for your database:

1. They have security vulnerabilities. They have to be sent and shared in order for everyone in the company to access the data stored within, and that raises its own secuirity issues.
2. They are prone to human error.
3. They require more maintenance. Spreadsheets don't have a schema, meaning that they have loose rules for regulatingg how and where users input data.

Since spreadsheets tend to be more complex over time, they might not be serving your needs in the long term. Becasue of this, you may need to migrate to a more powerful type of database option - a DBMS (database management system). such as Microsoft Access or MySQL.

## Description

In this project I am creating CRUD (create, read, update, delete) api's in Node.js, ExpressJS, and mySQL.

## Functionality

## Mock-Up

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

### Prerequisites and required applications

#### For the Back-end (building APIs and writing server code):

1. [**Node.js**](https://nodejs.org/en/) is an implementation of the V8 JavaScript engine without Chrome that allows you to write server-side code using JavaScript. Therefore, you no longer neeed a browser to run JavaScript. You will need to have Node.js installed on your computer; you can follow the [**Node.js installation guide on The Full-Stack Blog**](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs) to install Node.js on your computer.

2. [**ExpressJS**](https://expressjs.com/) is built on top of node.js http module, and adds provides a robust set of features for web and mobile applications.

3. [**MySQL**](https://www.mysql.com/) is a open-source relational database management system.

4. [**ECMAScript 6(ES^)**](https://www.w3schools.com/js/js_es6.asp) standardised scripting language for JavaScript (JS).

5. [**Postman**](https://www.postman.com/) is a development tool which helps to build, test and modify APIs.It has the ability to make various types of HTTP requests(GET, POST, PUT, PATCH etc.).

6. IDE (Integrated Development Environment) is a software application that provides comprehensive facilities to computer programmers for software development. An IDE normally consists of at least a source code editor, build automation tools, and a debugger. I prefer to use [**Visual Studio Code**](https://code.visualstudio.com/).

To install this project locally clone this [**project repository**](https://github.com/kaylamuraoka/Employee_Management_System) to create a local copy on your computer and sync between the two locations. You may then modify the code to your liking. For steps on how to clone a repository using the command line, read this section of the GitHub Docs [**about cloning a repository**](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository#about-cloning-a-repository).

You should run the following commands in the project folder.
Step 1: Initialise and configure the project with the command

```
npm init -y
```

Once you see a package.json file you can proceed to the next step.

Step 2: Install the following dependencies

1. Express - web framework for building the Rest API's
2. Body Parser - for parsing requests; converting the POST data into the request body
3. MySQL2 - Node.js driver for MySQL
4. Cors - provides Express middleware to enable CORS with various options
5. Sequelize - so we don’t need to write CRUD functions, Sequelize supports them

```
npm install express mysql2 body-parser cors sequelize --save
```

4. Nodemon - tracks every file change and restarts the backend server for you

```
npm install --save-dev nodemon
```

You should now have a package.json file in your directory, and it should look like this:

```
"name": "node-mqsql-crud-app",
  "version": "1.0.0",
  "description": "This is a app for creating a crud api using node, express, and mysql",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/kaylamuraoka/Employee_Management_System.git"
  },
  "keywords": [
    "nodejs",
    "expressjs",
    "mysql",
    "api",
    "restfulapi",
    "javascript",
    "es6"
  ],
  "author": "Kayla Muraoka",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/kaylamuraoka/Employee_Management_System/issues"
  },
  "homepage": "https://github.com/kaylamuraoka/Employee_Management_System#readme",
  "dependencies": {
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "mysql": "^2.18.1",
    "mysql2": "^2.2.5",
    "sequelize": "^6.3.5"
  }
}
```

#### For the Front-end (building the user interface (UI):

We use the following technologies:

1. React 16
2. react-router-dom 5.1.2
3. axios 0.19.2
4. bootstrap 4.5

The package.json file should contain the 4 following modules: react, react-router-dom, axios & bootstrap.

In the front_end folder run command to setup our React.js project:

```
npx create-react-app client
cd client
npm start
```

To make sure the react app is working cd(change directory) into the client directory and using your browser, navigate to http://localhost:3000/. If you see the the react welcome page it means you now have a basic React application running on your local machine.
To import Bootstrap run:

```
npm install bootstrap
```

Add a React Router

```
npm install react-router-dom
```

## Usage

The employee management system application can be viewed at this [**link**]().

## Credits

N/A

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
