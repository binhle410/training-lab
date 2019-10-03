var Point = /** @class */ (function () {
    function Point() {
        var _this = this;
        this.draw = function () {
            console.log('drawing ... ' + _this.x + ' ' + _this.y);
        };
    }
    Point.prototype.drawAlternative = function () {
        console.log('Alternative drawing ... ' + this.x + ' ' + this.y);
    };
    return Point;
}());
var point = new Point();
point.x = 200;
point.y = 300;
point.draw();
point.drawAlternative();
