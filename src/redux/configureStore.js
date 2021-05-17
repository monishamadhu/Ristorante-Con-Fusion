import { createStore, combineReducers } from 'redux';
//import { Reducer, initialState } from './reducer';
import { Dishes } from './dishes';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import { Comments } from './comments';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );
    return store;
}