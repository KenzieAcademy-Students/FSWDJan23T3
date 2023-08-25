import React from "react";

const ReorderModal = ({ order }) => {
  return (
    <div>
      {order.items.map((item) => (
        <div key={item._id}>
          <img src={item.productImage} alt={item.name} />
          <div>
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReorderModal;
