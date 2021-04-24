# hello React Redux

## 1 react-redux basic usage

## 2 complete version

## 3 async action

  安装 `redux-thunk` 模块来辅助实现 async action

  ```bash
  yarn add redux-thunk
  ```

## 4 react-redux

  这是 React 官方出的状态管理模块。

### 4.1 react-redux basic usage

1. UI 组件与容器组件
   * UI 组件：不使用任何 redux 的 api，只负责页面的呈现、交互等；
   * 容器组件：负责和 redux 通信，将结果交给 UI 组件。
2. 容器组件的创建
   使用 react-redux 的 connect 函数。

   ```js
    connect(mapStateToProps, mapDispatchToProps)(UIComponent)

   ```

   * `mapStateToProps`：映射状态，返回值为一个对象；
   * `mapDispatchToProps`：映射操作状态的方法，返回值是一个对象；
3. 备注 1：容器组件中的 store 是靠 props 传递进去，而不是容器组件中直接引入的。
4. 备注 2：mapDispatchToProps，也可以是一个对象。

### 4.2 react-redux optimize

1. 容器组件和 UI 组件整合成一个文件；
2. 无需给容器组件传递 store，直接在 `<App/>` 外包裹 `<Provider store={store} />`；
3. 使用 react-redux 后，无需自己检测 redux 中状态的变化，容器组件可以自动完成这项工作；
4. `mapDispatchToProps` 也可以简写成一个对象；
5. 一个组件要和 redux 沟通需要几步？
   1. 定义 UI 组件；
   2. 引入 `connect` 生成一个容器组件，并暴露：

      ```js
        connect(
          state => ({key: value}), // 映射状态
          {key: xxxAction} // 映射 action
        )(UI 组件)
      ```

   3. 在 UI 组价中通过 `this.props.xxx` 读取和操作状态
