### What does Next.js offer in comparison to React?
- Rendering flexibility between client side and server side rendering, the latter providing immediate display via pre-rendering, thus, better SEO (same achievable with SSG due to ready to go HTMLs)
- File-based routing system
- possible fullstack app via route.js
- code-splitting is automatic -> Loading.js, not all the lazy import, <Supsense /> in traditional React

### Data Fetching:
1. Server Side Renedering (SSR)

    ```sh
    async function Page({params}) {
        const res = await fetch(URL,
        {cache: 'no-store'}
        )
        const data = await res.json()
        return()
    }
    ```

2. Static Side Generation (SSG) - default with cache

    ```sh
    async function Page({params}) {
        const res = await fetch(URL)
        const data = await res.json()
        return()
    }
    ```
    
3. Incremental Static generation (ISC) - like SSR, but with revalidation at certain time interval
    ```sh
    async function Page({params}) {
        const res = await fetch(URL,
        {next: {revalidate: 10}}
        )
        const data = await res.json()
        return()
    }
    ```

### Fullstack with serverless route handlers

Express default example:

const express = require('express');
const app = express();

    ```sh
    app.get('/api/users', (req, res) => {
        //Handle GET requests for /api/usres
        const users = [
            {id: 1, name: 'John'},
            {id: 2, name: 'Jane'},
            {id: 3, name: 'Bob'},
        ];
        
        //Send the users as a response
        res.json(users);
    });

    app.listen(3000, () => {
        console.log('Server is listening on port 3000');
    });
    ```

