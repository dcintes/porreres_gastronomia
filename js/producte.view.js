import * as tools from './tools.js';

class ProducteView {

    constructor(){
        this.data = require('./data');
        const url = new URLSearchParams(window.location.search);
        this.producte = this.data.productes.find(e => e.id == url.get('id'));
        this.capsalera = document.querySelector('#capsalera');
        
        this.images = require('../img/*.*');

        this.mostraProducte();
        
    }

    mostraProducte(){

        capsalera.style.backgroundImage = `url('${tools.getImage(this.images, this.producte.background)}')`

        tools.getElement('#nom').innerHTML = this.producte.nom;

        const desc = tools.createElement('div');
        desc.innerHTML = this.producte.descripcio;
        tools.getElement('#descripcio').append(desc);


        const ingredients = tools.getElement('#ingredients');
        const ul = tools.createElement('ul');
        ingredients.append(ul);

        this.producte.ingredients.forEach( e => {
            const li = tools.createElement('li');
            li.append(tools.createTextNode(e));
            ul.append(li);
        });
        
    }

}

const view = new ProducteView();