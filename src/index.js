import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import reducers from "./reducers";
import Butikler from "./components/butikler";
import ButikProductList from "./components/butikProductList";
import productDetails from "./components/productDetails";



const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/butik/:id" component={ButikProductList} />
          <Route path="/products/:id" component={productDetails} />          
          <Route path="/" component={Butikler} /> 
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
