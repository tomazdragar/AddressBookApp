
<h1 align="center">
  “Address book app”
</h1>

<h4 align="center">It is a small working prototype, built with React, Redux, react-router 4, Antd, Webpack 4, Jest/Enzime, Typescript</h4>
<h6 align="center">It is my vision how the React stack should look like in 2019</h6>

## Key Features

* Show the list of users and the browsing page
    - Have the complete overview of the users
    - List of the users is loaded gradually and also pre-fetched data is done in the background in advance
    - Show the users count, so that you can see how many users is visible
    - Have access to the settings page through main navigation
    - In the browser console we can see the actions performed
  
* Search
    - Can search the users
    - Also updates the count, and the messages, so that the user knows how many results is found in the
      currently fetched group
  
* User detail modal
    - Can see more details for the selected user

* Settings page
    - Can select the nationality of the browsing population
    - Nationality is automatically applied on all pages and users are selected only from
  
* Mobile friendly

* Fast and scalable, could be a good starting point for bigger projects


## Stack details

* List of main ingredients:
    - React with react-router
    - Redux
    - Webpack 4
    - Typescript
    - Jest/Enzyme for testing
    - antd (also suggested for our project)


## How To Use it

To run this application, you'll need [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Go into the repository
$ cd AddressBookApp

# Install dependencies
$ npm install

# To start the server and the project in devel mode (for the purpose of this test, I only included dev environment)
$ npm start

```

Then open up [http://localhost:9000](http://localhost:9000) in your browser.

If you want to run tests then run:
```bash
$ npm test
```

## If you don't want to install and only wish to see it in action

Then check how it runs on my raspberry pi! [www.dragar.net:9000](http://www.dragar.net:9000)



#### License

MIT

---

