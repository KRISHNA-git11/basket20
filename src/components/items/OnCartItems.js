import React, { useContext, useEffect } from 'react';
import ItemsContext from '../../context/items/itemsContext';
import OnCartList from './OnCartList';

const OnCartItems = () => {
  const itemsContext = useContext(ItemsContext);
  const { getCartItems, cartItems, items, clearItems } = itemsContext;
  useEffect(() => {
    getCartItems();
  }, [items]);
  const clearAll = (e) => {
    e.preventDefault();
    clearItems();
  };
  return (
    <div>
      <table className="striped highlight">
        <thead>
          <tr>
            <th>Basket</th>
            <th>Qty</th>
            <th>
              <button style={btnStyle} onClick={clearAll}>
                Clear All
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {cartItems !== null ? (
            cartItems.map((item) => <OnCartList key={item.id} item={item} />)
          ) : (
            <tr>
              <th>Add Items</th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
const btnStyle = {
  border: 'none',
};
export default OnCartItems;
