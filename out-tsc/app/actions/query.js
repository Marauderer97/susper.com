import { type } from '../utils';
export var ActionTypes = {
    QUERYCHANGE: type('[Query] Change'),
    QUERYSERVER: type('[Query] Server'),
};
var QueryAction = (function () {
    function QueryAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.QUERYCHANGE;
    }
    return QueryAction;
}());
export { QueryAction };
var QueryServerAction = (function () {
    function QueryServerAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.QUERYSERVER;
    }
    return QueryServerAction;
}());
export { QueryServerAction };
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/actions/query.js.map