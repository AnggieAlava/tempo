import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import axios from 'axios';

function App() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/tasks').then((res) => {
      console.table(res.data);
    });
  }, []);
  return (
    <div>
      <Loading />
    </div>
  );
}

export default App;
