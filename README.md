# `Social-Netwok`

In this project, I learned how to use the React JS library. On the social network, you can find a person and subscribe to him. As the application grew, I added strong typing with the TypeScript library. For server requests I used api https://social-network.samuraijs.com/docs (to use this api you need to be registered on the site https://social-network.samuraijs.com/). 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.



## Other libraries were used in the project:

### `TypeScript`
It is a strict syntactical superset of JavaScript and adds optional static typing to the language.

### `Redux, React-redux`

Redux is an open-source JavaScript library for managing and centralizing application state.

React-redux provides APIs that enable your components to interact with the Redux store, so you don't have to write that logic yourself.

For asynchronous state update i used `thunk` middleware
Thunk middleware for Redux. It allows writing functions with logic inside that can interact with a Redux store's `dispatch` and `getState` methods.

### `React-Router`

React Router is the standard routing library in React. It keeps the application interface in sync with the URL in the browser. React Router allows you to route the data flow in your application in a meaningful way.

### `Axios`

Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface.

### `redux-form, formik`

Formik is a library that helps you work with forms. It makes it easy to retrieve data from a form, validate data, display error messages, and more.

### `lassnames`

This is a library for simple conditional concatenation of class names. For me personally, this library is a must in any React application. Of course, until the moment when I find a more convenient tool.
