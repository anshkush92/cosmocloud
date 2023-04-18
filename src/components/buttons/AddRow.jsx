import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleInsertRow } from '../../features/fieldNameType/fieldNameTypeSlice';

const AddRow = ({ item }) => {
  const { items } = useSelector((state) => state.fieldNameType);
  console.log('AddRow.jsx: ', item);
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('Add row button clicked');
    dispatch(
      handleInsertRow({
        id: item?.id || items.length + 1,
        body: 'New Field',
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
