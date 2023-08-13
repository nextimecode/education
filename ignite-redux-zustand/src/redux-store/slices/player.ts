import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    course: {
      modules: [
        {
          id: '0',
          title: 'Iniciando com React',
          lessons: [
            { 
              id: 'VdUDlE0ujq',
              title: 'Primeira aula React',
              duration: '09:13'
            }
          ]
        },
        {
          id: '1',
          title: 'Iniciando com Zustand',
          lessons: [
            { 
              id: 'xxx',
              title: 'Primeira aula Zustand',
              duration: '09:13'
            },
            { 
              id: 'yyy',
              title: 'Segunda aula Zustand',
              duration: '09:13'
            }
          ]
        }
      ]
    },
    currentModuleIndex: 0,
    currentLessonIndex: 0,
  },
  reducers: {
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIndex = action.payload[0];
      state.currentLessonIndex = action.payload[1];
    },
    next: (state) => {
      const nextLessonIndex = state.currentLessonIndex + 1;
      const nextLesson = state.course.modules[state.currentModuleIndex].lessons[nextLessonIndex];
      if (nextLesson) {
        state.currentLessonIndex = nextLessonIndex;
      } else {
        const nextModuleIndex = state.currentModuleIndex + 1;
        const nextModule = state.course.modules[nextModuleIndex];
        if (nextModule) {
          state.currentModuleIndex = nextModuleIndex;
          state.currentLessonIndex = 0;
        }
      }
    }      
  }
})

export const player = playerSlice.reducer; 

export const { play, next } = playerSlice.actions;

