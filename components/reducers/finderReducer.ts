//Types
import {
    GET_REPOS,
    SET_FILTERTEXT
} from '../types';

//States
import {
    initialState,
    InitialState
} from '../states/states';

import {
    GetReposAction,
    SetFilterTextAction
} from '../actions/action';

export const finderReducer = (
    state: InitialState = initialState,
    action: GetReposAction | SetFilterTextAction
) => {
    switch(action.type) {
        case GET_REPOS:
             return {
                ...state,
                repos: action.payload.repos
            };
        case SET_FILTERTEXT:
             return {
                ...state,
                filterText: action.payload.filterText
            };
        default:
            return state;
    }
};
