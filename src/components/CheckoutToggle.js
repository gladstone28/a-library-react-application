import React, { useState } from 'react';

function CheckoutToggle({ media }) {
  const [checkedOut, setCheckedOut] = useState(media.isCheckedOut);

  const toggleStatus = () => {
    // Update the isCheckedOut property directly
    media.isCheckedOut = !media.isCheckedOut;
    setCheckedOut(media.isCheckedOut);  // Update the component state to reflect the change
  };

  return (
    <button onClick={toggleStatus}>
      {checkedOut ? 'Return' : 'Checkout'}
    </button>
  );
}

export default CheckoutToggle;
