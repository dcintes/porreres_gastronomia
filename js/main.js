import * as tools from './tools.js';

class App {
    constructor(){
        this.menu = tools.getElement("#menu ul");

        this._initEvents();
    }

    _initEvents() {
        document.querySelector("#menuToggle").addEventListener('click', this.menuEvent.bind(this));
    }

    menuEvent(){
       this.menu.classList.toggle("responsive_menu");
    }
}

const app = new App();