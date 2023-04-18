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
* Render Props Pattern
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

### Render Props Pattern

The Render Props design pattern is a technique used in React to share behaviors between components. The pattern is based on the concept of rendering a child component passing a function as a prop, which will be responsible for rendering the dynamic content of that child component.

This technique allows components to be more flexible and reusable, as specific behavior is isolated in a separate component that can be shared with other components. Additionally, Render Props helps to separate display (rendering) and business logic concerns.

An example implementation of Render Props is a component that takes a callback function as a prop and calls that function to render its content. For example, a component that renders a button can receive a callback function that will be called when the button is clicked and this function will be responsible for rendering the specific content to be displayed.

In short, the Render Props design pattern is a powerful technique for making React components more flexible and reusable, allowing you to share specific behaviors between different parts of the application.

```tsx
import React, { useRef, useEffect, ReactNode } from 'react'

type IntersectionObserverProps = {
  children: ReactNode
  rootMargin?: string
  threshold?: number | number[]
  onEnter?: () => void
  onExit?: () => void
  overflowXHidden?: boolean
  overflowYHidden?: boolean
}

export default function IntersectionObserver({
  children,
  rootMargin,
  threshold,
  onEnter,
  onExit,
  overflowXHidden = true,
  overflowYHidden = true,
}: IntersectionObserverProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && onEnter) {
          onEnter()
        } else if (!entry.isIntersecting && onExit) {
          onExit()
        }
      },
      {
        rootMargin,
        threshold,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [rootMargin, threshold, onEnter, onExit])

  return (
    <div
      ref={ref}
      className={`max-w-[100vw] ${overflowXHidden && 'overflow-x-hidden'} ${
        overflowYHidden && 'overflow-y-hidden'
      }`}
    >
      {children}
    </div>
  )
}
```

The Render Props design pattern is being applied in this code through the children property that is passed to the IntersectionObserver component. This property allows the IntersectionObserver component to encapsulate the IntersectionObserver logic and make available to other components the ability to receive callbacks for when an element enters or leaves the viewport.

The IntersectionObserver component creates a new IntersectionObserver instance and registers the element referenced by the ref property. The IntersectionObserver component then calls the callback function passed through the onEnter property when the element enters the viewport, and the callback function passed through the onExit property when the element exits the viewport.

This approach allows other components to use IntersectionObserver's functionality without having to worry about its implementation. The IntersectionObserver component becomes a wrapper for the IntersectionObserver, encapsulating the element's observation logic and providing the functionality through callbacks.

### Custom Hooks

Custom hooks are a way to extract common logic from React components and reuse it throughout your application. They allow you to share the same functionality between different components, making the code cleaner and more organized.

Custom hooks can be created very simply in any JavaScript file. To create a custom hook, just follow the following rules:

1. Hook name must start with the word "use".
2. The hook must call other hooks or use pure functions (no side effects) internally.
3. The hook must return some value (usually an object) that can be used by the calling component.

For example, let's create a custom hook called useApi that manages the state of an API request.

```tsx
import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

type UseApiResult<T> = {
  data: T | null;
  isLoading: boolean;
  error: AxiosError<any> | null;
};

const useApi = <T>(url: string): UseApiResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError<any> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<T>(url);
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
export type { UseApiResult };
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

### Rich Text Editor

A Rich Text Editor is a user interface that allows the user to create and edit formatted text documents. To be considered a good Rich Text Editor, it must offer a wide range of text formatting features such as bold, italic, underline, font sizes and styles, paragraph styles, numbered and bulleted lists, tables, links, images and much more.

Also, a good Rich Text Editor should be easy to use and offer an intuitive user interface that allows the user to format text quickly and easily. It should also have document saving and loading capabilities.

Rich Text Editor is often used in web applications to allow users to create and edit formatted documents such as articles, blog posts, emails, reports and more. It is particularly useful on content publishing platforms and in document management applications as it allows users to efficiently and effectively format their documents without having to write HTML or formatting code.

### Formatting text in Markdown

```ts
export function handleMarkdown(
  textareaElement: HTMLTextAreaElement,
  type: string
) {
  const selectionStart = textareaElement.selectionStart
  const selectionEnd = textareaElement.selectionEnd
  const selectedText = textareaElement.value.slice(selectionStart, selectionEnd)

  const toParse = markdownParse(selectedText, type)!

  const newValue =
    textareaElement.value.slice(0, selectionStart) +
    toParse.text +
    textareaElement.value.slice(selectionEnd)

  const newCursorPosition =
    selectionStart + toParse.cursorOffset! + selectedText.length

  textareaElement.value = newValue
  textareaElement.setSelectionRange(newCursorPosition, newCursorPosition)
  textareaElement.focus()
}

function markdownParse(text: string, type: string) {
  if (type === 'bold') {
    return { text: `**${text}**`, cursorOffset: 2 }
  } else if (type === 'italic') {
    return { text: `_${text}_`, cursorOffset: 1 }
  } else if (type === 'underline') {
    return { text: `<u>${text}</u>`, cursorOffset: 3 }
  } else if (type === 'link') {
    return { text: `<a href="https://exemplo.com" target="_blank">${text}</a>`, cursorOffset: 46 }
  } else if (type === 'image') {
    return { text: `![description](img_url)`, cursorOffset: 23 }
  } else if (type === 'code-block') {
    return { text: `\`\`\`\n${text}\n\`\`\``, cursorOffset: 3 }
  } else if (type === 'heading-two') {
    return { text: `## ${text}`, cursorOffset: 3 }
  } else if (type === 'quotes') {
    return { text: `> ${text}`, cursorOffset: 2 }
  } else if (type === 'align-left') {
    return {
      text: `<div style="text-align: left;">${text}</div>`,
      cursorOffset: 31,
    }
  } else if (type === 'align-center') {
    return {
      text: `<div style="text-align: center;">${text}</div>`,
      cursorOffset: 33,
    }
  } else if (type === 'align-right') {
    return {
      text: `<div style="text-align: right;">${text}</div>`,
      cursorOffset: 32,
    }
  } else if (type === 'break-line') {
    return {
      text: `<br /><br />`,
      cursorOffset: 12,
    }
  } else if (type === 'tab') {
    return {
      text: '\t',
      cursorOffset: 1,
    }
  }
}
```

This code deals with the formatting of a text in Markdown in an input textarea. The handleMarkdown function takes two parameters: the first is the HTML textarea element and the second is a string that represents the type of formatting to be applied.

First, the function gets the start and end position of the text selection in the textarea. Next, the markdownParse function is called, passing the selected text and the desired formatting as a parameter.

The markdownParse function returns an object containing the formatted text string and a cursor offset representing the number of characters the cursor should be moved after formatting.

The function then creates a new string that includes the selected text formatting. The cursor is moved to the correct position in the new string and the textarea is updated with the new formatted string. Finally, the cursor is set to the new position and the textarea element receives focus.

<p align="center">Project made with :blue_heart: by <a href="https://github.com/stardusteight-d4c">Gabriel Sena</a></p>
