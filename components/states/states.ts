import { RootReducer } from '../reducers';

//Initial states
export const initialState = {
    repos:[],
    filterText:''
};

// interfaces
export interface InitialState {
    repos: any[],
    filterText: string
}

//Selector functions
export const selectRepos = (rootState: RootReducer) => rootState.finderReducer.repos;
export const selectFilterText = (rootState: RootReducer) => rootState.finderReducer.filterText;

