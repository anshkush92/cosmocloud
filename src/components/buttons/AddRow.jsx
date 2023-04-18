import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { handleInsertRow } from '../../features/fieldNameType/fieldNameTypeSlice';

const AddRow = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      handleInsertRow({
        parentId: item?.id,
        id: uuidv4(),
        body: 'addName',
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
