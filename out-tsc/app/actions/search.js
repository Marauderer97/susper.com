import { type } from '../utils';
export var ActionTypes = {
    CHANGE: type('[Search] Change'),
    ITEMS: type('[Search] Items'),
    TOTALRESULTS: type('[Search] Totalresults'),
    NAVIGATION: type('[Search] Navigation'),
};
var SearchAction = (function () {
    function SearchAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.CHANGE;
    }
    return SearchAction;
}());
export { SearchAction };
var ItemsAction = (function () {
    function ItemsAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ITEMS;
    }
    return ItemsAction;
}());
export { ItemsAction };
var TotalResultsAction = (function () {
    function TotalResultsAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.TOTALRESULTS;
    }
    return TotalResultsAction;
}());
export { TotalResultsAction };
var NavigationAction = (function () {
    function NavigationAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.NAVIGATION;
    }
    return NavigationAction;
}());
export { NavigationAction };
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/actions/search.js.map