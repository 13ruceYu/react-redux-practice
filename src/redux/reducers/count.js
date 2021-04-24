import { INCREMENT, DECREMENT } from '../constant'
// 专门负责初始化状态
// 和加工状态
const initState = 1
/**
 * 为 counter 组件创建一个 reducer 函数
 * @param {any} prevState 之前的状态
 * @param {object} action 动作对象
 * @returns 返回值
 */
export default function countReducer (prevState = initState, action) {
  const { type, data } = action
  switch (type) {
    case INCREMENT:
      return prevState + data
    case DECREMENT:
      return prevState - data
    default:
      return prevState
  }
};
