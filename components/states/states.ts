import { RootReducer } from '../reducers';

//Initial states
export const initialState = {
    users:[],
    data: '',
    repos:[]
};

// interfaces
export interface InitialState {
    users: any[],
    data: string,
    repos: any[]
}

//Selector functions
export const selectData = (rootState: RootReducer) => rootState.templateReducer.data;
export const selectUsers = (rootState: RootReducer) => rootState.templateReducer.users;
export const selectRepos = (rootState: RootReducer) => rootState.templateReducer.repos;

