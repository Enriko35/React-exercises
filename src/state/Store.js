import { createStore } from "redux";
import {
  counterReducer,
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "./CounterReducer";

export const store = createStore(counterReducer);

store.dispatch(incrementCounter(5));
store.dispatch(decrementCounter(3));
store.dispatch(decrementCounter(6));
store.dispatch(resetCounter());
store.subscribe(() => {
  console.log(store.getState());
});
