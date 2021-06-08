import * as tools from './tools.js';
import defaultExport from '../node_modules/leaflet/dist/leaflet.js';

class ProducteView {

    constructor(){
        this.data = require('./data');
        const url = new URLSearchParams(window.location.search);
        this.producte = this.data.productes.find(e => e.id == url.get('id'));
        this.capsalera = tools.getElement('#capsalera');
        this.relacionats = tools.getElement('#relacionats');
        this.mapContainer = tools.getElement('#mapa');
        
        this.images = require('../img/*.*');

        this.mostraProducte();
        
        this.io = new IntersectionObserver(
            entries => {
                this.mapa = this.initMapa();
                this.io.unobserve(this.mapContainer);
            }, {
                threshold: 0.1
            }
          );
          // Start observing an element
        this.io.observe(this.mapContainer);
        
    }

    mostraProducte(){

        // Imatge portada
        const picture = tools.createElement('picture');
        for(var key in this.producte.background) {
            if(key === 'default') {
                const img = tools.createElement('img');
                img.setAttribute('src', tools.getImage(this.images, this.producte.background[key]));
                img.setAttribute('alt', this.producte.nom);
                img.setAttribute('height', 700);
                picture.append(img);
            } else {
                const source = tools.createElement('source');
                source.setAttribute('srcset', tools.getImage(this.images, this.producte.background[key]));
                source.setAttribute('media', `(max-width: ${key}px)`);
                picture.append(source);
            }
        }
        this.capsalera.append(picture);

        // nom producte
        const titol = tools.createElement('h1');
        titol.innerHTML = this.producte.nom;
        this.capsalera.append(titol);

        // Descripció
        const desc = tools.createElement('div');
        desc.innerHTML = this.producte.descripcio;
        tools.getElement('#descripcio').append(desc);

        // Ingredients
        const ingredients = tools.getElement('#ingredients');

        const ul = tools.createElement('ul');
        ingredients.append(ul);

        this.producte.ingredients.forEach( e => {
            const li = tools.createElement('li');
            li.append(tools.createTextNode(e));
            ul.append(li);
        });

        const img = tools.createElement('img');
        img.setAttribute('src', tools.getImage(this.images, this.producte.imatge.default));
        img.setAttribute('srcset', `${tools.getImage(this.images, this.producte.imatge['500'])} 500w, ${tools.getImage(this.images, this.producte.imatge.default)} 700w`);
        img.setAttribute('alt', this.producte.nom);
        ingredients.append(img);

        // Productes relacionats: comparteixen etiquetes
        this.data.productes.forEach( p => {
            if(this.producte.id != p.id) {
                const interseccio = this.producte.etiquetes.filter(t => p.etiquetes.includes(t) )
                
                // Si comparteix etiquetes cream element
                if(interseccio.length > 0){
                    this._producteRelacionat(p);
                }
            }
        })

    }

    /**
     * Crea un producte relacionat
     * @param {} producte 
     */
    _producteRelacionat(producte){

        // Enllaç
        const link = tools.createElement('a')
        link.setAttribute('href',`./producte.html?id=${producte.id}`)

        // Imatge
        const img = tools.createElement('img', 'producte_preview');
        img.setAttribute('src', tools.getImage(this.images, producte.imatge.default));
        img.setAttribute('srcset', `${tools.getImage(this.images, producte.imatge['500'])} 500w, ${tools.getImage(this.images, producte.imatge.default)} 700w`);
        img.setAttribute('alt', producte.nom);
        link.append(img);

        // Nom
        const nom = tools.createElement('h3');
        nom.append(tools.createTextNode(producte.nom));
        link.append(nom);

        this.relacionats.append(link)
    }

    /**
     * Inicialitza el mapa
     * @returns 
     */
    initMapa() {
        // Inicialitzar
        var mapa = L.map('mapa').setView([39.5148031,3.0236857], 15);

        // Capa de forns
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapa);

        // Marcadors de comenrços
        const markers = new Array();

        this.producte.comercos.forEach(e => {
            // Cercam el producte per id
            const comers = this.data.comercos.find(c => c.id == e);

            // Icona personalitzada
            var icon = L.icon({
                iconUrl: tools.getImage(this.images, comers.logo),
    
                iconSize:     [50, 50], // size of the icon
                iconAnchor:   [25, 50], // point of the icon which will correspond to marker's location
            });

            // Cream marcador i popup amb info
            var marker = L.marker(comers.coordenades, {icon: icon});
            marker.bindPopup(`<b>${comers.nom}</b><br>${comers.descripcio}<br>${comers.direccio}`);
            marker.addTo(mapa);
            
            markers.push(marker);

        });

        // Ajustam el mapa als marcadors
        if(markers.length > 0) {
            var group = new L.featureGroup(markers);

            mapa.fitBounds(group.getBounds());
        }

        return mapa;

    }

}

const view = new ProducteView();