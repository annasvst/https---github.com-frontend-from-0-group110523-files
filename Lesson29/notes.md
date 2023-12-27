## npm (Node Package Manager):

`npm` is a package manager for JavaScript that comes bundled with Node.js.
It's used to install, manage, and share packages or libraries of code with others. These packages can include JavaScript code, modules, and other project dependencies.
You typically use npm to install packages globally or locally within a project. It also helps you manage versions and dependencies for your projects.

## npx (Node Package Execute)

npx is a package runner tool that also comes with npm (version 5.2.0 and higher). It's not a typo; it's "npx"!
It's used to execute packages from the npm registry. You can run commands directly from packages that you haven't installed globally or locally.
npx is especially handy for running packages that you might not need to keep installed on your system, or for running one-off commands without cluttering your global or project dependencies.

## Difference:
The main difference is that npm is primarily used for package management and installing dependencies, while npx is used for executing packages, especially when you want to run a specific command from a package without installing it globally or locally.

For example, you might use npm to install libraries like React or Express in your project, and then you'd use npx to run development scripts or tools that are part of those libraries without needing to install them separately.

# React
## What is React?
- A JavaScript library for building user interfaces.
- Created by Facebook.
- Emphasizes reusable components.

Unlike full-fledged frameworks, React focuses solely on *building user interfaces*. It's not an end-to-end solution for web development; it specifically handles the view layer.

## Why React?
- Popular in the industry, making it a valuable skill.
- Component-based architecture: makes code more manageable and reusable.
- Strong community and ecosystem.

## Key Concepts
### JSX (JavaScript XML)
- Looks like HTML, but it's actually JavaScript.
- Allows embedding JavaScript expressions in markup.

### Components
- Building blocks of a React application.
- Two types: Class components (deprecated) and Functional components.

### State and Props
- State: Data that changes over time.
- Props: Data passed to components to render dynamic content.


## How Does React Work?
### Virtual DOM
React uses a virtual DOM (Document Object Model), which is a lightweight copy of the actual DOM. This is one of React's key features for optimizing performance. When a component's state changes, React first updates the virtual DOM. Then, it compares the updated virtual DOM with the actual DOM and calculates the most efficient way to apply these changes. This process is known as 'Reconciliation'.
### JSX (JavaScript XML)
React introduces JSX, a syntax extension that allows you to write HTML structures in the same file as JavaScript code. This makes the code more readable and easier to understand. Under the hood, JSX is converted into JavaScript.
### Components
Components are the building blocks of any React application. They can be either class-based or functional. With the introduction of Hooks in React 16.8, functional components became more powerful, allowing them to manage state and side-effects.
### State and Props
State is a way to store and manage data that changes over time within a component. It’s what makes components dynamic and interactive.
Props (Properties) are a way of passing data from parent to child components. They are read-only and help components to be more dynamic and reusable.
### Lifecycle Methods (outdated)
Class components in React have lifecycle methods (e.g., componentDidMount, componentDidUpdate), which are hooks that run at different stages of a component's existence (like when it's rendered or updated).
### Hooks
For functional components, React provides Hooks (like useState, useEffect) that let you use state and other React features without writing a class.
### React's Ecosystem
React is not just a library but part of a larger ecosystem. This includes:

- State Management Tools: Like Redux or Context API for managing state across multiple components.
- Routing Libraries: Like React Router for navigating between different views/pages.
- Utility Libraries: Such as Axios for HTTP requests, and many others to extend its functionality.
