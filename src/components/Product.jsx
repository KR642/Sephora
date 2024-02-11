import React, { useState } from 'react';


function Product() {
  const [currDeg, setCurrDeg] = useState(0);
  const items = ['A', 'B', 'C','D','E'];
  const numItems = items.length;
  const degStep = 360 / numItems;

  const rotate = (direction) => {
    let newDeg = currDeg;
    if (direction === 'next') {
      newDeg -= degStep;
    } else {
      newDeg += degStep;
    }
    setCurrDeg(newDeg);
  };

  return (
    <div className="container">
      <div className="carousel" style={{
        transform: `rotateY(${currDeg}deg)`,
      }}>
        {items.map((item, index) => (
          <div
            key={index}
            className="item"
            style={{
              transform: `rotateY(${index * degStep}deg) translateZ(250px)`,
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="next" onClick={() => rotate('next')}>Next</div>
      <div className="prev" onClick={() => rotate('prev')}>Prev</div>
    </div>
  );
}

export default Product;
