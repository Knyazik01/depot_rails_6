import React, { useState } from 'react';

import NoPayType from './NoPayType';
import CreditCardPayType from './CreditCardPayType';
import CheckPayType from './CheckPayType';
import PurchaseOrderPayType from './PurchaseOrderPayType';

const payTypeComponentByType = {
  'Credit card': CreditCardPayType,
  'Check': CheckPayType,
  'Purchase order': PurchaseOrderPayType,
};

const PayTypeSelector = () => {
  const [selectedPayType, setSelectedPayType] = useState(null);

  const onPayTypeSelected = (event) => {
    setSelectedPayType(event.target.value);
  };

  const PayTypeDetailsComponent = payTypeComponentByType[selectedPayType] || NoPayType;

  return (
    <div>
      <div className='field'>
        <label htmlFor='order_pay_type'>Pay type</label>
        <select
          id='order_pay_type'
          onChange={onPayTypeSelected}
          name='order[pay_type]'
        >
          <option value=''>Select a payment method</option>
          <option value='Check'>Check</option>
          <option value='Credit card'>Credit card</option>
          <option value='Purchase order'>Purchase order</option>
        </select>
      </div>

      <PayTypeDetailsComponent />
    </div>

  );
};

export default PayTypeSelector;