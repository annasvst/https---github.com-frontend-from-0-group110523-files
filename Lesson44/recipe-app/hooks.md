# React hooks

React Hooks are functions that let you "hook into" React state and lifecycle features from function components. Here are some of the essential hooks:

## useState

Allows you to add state to function components. Call setState to update the state, causing the component to re-render with the new state.

```javascript
const [state, setState] = useState(initialState);
```

## useEffect

Lets you watch for a certain parameter to change and perform an aciton based on this change. (It's a replacement for lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.)

```javascript
useEffect(() => {
  // Side effects like data fetching, subscriptions, or manually changing the DOM.
  return () => {
    // Cleanup code (optional)
  };
}, [dependencies]);
```

## useContext

Provides a way to pass data through the component tree without having to pass props down manually at every level.

```javascript
const contextValue = useContext(MyContext);
```

## useReducer

An alternative to useState, preferred for more complex state logic. It uses a reducer function for state updates.

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

## useCallback

Returns a memoized callback that only changes if one of the dependencies has changed. This is useful for passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

```javascript
const memoizedCallback = useCallback(() => {
  // Function that we want to memoize
}, [dependencies]);
```

## useMemo

Returns a memoized value. Recomputes the value only when one of the dependencies changes. Useful for expensive calculations.
It's not designed for memoizing functions, especially not for event handelers.

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

## useCallback vs useMemo

`useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`. So, useCallback is specifically for functions, while useMemo can be used for any computationally expensive operation.

## React hooks best practices

https://sidlyf.com/react-hooks-best-practices-2023
