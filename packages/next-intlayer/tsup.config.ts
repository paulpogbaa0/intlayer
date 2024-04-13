import { defineConfig, type Options } from 'tsup';

const options: Options = {
  entryPoints: ['src/index.ts', 'src/middleware/index.ts'],
  format: ['cjs', 'esm'],
  target: 'esnext',
  dts: true,
  clean: true,
  sourcemap: true,
};

export default defineConfig(options);
