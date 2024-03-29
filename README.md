# react-use-watch
![coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)
![dependency](https://img.shields.io/badge/dependency-zero-brightgreen)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-use-watch)
![typescript supported](https://img.shields.io/badge/typescript-supported-brightgreen)
![npm](https://img.shields.io/npm/v/react-use-watch)

A React hook about triggers once only when dependencies have changed.

## Philosophy

```javascript
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes
```
Just like above. The react hooks of [useEffect](https://reactjs.org/docs/hooks-effect.html) will run the effect at least once despite if the count changes or not. It will trigger another time if the count has changed. That's not what we want. What I really want is that only run the effect if the count changes. That's the philosophy of `react-use-watch`.

## Installation

Install  with npm

```bash
  npm install react-use-watch
```

Or with yarn

```bash
  yarn add react-use-watch
```

## Usage

```javascript
import {useWatch} from "react-use-watch";

function App() {

  useWatch(() => {
    document.title = `You clicked ${count} times`;
  }, [count]) // Only run the effect if count changes

  return (<span></span>)
}
```

## License

[MIT](./LICENSE)
