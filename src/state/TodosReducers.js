import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const todoReducer = createSlice({
  name: "todos",
  id: nanoid(),
  title: "Fare la spesa",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
    edit: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, ...action.payload.data };
        }
        return todo;
      });
    },
  },
});
