import { combineReducers, createStore } from "redux";
import directoriesReducer from "./reducers/directories";

const rootReducer = combineReducers({
  directories: directoriesReducer
});

export default () => {
  const store = createStore(rootReducer);
  return store;
};
