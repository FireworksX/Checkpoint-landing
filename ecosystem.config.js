module.exports = {
  apps: [
    {
      name: 'checkpoint-landing',
      script: 'yarn start',
      args: '-p 3020',
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
