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

