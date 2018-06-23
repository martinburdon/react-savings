import { ins } from 'sample-data.js';
const itemsReducerDefaultState = ins;

export default (state = itemsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_INCOMING':
      return [
        ...state,
        action.item
      ];
    case 'REMOVE_INCOMING':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_INCOMING':
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
