class Menu extends Component {
    addEventListeners() {
        document.querySelectorAll('.selectentities')
            .forEach(button => button.addEventListener('click',
                (event) => this.callbacks.showMenuItem(event.target.dataset.item)));
    }
    // addEventListeners() {
    //     document.getElementById('submit').onclick = function() {
    //         let e = document.getElementById("selectentities");
    //         let value = e.options[e.selectedIndex].value;
    //     }
    // }


}
