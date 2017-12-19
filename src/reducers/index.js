import { combineReducers } from 'redux';
import ButikReducer from './butikReducer';
import ProductReducer from './productReducer';
import OrderReducer from './orderReducer';


const rootReducer = combineReducers({
  butiks: ButikReducer,
  products: ProductReducer,
  order: OrderReducer
});

export default rootReducer;
