import axios from 'axios'

/*
封装 方式一：（传三个参数）
    export function request(config,success,fail) {
    axios({
      url: config,
      timeout: 5000
    }).then(res=>{
     success(res)
    }).catch(err=>{
      fail(err)
    })
  }
*/

/* 封装 方式二：（传一个参数）
export function request(config) {
  axios({
    url:config.url
  }).then(res => {
    config.success(res)
  }).catch(err => {
    config.fail(err)
  })
}
*/

/* 封装 方式三：（返回promise）
export function request(config) {

  var newVar = axios.create({
    baseURL: "http://123.207.32.32:8000/home",
    timeout: 5000
  })

  return new Promise((resolve, reject) => {
    newVar(config).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err)
    })
  })
}
*/

// 封装 方式四：推荐（ axios创建实例默认就是返回的promise）
export function request(config) {

  var newVar = axios.create({
    baseURL: "http://152.136.185.210:8000/api/w6",
    timeout: 5000
  })

  return newVar(config);
}
