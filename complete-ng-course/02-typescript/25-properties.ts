/**
 *  tsc --target ES2016 /filepath/filename.ts --watch
 */
interface PointInterface {
    x: number,
    y: number;
    draw: () => void;
    drawAlternative: () => void;
    getX: () => number;
    setX: (value) => void;
}

class Point implements PointInterface {
    private universe: string;
    x: number;
    y: number;
    constructor(x?: number, y?: number, u?: string, private lover?: string) { // here y has to also be optional if x is optional
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

    draw = () => {
        console.log('. drawing ... ' + this.x + ' ' + this.y);
    };
    drawAlternative() {
        console.log('Alternative drawing ... ' + this.x + ' ' + this.y);
        console.log('universe ' + this.universe, 'lover ' + this.lover);
    }
}

let point: Point = new Point(150, 250, 'universe', 'my lover');
let x = point.getX();
point.draw();
point.setX(10);
point.draw();
point.X = 20;
point.draw();
