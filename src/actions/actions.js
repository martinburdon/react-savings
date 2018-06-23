import uuid from 'uuid';

export const addIncoming = item => ({
  type: 'ADD_INCOMING',
  item: {
    ...item,
    id: uuid()
  }
});

export const addOutgoing = item => ({
  type: 'ADD_OUTGOING',
  item: {
    ...item,
    id: uuid()
  }
});

export const removeIncoming = id => ({
  type: 'REMOVE_INCOMING',
  id
});

export const removeOutgoing = id => ({
  type: 'REMOVE_OUTGOING',
  id
});

export const editIncoming = item => ({
  type: 'EDIT_INCOMING',
  item
});

export const editOutgoing = item => ({
  type: 'EDIT_OUTGOING',
  item
});
