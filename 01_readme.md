
# 🚀 Differences and Key Concepts in React Development

## ⚡ Difference Between `npm` & `npx`

- **npm (Node Package Manager)**  
  Use `npm` to install and manage Node.js packages globally on your system.
  
- **npx (Node Package Executor)**  
  Use `npx` to execute packages directly without installing them globally, perfect for running one-time scripts or avoiding manual installation of packages.

---

## ⚛️ `create-react-app` Overview

- `create-react-app` comes with essential libraries like `react-dom` and `react-native`.  
- While once a popular choice, it's now considered less efficient due to its bulkiness. Lightweight alternatives like **Vite** and **Next.js** are recommended for better performance.
- `create-react-app` is a utility to quickly scaffold a React application.

---

## 📦 `package.json` File

- Every React project contains a `package.json` file, which serves as a manifest of the project.
- The `"scripts"` key specifies the commands available for project management.

Example:
```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build"
}
```

---

## 🛠️ ESLint

- ESLint helps identify and fix issues in JavaScript code. It highlights potential errors with a red underline, making debugging and code quality assurance easier.

---

## 🔄 `npm start` (or `npm run start`) vs `npm run build`

- **`npm run build`**  
  Prepares your app for production. Since browsers understand only HTML, CSS, and JavaScript (not React JSX), this command bundles your app into simple files. The build creates a `build` folder which is used for deployment, replacing the `src` folder.

---

## ⚙️ Difference Between `npm run dev` & `npm run start`

- **React app made with `create-react-app`** uses the script `start`.  
- **React app made with Vite** uses the script `dev`.

### When using Vite:
- You need to manually install dependencies using `npm i`.
- In `create-react-app`, dependencies are automatically installed.

---

