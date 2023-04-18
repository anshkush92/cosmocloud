import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { handleInsertRow } from '../../features/fieldNameType/fieldNameTypeSlice';

const AddRow = ({ item }) => {
  const { items } = useSelector((state) => state.fieldNameType);
  // console.log('AddRow.jsx: ', item);
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('Add row button clicked');
    dispatch(
      handleInsertRow({
        parentId: item?.id,
        id: uuidv4(),
        body: 'New Field',
        dataType: 'String',
      })
    );
  };

  return (
    <button
      className='flex items-center justify-center p-2 group-hover:bg-white text-black w-8 h-8 text-4xl'
      onClick={handleClick}
    >
      +
    </button>
  );
};

export default AddRow;
