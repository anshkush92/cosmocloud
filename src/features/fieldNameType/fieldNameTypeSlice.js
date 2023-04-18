import { createSlice } from '@reduxjs/toolkit';

// Trying to create data as given in the mock video but in tree format - items se recursion ho raha hai
const initialState = {
  id: 1,
  items: [],
};

const fieldNameTypeSlice = createSlice({
  name: 'fieldNameType',
  initialState,
  reducers: {
    handleInsertRow: (state, action) => {},
    handleDeleteRow: (state, action) => {},
  },
});

export const { handleInsertRow, handleDeleteRow } = fieldNameTypeSlice.actions;

export default fieldNameTypeSlice.reducer;
