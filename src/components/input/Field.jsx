import { useState } from 'react';

const Field = () => {
  const [value, setValue] = useState('Test');

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log('Input Form changed, current value :', event.target.value);
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
        className='h-9 px-3 py-1 rounded-lg bg-gray-100 focus:bg-white focus:outline-none'
        type='text'
        value={value}
        onChange={(event) => handleChange(event)}
        onKeyDown={(event) => handleBlur(event)}
      />
    </label>
  );
};

export default Field;
