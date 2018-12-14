import dom from './virtualDom'
const app = document.querySelector('#app')
let child = null

// 点击了首页
document.querySelector('.btn1').addEventListener('click', () => {
  (async () => {
    const home = () => import('./home')
    const html = (await home()).default
    if (child) {
      dom.updateElement(app, html, child)
    } else {
      app.appendChild(dom.createElement(html))
    }
    child = html
  })()
})

// 点击了router1
document.querySelector('.btn2').addEventListener('click', () => {
  (async () => {
    const router1 = () => import('./router1')
    const html = (await router1()).default
    dom.updateElement(app, html, child)
    child = html
  })()
})

// 点击了router2
document.querySelector('.btn3').addEventListener('click', () => {
  (async () => {
    const router2 = () => import('./router2')
    const html = (await router2()).default
    dom.updateElement(app, html, child)
    child = html
  })()
})

// 默认点击了首页
document.querySelector('.btn1').click()

if (module.hot) {
  module.hot.accept()
}