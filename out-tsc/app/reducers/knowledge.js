import * as knowledge from '../actions/knowledge';
export var CHANGE = 'CHANGE';
/**
 * There is always a need of initial state to be passed onto the store.
 *
 * @prop: query: ''
 * @prop: loading: false
 */
var initialState = {
    response: {}
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case knowledge.ActionTypes.CHANGE: {
            var response = action.payload;
            return Object.assign({}, state, {
                response: response,
            });
        }
        default: {
            return state;
        }
    }
}
export var getresponse = function (state) { return state.response; };
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/reducers/knowledge.js.map