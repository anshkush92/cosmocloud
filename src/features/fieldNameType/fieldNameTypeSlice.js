import { createSlice } from '@reduxjs/toolkit';
import initialState from '../../constants/initialState';

const fieldNameTypeSlice = createSlice({
  name: 'fieldNameType',
  initialState,
  reducers: {
    // Insert new row -- Borking correctly
    handleInsertRow: (state, action) => {
      const { items } = state;
      const { id, body, dataType, parentId } = action.payload;
      const newRow = {
        id,
        body,
        dataType,
        items: [],
      };

      // // Recursive function to find Row by id - Returns the row if found
      const findRowById = (parentId, items) => {
        for (let i = 0; i < items.length; i++) {
          if (items[i].id === parentId) {
            return items[i];
          }
          if (items[i].items) {
            const result = findRowById(parentId, items[i].items);
            if (result) {
              return result;
            }
          }
        }
        return null;
      };

      // Check if parent row exists
      const parentRow = findRowById(parentId, items);

      // If parent row exists, add new row to its items otherwise add new row to items
      if (parentRow) {
        parentRow.items = parentRow.items || [];
        parentRow.items.push(newRow);
      } else {
        items.push(newRow);
      }
    },

    // Edit row -- Borking correctly
    handleEditRow: (state, action) => {
      const { items } = state;
      const { id, body, dataType } = action.payload;

      // Recursive function to find Row by id - Returns row - always found in this case
      const findRowById = (id, items) => {
        for (let i = 0; i < items.length; i++) {
          if (items[i].id === id) {
            if (dataType === 'Object') {
              return (items[i] = { ...items[i], body, dataType });
            } else {
              return (items[i] = { ...items[i], body, dataType, items: [] });
            }
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
      findRowById(id, items);
    },

    // Delete row -- Borking correctly
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
    },
  },
});

export const { handleInsertRow, handleEditRow, handleDeleteRow } =
  fieldNameTypeSlice.actions;

export default fieldNameTypeSlice.reducer;
