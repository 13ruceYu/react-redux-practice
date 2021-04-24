import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux' // 承包所有容器组件的 store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// 当使用 react-redux 之后，就不需要 store.subscribe 检测了，在容器组件内检测了
// store.subscribe(() => {
//   ReactDOM.render(<App></App>, document.getElementById('root'))
// })