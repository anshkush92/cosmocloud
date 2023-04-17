import Row from './components/row/Row';
import AddRow from './components/buttons/AddRow';
import { useSelector } from 'react-redux';

const App = () => {
  const { items } = useSelector((state) => state.fieldNameType);

  return (
    <div className='flex flex-col gap-1'>
      <div className='flex justify-between group mx-8 px-4 py-2 items-center my-10 bg-slate-300'>
        Field Name and Type
        <AddRow />
      </div>
      {items.map((item, index) => (
        <Row item={item} key={index} />
      ))}
    </div>
  );
};

export default App;
