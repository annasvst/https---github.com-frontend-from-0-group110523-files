## Mocking Redux

To mock a Redux store, you can use libraries like redux-mock-store or simply use Jest to mock Redux hooks such as useSelector and useDispatch.

Example of mocking useDispatch and useSelector:

```
import { render, fireEvent, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import MyComponent from './MyComponent';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

test('interacts with Redux', () => {
  const dispatch = jest.fn();
  useDispatch.mockReturnValue(dispatch);
  useSelector.mockReturnValue({ value: 'test' });  // Mock the state you need

  render(<MyComponent />);
  fireEvent.click(screen.getByText('Button'));  // Example button in your component

  expect(dispatch).toHaveBeenCalledWith({ type: 'ACTION_TYPE' });
});
```

## Mocking Context API

If your component uses useContext, you can wrap your component in a custom provider when rendering it in your tests.

Example:

```
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';
import { MyContext } from './context';

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <MyContext.Provider value={providerProps}>{ui}</MyContext.Provider>,
    renderOptions
  );
};

test('uses context value', () => {
  const providerProps = { value: 'test' };  // Mock the context value
  customRender(<MyComponent />, { providerProps });
  expect(screen.getByText('Context Value: test')).toBeInTheDocument();
});
```

## Mocking BrowserRouter

For components that use routing features from react-router-dom, you can mock the router context or wrap your component with a MemoryRouter during tests.

Example using MemoryRouter:

```
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MyComponent from './MyComponent';

test('renders with router', () => {
render(
    <MemoryRouter initialEntries={['/initial']}>
      <MyComponent />
    </MemoryRouter>
  );

  expect(screen.getByText('Path: /initial')).toBeInTheDocument();
});
```

## Mocking Module Functions

When a component imports functions from external modules, you can use Jest to mock these modules before they are imported by your component.

Example:

Suppose your component imports a utility function calculate from a module utils.js.

```
// utils.js
export const calculate = (x, y) => x + y;


// MyComponent.js
import React from 'react';
import { calculate } from './utils';

export const MyComponent = () => {
  return <div>Result: {calculate(2, 3)}</div>;
};

// MyComponent.test.js

import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';
import * as Utils from './utils';

// Mock the entire utils module
jest.mock('./utils', () => ({
  calculate: jest.fn(),
}));

test('MyComponent uses mocked calculate function', () => {
  Utils.calculate.mockReturnValue(10);  // Mocking the return value of calculate

  render(<MyComponent />);
  expect(screen.getByText('Result: 10')).toBeInTheDocument();  // Check if the mock is used
  expect(Utils.calculate).toHaveBeenCalledWith(2, 3);  // Check if the function was called correctly
});
```

## Mocking Prop Functions

When components receive functions as props, you can pass mocked functions directly using Jest’s jest.fn() to create a mock function.

Example:

Suppose your component expects a function prop onSubmit.

```
// MyComponent.js
import React from 'react';

export const MyComponent = ({ onSubmit }) => {
  return <button onClick={() => onSubmit('data')}>Submit</button>;
};

// MyComponent.test.js
import { screen, render, fireEvent } from '@testing-library/react';
import { MyComponent } from './MyComponent';

test('MyComponent calls onSubmit prop', () => {
  const mockOnSubmit = jest.fn();
  render(<MyComponent onSubmit={mockOnSubmit} />);

  fireEvent.click(screen.getByText('Submit'));  // Simulate the button click
  expect(mockOnSubmit).toHaveBeenCalledWith('data');  // Check if the prop was called correctly
});

```

- Use jest.fn() to create a mock function when you need to assert that it was called, or to specify its return value.
- Use jest.mock() to mock entire modules when components use external functions or when you need to isolate module dependencies.
- Ensure your **mocks are set up before they are used by the component**, typically by placing mock setup in the top-level or before each test block, depending on whether you want a fresh mock for each test.
