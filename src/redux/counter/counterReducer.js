import { INCREMENT } from './counterActions';

const initialState = 0;

const reducer = (currentState = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
    return currentState + 1;
    default:
    return currentState;
  }
}
export default reducer;