import ReactDOM from "react-dom";
import { Root } from "./Root";
import "./index.css";
import { store } from "./state/Store";
import { counterState } from "./state/CounterState";

const root = document.querySelector("#root");
ReactDOM.render(<Root />, root);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(counterState.actions.increment(5));
store.dispatch(counterState.actions.decrement(2));
store.dispatch(counterState.actions.decrement(6));
store.dispatch(counterState.actions.reset());
