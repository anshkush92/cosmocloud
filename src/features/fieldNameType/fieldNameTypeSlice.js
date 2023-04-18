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
          id: 11,
          body: 'name',
          dataType: 'object',
          items: [
            {
              id: 111,
              body: 'firstName',
              dataType: 'string',
            },
            {
              id: 112,
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
      const { items } = state;
      const { id } = action.payload;

      // Recursive function to delete row by id
      const deleteRowById = (id, items) => {
        for (let i = 0; i < items.length; i++) {
          if (items[i].id === id) {
            items.splice(i, 1);
            return;
          }
          if (items[i].items) {
            deleteRowById(id, items[i].items);
          }
        }
      };

      deleteRowById(id, items);
      console.log('Handle Delete Row', state, action.payload);
    },
  },
});

export const { handleInsertRow, handleEditRow, handleDeleteRow } =
  fieldNameTypeSlice.actions;

export default fieldNameTypeSlice.reducer;
