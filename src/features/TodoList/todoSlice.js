import { createSlice } from '@reduxjs/toolkit';

var initialTodos = [];
// console.log(localStorage.getItem("todoData"));
initialTodos = localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) : [];

const todo = createSlice({
  name: 'todos',
  initialState: initialTodos,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("todoData", JSON.stringify(state))
    },
    // removePhoto: (state, action) => {
    //   console.log(action.payload);
    //   const removePhotoId = action.payload;
    //   return state.filter(photo => photo.id !== removePhotoId);
    // },
    // updatePhoto: (state, action) => {
    //   const newPhoto = action.payload;
    //   const photoIndex = state.findIndex(photo => photo.id === newPhoto.id);

    //   if (photoIndex >= 0) {
    //     state[photoIndex] = newPhoto;
    //   }
    // }
  }
});

const { reducer, actions } = todo;
// export const { addPhoto, removePhoto, updatePhoto } = actions;
export const { addTodo } = actions;
export default reducer;