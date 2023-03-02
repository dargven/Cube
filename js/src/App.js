class App extends Component {
    constructor(props) {
        super(props);
        this.menu = new Menu({
            id: 'menu',
            parent: this.id,
            template: template.Menu,
            callbacks: {
                showMenuItem: (name) => this.showMenuItem(name)
            }
        });
        this.componentList = {
            Graph3D: new Graph3D({ 
                id: 'Graph3D', 
                parent: this.id, 
                template: template.Graph3D 
            }),
            component3: new Component({ id: 'component3', parent: this.id }),
            component4: new Component({ id: 'component4', parent: this.id })
        };

        this.showMenuItem('Graph3D');
    }

    showMenuItem(name) {
        Object.values(this.componentList).forEach(comp => comp.hide());
        this.componentList[name].show();
    }

}