# 1 简介

1 参考

[尚硅谷vue项目实战《尚医通》，Vue3项目+TypeScript前端项目](https://www.bilibili.com/video/BV1CN41167AC?p=3&spm_id_from=pageDriver&vd_source=0a0dd058ef849bffba564af91a70780d)

2 使用技术

1）基础环境

node：16.14.2（推荐16往上）

2）技术

- vue3：^3.3.4
- typescript：5.0.2
- vite： ^4.4.5

## 2 项目搭建

## 2.1 初始化项目

1 使用vite构建项目

1）使用命令

[创建说明文档](https://cn.vitejs.dev/guide/)

```npm
yarn create vite
```

2）选择vue和ts

3）下载依赖、运行项目

```
yarn
yarn dev
```



## 2.2 设置远程仓库

1 本地连接远程

```
git remote add origin git@github.com:yanminxing/hospital.git
```

## 2.3 整理项目

## 2.4 浏览器自动启动配置

1 在package.json中配置命令dev

```
 "dev": "vite --open",
```

## 2.5 配置别名

1 下载依赖

 @types/node：typescript的一个声明文件包，用于描述nodejs核心模块和常用的第三方库信息。

```
 yarn add @types/node -D
```

2 配置vite.config.ts

添加resolve属性

```
  // 配置别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  }
```

3 配置tsconfig.json

在compilerOptions中配置以下属性，主要是为了ide能够有智能提醒@

```json
"baseUrl": ".",
"paths": {
    "@/*": ["src/*"]
}
```

# 2 项目页面搭建

## 2.1 项目静态与组件拆分（p4-5）

1 图片资源（从资料 里面拿)

注意点：

1）网页为1200px，居中

2 清除默认样式

1）在npm里面搜索[reset.scss](https://www.npmjs.com/package/scss-reset?activeTab=code)，并且将其复制到项目里面

2）下载依赖sass

```
yarn add sass -D
```

3 分析布局

页面分为三部分

页面大小为1200，居中

- 顶部
  - 标题、用户信息
  - 固定定位在顶部
  - css代码：使用浮动来进行布局，需要注意的是，使用浮动之后，需要消除浮动
- 中间
  - 内容部分
- 底部
  - css代码：使用浮动来进行布局，需要注意的是，使用浮动之后，需要消除浮动

## 2.2 项目路由的搭建和滚动行为（p6）

1 分析页面

首页、挂号页面

2 下载依赖

```
yarn add vue-router
```

3 创建路由

1）步骤

- 创建路由实例

  ```typescript
  /**
   * @description 路由页面
   * */
  import {createRouter, createWebHashHistory} from 'vue-router';
  
  /**
   * @description 路由实例
   * @description createRouter--用来创建路由
   * */
  const router = createRouter({
  	// 路由模式创建
  	history: createWebHashHistory(),
  	routes: [
  		{
  			path: '/home',
  			component: () => import('@/pages/home/index.vue')
  		},
  		{
  			path: '/detail',
  			component: () => import('@/pages/detail/index.vue')
  		},
  		{
  			path: '/',
  			redirect: '/home'
  		}
  	],
  	// 滚动行为控制： 控制滚动条的位置
  	scrollBehavior() {
  		return {
  			left: 0,
  			top: 0
  		}
  	}
  });
  
  export default router;
  ```

- main.js注册路由实例

- 在组件里面使用

- ```vue
  <router-view></router-view>
  ```

4 控制滚动条的行为

在创建路由实例的时候，添加配置项scrollBehavior

```
scrollBehavior() {
    return {
        left: 0,
        top: 0
    }
}
```

# 2.3 day1遇到的问题

1 



# 2.4 首页搭建静态banner（p7）

1 Element Plus下载和使用

- 使用命令下载

```
yarn add element-plus
// 按需导入插件
yarn add -D unplugin-vue-components unplugin-auto-import
```

- 配置vite.config.ts文件

```typescript
// element-plus自动导入插件
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers';

// 在plugins属性里面添加如下东西
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
```

- 注意点：在引入自动导入插件之后，根目录多了两个文件：auto-imports.d.ts和components.d.ts

2 实现轮播图静态组件

- 轮播图使用饿了么里面的组件
- vite中图片引入方式
  - 使用import直接引入
  - 使用import动态引入引入
  - 使用new URL()引入

```vue
<template>
	<div class="page-home-carousel bg-white">
		<el-carousel height="350px" arrow="always">
			<el-carousel-item v-for="item in dataList" :key="item.value">
				<img :src="CarouselImg" alt="暂无次图片">
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import CarouselImg from '@/assets/images/web-banner-1.png';
import {getLocalFile} from '@/utils/common/file/image';

// 轮播图片列表
const dataList = ref([
	// vite引入图片方式
	// 1 方式1：使用import直接引入
	{
		name: CarouselImg,
		value: 1
	},
	// 2 方式2：使用import动态引入引入
	{
		name: () => import('@/assets/images/web-banner-1.png'),
		value: 2
	},
	// 3 方式3：使用new URL()引入
	{
		name: () => getLocalFile('@/assets/images','web-banner-1.png'),
		value: 2
	}
]);
</script>
```

```typescript
/**
 * @description 获取本地文件
 * @param pathFront {string} 文件名之前链接
 * @param name {string} 文件名
 * */
export const getLocalFile = (pathFront: string, name: string) => {
	// 需要拼接，否则会出问题
	return new URL(`${pathFront}/${name}`, import.meta.url).href;
}

```

