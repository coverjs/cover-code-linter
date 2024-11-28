import baseLinter from '@antfu/eslint-config';
import { CliRules } from './rules/cli';
import { CommonRules } from './rules/common';

export const linter: typeof baseLinter = (options, ...userConfig) =>
  baseLinter({
    rules: {
      ...CommonRules,
      ...CliRules,
    },
    ...options,
  }, ...userConfig);
