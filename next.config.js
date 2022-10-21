const withPWA = require('next-pwa')({
  dest: 'public',
})

module.exports = withPWA({
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap')
    }

    return config
  },
})
