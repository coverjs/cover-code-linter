import baseLinter from '@antfu/eslint-config'
import { commonRules } from './commonRules'

export const linter: typeof baseLinter = (options, ...userConfig) =>
  baseLinter({
    typescript: true,
    vue: false,
    yaml: false,
    rules: {
      ...commonRules,
      // 不强制类型导入
      'ts/consistent-type-imports': 0,
    },
    ...options,
  }, ...userConfig)
