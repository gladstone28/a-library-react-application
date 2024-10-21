import React, { useState } from 'react';

function CheckoutToggle({ media }) {
  const [checkedOut, setCheckedOut] = useState(media.isCheckedOut);

  const toggleStatus = () => {
    media.toggleCheckOutStatus();
    setCheckedOut(!checkedOut);
  };

  return (
    <button onClick={toggleStatus}>
      {checkedOut ? 'Return' : 'Checkout'}
    </button>
  );
}

export default CheckoutToggle;
