import { INCREMENT, DECREMENT } from './constant'

function incrementCount (data) {
  return { type: INCREMENT, data }
}

function decrementCount (data) {
  return { type: DECREMENT, data }
}

function incrementCountAsync (data, time) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(incrementCount(data))
    }, time)
  }
}

export { incrementCount, decrementCount, incrementCountAsync }