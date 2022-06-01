import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { counterState } from "./CounterState";
import { todoReducer } from "./TodosReducers";

const rootReducer = combineReducers({
  counter: counterState.reducer,
  todos: todoReducer.reducer,
});

export const store = configureStore({ reducer: rootReducer });
