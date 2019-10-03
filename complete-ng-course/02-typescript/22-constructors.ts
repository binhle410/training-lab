interface PointInterface {
    x: number,
    y: number;
    draw: () => void;
    drawAlternative: () => void;
}

class Point implements PointInterface {
    x: number; 
    y: number;
    constructor(x?: number, y?: number){ // here y has to also be optional if x is optional
        this.x = x;
        this.y = y;
    }
    draw = () => {
        console.log('drawing ... ' + this.x + ' ' + this.y);
    };
    drawAlternative(){
        console.log('Alternative drawing ... ' + this.x + ' ' + this.y);
    }
}

let point: PointInterface = new Point(150, 250);
point.draw();
point.drawAlternative();
