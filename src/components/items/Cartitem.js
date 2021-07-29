import React, { useContext, useState } from 'react';
import ItemsContext from '../../context/items/itemsContext';

const Cartitem = ({ item }) => {
  const itemsContext = useContext(ItemsContext);
  const { setCount } = itemsContext;

  const addCount = (e) => {
    e.preventDefault();
    item.count += 1;
    const newCount = {
      name: item.name,
      id: item.id,
      count: item.count,
    };
    console.log(newCount);
    setCount(newCount);
  };

  return (
    <tr>
      <td>
        <button
          onClick={addCount}
          style={{
            border: 'none',
            backgroundColor: 'transparent',
            paddingTop: '5px',
            cursor: 'pointer',
          }}
        >
          <i className="tiny material-icons">add_box</i>
        </button>{' '}
        <span>{item.name}</span>
      </td>
    </tr>
  );
};

export default Cartitem;
