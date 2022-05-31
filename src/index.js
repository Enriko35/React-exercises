import "./index.css";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "./state/CounterReducer";
import { store } from "./state/Store";

// const root = document.querySelector("#root");
// ReactDOM.render(<App />, root);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter(5));
store.dispatch(decrementCounter(2));
store.dispatch(decrementCounter(6));
store.dispatch(resetCounter());
