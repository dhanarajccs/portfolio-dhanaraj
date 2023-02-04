import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';

function App() {
  return (
    <div className="w-[1440px] m-auto">
      <RouterProvider router={router} />     
    </div>
  );
}

export default App; 