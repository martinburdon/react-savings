import { outs } from 'sample-data.js';
const itemsReducerDefaultState = outs;

export default (state = itemsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_OUTGOING':
      return [
        ...state,
        action.item
      ];
    case 'REMOVE_OUTGOING':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_OUTGOING':
      return state.map(item => {
        if (item.id === action.item.id) {
          return {
            ...item,
            ...action.item
          };
        } else {
          return item;
        }
      })
    default:
      return state;
  }
};
