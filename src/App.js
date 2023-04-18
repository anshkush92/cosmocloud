import Row from './components/row/Row';
import AddRow from './components/buttons/AddRow';
import { useSelector } from 'react-redux';

const App = () => {
  const { items } = useSelector((state) => state.fieldNameType);
  console.log('🚀 ~ file: App.js:7 ~ App ~ items:', items);

  return (
    <div className='flex flex-col gap-1 bg-gray-100 rounded-md my-8 mx-auto py-4 w-[48rem]'>
      <div className='flex justify-between group mx-8 px-4 py-2 items-center my-2 hover:bg-gray-200'>
        Field Name and Type
        <AddRow />
      </div>
      {items.map((item, index) => (
        <Row item={item} key={index} index={index + 1} />
      ))}
    </div>
  );
};

export default App;
