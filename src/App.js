import Row from './components/row/Row';

import { useSelector } from 'react-redux';

const App = () => {
  const { items } = useSelector((state) => state.fieldNameType);

  return (
    <div className='flex flex-col gap-1'>
      {items.map((item, index) => (
        <Row item={item} key={index} />
      ))}
    </div>
  );
};

export default App;
