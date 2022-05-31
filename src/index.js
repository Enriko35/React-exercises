import { store } from "./state/Store";
import { todoReducer } from "./state/TodosReducers";
import { counterState } from "./state/CounterState";
import { nanoid } from "nanoid";

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(
  todoReducer.actions.add({
    id: nanoid(),
    title: "Fare la spesa",
    completed: true,
  })
);
store.dispatch(
  todoReducer.actions.add({
    id: nanoid(),
    title: "Annaffiare le piante",
    completed: true,
  })
);
store.dispatch(
  todoReducer.actions.remove({
    id: nanoid(),
    title: "Mangiare",
    completed: false,
  })
);

store.dispatch(counterState.actions.increment(5));
store.dispatch(counterState.actions.decrement(2));
store.dispatch(counterState.actions.decrement(6));
store.dispatch(todoReducer.actions.edit(1, { name: "Erik" }));
store.dispatch(counterState.actions.reset());
