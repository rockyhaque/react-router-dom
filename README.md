## React Router DOM Overview

### Installation

To install `react-router-dom`, you can use npm or yarn:

```bash
# Using npm
npm install react-router-dom

# Using yarn
yarn add react-router-dom

```

### Link

The `Link` component in `react-router-dom` is a declarative way to navigate around your application. It renders an anchor tag (`<a>`) with proper `href` attribute values, allowing you to move between routes without causing a full page refresh.

### useNavigate

The `useNavigate` hook provides a function that allows you to programmatically navigate to different routes within your application. This is particularly useful for handling navigation in response to user actions, form submissions, or asynchronous data loading.

### useRouteError

The `useRouteError` hook enables you to capture errors thrown by route components during rendering. It's helpful for handling error states gracefully, displaying error messages, and possibly redirecting users to a different route in case of errors.


### useLocation

The `useLocation` hook provides access to the current URL location in your application. It returns a `location` object containing information such as the pathname, search, and hash, allowing you to dynamically render components based on the current URL.

### useNavigation

The `useNavigation` hook gives you access to the navigation state, allowing you to track the current navigation process within your application. You can use this information to display loading indicators, disable UI elements during navigation, or handle navigation-related UI changes.

### useLoaderData

The `useLoaderData` hook is used to fetch data asynchronously from the loader function of a route. It's commonly used in server-side rendering (SSR) setups to pre-fetch data required by a route before rendering the corresponding component. This hook allows you to seamlessly integrate data loading with your routing logic.

### Outlet

The `Outlet` component is a crucial part of nested routing in `react-router-dom`. It acts as a placeholder where child routes are rendered within their parent route. This allows you to structure your application with nested layouts and dynamic content.

