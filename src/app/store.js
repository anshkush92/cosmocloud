import { configureStore } from '@reduxjs/toolkit';
import fieldNameTypeReducer from '../features/fieldNameType/fieldNameTypeSlice';

const store = configureStore({
  reducer: {
    fieldNameType: fieldNameTypeReducer,
  },
});

export default store;
