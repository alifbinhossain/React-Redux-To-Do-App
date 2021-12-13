import { combineReducers, createStore } from "redux";
import listReducer from "./reducers/listReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  list: listReducer,
});
const store = createStore(rootReducer, composeWithDevTools());
export default store;
