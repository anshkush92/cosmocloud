import React from 'react';
import { useDispatch } from 'react-redux';

const AddRow = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('Add row button clicked');
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
