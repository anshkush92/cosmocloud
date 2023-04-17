import { useState } from 'react';

import dataTypes from '../../constants/dataTypes';

const DataTypes = ({ currentDataType, changeCurrentDataType }) => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleDropDown = () => {
    setIsHidden((previousState) => !previousState);
  };

  const handleCurrentDataType = (dataType) => {
    changeCurrentDataType(dataType);
    setIsHidden(true);
  };

  return (
    <div className='ml-6 relative'>
      <button
        onClick={toggleDropDown}
        className='bg-gray-200 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center'
        type='button'
      >
        {currentDataType}
        <svg
          className='w-4 h-4 ml-2'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 9l-7 7-7-7'
          ></path>
        </svg>
      </button>
      {/* <!-- Dropdown menu --> */}
      <div
        className={`absolute z-10 ${
          isHidden && 'hidden'
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700`}
      >
        <ul className='py-2 text-sm text-gray-700 dark:text-gray-200'>
          {dataTypes.map((dataType, index) => (
            <li
              key={index}
              className={`block px-4 py-2 ${
                currentDataType === dataType.toUpperCase()
                  ? 'bg-purple-200'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => handleCurrentDataType(dataType)}
            >
              {dataType}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DataTypes;
