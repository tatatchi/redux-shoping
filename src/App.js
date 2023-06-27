import './App.css';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from './features/cart/CartSlice';
import Modal from './components/Modal';

function App() {
  const dispatch = useDispatch();
  const { shopItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [shopItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
