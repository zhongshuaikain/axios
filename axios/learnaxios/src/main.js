import Vue from 'vue'
import App from './App'
import {request} from './network/request/request'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

/*
封装调用方式一：（传三个参数）
request("http://123.207.32.32:8000/home/multidata",res=>{
  console.log(res)},err=>{
  console.log(err)});
*/


/* 封装调用方式二：（传一个参数）
request({
  url: 'http://123.207.32.32:8000/home/multidata',
  success: res => {
    console.log(res)
  },
  fail: err => {
    console.log(err)
  }
})
*/

// 封装调用方式三和四：（利用promise）
request("home/data?type=pop&page=1").then(res => {
  console.log(res)
}).catch(err=>{
  console.log(err)
})






