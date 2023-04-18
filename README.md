<div align="center">
  <img src="logo.png" width="222" height="78" />
</div>

<h1 align="center">
  Fevient, Web Designer Portfolio
</h1>

The project is a portfolio developed with a stack of modern and popular technologies in web development.

On the frontend, choosing React with TypeScript and Next.js allows you to build an application that is easy to maintain and scale. The use of TailwindCSS for styling ensures visual standardization and agility in layout development. The inclusion of Framer Motion allows the creation of complex and elegant animations, raising the level of interactivity of the interface. The use of custom hooks and the Context API facilitate the management of the application state and reduce the code complexity. The inclusion of the Decorator Pattern demonstrates a concern with good programming practices.

On the backend, the choice of using API Routes together with Server Side Rendering and Static Generation of Next.js allows the construction of an application with high performance and indexing in search engines. Using TypeScript ensures data type safety and faster development and easier maintenance. Integration with MongoDB and Firebase Storage allows for scalable and secure data and file storage. Authentication via Access Link and the use of Nodemailer guarantee the security and confidentiality of user information.

The inclusion of a Rich Text Editor allows the user to create and edit content with more advanced formatting, enriching the portfolio's content.

Overall, the project features a combination of modern and advanced technologies that can ensure fast and efficient development of a high-quality, high-performance web application.

## :hammer_and_wrench: Tools

### Frontend

* React
* TypeScript
* Next.js
* TailwindCSS
* Framer Motion
* Axios
* Decorator Pattern
* Custom Hooks
* Context API
* Rich Text Editor
* Multi languages

### Backend

* API Routes
* Server Side Rendering
* Static Generation
* TypeScript
* MongoDB
* Firebase Storage
* Auth via Access Link
* Nodemailer

## :mailbox_with_mail: Utilities
 
### Next.js

Next.js is a React rendering framework that provides several advantages over using pure React. By using Next.js, you can take advantage of features like Server Side Rendering (SSR), Static Generation (SG), and API Routes.

SSR is a rendering technique that allows you to generate and send the HTML page to the client directly from the server, instead of just sending the JavaScript code and waiting for the browser to render it. This can lead to a better user experience in terms of performance and SEO as the content loads faster and can be indexed by search engines.

SG is a rendering technique that allows you to statically generate HTML pages at compile time instead of dynamically generating them at runtime. This can lead to even better performance, as the pages are pre-rendered and can be served directly from the cache, without the need for code to run on the server. Furthermore, SG allows you to take advantage of CDN content caching, making content even faster.

API Routes allow you to create API endpoints in your Next.js application, which is an easy way to provide access to your application's data from other sources. This allows you to use Next.js both as a full page rendering server and as a standalone API server.

Together, Next.js, API Routes, Server Side Rendering, and Static Generation can provide a great development experience and superior performance for front-end applications.

### Decorator Pattern

The Decorator Pattern is a software design pattern that lets you add additional behaviors to an object at runtime without affecting other objects of the same type. In the presented code, we can see that the Decorator Pattern is used to add authentication behavior to a React component.

The AuthWrapper component is responsible for verifying that the user is authenticated before rendering the content. The Decorator Pattern is applied to this component to add additional authentication behaviors such as checking the authentication cookie and redirecting the user to the login page if not authenticated.

This approach is useful because it allows the AuthWrapper component to be reused throughout the application, regardless of where the user needs to be authenticated. Additionally, the Decorator Pattern makes it easy to add additional authentication behaviors without having to modify existing code.

```tsx
export const AuthWrapper = ({ children }: Props) => {
  const { isClientAuthenticated, setIsClientAuthenticated } = useAppContext()
  const router = useRouter()

  useEffect(() => {
    ;(async () => {
      const cookies = document.cookie.split(';')
      const sessionCookie = cookies.find((cookie) =>
        cookie.trim().startsWith('sessionCookie=')
      )
      if (sessionCookie) {
        const sessionCookieValue = sessionCookie.split('=')[1]
        try {
          const decodedToken = jwt.decode(String(sessionCookieValue))
          if (decodedToken) {
            setIsClientAuthenticated(true)
          } else {
            setIsClientAuthenticated(false)
          }
        } catch (err) {
          setIsClientAuthenticated(false)
          router.push('/')
        }
      } else {
        router.push('/')
      }
    })()
  }, [])

  if (isClientAuthenticated === true && isClientAuthenticated !== undefined) {
    return <>{children}</>
  } else {
    return null
  }
}
```

### Custom Hooks

Custom hooks are a way to extract common logic from React components and reuse it throughout your application. They allow you to share the same functionality between different components, making the code cleaner and more organized.

Custom hooks can be created very simply in any JavaScript file. To create a custom hook, just follow the following rules:

1. Hook name must start with the word "use".
2. The hook must call other hooks or use pure functions (no side effects) internally.
3. The hook must return some value (usually an object) that can be used by the calling component.

For example, let's create a custom hook called useApi that manages the state of an API request.

```jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useApi;
```

In this example, the useApi hook uses the useState and useEffect hook internally to manage the state of an API request, which is returned as an object containing data, isLoading and error.

This hook can be used in any component as follows:

```jsx
import React from 'react';
import useApi from './useApi';

const MyComponent = () => {
  const { data, isLoading, error } = useApi('https://api.example.com/data');
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return <div>Data: {data}</div>;
};
```

This is just a basic example of how custom hooks can be created and used to share logic across different components. With the use of custom hooks, it is possible to extract any type of repetitive logic and use it throughout the application in a simple and efficient way.

## :speech_balloon: Explanations

### Screenshot implementation with Supabase Storage


<p align="center">Project made with :blue_heart: by <a href="https://github.com/stardusteight-d4c">Gabriel Sena</a></p>
