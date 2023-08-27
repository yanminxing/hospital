import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
// path是nodejs里面核心模块，需要安装@types/node
import path from 'path';
// element-plus自动导入插件
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers';
// 自动导入element-plus中icon
// import Icons from 'unplugin-icons/vite';
// import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		// element-plus自动导入
		AutoImport({
			// 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
			imports: ['vue'],
			resolvers: [
				ElementPlusResolver(),
				// Auto import icon components
				// 自动导入图标组件
				// IconsResolver({
				// 	prefix: 'Icon'
				// }),
			],
			// dts: path.resolve(path.resolve(__dirname, './'), 'auto-imports.d.ts'),
		}),
		Components({
			resolvers: [
				// Auto register Element Plus components
				// 自动导入 Element Plus 组件
				ElementPlusResolver(),
				// Auto register icon components
				// 自动注册图标组件
				// IconsResolver({
				// 	enabledCollections: ['ep'],
				// }),
			],
			// dts: path.resolve(path.resolve(__dirname, './'), 'components.d.ts'),
		}),

		// Icons({
		// 	autoInstall: true,
		// }),
	],
	// 配置别名
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	}
});
