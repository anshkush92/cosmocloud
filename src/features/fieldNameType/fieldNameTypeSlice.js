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

      const deleteRowById = (id, items) => {
        for (let i = 0; i < items.length; i++) {
          if (items[i].id === id) {
            console.log('Found Row', i);
            items.splice(i, 1); // Delete row
            return true; // Return true when row is found and deleted
          }
          if (items[i].items) {
            // Recursively call deleteRowById for nested items
            if (deleteRowById(id, items[i].items)) {
              return true; // Return true if row is found and deleted in nested items
            }
          }
        }
        return false; // Return false if row is not found
      };

      deleteRowById(id, items);

      console.log('Handle Delete Row', state, 'Action.payload', action.payload);
    },
  },
});

export const { handleInsertRow, handleEditRow, handleDeleteRow } =
  fieldNameTypeSlice.actions;

export default fieldNameTypeSlice.reducer;
