/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Optional: Add a trailing slash to all paths `/about` -> `/about/`
    trailingSlash: true,
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
    compiler: {
        // Enables the styled-components SWC transform due to error Warning: Prop `className` did not match. Server: "__className_6d25e8 welcomeTextOnImg
        styledComponents: true
      }
}

module.exports = nextConfig
