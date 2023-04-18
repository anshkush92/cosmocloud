import { useState } from 'react';

import AddRow from '../buttons/AddRow';
import DeleteRow from '../buttons/DeleteRow';
import Toggle from '../toggle/Toggle';
import DataTypes from '../dropdown/DataTypes';
import Field from '../input/Field';

import { useDispatch } from 'react-redux';
import {
  handleInsertRow,
  handleEditRow,
  handleDeleteRow,
} from '../../features/fieldNameType/fieldNameTypeSlice';

import dataTypes from '../../constants/dataTypes';

const Row = ({ item }) => {
  console.log('Row.jsx: ', item);
  const dispatch = useDispatch();
  const { body, dataType, items } = item;

  const [currentDataType, setCurrentDataType] = useState(
    dataType.toUpperCase()
  );

  const changeCurrentDataType = (dataType) => {
    setCurrentDataType(dataType.toUpperCase());
  };

  return (
    <>
      {console.log('App.jsx start')}
      <div className='flex bg-gray-100 group hover:bg-gray-200 mx-8 p-4 border-b-2 border-gray-300 gap-4 items-center justify-between'>
        <div className='flex'>
          <Field body={body} />
          <DataTypes
            changeCurrentDataType={changeCurrentDataType}
            currentDataType={currentDataType}
          />
        </div>
        <div className='items-center hidden gap-4 group-hover:flex'>
          <Toggle item={item} />
          {currentDataType === dataTypes[3].toUpperCase() && (
            <AddRow item={item} />
          )}
          <DeleteRow item={item} />
        </div>
      </div>

      {console.log('App.jsx middle')}
      <div className='pl-12 mt-2'>
        {items?.map((item, index) => (
          <Row item={item} key={index} />
        ))}
      </div>
      {console.log('App.jsx end')}
    </>
  );
};

export default Row;
