import { type } from '../utils';
export var ActionTypes = {
    CHANGE: type('[Knowledge] Change'),
};
var SearchAction = (function () {
    function SearchAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.CHANGE;
    }
    return SearchAction;
}());
export { SearchAction };
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/actions/knowledge.js.map