import { combineReducers } from 'redux';
import { finderReducer } from './finderReducer';

const rootReducer = combineReducers({
    finderReducer: finderReducer
});

export default rootReducer;
export type RootReducer = ReturnType<typeof rootReducer>
