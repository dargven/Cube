class Graph2D extends Component {
    constructor(params) {
        super(params);

        this.WIN = {
          left: -10,
          bottom: -10,
          width: 20,
          height: 20
        };

        this.canvas = new Сanvas({
          WIN: this.WIN,
          id: 'canvas',
          width: 700,
          height: 700,
          callbacks: {
            wheel: event => this.wheel(event),
            mouseMove: event => this.mouseMove(event),
            mouseUp: () => this.mouseUp(),
            mouseDown: () => this.mouseDown(),
            mouseLeave: () => this.mouseLeave()
          }
        });

        this.ui = new UI({
          id: 'ui',
          parent: this.id,
          template: template.uiTemplate,
          callbacks: {
            delFunction: (num) => this.delFunction(num),
            addFunction: (f, num, width, color, sLine, eLine, printDerevative) => this.addFunction(f, num, width, color, sLine, eLine, printDerevative)
          },
        });

        this.mathPart = new MathPart({WIN: this.WIN, canvas: this.canvas});

        this.derevativeX = 0
        this.funcs = [];
        this.canMove = false;
        this.render();
      }

      addFunction(f, num, width = 2, color = 'red', sLine, eLine, printDerevative) {
        this.funcs[num] = {f, color, width, sLine, eLine, printDerevative}
        this.render();
      }

      delFunction (num) {
        this.funcs[num] = null;
        this.render();
      }

      mouseMove(event) {
        if (this.canMove) {
          this.WIN.left -= this.canvas.sx(event.movementX);
          this.WIN.bottom -= this.canvas.sy(event.movementY);
        }
        this.derevativeX = this.WIN.left + this.canvas.sx(event.offsetX);
        this.render()
      }
      mouseLeave() {
        this.canMove = false;
      }
      mouseUp() {
        this.canMove = false;
      }
      mouseDown() {
        this.canMove = true;
      }
      wheel(event) {
        event.preventDefault();
        let delta = event.deltaY > 0 ? -0.3: +0.3
        if(this.WIN.bottom + delta < -6) {
          this.WIN.width -= delta
          this.WIN.height -= delta
          this.WIN.left += delta / 2
          this.WIN.bottom += delta / 2
        }
        this.render();
      }

      render () {
        this.canvas.clear();
        this.printXY();
        //Function
        this.funcs.forEach(f => {
          if (f) {
            this.printFunction(f.f, f.color, f.width);
          }
        });
    }


    printFunction (f, color, width) {
      let x = this.WIN.left;
      const dx = this.WIN.width / 1000;
      while (x < this.WIN.left + this.WIN.width) {
        this.canvas.line(x, f(x), x + dx, f(x + dx), color, width = 1);
        x += dx;
      }
    }
}