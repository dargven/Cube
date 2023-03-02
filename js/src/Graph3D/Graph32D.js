// class Graph3D extends Component {
//     constructor(params) {
//         super(params);
//         this.WIN = {
//             LEFT: -10,
//             BOTTOM: -10,
//             WIDTH: 20,
//             HEIGHT: 20,
//             FOCUS: new Point(0, 0, 30),
//             CAMERA: new Point(0, 0, 50)
//         };
//         this.graph = new Graph({
//             id: 'canvas3d',
//             WIN: this.WIN,
//             width: 700,
//             height: 700,
//             callbacks: {
//                 wheel: (event) => this.wheel(event),
//                 mouseup: () => this.mouseup(),
//                 mousedown: () => this.mousedown(),
//                 mousemove: (event) => this.mousemove(event),
//                 mouseleave: () => this.mouseleave()
//             }
//         });
//         this.math3D = new Math3D({ WIN: this.WIN });
//         this.scene = {
//             Cube: new Cube(),
//             Sphere: new Sphere()
//         };
//         this.selected = document.getElementById('selectentities');
//         this.canRotate = false;
//         this.renderScene();
//     }
//
//     wheel(event) {
//         const delta = 1 + event.wheelDelta / 1200;
//         this.scene[this.selected].points.forEach(point => {
//             this.math3D.zoom(delta, point);
//         });
//         this.renderScene();
//     }
//
//     mouseup() {
//         this.canRotate = false;
//     }
//
//     mousedown() {
//         this.canRotate = true;
//     }
//
//     mouseleave() {
//         this.canRotate = false;
//     }
//
//     mousemove(event) {
//         if (this.canRotate) {
//             const { movementX, movementY } = event;
//             this.scene[this.selected].points.forEach(point => {
//                 this.math3D.rotateOY(movementX / 180, point);
//                 this.math3D.rotateOX(movementY / 180, point);
//             });
//             this.renderScene();
//         }
//     }
//
//     renderScene(figure) {
//         this.math3D.calcCenters(figure);
//         this.math3D.calcDitance(figure,this.WIN.CAMERA,'distance');
//         this.math3D.sortByArtistAlgoritm(figure.polygons);
//         figure.polygons.forEach(polygon => {
//             const points = [
//                 figure.points[polygon.points[0]],
//                 figure.points[polygon.points[1]],
//                 figure.points[polygon.points[2]],
//                 figure.points[polygon.points[3]]
//             ];
//             this.Graph.polygon(
//                 points.map(point => {
//                     return{
//                         x:this.math3D.xs(point),
//                         y:this.math3D.ys(point)
//                     }
//                 }),polygon.color)
//
//         })
//         this.graph.clear();
//         this.scene[this.selected].edges.forEach(({ p1, p2 }) => {
//             const point1 = this.scene[this.selected].points[p1];
//             const point2 = this.scene[this.selected].points[p2];
//             this.graph.line(
//                 this.math3D.xs(point1),
//                 this.math3D.ys(point1),
//                 this.math3D.xs(point2),
//                 this.math3D.ys(point2)
//             );
//         });
//         this.scene[this.selected].points.forEach(point => {
//             this.graph.point(
//                 this.math3D.xs(point),
//                 this.math3D.ys(point)
//             );
//         });
//     }
//     addEventListeners() {a
//         const selector = document.getElementById('selectentities');
//         selector.addEventListener('change', () =>{
//             this.selected = selector.value;
//             this.renderScene();
//         })
//     }
//
// }

//this.scene[document.getElementById('selectentities').value]