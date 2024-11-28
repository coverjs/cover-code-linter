import linter from './src';

export default linter(
  {
    typescript: true,
    rules: {
      // 禁止使用 console
      'no-console': 2,
      // 要求使用单引号
      'style/quotes': [2, 'single'],
    },
  },
);
