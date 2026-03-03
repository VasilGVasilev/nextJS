### Navigation in RootLayout
### Dynamic metadata title for each page
Very important to note that metadata in app router are still not supported for client components, thus, if you use 'use client' in a component, it is better to abstract this client component and imported in a page.js that has the metadata
### Navbar mobile first and toggle working
### Location in contacts (prone to crash and paying goolge for stable version)
### Contacts page mobile responsive
### Parallax in description
### 403 error on hard refresh of nested route fixed with adding trailing slash option to next.config and starting each href='' with a slash -> href='/apartments' not href='apartments'; src='/dalia/etc' not src='dalia/etc'
### sitemap and cache revalidation the day before
### this push implements the Image Component which requires a special loader and src configuration but give up to date cache
### to be implemented - Framer Motion