var Point = /** @class */ (function () {
    function Point(x, y) {
        var _this = this;
        this.draw = function () {
            console.log('drawing ... ' + _this.x + ' ' + _this.y);
        };
        this.x = x;
        this.y = y;
    }
    Point.prototype.drawAlternative = function () {
        console.log('Alternative drawing ... ' + this.x + ' ' + this.y);
    };
    return Point;
}());
var point = new Point(150, 250);
point.draw();
point.drawAlternative();
