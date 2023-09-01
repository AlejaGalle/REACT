import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    completed: false,
    description: "This is a task",
    imageUrl: "https://s1.ppllstatics.com/lasprovincias/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-624x385@Las%20Provincias.jpg",
    date:"31/08/2023",
  },
  {
    id: "2",
    title: "Task 2",
    completed: false,
    description: "Estudiar React",
    imageUrl: "https://blog.digital-pineapple.com.mx/wp-content/uploads/2021/01/0_oZLL-N4dGNlBe4Oh.png",
    date:"01/09/2023",
  },
];

const userSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, title, description,date,imageUrl } = action.payload;
      const foundTask = state.find((task) => task.id === id);
      if (foundTask) {
        foundTask.title = title;
        foundTask.description = description;
        foundTask.date=date;
        foundTask.imageUrl=imageUrl;
      }
    },
    deleteTask: (state, action) => {
      const foundTask = state.find((task) => task.id === action.payload);
      if (foundTask) {
        state.splice(state.indexOf(foundTask), 1);
      }
    },
  },
});

export const { addTask, editTask, deleteTask } = userSlice.actions;
export default userSlice.reducer;
