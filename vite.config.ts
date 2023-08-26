import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
// path是nodejs里面核心模块，需要安装@types/node
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
  // 配置别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  }
});
