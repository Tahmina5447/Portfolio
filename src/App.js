
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router';
import './App.css';

function App() {
  return (
    <div >
      <div className=''>
        
        <RouterProvider router={router}></RouterProvider>
      </div>
      
    </div>
  );
}

export default App;
