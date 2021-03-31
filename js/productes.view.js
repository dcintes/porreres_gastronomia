import * as tools from './tools.js';

class ProductesView {

    constructor(){
        this.data = require('./data');
        this.contenidor = document.querySelector('#productes .grid-productes');
        this.images = require('../img/*.*');

        this.mostraProductes();
        
    }

    mostraProductes(){
        // Buidam el contingut
        while (this.contenidor.firstChild) {
            this.contenidor.removeChild(this.contenidor.firstChild);
        }

        const productes = this.data.productes;

        productes.forEach(element => {
            
            const content = tools.createElement('div','producte');

            // Imatge
            const img = tools.createElement('img');
            
            img.setAttribute('src', tools.getImage(this.images, element.imatge));
            img.setAttribute('alt', element.nom);
            content.append(img);

            // Nom
            const nom = tools.createElement('h3');
            nom.append(tools.createTextNode(element.nom));
            content.append(nom);

            // Descripcio
            const des = tools.createElement('div');
            des.innerHTML = element.descripcio;
            const p = des.querySelector('p:first-child');
            content.append(p);

            // Enllaç
            const link = tools.createElement('a')
            link.setAttribute('href',`./producte.html?id=${element.id}`)
            link.append(tools.createTextNode('Veure més'));
            content.append(link);

            this.contenidor.append(content);
        });

    }

}

const view = new ProductesView();