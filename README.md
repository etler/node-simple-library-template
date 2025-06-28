# Node Simple Library Template

A template for making node libraries with simple build requirements using vanilla `tsc`.

## Features

This template aims to be as minimal and vanilla as possible while still providing setup for modern best practices.

* `typescript`: Type safety.
* `typescript-transform-paths`: Allows for `@/` absolute imports.
* `vitest`: Test library
* `eslint`: Code quality enforcement.
* `prettier`: Consistent formatting.
* `husky`: Git commit hooks for linter and testing enforcement.
* `lint-staged`: Efficient linting of staged chaged.
* `cjs` and `esm` modes
  * `esm` mode: Delete the `package.cjs.json` and `tsconfig.cjs.json` files.
  * `cjs` mode: Replace `package.json` with `package.cjs.json`.

## Installation

```bash
npm install node-simple-library-template
```

```bash
yarn add node-simple-library-template
```

To extend this library, clone it into a custom project, then delete the `.git` directory to start fresh.

```sh
git clone git@github.com:etler/node-simple-library-template.git some-project
```

## Usage

```typescript
import { someExport } from 'node-simple-library-template';

// Some code goes here
const result = someExport();
```

### Specific Behavior

Specific behavior documentation goes here.

## API Reference

### Exports

#### `someExport(someInput: SomeType): SomeReturn`

Export documentation goes here.

### Types

#### `SomeType`

Type documentation goes here.

```typescript
type SomeType = string
```

#### `SomeReturn`

Type documentation goes here.


```typescript
type SomeReturn = string
```

## License

MIT
