const initialState = {
  id: 0,
  items: [
    {
      id: 1,
      body: 'person',
      dataType: 'Object',
      items: [
        {
          id: 11,
          body: 'name',
          dataType: 'Object',
          items: [
            {
              id: 111,
              body: 'firstName',
              dataType: 'String',
            },
            {
              id: 112,
              body: 'lastName',
              dataType: 'String',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      body: 'order',
      dataType: 'String',
    },
    {
      id: 3,
      body: 'class',
      dataType: 'Boolean',
    },
  ],
};

export default initialState;
