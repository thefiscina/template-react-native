import { createStore } from "redux";

import rootReducer from "../store/rootReducer";

const createAppropriateStore = __DEV__ ? createStore : createStore;

const store = createAppropriateStore(
  rootReducer
);

export default store;
