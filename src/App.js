import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Fragment, useEffect } from 'react';
import Head from './components/layout/Head';
import AvailableItems from './components/items/AvailableItems';
import ItemsState from './context/items/ItemsState';
import OnCartItems from './components/items/OnCartItems';
import AddBtn from './components/layout/AddBtn';
import AddItemModal from './components/items/AddItemModal';

const App = () => {
  useEffect(() => {
    // Auto initialization of materialize
    M.AutoInit();
  });
  return (
    // <Form />
    <ItemsState>
      <Fragment>
        <Head />
        <div className="container row">
          <div className="col s5">
            <AvailableItems />
          </div>
          <div className="col s5" style={{ marginLeft: '90px' }}>
            <OnCartItems />
          </div>
        </div>
        <AddBtn />
        <AddItemModal />
      </Fragment>
    </ItemsState>
  );
};

export default App;
