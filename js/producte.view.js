import * as tools from './tools.js';

class ProducteView {

    constructor(){
        this.data = require('./data');
        const url = new URLSearchParams(window.location.search);
        this.producte = this.data.productes.find(e => e.id == url.get('id'));
        this.capsalera = tools.getElement('#capsalera');
        
        this.images = require('../img/*.*');


        this.mostraProducte();
        this.mapa = this.initMapa();
        
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

    initMapa() {
        var mapa = L.map('mapa').setView([39.5148031,3.0236857], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapa);

        this.producte.comercos.forEach(e => {
            const comers = this.data.comercos.find(c => c.id == e);

            var icon = L.icon({
                iconUrl: tools.getImage(this.images, comers.logo),
    
                iconSize:     [50, 50], // size of the icon
                iconAnchor:   [25, 50], // point of the icon which will correspond to marker's location
            });

            var marker = L.marker(comers.coordenades, {icon: icon});
            marker.bindPopup(`<b>${comers.nom}</b><br>${comers.descripcio}<br>${comers.direccio}`);
            marker.addTo(mapa);

        });

        return mapa;

    }

}

const view = new ProducteView();