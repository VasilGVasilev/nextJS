# Website is mainly nice UI with a few requests to DB on two pages

## Architecture
- Use Next.js but with client components for initial version, can make the website faster in the future via SSR.
- On the other hand, I have better know-how of create-react-app, see CRA compatibility with Tailwind problem in the end of md file 

## Building approach:
- Chose **Next.js** due to Tailwind compatibility, but turn off SSR and do static export when deploying
- Decide on a CSS superset **Tailwind** or SASS based mainly on the instruments' capability to deliver seamless mobile resposniveness, but also useMap for mapping pictures to relevant routes.
- Hosting will most likely be Hostinger
- DB will also most likely be Hostinger depending on how well it connects with the website for GET requests, thus, no separate admin page for CRUD of DB.

## Main Problems:
0. Choose **Next.js** due to CRA not supporting PostCSS (Tailwind Directives problem)
1. Choose a CSS superset. **Tailwind**
 - Mobile responsiveness
 - Mapping pictures
2. Make website translatable
3. Does Hostinger host the DB all the time so that it is accessible by my JS GET requests /available apartments should be visible all the time/
4. Implement React memo hook to memoize state after initial render [Memo](https://www.w3schools.com/react/react_memo.asp) (automatic cashing for static side generation by Next.js see NB jsMastery)

## Website specific implementations:

- translate3d()
- zoom on hover
- integrate images, youtube videos and maps
- no search in app, heavy to implement
- navbar becomes sticky on scrolling down the page
- a few nice pictures that we have to change with custom ones done by our UX designer
- lazy loading on some of the pictures - statically pre-render some pages for performance and SEO. 

## Tasks:
1. Do the easiest pages: Контакти, Галерия, Инвеститор, За комплекса, Начало


### Create React App needs PostCSS plugins for Tailwind:

Create React App (CRA) is a tool that allows developers to quickly set up a new React project without having to worry about configuring build tools or other complex setup tasks. One of the features of CRA is that it provides a default configuration for processing CSS files using the css-loader and style-loader, which are part of Webpack.

However, the default configuration provided by CRA does not include a preprocessor like PostCSS, which is necessary to process Tailwind's CSS classes. PostCSS is a tool that allows developers to transform CSS with JavaScript plugins, and it is often used as a preprocessor to add features like variables, nesting, and mixins to CSS, which are not part of the CSS specification.

Tailwind CSS, in particular, uses PostCSS plugins to generate the CSS that contains the classes for styling HTML elements. The tailwindcss plugin is responsible for generating the CSS classes based on the configuration file provided by the developer, while the autoprefixer plugin is used to add vendor prefixes to the CSS rules to ensure cross-browser compatibility.

Therefore, to use Tailwind CSS with Create React App, you need to add PostCSS and the necessary plugins to the project's configuration, so that Webpack can process the CSS files and generate the final output that includes the Tailwind classes and any other transformations performed by PostCSS plugins.



