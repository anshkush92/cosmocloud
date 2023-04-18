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
      const { items } = state;
      const { id, body, dataType } = action.payload;
      const newRow = {
        id,
        body,
        dataType,
        items: [],
      };

      // Recursive function to find Row by id - Returns the row if found
      const findRowById = (id, items) => {
        for (let i = 0; i < items.length; i++) {
          console.log(
            '🚀 ~ file: fieldNameTypeSlice.js:75 ~ items[i]:',
            items[i].id,
            id
          );
          if (items[i].id === id) {
            return items[i];
          }
          if (items[i].items) {
            const result = findRowById(id, items[i].items);
            if (result) {
              return result;
            }
          }
        }
        return null;
      };

      // Check if parent row exists
      const parentRow = findRowById(id, items);
      console.log(
        '🚀 ~ file: fieldNameTypeSlice.js:75 ~ parentRow:',
        parentRow
      );

      // If parent row exists, add new row to its items otherwise add new row to items
      if (parentRow) {
        parentRow.items = parentRow.items || [];
        parentRow.items.push(newRow);
      } else {
        items.push(newRow);
      }

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
        return false;
      };

      deleteRowById(id, items);
      // const parentRow = state.items.find((item) => item.id === id);
      // console.log(
      //   '🚀 ~ file: fieldNameTypeSlice.js:109 ~ parentRow:',
      //   parentRow
      // );

      // if (parentRow) {
      // }

      console.log('Handle Delete Row', state, action.payload);
    },
  },
});

export const { handleInsertRow, handleEditRow, handleDeleteRow } =
  fieldNameTypeSlice.actions;

export default fieldNameTypeSlice.reducer;
