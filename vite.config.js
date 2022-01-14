import { defineConfig } from 'vite'
import commonjs from 'rollup-plugin-commonjs';

import rollupNodePolyFill from 'rollup-plugin-node-polyfills'
import react from 'react'
import reactDom from 'react-dom';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [commonjs({
    include: 'node_modules/**',
    namedExports: {
      react: Object.keys(react),
      'react-dom': Object.keys(reactDom)
    }
  }), rollupNodePolyFill()]
})
