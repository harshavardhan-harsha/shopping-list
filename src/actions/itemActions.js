import { ADD_ITEM, EDIT_ITEM, HANDLE_EDIT, DELETE_ITEM, CLEAR_ITEMS, CLEAR_INPUT, HANDLE_MESSAGE, CLEAR_MESSAGE, HANDLE_INPUT } from "./types";

// Add item
export const addItem = item => dispatch => {
  dispatch({
    type: ADD_ITEM,
    payload: item
  });
  setTimeout(() => {
    dispatch({
      type: CLEAR_MESSAGE
    });
  }, 3000);
};

// Remove item
export const deleteItem = deleteItemIndex => dispatch => {
  dispatch({
    type: DELETE_ITEM,
    payload: deleteItemIndex
  });
  setTimeout(() => {
    dispatch({
      type: CLEAR_MESSAGE
    });
  }, 3000);
};

// Edit item
export const editItem = () => dispatch => {
  dispatch({
    type: EDIT_ITEM
  });
  setTimeout(() => {
    dispatch({
      type: CLEAR_MESSAGE
    });
  }, 3000);
};

// Handle edit
export const handleEdit = (item, i) => dispatch => {
  dispatch({
    type: HANDLE_EDIT,
    payload: { item, i }
  });
};

// Clear input
export const clearInput = () => dispatch => {
  dispatch({
    type: CLEAR_INPUT
  });
};

// Clear Items
export const clearItems = () => dispatch => {
  dispatch({
    type: CLEAR_ITEMS
  });
};

// Handle message
export const handleMessage = message => dispatch => {
  dispatch({
    type: HANDLE_MESSAGE,
    payload: message
  });
  setTimeout(() => {
    dispatch({
      type: CLEAR_MESSAGE
    });
  }, 3000);
};

export const clearMessage = () => dispatch => {
  dispatch({
    type: CLEAR_MESSAGE
  });
};

export const handleInput = input => dispatch => {
  dispatch({
    type: HANDLE_INPUT,
    payload: input
  });
};
