import { useState } from 'react';
import Loading from './components/Loading';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Loading />
    </div>
  );
}

export default App;
