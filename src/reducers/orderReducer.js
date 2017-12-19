import { CHANGE_ORDER, ASC, DSC} from '../actions';
const INITIAL_STATE = 'asc';



export default function ( state = INITIAL_STATE, action) {  
  switch (action.type) {
    case CHANGE_ORDER :
      return (state===ASC) ? DSC : ASC;

    default:    
      return state;
  }
}