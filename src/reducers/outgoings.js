import { outs } from 'sample-data.js';
const itemsReducerDefaultState = outs;

export default (state = itemsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_OUTGOING':
      console.log('ADD_OUTGOING');
      return [
        ...state,
        action.item
      ];
    default:
      return state;
  }
};
