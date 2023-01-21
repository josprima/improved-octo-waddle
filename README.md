# JAKMALL Checkout Page
This project is build using [ReactJS](https://reactjs.org/) and other supporting tools.

## Run Local development
1. Install dependency by running: `npm install`
2. Run local development server: `npm run dev`

## Avaliable Commands
1. Run local development
    ```
    npm run dev
    ```
2. Build for production
    ```
    npm run build
    ```
3. Run with production version after build locally
    ```
    npm run preview
    ```
4. Check Lint
    ```
    npm run lint
    ```
5. Fix Lint
    ```
    npm run lint-fix
    ```

## Tools
### Build tools
For build tools, i try using vite, but usually i use webpack, because vite claims it's offer better development experience over webpack.

### Styling
For styling library using [styled-components](https://styled-components.com/) and mixed with inline css.
Honestly i don't like writing css using styled-components way, i prefer css module.

### Form Validation
React Hook Form + Yup

### State Management
The state is shared accross multiple components, so i decide to create context for managing state globally.
