import React, { useState, useEffect } from 'react';
import OrderForm from './components/OrderForm';
import OrderTable from './components/OrderTable';

const App = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/orders');
      if (response.ok) {
        const data = await response.json();
        setOrders(data);
      } else {
        console.error('Error fetching orders:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Restaurant Order App</h1>
      <OrderForm fetchOrders={fetchOrders} />
      <OrderTable orders={orders} fetchOrders={fetchOrders} />
    </div>
  );
};

export default App;
