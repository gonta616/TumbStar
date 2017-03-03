import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { itemsReducer } from 'itemsReducer';

export default combineReducers({
    items: itemsReducer,
})
