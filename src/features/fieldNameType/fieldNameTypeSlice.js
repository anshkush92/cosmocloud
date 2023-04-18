import { createSlice } from '@reduxjs/toolkit';

// Trying to create data as given in the mock video but in tree format - items se recursion ho raha hai
const initialState = {
  id: 1,
  items: [
    {
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
    addFieldNameType: (state, action) => {
      console.log('action.payload', action.payload);
      state.items.push(action.payload);
    },
  },
});

export const { addFieldNameType } = fieldNameTypeSlice.actions;

export default fieldNameTypeSlice.reducer;
