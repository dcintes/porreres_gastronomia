
/**
 * Obte la imatge 'name' del array 'images'
 * @param {*} images 
 * @param {*} name 
 * @returns 
 */
 function getImage(images, name){
    return name.split('\.').reduce((a,e) => {
        return a[e];
    }, images);
}

// Crea un elemento con clase, si tiene.
function createElement(tag, className) {
    const element = document.createElement(tag);

    if (className) element.classList.add(className);

    return element;
  }

  // Crea un nodo de texto
  function createTextNode(text) {
    const element = document.createTextNode(text);

    return element;
  }

  // Obtiene un elemento DOM
  function getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

  export {
      getImage,
      getElement,
      createTextNode,
      createElement
  }