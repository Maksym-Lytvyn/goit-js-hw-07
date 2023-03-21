import { galleryItems } from './gallery-items.js';
// Change code below this line
const ulElement = document.querySelector('ul');





    const imgs = galleryItems.map(image => `<li class='gallery__item'> <a class="gallery__link" href="large-image.jpg"><img class="gallery__image" src='${image.preview}' data-source='${image.original}' alt='${image.description}' width='400px' height='300px'> </a> </li>`

    );



    
    console.log(imgs);
    
    ulElement.insertAdjacentHTML('beforeend', imgs.join(''));
    console.log(ulElement);

    // базовий lightbox

    ulElement.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target.nodeName !== 'IMG') {
            return;
        }
        const instance = basicLightbox.create(`<img src = '${event.target.dataset.source}' width = '700px' height = '600px'>`);
            instance.show();
            
    })


    


    




    






console.log(galleryItems);
