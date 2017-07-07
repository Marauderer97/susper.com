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
    wholequery: {
        query: '',
        rows: 10,
        start: 0
    },
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case query.ActionTypes.QUERYCHANGE: {
            var query_1 = action.payload;
            return Object.assign({}, state, {
                query: query_1,
                wholequery: state.wholequery
            });
        }
        case query.ActionTypes.QUERYSERVER: {
            var query_2 = action.payload;
            return Object.assign({}, state, {
                wholequery: query_2,
                query: state.query
            });
        }
        default: {
            return state;
        }
    }
}
export var getpresentquery = function (state) { return state.query; };
export var getpresentwholequery = function (state) { return state.wholequery; };
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/reducers/query.js.map