import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['src/index', 'src/cli', 'src/nestjs', 'src/vue'],
  clean: true,
  declaration: true,
  sourcemap: false,
  rollup: { esbuild: { target: 'node18', minify: true } },
});
