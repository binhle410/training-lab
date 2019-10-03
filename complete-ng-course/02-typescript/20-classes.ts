interface PointInterface {
    x: number,
    y: number;
    draw: () => void;
    drawAlternative: () => void;
}

class Point implements PointInterface {
    x: number; 
    y: number;
    draw = () => {
        console.log('drawing ... ' + this.x + ' ' + this.y);
    };
    drawAlternative(){
        console.log('Alternative drawing ... ' + this.x + ' ' + this.y);
    }
}

let point: PointInterface = new Point();
point.x = 200;
point.y = 300;
point.draw();
point.drawAlternative();
