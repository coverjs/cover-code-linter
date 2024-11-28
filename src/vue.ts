import baseLinter from '@antfu/eslint-config';
import { CommonRules } from './rules/common';
import { VueRules } from './rules/vue';

export const linter: typeof baseLinter = (options, ...userConfig) => baseLinter({
  typescript: true,
  vue: true,
  yaml: false,
  rules: {
    ...CommonRules,
    ...VueRules,
  },
  ...options,
}, ...userConfig);

export default linter;
