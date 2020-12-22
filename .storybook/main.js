module.exports = {
  stories: [
    '../__stories__/**/*.stories.mdx',
    '../__stories__/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: config => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
