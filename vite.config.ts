import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
// path是nodejs里面核心模块，需要安装@types/node
import path from 'path';
// element-plus自动导入插件
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
    vue(),
    // element-plus自动导入
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
	// 配置别名
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
});
