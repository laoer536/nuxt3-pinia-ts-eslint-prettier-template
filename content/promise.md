---
title: '异步promise'
description: 'this page use for testing md format to HTML'
---

> 关于 Promise 的一些探索以及总结

#### Promise 异步

```javascript
Promise.resolve(20).then((res) => {
  console.log(res)
})
console.log('acb') // 结果   acb  20
```

#### then 回调中的返回值

```javascript
function promise() {
  return new Promise((resolve, reject) => {
    console.log('开始执行')
    setTimeout(() => {
      resolve(Promise.resolve(20))
    }, 2000)
  })
}

promise()
  .then((res) => {
    console.log('两秒后执行')
    console.log(res)
    return res + 1
    //整个then相当于返回Promise.resolve(res+1)
    //如果是返回一个Promise同理 resolve了一个Promise
    //那么会先解开这个Promise 再下一步
  })
  .then((res2) => {
    console.log(res2)
  })

// 结果：
// 开始执行
// 两秒后执行
// 20
// 21
```

#### 多个 Promise 问题

> 先声明 4 个 promise

```javascript
function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Promise.resolve('promise1---3s'))
    }, 3000)
  })
}

function promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Promise.resolve('promise2--2s'))
    }, 2000)
  })
}

function promise3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('promise3 发生reject')
    }, 500)
  })
}

function promise4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise4--1s')
    }, 1000)
  })
}
```

顺序执行问题

```javascript
// 顺序执行  ok 正常工作
async function order() {
  for (let promise of [promise4, promise1, promise2]) {
    console.log(promise)
    console.log(await promise())
  }
}

order().catch((err) => {
  console.log('发生err，err信息', err)
})
//结果
// [Function: promise4]
// promise4--1s
// [Function: promise1]
// promise1---3s
// [Function: promise2]
// promise2--2s
```

顺序执行的 promise 列表里有 reject 的 promise

```javascript
// 顺序执行 兼容列表里面有拒绝发生错误的情况  问题：若有一个发生拒绝 那么其后面执行的promise都会被阻断
async function order() {
  for (let promise of [promise3, promise1, promise2]) {
    console.log(promise)
    console.log(await promise().catch((err) => Promise.reject(err)))
  }
}

order().catch((err) => {
  console.log('发生err，err信息', err)
})
```
