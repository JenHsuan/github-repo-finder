import { RootReducer } from '../reducers';

//Initial states
export const initialState = {
    users:[],
    data: '',
    repos:[],
    filterText:''
};

// interfaces
export interface InitialState {
    users: any[],
    data: string,
    repos: any[],
    filterText: string
}

//Selector functions
export const selectData = (rootState: RootReducer) => rootState.templateReducer.data;
export const selectUsers = (rootState: RootReducer) => rootState.templateReducer.users;
export const selectRepos = (rootState: RootReducer) => rootState.templateReducer.repos;
export const selectFilterText = (rootState: RootReducer) => rootState.templateReducer.filterText;

