//Types
import {
    GET_REPOS,
    SET_FILTERTEXT,
    APPEND_REPOS,
    SET_PAGECNT
} from '../types';

//States
import {
    initialState,
    InitialState
} from '../states/states';

import {
    GetReposAction,
    SetFilterTextAction,
    AppendReposAction,
    SetPageCntAction
} from '../actions/action';

export const finderReducer = (
    state: InitialState = initialState,
    action: GetReposAction | SetFilterTextAction | AppendReposAction | SetPageCntAction
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
        case APPEND_REPOS:
             return {
                ...state,
                repos: [...state.repos, ...action.payload.repos]
            };
        case SET_PAGECNT:
             return {
                ...state,
                pageCnt: action.payload.pageCnt
            };
        default:
            return state;
    }
};
