module.exports = {
  apps: [
    {
      name: 'checkpoint-landing',
      script: 'yarn start',
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
