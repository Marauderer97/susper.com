import * as search from '../actions/search';
export var CHANGE = 'CHANGE';
/**
 * There is always a need of initial state to be passed onto the store.
 *
 * @prop: query: ''
 * @prop: loading: false
 */
var initialState = {
    searchresults: {},
    items: [],
    totalResults: 0,
    navigation: [],
    responsetime: 0
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case search.ActionTypes.CHANGE: {
            var search_1 = action.payload;
            return Object.assign({}, state, {
                searchresults: search_1,
                items: search_1.channels[0].items,
                totalResults: Number(search_1.channels[0].totalResults) || 0,
                navigation: search_1.channels[0].navigation,
                responsetime: new Date()
            });
        }
        default: {
            return state;
        }
    }
}
export var getsearchresults = function (state) { return state.searchresults; };
export var getItems = function (state) { return state.items; };
export var getTotalResults = function (state) { return state.totalResults; };
export var getresponsetime = function (state) { return state.responsetime; };
export var getNavigation = function (state) { return state.navigation; };
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/reducers/search.js.map