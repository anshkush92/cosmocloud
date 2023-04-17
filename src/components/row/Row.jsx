import AddRow from '../buttons/AddRow';
import DeleteRow from '../buttons/DeleteRow';
import Toggle from '../toggle/Toggle';
import DataTypes from '../dropdown/DataTypes';
import Field from '../input/Field';

const Row = () => {
  return (
    <div className='flex bg-gray-100 group hover:bg-gray-200 mx-8 my-4 p-4 border-b border-gray-500 gap-4 items-center justify-between'>
      <div className='flex'>
        <Field />
        <DataTypes />
      </div>
      <div className='items-center hidden gap-4 group-hover:flex'>
        <Toggle />
        <AddRow />
        <DeleteRow />
      </div>
    </div>
  );
};

export default Row;
