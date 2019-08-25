import {
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
  CLEAR_ITEMS,
  CLEAR_INPUT,
  HANDLE_INPUT,
  HANDLE_MESSAGE,
  CLEAR_MESSAGE,
  HANDLE_EDIT
} from "../actions/types";

const initialState = {
  items: [],
  message: "",
  displayItem: "",
  edit: false,
  current: null
};

const itemReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, payload],
        displayItem: "",
        message: "Item added"
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item, i) => i !== payload),
        message: "item deleted"
      };

    case EDIT_ITEM:
      return {
        ...state,
        items: state.items.map((item, i) => (i === state.current ? state.displayItem : item)),
        current: null,
        edit: false,
        displayItem: "",
        message: "Item updated"
      };
    case CLEAR_ITEMS:
      return {
        ...state,
        items: [],
        message: "",
        displayItem: "",
        edit: false,
        current: null
      };
    case CLEAR_INPUT:
      return {
        ...state,
        displayItem: ""
      };
    case HANDLE_INPUT:
      return {
        ...state,
        displayItem: payload
      };
    case HANDLE_MESSAGE:
      return {
        ...state,
        message: payload
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: ""
      };
    case HANDLE_EDIT:
      return {
        ...state,
        displayItem: payload.item,
        edit: true,
        current: payload.i
      };
    default:
      return state;
  }
};

export default itemReducer;
