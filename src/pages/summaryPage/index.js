import React, { useContext, useState } from 'react';
import { OrderContext } from '../../context/OrderContext';
const SummaryPage = ({ setStep }) => {
  const [orderData] = useContext(OrderContext);
  const [checked, setChecked] = useState(false);

  const productsArray = Array.from(orderData.products);

  const hasOptions = orderData.options.size > 0;
  let optionsDisplay = null;
  if (hasOptions) {
    const optionsArray = Array.from(orderData.options.keys());
    console.log('옵션', optionsArray);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const productList = productsArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  return (
    <div>
      <h1>주문 확인</h1>
      <h2>여행 상품:{orderData.totals.products} </h2>
      <ul>{productList}</ul>
      {optionsDisplay}
      <form onSubmit={handleSubmit}>
        <input id="confirm-checkbox" type="checkbox" onChange={(e) => setChecked(e.target.checked)} />
        <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요?</label>
        <br />
        <button type="submit" disabled={!checked}>
          주문 확인
        </button>
      </form>
    </div>
  );
};

export default SummaryPage;
