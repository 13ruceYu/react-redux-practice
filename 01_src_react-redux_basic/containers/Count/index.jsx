//引入Count的UI组件
import CountUI from '../../components/Count'
//引入action
import {
  incrementCount,
  decrementCount,
  incrementCountAsync
} from '../../redux/count_action'

//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

/**
 * 映射状态
 * @param {any} state 
 * @returns {Objeact}
 */
function mapStateToProps (state) {
  return { count: state }
}

/**
 * 映射操作状态的方法
 * @param {*} dispatch 
 * @returns {Object} object 中的 key，value 作为传递给 UI 组件 props 的 key，value
 */
function mapDispatchToProps (dispatch) {
  return {
    jia: number => dispatch(incrementCount(number)),
    jian: number => dispatch(decrementCount(number)),
    jiaAsync: (number, time) => dispatch(incrementCountAsync(number, time)),
  }
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

