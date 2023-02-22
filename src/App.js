import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import APIExamples from './components/APIExamples/APIExamples';
import SimpleInput from './components/Forms/SimpleInput';

// const router = createBrowserRouter([
//   {
//     path: '/', element: <Header />
//   },
//   { path: '/apiexamples', element: <APIExamples />},
//   { path: '/forms', element: <SimpleInput />}
// ])


function App() {
  let [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown = true;
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    // <RouterProvider router={router}>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </CartProvider>
    // </RouterProvider>
  );
}

export default App;
