interface PointInterface {
    x: number,
    y: number;
    draw: () => void;
    drawAlternative: () => void;
}

class Point implements PointInterface {
    private universe: string;
    x: number; 
    y: number;
    constructor(x?: number, y?: number, u?: string, private lover?: string){ // here y has to also be optional if x is optional
        this.x = x;
        this.y = y;
        this.universe = u;
    }
    draw = () => {
        console.log('drawing ... ' + this.x + ' ' + this.y);
    };
    drawAlternative(){
        console.log('Alternative drawing ... ' + this.x + ' ' + this.y);
        console.log('universe '+this.universe, 'lover '+ this.lover);
    }
}

let point: PointInterface = new Point(150, 250, 'universe', 'my lover');
point.draw();
point.drawAlternative();
