import React, { createContext, useState } from 'react';
import ItemsContext from '../../context/items/itemsContext';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddItemModal = () => {
  const itemsContext = createContext(ItemsContext);
  const { addItems } = itemsContext;
  const [name, setName] = useState('');
  const addItemTo = async () => {
    // e.preventDefault();
    if (name === '') {
      M.toast({ html: 'Please enter a message and a tech' });
    } else {
      const newItem = {
        name,
        count: 0,
      };
      console.log(newItem);
      // addItems(newItem);
      await fetch(`http://localhost:5000/items/`, {
        method: 'POST',
        body: JSON.stringify(newItem),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      M.toast({ html: 'New item added' });
      setName('');
    }
  };
  return (
    <div id="add-item-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Add Item</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="modal-fotter" style={{ paddingLeft: '20px' }}>
            <a
              href="/"
              onClick={addItemTo}
              className="modal-close waves-effect black waves-light btn"
            >
              Enter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%',
};

export default AddItemModal;
