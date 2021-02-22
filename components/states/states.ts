import { RootReducer } from '../reducers';

//Initial states
export const initialState = {
    repos:[],
    filterText:'',
    pageCnt: 2,
    showSpinner:false
};

// interfaces
export interface InitialState {
    repos: any[],
    filterText: string,
    pageCnt: number,
    showSpinner: boolean
}

//Selector functions
export const selectRepos = (rootState: RootReducer) => rootState.finderReducer.repos;
export const selectFilterText = (rootState: RootReducer) => rootState.finderReducer.filterText;
export const selectPageCnt = (rootState: RootReducer) => rootState.finderReducer.pageCnt;
export const selectShowSpinner = (rootState: RootReducer) => rootState.finderReducer.showSpinner;

