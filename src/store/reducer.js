import { INCREMENT, DECREMENT, RESET } from "./action";
const initialState1 = {
  count: 0
};
export const countReducer = (state = initialState1, action) => {
  console.log('reducer', state, action);
  switch(action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
        
      };
    case DECREMENT:
      return {
        count: state.count - 1
      };
    case RESET:
      return {
        count: 0
      };
    default:
      return state;
  }
}


