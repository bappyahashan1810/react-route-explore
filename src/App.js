import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Cart from './Components/Cart/Cart';
import Friends from './Components/Friends/Friends';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        {
          path: '/home', element: <Home></Home>
        },
        {
          path: '/about', element: <About></About>
        },
        {
          path: 'products', element: <Products></Products>
        },
        {
          path: '/cart', element: <Cart></Cart>
        },
        {
          path: '/friends',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users');
          },
          element: <Friends></Friends>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
