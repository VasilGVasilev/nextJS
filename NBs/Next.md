### React Essentials

**Client and Server Components**
Pages Router adheres to the client components parasigm, while the new App Router does to the server components convention, but you can enable client component by adding the 'use client' directive at the top of the component.

1. Server-side default for App Router

Thus, default is the any data fetching will be done on the server, the *fetched* data is used to render the component STILL on the server and then that *rendered* verison of the page is sent to the browser.

2. Client-side

UseEffect is a hook for the client side and next.js will put out an error if special 'use client' directive does not designate that the component is client side.

3. Current project use

If you want to you Next.js as a framework for client side rendering of components, you better make static site generation and also set the directive for all data fetching, therefore, ensuring that there is no JS that need to be run on server, but also that in development, there are no errors for using client component hooks in server components

4. Old Pages Router way

Before next.js v13, next was client component centered and data fetching was done via special functions - getServerSideProps, getStaticPaths, getStaticProps

**By default, components inside app are React Server Components. So, you may be thinking, why Server Components?** 

With Server Components, the initial page load is faster, and the client-side JavaScript bundle size is reduced. The base client-side runtime is cacheable and predictable in size, and does not increase as your application grows. Also, the majority of components are non-interactive and can be rendered on the server as Server Components.

But note that server components create the vDOM on the server, thus, a server component cannot console.log on the browser, we need the 'use client' directive. [Here](https://nextjs.org/docs/getting-started/react-essentials#when-to-use-server-and-client-components) , you can see the instances where you can abstract into browser friendly client components the vDOM rendered by default on the server with Next.js

How it all runs?

When a route is loaded with Next.js, the initial HTML is rendered on the server. This HTML is then progressively enhanced in the browser, allowing the client to take over the application and add interactivity, by asynchronously loading the Next.js and React client-side runtime. (Previously, done with hydration)

**There is a difference between App Router and Pages Router documentation.**

The *Pages Router* has a file-system based router built on concepts of pages. When a file is added to the pages directory, it's automatically available as a route. 

The *App Router* takes priority over the Pages Router. Routes across directories should not resolve to the same URL path and will cause a build-time error to prevent a conflict.

Unlike the *pages* directory which uses client-side routing, the *App Router* uses server-centric routing to align with Server Components and data fetching on the server. With server-centric routing, the client does not have to download a route map and the same request for Server Components can be used to look up routes.

**Static Site Genertion**

We generate a static site - an output of HTML, JavaScript and CSS, by changing the next.config. Those static sites are generated at build time (compile time, packing, etc) and still can have srcipts for fetching for example but very little hydration happens in comparison to SSR. 
This phase that is prior to hydration is also known as pre-rendering.


### Building your app

Special files:
- layout.js
- template.js
- error.js (React error boundary)
- loading.js (React suspense boundary)
- not-found.js (React error boundary)
- page.js or nested layout.js

Colocating files - your own ones -> components, tests, module.css

### Routing
Inside the app directory, **folders** are used to define routes. Each folder represents a route segment that maps to a URL segment. 
A special **page.js** file is used to make route segments publicly accessible.
Thus, **folder** without **page.js** could be used for storing of colocated files.

**A page is always the leaf of the route subtree.**
    Why export default?  Only one export to be made from a particular file.

**A layout is UI that is shared between multiple pages.**
    On navigation, layouts preserve state, remain interactive, and do not re-render.

using () parentheses in routing as a grouping mechanism for routes will only show in code, not in actual route, thus, (auth) directory with login and registration direcotries inside is no accessible via /auth/login, but just /login

**Layouts and contexts**

Layouts in Next.js are used to wrap pages with a common layout structure. They allow you to reuse code across multiple pages, which can be especially useful if you have a website with a consistent design.

Contexts in Next.js, on the other hand, allow you to share state and functionality across components. They are typically used when you have data that needs to be accessed by multiple components in your application.

***The root layout is a Server Component by default and can not be set to a Client Component.*** *But exporting a static site without configuring root layout unproblematic so far (Note that I haven't updated the root Layout)* 

**Templates**
Templates are similar to layouts in that they wrap each child layout or page. Unlike layouts that persist across routes and maintain state, templates create a new instance for each of their children on navigation. This means that when a user navigates between routes that share a template, a new instance of the component is mounted, DOM elements are recreated, state is not preserved, and effects are re-synchronized.

There may be cases where you need those specific behaviors, and templates would be a more suitable option than layouts. For example:

- Enter/exit animations using CSS or animation libraries.

- Features that rely on useEffect (e.g logging page views) and useState (e.g a per-page feedback form).

- To change the default framework behavior. For example, Suspense Boundaries inside layouts only show the fallback the first time the Layout is loaded and not when switching pages. For templates, the fallback is shown on each navigation.

Link is imported from 'next/link'

### Rendering

**Static and Dynamic Rendering**
- In a static route, components are rendered on the server at **build time**. The result of the work is cached and reused on subsequent requests. 
- In a dynamic route, components are rendered on the server at **request time**.

Static rendering is default, but you can opt out to dynamic rendering by using a dynamic function or dynamic data fetching. This will cause Next.js to render the whole route dynamically, at **request time**, instead of **build time**

![dynamic static rendering](https://github.com/VasilGVasilev/realEstate/blob/main/effectOfDynamicStaticRendering.png)

Note that, for a route to be statically rendered, the data requests are cached and there are no dynamic functions. BUT  if a dynamic function or a dynamic fetch() request (no caching) is discovered, Next.js will switch to dynamically rendering the whole route at request time.

**What are those dynamic functions?**
Dynamic functions rely on data that can only be known at request time -> a user's cookies ( cookies() ), current requests headers ( headers() ), or the URL's search params ( useSearchParams() ). 

*It is recommended to wrap the Client Component that uses useSearchParams() in a <Suspence/> boudnry to allow any Client Components above it to be statically rendered.*

### How do we turn the dynamic path /[etc] into a static one

Remember we have SSR, SSG and ISC. By using generateStaticParams we make a dynamic route into a static route, thus, SSR into SSG. Note, that there is a difference:

when using build between a SSG by default 

```sh(Static) automatically rendered as a static HTML``` 
and SSG by turning **dynamic route into static** 

```sh(SSG) automatically generated as a static HTML + JSON```

The *generateStaticParams()* function can be used in combination with dynamic route segments to statically generate routes at build time instead of on-demand at request time.

```sh
export async function generateStaticParams() {
        const posts = ['post-one', 'post-two']

        return posts.map((post) => {
            return {
                postId: post
            }
        })
    }
```


![buildTypes](https://github.com/VasilGVasilev/realEstate/blob/main/buildTypes.png)

**Result**
Page is faster, API is not called at runtime whenever the user is entering URL address, instead it is already as static JSON in the code on the server ready to be used.
Good for predicatable amount of routes, not like 1 mln of them -> .map() will be heavy



### Data Fetching

Mind that with Server Components, next.js deduples requests (GET) by storing them in local cache.

use in development for Client Components
async await in development for Server Components

**Recommended fetching for now is via third-party library Tanstack-query**

The main difference between the two is that tanstack-query is focused on managing data and provides a more declarative way of fetching and caching it, while useEffect is more general and allows you to perform any side effect in your components.

[Extremely good explanation of Next.js in 1 hour](https://www.youtube.com/watch?v=Sbl04kOL1dM)