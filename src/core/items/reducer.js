import { List, Record } from 'immutable';

import {
    FETCH_ITEMS,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_ERROR,
    ADD_TAG,
    CHANGE_TAG,
    DELETE_TAG,
    FILTER_ITEMS,
} from './action-types.js';

export const ItemsState = new Record({
    list: new List(),

});

export function itemsReducer(state = new ItemsState(), {payload, type}) {
    switch (type) {
        default:
          return state;
    }
});
