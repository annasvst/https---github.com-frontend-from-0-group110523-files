Enable formatting automation in a Create React App application.

1. Install Prettier: First thing, you need to add Prettier to your project. If it's not already installed, you can add it by running:

```code
npm install --save-dev --save-exact prettier
```

2. Create a Prettier Configuration File: To make Prettier work with your preferences, create a `.prettierrc` file in the root of your project. This file can be JSON or YAML format, and you can specify your settings here. For example:

```code
{
  "semi": false,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "trailingComma": "all",
  "printWidth": 80,
  "tabWidth": 2
}
```

3. Create a `.prettierignore` File (Optional): Similar to `.gitignore`, you can tell Prettier to ignore certain files and directories by creating a `.prettierignore` file. This step is optional but useful if there are files you don’t want Prettier to format.

4. Run Prettier: You can run Prettier manually from the command line with a script like:

```code
npx prettier --write .
```

This command will format all files in your project based on the configurations you've specified.

5. Integrate with ESLint (Optional): If you're using ESLint, you might want to integrate Prettier with ESLint. This helps avoid conflicts between the two. Install `eslint-config-prettier` and `eslint-plugin-prettier`:

```code
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

Then, update your `.eslintrc` configuration to extend prettier. This tells ESLint to disable formatting rules that might conflict with Prettier:

```code
{
  "extends": ["react-app", "plugin:prettier/recommended"]
}
```

Aleternative version of .eslintrc (ESLint config). It was not needed in this project but may be needed for a porect with a different set up.

```
  {"extends": ["react-app",
  "plugin:prettier/recommended"]
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": ["error", {
      "semi": true,
      "singleQuote": true,
      "jsxSingleQuote": true,
      "trailingComma": "all",
      "printWidth": 80,
      "tabWidth": 2
    }]
  }
  }
```
