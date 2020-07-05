import { createSlice } from '@reduxjs/toolkit';

var initialTodos = [];
initialTodos = localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) : [];

const todo = createSlice({
  name: 'todos',
  initialState: initialTodos,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("todoData", JSON.stringify(state))
    },
    removeTodo: (state, action) => {
      const removeTodoId = action.payload;
      const newState = state.filter( todo => todo.id !== removeTodoId );
      localStorage.setItem("todoData", JSON.stringify(newState));
      return newState;
    },
    toggleStatus(state, action) {
      const removeTodoId = action.payload;
      const todo = state.find(todo => todo.id === removeTodoId)
      if (todo) {
        todo.status = !todo.status
        localStorage.setItem("todoData", JSON.stringify(state));
      }
    },
    updateTodo: (state, action) => {
      const newTodo = action.payload.id;
      const todoIndex = state.findIndex(todo => todo.id === newTodo.id);
      if (todoIndex >= 0) {
        state[todoIndex] = newTodo;
        localStorage.setItem("todoData", JSON.stringify(state));
      }
    }
  }
});

const { reducer, actions } = todo;
export const { addTodo,removeTodo,toggleStatus,updateTodo } = actions;
export default reducer;