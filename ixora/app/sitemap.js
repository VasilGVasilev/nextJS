const url = 'https://ixorabg.com'

export default async function sitemap() {
    const routes = ['', '/apartments', '/contacts', '/description', '/investor', '/gallery', '/apartments/first-floor', '/apartments/second-floor', '/apartments/third-floor', '/apartments/penthouse', '/apartments/parking'].map((route) => ({
        url:`${url}${route}`,
        lastModified: new Date().toISOString()
    }))
    return [...routes]
}