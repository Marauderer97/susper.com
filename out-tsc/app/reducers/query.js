import * as query from '../actions/query';
export var CHANGE = 'CHANGE';
/**
 * There is always a need of initial state to be passed onto the store.
 *
 * @prop: query: ''
 * @prop: loading: false
 */
var initialState = {
    query: '',
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case query.ActionTypes.QUERYCHANGE: {
            var query_1 = action.payload;
            return Object.assign({}, state, {
                query: query_1,
            });
        }
        default: {
            return state;
        }
    }
}
export var getpresentquery = function (state) { return state.query; };
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/reducers/query.js.map