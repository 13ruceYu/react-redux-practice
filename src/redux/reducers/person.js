// reducer 负责：1.初始化状态；2.操作状态
import { ADD_PERSON } from '../constant'
const initState = [{ id: '001', name: 'whh', age: 18 }]
export default function personReducer (prevState = initState, newData) {
  const { type, data } = newData;
  switch (type) {
    case ADD_PERSON:
      return [data, ...prevState]
    default:
      return prevState;
  }
};
