//Types
import {
    GET_USERS,
    GET_DATA,
    GET_REPOS,
    SET_FILTERTEXT
} from '../types';

//States
import {
    initialState,
    InitialState
} from '../states/states';

//Reducer
interface TemplateReducer {

}

import {
    GetDataAction,
    GetUsersAction,
    GetReposAction,
    SetFilterTextAction
} from '../actions/action';

export const templateReducer = (
    state: InitialState = initialState,
    action: GetDataAction | GetUsersAction | GetReposAction | SetFilterTextAction
) => {
    switch(action.type) {
        case GET_USERS:
             return {
                ...state,
                users: action.payload.users
            };
        case GET_DATA:
             return {
                ...state,
                data: action.payload.data
            };
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
