# Lakyjs Eslint config

## Usage

``` sh
npm install --save-dev @lakyjs/eslint-config
```

Create `eslint-config.js` or `eslint-config.mjs` file in your project root.

Edit eslint config:

### Common Rules
```js
import linter from '@lakyjs/eslint-config';
export default linter();
```

### Vue Rules
```js
import linter from '@lakyjs/eslint-config/vue';
export default linter();
```

### Nestjs Rules
```js
import linter from '@lakyjs/eslint-config/nestjs';
export default linter();
```
