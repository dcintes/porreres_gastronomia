import * as tools from './tools.js';

class ProducteView {

    constructor(){
        this.data = require('./data');
        const url = new URLSearchParams(window.location.search);
        this.producte = this.data.productes.find(e => e.id = url.get('id'));
        console.log(url.get('id'));
        this.contenidor = document.querySelector('#productes');
        this.images = require('../img/*.*');

        this.mostraProducte();
        
    }

    mostraProducte(){

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