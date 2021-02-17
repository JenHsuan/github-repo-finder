import { ThunkAction } from 'redux-thunk'

//Types
import {
    GET_REPOS,
    SET_FILTERTEXT
} from '../types';

//States
import {
    InitialState
} from '../states/states';

export interface GetReposAction {
    type: typeof GET_REPOS,
    payload: {
        repos: any[]
    }
}

export interface SetFilterTextAction {
    type: typeof SET_FILTERTEXT,
    payload: {
        filterText: string
    }
}

export const setFilterText = (text: string): ThunkAction<void, InitialState, unknown, SetFilterTextAction> => dispatch => {
    try {
        dispatch({
            type: SET_FILTERTEXT,
            payload: {filterText: text}
        });
    } catch (error) {
        console.log(error);
    }
};

export const getRepos = (keyword: string): ThunkAction<void, InitialState, unknown, GetReposAction> => async dispatch => {
    try {
        let url = `https://api.github.com/search/repositories?page=1&q=${keyword}&sort=stars&order=desc`
        let res = await fetch(url)
        let data = await res.json()
        console.log(data)
        dispatch({
            type: GET_REPOS,
            payload: {repos: data.items}
        });
    } catch (error) {
        console.log(error);
    }
};
