import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { cartLists, deliveryTypes } from './data';
import Cart from './Pages/Cart';

function Routes() {
  const [flowers, setFlowers] = useState(cartLists);

  const filterItem = idx => {
    setFlowers(
      flowers.filter((_, i) => {
        return i !== idx;
      })
    );
  };

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/cart"
          component={() => (
            <Cart
              flowers={flowers}
              deliveryTypes={deliveryTypes}
              filterItem={filterItem}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

export default Routes;
