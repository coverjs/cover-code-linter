import baseLinter from '@antfu/eslint-config'

const linter: typeof baseLinter = (options, ...userConfig) => {
  return baseLinter(options, ...userConfig)
}

export default linter
