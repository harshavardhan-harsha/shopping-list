import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import itemReducer from "./reducers/itemReducer";
const middleware = [thunk];

const store = createStore(itemReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
