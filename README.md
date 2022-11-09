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

# Creating new rules

## Basics

Each rule is composed of 3 parts and only the first is mandatory:

1. The rule file under `./lib/rules` folder.
2. The test file under `./tests/lib/rules` folder.
3. The doc file under `./docs/rules` folder.

## Adding new rules with the generator (no, faux, ❌)

**Do not** use this https://github.com/eslint/generator-eslint because it doesn't generate a plugin or rule with our namespace (@thearenaproject). This plugin and its rules were generated with the generator, BUT multiple manual changes where required, so just read the next.

## Adding new rules the right way (yes, ✅)

For now just copy an existing rule/test/doc file, rename it and update its content, hardcore, old style, fuck-off.

## Some reading material is here :

- https://eslint.org/docs/latest/developer-guide/working-with-rules
- https://eslint.org/docs/latest/developer-guide use the search to find existing eslint rules and get inspired :P
- https://insideops.wordpress.com/2015/12/08/creating-custom-rules-for-eslint/
- and many other link that i closed the chrome tabs already so go google your self
