import React, { useContext, useEffect } from 'react';
import ItemsContext from '../../context/items/itemsContext';
import Preloader from '../layout/Preloader';
import Cartitem from './Cartitem';
const AvailableItems = () => {
  const itemsContext = useContext(ItemsContext);
  const { items, getItems, loading, cartItems } = itemsContext;
  useEffect(() => {
    getItems();
  }, []);

  if (items === null || loading) {
    return (
      <div className="center">
        <Preloader />
      </div>
    );
  } else {
    return (
      <div>
        <table className="striped highlight">
          <thead>
            <tr>
              <th>Groceries</th>
            </tr>
          </thead>
          <tbody>
            {items !== [] || !loading ? (
              items.map((item) => <Cartitem key={item.id} item={item} />)
            ) : (
              <tr>
                <td>Add a item</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
};

export default AvailableItems;
