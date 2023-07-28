# Vite Crash Course

## Prerequisite For Using Vite
- Install it globally
  ```zsh
  npm install vite -g
  ```

## Creating a Vite application
- In the terminal, run:
  ```zsh
  npm create vite@latest
  ```
- Enter the app name (typically `client`)
- Select `React` with the arrow keys and Enter
- Select `JavaScript + SWC`
- Navigate into the app folder
- Install dependencies with `npm install`
- *Optional* Configure the app to open a browser window to the running app on starting the application:
  - In `vite.config.js`, add a new property to the object passed into `defineConfig()`:
    - `server: { open: true }`
- Run the app: `npm run dev`
- *Optional* Delete the `.eslintrc.cjs`; it will be extra strict when generating lint errors/warnings, which can make it very difficult to decipher legitimate functional errors. Alternative to deleting the file, [enforce prop types](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md) the way eslint is expecting.