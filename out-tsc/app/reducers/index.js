import { createSelector } from 'reselect';
import { environment } from '../../environments/environment';
/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/core/compose';
/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';
/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { combineReducers } from '@ngrx/store';
/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromSearch from './search';
import * as fromQuery from './query';
import * as fromKnowledge from './knowledge';
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
    knowledge: fromKnowledge.reducer
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
export var getKnowledgeState = function (state) { return state.knowledge; };
export var getSearchResults = createSelector(getSearchState, fromSearch.getsearchresults);
export var getItems = createSelector(getSearchState, fromSearch.getItems);
export var getTotalResults = createSelector(getSearchState, fromSearch.getTotalResults);
export var getNavigation = createSelector(getSearchState, fromSearch.getNavigation);
export var getquery = createSelector(getQueryState, fromQuery.getpresentquery);
export var getwholequery = createSelector(getQueryState, fromQuery.getpresentwholequery);
export var getKnowledge = createSelector(getKnowledgeState, fromKnowledge.getresponse);
export var getResponseTime = createSelector(getSearchState, fromSearch.getresponsetime);
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/reducers/index.js.map