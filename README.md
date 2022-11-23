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

Add the eslint plugin to the plugins section of your `.eslintrc.js` configuration file.

```js
{
  plugins: ["@thearenaproject/eslint-plugin"];
}
```

Then you can configure the rules globally or per file.

globally:

```js
{
  rules: {
    '@thearenaproject/no-for-loops': 'error',
    '@thearenaproject/no-methods-or-properties': 'error',
  }
}
```

per file:

```js
{
  overrides: [
    {
      files: ['round-00/*.ts'],
      excludedFiles: '*.test.js',
      rules: {
        '@thearenaproject/no-methods-or-properties': ['error', {
          allowed: [
            // allow ".log" only on the "console" object
            ['log', 'console'],
          ],
        }],
      },
    },
    {
      files: ['round-01/*.ts'],
      excludedFiles: '*.test.js',
      rules: {
        '@thearenaproject/no-methods-or-properties': ['error', {
          allowed: [
            ['stdout', 'process'], // allow "process.stdout" pair
            ['write', 'stdout'], // allow "stdout.write" pair
            'log', // allow any ".log" in a file
          ],
        }],
      },
    },
    ...
  ],
}
```

## Supported Rules

- Fill in provided rules here

# Creating new rules

## Basics

Each rule is composed of 3 parts and only the 1st is mandatory:

1. The rule file under `./lib/rules` folder. (mandatory)
2. The test file under `./tests/lib/rules` folder.
3. The doc file under `./docs/rules` folder.

## Adding new rules with the generator (no, false, faux, ❌)

**Do not** use this https://github.com/eslint/generator-eslint because it doesn't generate a plugin or rule with our namespace (@thearenaproject). Even if this plugin and its rules were generated with the generator, multiple manual changes were required, so don't go this way and just read the next section ⬇️.

## Adding new rules the right way (yes, true, vrai, ✅)

For now just copy an existing rule/test/doc file, rename it and update its content.\
Yep hardcore, old style, now fuck-off.

## Some reading material is here :

- https://eslint.org/docs/latest/developer-guide/working-with-rules
- https://eslint.org/docs/latest/developer-guide use the search to find existing eslint rules and get inspired :P
- https://insideops.wordpress.com/2015/12/08/creating-custom-rules-for-eslint/
- https://astexplorer.net (don't forget to switch to Javascript from the top menu)
- ... and many other pages, that I already closed their browser tabs, sorry 🫠
