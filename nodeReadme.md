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

## 2.1 项目静态与组件拆分（p4）

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
  - 