## Config Eslint and Prettier

- EsLint - Install eslint:

  ```bash
  yarn add eslint --dev
  yarn run eslint --init
  ```

  This will prompt multiple options so, first select `To check syntax and find problems` after that select `JavaScript modules (import/export)` then select `React` Now it will ask `Does your project use TypeScript No/Yes` select `Yes` or `No` option. Now select `Browser` and then `JSON` option. It will then prompt you to install eslint-plugin-react so click on `yes`

- Prettier - Install prettier:

  ```bash
  yarn add eslint-config-prettier eslint-plugin-prettier prettier --dev
  ```

- After installing all the above modules it’s time to add some prettier configuration to our `.eslintrc.json` file. So add this line `"plugin:prettier/recommended"` inside extends.

- Add prettier extension for the VSCode. So visit the extensions section of VSCode `(ctrl + shift + x)` and search for `Eslint` and `Prettier — Code formatter` and install these extantions.

- Add vsCode settings:
  copy the `.vscode` folder from this project, that conatins:

  - `extensions.json` - the recomended extantions for the project
  - `settings.json` - the custom settings for the project in vsCode (include prettier format on save as default)

- You can copy `.eslintrc.json` and `.prettierrc` files than includes some important settings
