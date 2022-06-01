import { combineReducers, createStore } from "redux";
import { counterState } from "./CounterState";

import { todoReducer } from "./TodosReducers";

const rootReducer = combineReducers({
  counter: counterState.reducer,

  todos: todoReducer.reducer,
});

export const store = createStore(rootReducer);
