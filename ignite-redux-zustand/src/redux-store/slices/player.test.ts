import { describe, expect, it } from 'vitest';
import { player as reducer, playerSlice, play, next } from './player';

const initialState = playerSlice.getInitialState()
describe('player slice', () => {
  it('should be able to play', () => {
    const state = reducer(initialState, play([1, 2]))
    
    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(2)
  });

  it('should be able to play next video automatically', () => {
    const state = reducer(initialState, next())
    
    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(0)
  });

  it('should be able to jump to the next module automatically', () => {
    const state = reducer({...initialState, currentLessonIndex: 1}, next())
    
    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(0)
  });

  it('should not update the current module and lesson index if there is no next lesson available', () => {
    const state = reducer({
      ...initialState,
      currentLessonIndex: 1,
      currentModuleIndex: 1
    }, next())
    
    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(1)
  });
});
