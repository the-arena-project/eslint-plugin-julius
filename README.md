# @thearenaproject/eslint-plugin

Eslint rules for TheArenaProject

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `@thearenaproject/eslint-plugin`:

```sh
npm install @thearenaproject/eslint-plugin --save-dev
```

## Usage

Add `arena` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["@thearenaproject/eslint-plugin"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "@thearenaproject/no-for-loops": "error"
  }
}
```

## Supported Rules

- Fill in provided rules here
