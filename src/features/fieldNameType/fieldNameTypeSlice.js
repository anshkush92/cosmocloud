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
          body: 'name',
          dataType: 'object',
          items: [
            {
              body: 'firstName',
              dataType: 'string',
            },
            {
              body: 'lastName',
              dataType: 'string',
            },
          ],
        },
      ],
    },
    {
      body: 'order',
      dataType: 'string',
    },
    {
      body: 'class',
      dataType: 'boolean',
    },
  ],
};

const fieldNameTypeSlice = createSlice({
  name: 'fieldNameType',
  initialState,
  reducers: {},
});

export default fieldNameTypeSlice.reducer;
