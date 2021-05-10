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
            const img = tools.createElement('img', 'producte_preview');
            
            img.setAttribute('src', tools.getImage(this.images, element.imatge.default));
            img.setAttribute('srcset', `${tools.getImage(this.images, element.imatge['500'])} 500w, ${tools.getImage(this.images, element.imatge.default)} 700w`);
            img.setAttribute('alt', element.nom);

            const link = tools.createElement('a')
            link.setAttribute('href',`./producte.html?id=${element.id}`);
            link.append(img);
            content.append(link);

            // Nom
            const nom = tools.createElement('h3');
            nom.append(tools.createTextNode(element.nom));
            content.append(nom);

            // Descripcio
            const des = tools.createElement('div');
            des.innerHTML = element.descripcio;
            const p = des.querySelector('p:first-child');
            content.append(p);

            this.contenidor.append(content);
        });

    }

}

const view = new ProductesView();