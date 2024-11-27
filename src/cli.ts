import baseLinter from '@antfu/eslint-config'
import { commonRules } from './commonRules'

export const linter: typeof baseLinter = (options, ...userConfig) =>
  baseLinter({
    rules: {
      ...commonRules,
    },
    ...options,
  }, ...userConfig)
