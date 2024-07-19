
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from './CartSlice';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div>Total Items: {totalQuantity}</div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
           
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddItem({ id: 'p1', name: 'Product 1', price: 10 })}>Add Product 1</button>
      <button onClick={() => handleAddItem({ id: 'p2', name: 'Product 2', price: 15 })}>Add Product 2</button>
    </div>
  );
};

export default Cart;
