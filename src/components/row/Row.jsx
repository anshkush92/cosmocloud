import AddRow from '../buttons/AddRow';
import DeleteRow from '../buttons/DeleteRow';
import Toggle from '../toggle/Toggle';
import DataTypes from '../dropdown/DataTypes';
import Field from '../input/Field';

import dataTypes from '../../constants/dataTypes';

const Row = ({ item, index }) => {
  const { dataType: currentDataType, items } = item;

  return (
    <>
      <div className='flex bg-gray-100 group hover:bg-gray-200 mx-8 p-2 border-b-2 border-gray-300 gap-4 items-center justify-between'>
        <div className='flex items-center'>
          {index && <div className='text-gray-500 text-lg mr-3'>{index}. </div>}
          <Field item={item} />
          <DataTypes item={item} />
        </div>
        <div className='items-center hidden gap-4 group-hover:flex'>
          <Toggle item={item} />
          {currentDataType.toUpperCase() === dataTypes[3].toUpperCase() && (
            <AddRow item={item} />
          )}
          <DeleteRow item={item} />
        </div>
      </div>
      <div className='pl-8 mt-2'>
        {items?.map((item, index) => (
          <Row item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default Row;
