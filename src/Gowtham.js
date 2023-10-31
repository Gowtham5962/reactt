import React, { useState } from 'react';

function Gowtham() {
  const [counts1, setCounts1] = useState(0);

  function myFunc() {
    setCounts1(counts1 + 1);
  }

  function myFunc1() {
    setCounts1(counts1 - 1);
  }

  return (
    <>
      <button onClick={myFunc}>Increase</button>
      <span>{counts1}</span>
      <button onClick={myFunc1}>Decrease</button>
    </>
  );
}

export default Gowtham;
