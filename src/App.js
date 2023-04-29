import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Component/Router/Route';
import { useEffect, useState } from 'react';
import Loading from './Component/Loading/Loading';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <RouterProvider router={router}></RouterProvider>
      )}
    </div>
  );
}

export default App;
