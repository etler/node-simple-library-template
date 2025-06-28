# Node Simple Library Template

A template for making node libraries with simple build requirements using vanilla `tsc`.

## Features

* `typescript`: Type safety.
* `typescript-transform-paths`: Allows for `@/` absolute imports.
* `vitest`: Test library
* `eslint`: Code quality enforcement.
* `prettier`: Consistent formatting.
* `husky`: Git commit hooks for linter and testing enforcement.
* `lint-staged`: Efficient linting of staged chaged.
* `cjs` and `esm` build output
  * Note: To convert this template to `esm` only, remove `tsconfig.cjs.json` and `tsconfig.cjs.json` and add `"type": "module"` to `package.json`

## Installation

```bash
npm install node-simple-library-template
```

```bash
yarn add node-simple-library-template
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
