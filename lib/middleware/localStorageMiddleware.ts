import { Middleware } from '@reduxjs/toolkit';

export const localStorageMiddleware: Middleware =
  (storeAPI) => (next) => (action) => {
    const result = next(action);
    const state = storeAPI.getState();

    try {
      const serializedState = JSON.stringify(state.movies);
      localStorage.setItem('moviesState', serializedState);
    } catch (error) {
      console.error('Could not save state to localStorage', error);
    }

    return result;
  };
