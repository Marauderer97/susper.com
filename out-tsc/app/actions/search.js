import { type } from '../utils';
export var ActionTypes = {
    CHANGE: type('[Search] Change'),
    ITEMS: type('[Search] Items'),
    TOTALRESULTS: type('[Search] Totalresults'),
    NAVIGATION: type('[Search] Navigation'),
};
export var SearchAction = (function () {
    function SearchAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.CHANGE;
    }
    return SearchAction;
}());
export var ItemsAction = (function () {
    function ItemsAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ITEMS;
    }
    return ItemsAction;
}());
export var TotalResultsAction = (function () {
    function TotalResultsAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.TOTALRESULTS;
    }
    return TotalResultsAction;
}());
export var NavigationAction = (function () {
    function NavigationAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.NAVIGATION;
    }
    return NavigationAction;
}());
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/actions/search.js.map