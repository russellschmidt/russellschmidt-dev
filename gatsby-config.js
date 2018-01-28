module.exports = {
  siteMetadata: {
    title: 'Russell Schmidt',
    author: 'Russell Schmidt',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [] // for future interop with gatsby-remark-prismjs, gatsby-remark-copy-linked-files, gatsby-remark-images
      }
    },
  ],
};
