import { createSelector } from 'reselect';
import { environment } from '../../environments/environment';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import * as fromSearch from './search';
import * as fromQuery from './query';
/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
var reducers = {
    search: fromSearch.reducer,
    query: fromQuery.reducer,
};
var developmentReducer = compose(storeFreeze, combineReducers)(reducers);
var productionReducer = combineReducers(reducers);
export function reducer(state, action) {
    if (environment.production) {
        return productionReducer(state, action);
    }
    else {
        return developmentReducer(state, action);
    }
}
export var getSearchState = function (state) { return state.search; };
export var getQueryState = function (state) { return state.query; };
export var getSearchResults = createSelector(getSearchState, fromSearch.getsearchresults);
export var getItems = createSelector(getSearchState, fromSearch.getItems);
export var getTotalResults = createSelector(getSearchState, fromSearch.getTotalResults);
export var getNavigation = createSelector(getSearchState, fromSearch.getNavigation);
export var getquery = createSelector(getQueryState, fromQuery.getpresentquery);
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/reducers/index.js.map