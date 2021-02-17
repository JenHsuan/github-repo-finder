import { ThunkAction } from 'redux-thunk'

//Types
import {
    GET_REPOS,
    SET_FILTERTEXT,
    APPEND_REPOS,
    SET_PAGECNT
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

export interface AppendReposAction {
    type: typeof APPEND_REPOS,
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

export interface SetPageCntAction {
    type: typeof SET_PAGECNT,
    payload: {
        pageCnt: number
    }
}

export const setPageCnt = (pageCnt: number): ThunkAction<void, InitialState, unknown, SetPageCntAction> => dispatch => {
    try {
        dispatch({
            type: SET_PAGECNT,
            payload: {pageCnt: pageCnt}
        });
    } catch (error) {
        console.log(error);
    }
};

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
        dispatch({
            type: GET_REPOS,
            payload: {repos: data.items}
        });
    } catch (error) {
        console.log(error);
    }
};


export const appendRepos = (keyword: string, page: number): ThunkAction<void, InitialState, unknown, AppendReposAction> => async dispatch => {
    try {
        console.log(keyword)
        console.log(page)
        let url = `https://api.github.com/search/repositories?page=${page}&q=${keyword}&sort=stars&order=desc`
        let res = await fetch(url)
        let data = await res.json()
        dispatch({
            type: APPEND_REPOS,
            payload: {repos: data.items}
        });
    } catch (error) {
        console.log(error);
    }
};
