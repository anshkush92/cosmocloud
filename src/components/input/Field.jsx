import { useDispatch } from 'react-redux';
import { handleEditRow } from '../../features/fieldNameType/fieldNameTypeSlice';

const Field = ({ item }) => {
  const dispatch = useDispatch();
  const { body } = item;

  const handleChange = (event) => {
    dispatch(handleEditRow({ ...item, body: event.target.value }));
  };

  const handleBlur = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log('Input Form Blurred');
      event.target.blur();
    }
  };

  return (
    <label className='group-hover:bg-gray-200'>
      <input
        className='h-9 w-40 truncate px-2 py-1 rounded-lg bg-gray-100 focus:bg-white focus:outline-none'
        type='text'
        value={body}
        onChange={(event) => handleChange(event)}
        onKeyDown={(event) => handleBlur(event)}
      />
    </label>
  );
};

export default Field;
