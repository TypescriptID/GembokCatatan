// purgecss config - https://www.purgecss.com/configuration
module.exports = {
    content: [
      './dist/**/*.html',
      './dist/js/*.js'
    ],
    css: [
      './dist/GembokCatatans/*.css'
    ],
    whitelistPatterns: [
      // Modernizr
      /touchevents$/,
      // Vue transition classes
      /-enter-active$/,
      /-enter$/,
      /-enter-to$/,
      /-leave-active$/,
      /-leave$/,
      /-leave-to$/
    ]
  }
