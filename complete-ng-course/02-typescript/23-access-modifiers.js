var Point = /** @class */ (function () {
    function Point(x, y, u, lover) {
        var _this = this;
        this.lover = lover;
        this.draw = function () {
            console.log('drawing ... ' + _this.x + ' ' + _this.y);
        };
        this.x = x;
        this.y = y;
        this.universe = u;
    }
    Point.prototype.drawAlternative = function () {
        console.log('Alternative drawing ... ' + this.x + ' ' + this.y);
        console.log('universe ' + this.universe, 'lover ' + this.lover);
    };
    return Point;
}());
var point = new Point(150, 250, 'universe', 'my lover');
point.draw();
point.drawAlternative();
