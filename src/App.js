import { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { cartActions } from './store/CartSlicer';
import { interfaceActions } from './store/InterfaceSlicer';

let isInitial = true;

function App() {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  
  const cartIsVisible = useSelector(state => state.interface.cartIsVisible); 

  const notification = useSelector(state => state.interface.notification);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://react-cart-kalnin-default-rtdb.firebaseio.com/cart.json');

      if (!response.ok) {
        throw new Error('Failed to Get Data');;
      }

      const data = await response.json();

      return data;
    }

    const cartData = async () => {
      try {
        const data = await getData();
        dispatch(cartActions.loadCart(data));
      } catch (error) {
          dispatch(interfaceActions.setNotification({
            status: 'Error',
            title: 'Error',
            message: 'Cart Data Could Not Be Loaded',
          }));
      }
    }

    getData().then(value=>{
      if (value.filled === true) {
        cartData();
      }
    })

  }, [dispatch, cart.filled])

  useEffect(() => {
    const putData = async () => {
      dispatch(interfaceActions.setNotification({
        status: 'Pending',
        title: 'Peding',
        message: 'Pending Data Cart',
      }))

      const response = await fetch('https://react-cart-kalnin-default-rtdb.firebaseio.com/cart.json', {
        method:'PUT', 
        body: JSON.stringify(cart),
      })

      if (!response.ok) {
        throw new Error('Something went wrong!')
      }

      dispatch(interfaceActions.setNotification({
        status: 'Success',
        title: 'Success',
        message: 'Cart Data Sent Successfully!',
      }));
    }

    if (isInitial) {
      isInitial = false;
      return;
    }

      putData().catch((error) => {
        dispatch(interfaceActions.setNotification({
          status: 'Error',
          title: 'Error',
          message: 'Cart Data Could Not Be Sent',
          }));
        });

  }, [cart, dispatch])

  return (
    <Fragment>
      {notification && <Notification 
      status={notification.status}
      title={notification.title}
      message={notification.message}
      />}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
