import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../redux/reducer.js';

const store = configureStore({
  reducer: {
    data: dataReducer,
  }
});

export default store;