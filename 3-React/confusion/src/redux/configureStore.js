import { createStore, combineReducers } from 'redux';
import { Dishes } from './reducer-dishes';
import { Comments } from './reducer-comments';
import { Leaders } from './reducer-leaders';
import { Promotions } from './reducer-promotions';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions
        })
    );

    return store;
}