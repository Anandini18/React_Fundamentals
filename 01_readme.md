## ⚡ Difference Between `npm` & `npx`

- **npm (Node Package Manager)**  
  Use `npm` to install and manage Node.js packages globally on your system.
  
- **npx (Node Package Executor)**  
  Use `npx` to execute packages directly without installing them globally, perfect for running one-time scripts or avoiding manual installation of packages.

---

## `create-react-app` Overview

- `create-react-app` comes with essential libraries like `react-dom` and `react-native`.  
- While once a popular choice, it's now considered less efficient due to its bulkiness. Lightweight alternatives like **Vite** and **Next.js** are recommended for better performance.
- `create-react-app` is a utility to quickly scaffold a React application.

---

## `package.json` File

- Every React project contains a `package.json` file, which serves as a manifest of the project.
- The `"scripts"` key specifies the commands available for project management.

Example:
```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build"
}

```

## `package-lock.json` File

Stable versions of dependencies get lock here.  

---

## 🛠️ ESLint

- ESLint helps identify and fix issues in JavaScript code. It highlights potential errors with a red underline, making debugging and code quality assurance easier.

---

## `npm start` (or `npm run start`) vs `npm run build`

- **`npm run build`**  
  Prepares your app for production. Since browsers understand only HTML, CSS, and JavaScript (not React JSX), this command bundles your app into simple files. The build creates a `build` folder which is used for deployment, replacing the `src` folder.

---

## Difference Between `npm run dev` & `npm run start`

- **React app made with `create-react-app`** uses the script `start`.  
- **React app made with Vite** uses the script `dev`.

### When using Vite:
- You need to manually install dependencies using `npm i`.
- In `create-react-app`, dependencies are automatically installed.

---

## manifest.json File
- When we open our website in a mobile app, the settings related to that will be in this file.
- Provides metadata used when our web app is installed on a user's mobile device or desktop.

## react-scripts
- This is responsible for injecting the JavaScript in the `index.html` file in create-react-app.

## ReactDOM
- JavaScript library provided by React, acts as an interface between React and the DOM.
- ReactDOM helps take our React components and put them onto the webpage.
- Provides methods that help render React components into the DOM.

## ReactDOM.createRoot(container)
- This sets up a place (root) where your React app will live on the webpage.

## Best Practices
- Whenever we make any component, it must start with an uppercase letter.
- The file name should also be capitalized.

---

## Bundler & JSX
- If "<App/>" is a function, then how we are able to use this syntax?
- It's because of the Bundler!, Bundler helps to translate this syntax to actual dom. 
- So, in react we write in JSX -> Javascript + HTML

## Evaluated Expression 
- {username} : This is the final o/p, we can't write Js here!



