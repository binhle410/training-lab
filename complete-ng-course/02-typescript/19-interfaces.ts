interface PointInterface {
    x: number,
    y: number;
}

let drawPoint = (point: { x: number, y: number }) => {
    console.log(point.x, point.y);
}

let drawLine = (start: Point, end: Point) => {
    console.log('drawing Line');
    console.log('Start');
    drawPoint(start);
    console.log('End');
    drawPoint(end);
}

drawPoint({x: 12, y: 21});

drawLine({x: 0, y:0}, {x: 120, y: 240});
