module.exports = {
  experimental: {
    appDir: true, 
  },
  images: {
    domains: ['lh3.googleusercontent.com',
    'lh5.ggpht.com',
    'sothebys-com.brightspotcdn.com',
    'lh6.ggpht.com',],
  },
    async rewrites() {
      return [
        {
          source: '/api/artists',
          destination: 'https://www.rijksmuseum.nl/en/search/advanced/terms?field=involvedMaker&q=',
        },
        {
          source: '/api/artworks',
          destination: 'https://www.rijksmuseum.nl/api/nl/collection?key=KHn4xrLx&involvedMaker=Rembrandt+van+Rijn',
        },
      ];
    },
  };
  