import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { OrderContext } from '../../context/OrderContext';

const CompletePage = ({ setStep }) => {
  const [orderData, , resetOrderCount] = useContext(OrderContext);
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    orderCompleted();
  }, []);

  const orderCompleted = async () => {
    try {
      const response = await axios.post('http://localhost:4000/order', orderData);
      setOrderHistory(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const orderTable = orderHistory.map((order) => (
    <tr key={order.orderNumber}>
      <td>{order.orderNumber}</td>
      <td>{order.price}</td>
    </tr>
  ));

  return (
    <div>
      <div>
        <tr>
          <th>orderNumber</th>
          <th>price</th>
        </tr>
        {orderTable}
      </div>
      <button
        onClick={() => {
          resetOrderCount();
          setStep(0);
        }}
      >
        돌아가기
      </button>
    </div>
  );
};

export default CompletePage;
