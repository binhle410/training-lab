"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(x, y) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.draw = function () {
            console.log('. drawing ... ' + _this.x + ' ' + _this.y);
        };
    }
    return Point;
}());
exports.Point = Point;
