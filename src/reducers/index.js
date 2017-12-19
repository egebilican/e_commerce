import { combineReducers } from 'redux';
import ButikReducer from './butikReducer';
import ProductReducer from './productReducer';
import OrderReducer from './orderReducer';
import { reducer as formReducer } from 'redux-form';



const rootReducer = combineReducers({
  butiks: ButikReducer,
  products: ProductReducer,
  order: OrderReducer,
  form: formReducer
});

export default rootReducer;
