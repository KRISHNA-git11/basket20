import React, { useContext } from 'react';
import ItemsContext from '../../context/items/itemsContext';

const OnCartList = ({ item }) => {
  const itemsContext = useContext(ItemsContext);
  const { setCount } = itemsContext;
  const clearCount = (e) => {
    e.preventDefault();
    item.count -= 1;
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
      <td>{item.name}</td>
      <td>{item.count}</td>
      <td>
        <button
          onClick={clearCount}
          style={{
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            paddingTop: '5px',
          }}
        >
          <i className="tiny material-icons">remove_circle</i>
        </button>
      </td>
    </tr>
  );
};

export default OnCartList;
