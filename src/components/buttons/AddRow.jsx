import React from 'react';
import { useDispatch } from 'react-redux';
import { addFieldNameType } from '../../features/fieldNameType/fieldNameTypeSlice';

const AddRow = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('Add row button clicked');
    dispatch(addFieldNameType({ body: 'Test', dataType: 'number' }));
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
