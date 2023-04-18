import { createSlice } from '@reduxjs/toolkit';

// Trying to create data as given in the mock video but in tree format - items se recursion ho raha hai
const initialState = {
  id: 0,
  items: [
    {
      id: 1,
      body: 'person',
      dataType: 'object',
      items: [
        {
          id: 1,
          body: 'name',
          dataType: 'object',
          items: [
            {
              id: 1,
              body: 'firstName',
              dataType: 'string',
            },
            {
              id: 1,
              body: 'lastName',
              dataType: 'string',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      body: 'order',
      dataType: 'string',
    },
    {
      id: 3,
      body: 'class',
      dataType: 'boolean',
    },
  ],
};

const fieldNameTypeSlice = createSlice({
  name: 'fieldNameType',
  initialState,
  reducers: {
    handleInsertRow: (state, action) => {
      console.log('Handle Insert Row', state, action.payload);
    },
    handleEditRow: (state, action) => {
      console.log('Handle Edit Row', state, action.payload);
    },
    handleDeleteRow: (state, action) => {
      console.log('Handle Delete Row', state, action.payload);
    },
  },
});

export const { handleInsertRow, handleEditRow, handleDeleteRow } =
  fieldNameTypeSlice.actions;

export default fieldNameTypeSlice.reducer;
