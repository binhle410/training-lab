class Point {
    constructor(x, y, u, lover) {
        this.lover = lover;
        this.draw = () => {
            console.log('. drawing ... ' + this.x + ' ' + this.y);
        };
        this.x = x;
        this.y = y;
        this.universe = u;
    }
    getX() {
        return this.x;
    }
    setX(value) {
        if (value < 0) {
            throw new Error('value cannot be less than 0');
        }
        this.x = value;
    }
    get X() {
        return this.getX();
    }
    set X(value) {
        this.setX(value);
    }
    drawAlternative() {
        console.log('Alternative drawing ... ' + this.x + ' ' + this.y);
        console.log('universe ' + this.universe, 'lover ' + this.lover);
    }
}
let point = new Point(150, 250, 'universe', 'my lover');
let x = point.getX();
point.draw();
point.setX(10);
point.draw();
point.X = 20;
point.draw();
