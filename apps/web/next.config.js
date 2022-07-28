const withTM = require('next-transpile-modules')(['@my-repo/ui'])

module.exports = withTM({
  reactStrictMode: true,
})
