module.exports = {
  apps: [
    {
      name: 'ZhenHua',
      port: '3000',
      exec_mode: 'cluster',
      instances: 1,
      // instances: 'max',
      watch: ['./.output'],
      script: './.output/server/index.mjs'
    }
  ]
}
