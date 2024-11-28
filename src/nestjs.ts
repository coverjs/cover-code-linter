import baseLinter from '@antfu/eslint-config';
import { CommonRules } from './rules/common';
import { NestjsRules } from './rules/nestjs';

export const linter: typeof baseLinter = (options, ...userConfig) =>
  baseLinter({
    typescript: true,
    vue: false,
    yaml: false,
    rules: {
      ...CommonRules,
      ...NestjsRules,
    },
    ...options,
  }, ...userConfig);
