 
> 基于 [viewerjs](https://github.com/fengyuanchen/viewerjs) 封装的vue 图片预览指令

#### 用法
 npm install @weier/mviewer 

```js
import Vue from 'vue'

import mviewer from 'mviewer'

Vue.use(mviewer)
```
```html
<template>
<div v-viewer >
  <img src='xxxxxx'>
  <div>
    <img src='xxxxxx'>
  </div>
</div>
or
<div v-viewer='options'  ref='viewer'>
  <img src='xxxxxx'>
  <div>
    <img src='xxxxxx'>
  </div>
</div>
```
```js 
 data(){
   options:{
     zIndex: 100000000
   }
 }
```
>当前viewer实例  可用 this.$refs.viewer.viewer 来获取
 

## Options
>参考 [viewerjs](https://github.com/fengyuanchen/viewerjs#options)