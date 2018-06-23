import { ins } from 'sample-data.js';
const itemsReducerDefaultState = ins;

export default (state = itemsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_INCOMING':
      console.log('ADD_INCOMING');
      return [
        ...state,
        action.item
      ];
    default:
      return state;
  }
};
