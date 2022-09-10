import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

/** scss */
// const variablePath = normalizePath(path.resolve('./public/variables.scss'))


// https://vitejs.dev/config/
export default ({mode}) => defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly', // 我们使用驼峰形式
    },
   
    /** 如果使用 scss, 需要注入变量名 */
    // preprocessorOptions: {
    //   scss: {
    //     addtionalData: `@import "${variablePath}"`
    //   }
    // }
  },
  server: {
    proxy: {
      '/api': {
        target: loadEnv(mode, process.cwd()).VITE_BASE__API_URL, 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})
