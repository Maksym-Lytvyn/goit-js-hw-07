import { galleryItems } from './gallery-items.js';
// Change code below this line
const ulElement = document.querySelector('ul');





    const imgs = galleryItems.map(image => `<li class='gallery__item'> <a class="gallery__link" href="large-image.jpg"><img class="gallery__image" src='${image.preview}' data-source='${image.original}' alt='${image.description}' width='400px' height='300px'> </a> </li>`

    );
    

    console.log(imgs);
    
    ulElement.insertAdjacentHTML('beforeend', imgs.join(''));
    
    ulElement.addEventListener('click', (event) => {
        event.preventDefault();
    })


    // базовий lightbox
    const instance = basicLightbox.create(imgs.join(''))

    

    const instance1 = basicLightbox.create(`<li class='gallery__item'> <a class="gallery__link" href="large-image.jpg"><img class="gallery__image" src='${galleryItems[0].original}' data-source='${galleryItems[0].original}' alt='${galleryItems[0].description}' width='1300px' height='1300px'> </a> </li>`)
     const instance2 = basicLightbox.create(`<li class='gallery__item'> <a class="gallery__link" href="large-image.jpg"><img class="gallery__image" src='${galleryItems[1].original}' data-source='${galleryItems[1].original}' alt='${galleryItems[1].description}' width='400px' height='300px'> </a> </li>`)
     const instance3 = basicLightbox.create(`<li class='gallery__item'> <a class="gallery__link" href="large-image.jpg"><img class="gallery__image" src='${galleryItems[2].original}' data-source='${galleryItems[2].original}' alt='${galleryItems[2].description}' width='400px' height='300px'> </a> </li>`)
     const instance4 = basicLightbox.create(`<li class='gallery__item'> <a class="gallery__link" href="large-image.jpg"><img class="gallery__image" src='${galleryItems[3].original}' data-source='${galleryItems[3].original}' alt='${galleryItems[3].description}' width='400px' height='300px'> </a> </li>`)
     const instance5 = basicLightbox.create(`<li class='gallery__item'> <a class="gallery__link" href="large-image.jpg"><img class="gallery__image" src='${galleryItems[4].original}' data-source='${galleryItems[4].original}' alt='${galleryItems[4].description}' width='400px' height='300px'> </a> </li>`)
     const instance6 = basicLightbox.create(`<li class='gallery__item'> <a class="gallery__link" href="large-image.jpg"><img class="gallery__image" src='${galleryItems[5].original}' data-source='${galleryItems[5].original}' alt='${galleryItems[5].description}' width='400px' height='300px'> </a> </li>`)
     const instance7 = basicLightbox.create(`<li class='gallery__item'> <a class="gallery__link" href="large-image.jpg"><img class="gallery__image" src='${galleryItems[6].original}' data-source='${galleryItems[6].original}' alt='${galleryItems[6].description}' width='400px' height='300px'> </a> </li>`)
     const instance8 = basicLightbox.create(`<li class='gallery__item'> <a class="gallery__link" href="large-image.jpg"><img class="gallery__image" src='${galleryItems[7].original}' data-source='${galleryItems[7].original}' alt='${galleryItems[7].description}' width='400px' height='300px'> </a> </li>`)
     const instance9 = basicLightbox.create(`<li class='gallery__item'> <a class="gallery__link" href="large-image.jpg"><img class="gallery__image" src='${galleryItems[8].original}' data-source='${galleryItems[8].original}' alt='${galleryItems[8].description}' width='400px' height='300px'> </a> </li>`)


    const clicker = document.querySelector('ul');
    console.log(clicker);
    clicker.addEventListener('click', (event) => {
        if (event.target.alt === 'Hokkaido Flower') {
           instance1.show() 
        }
        else if (event.target.alt === 'Container Haulage Freight') {
            instance2.show() 
        }
        else if (event.target.alt === 'Aerial Beach View') {
            instance3.show() 
        }
        else if (event.target.alt === 'Flower Blooms') {
            instance4.show() 
        }
        else if (event.target.alt === 'Alpine Mountains') {
            instance5.show() 
        }
        else if (event.target.alt === 'Mountain Lake Sailing') {
            instance6.show() 
        }
        else if (event.target.alt === 'Alpine Spring Meadows') {
            instance7.show() 
        }
        else if (event.target.alt === 'Nature Landscape') {
            instance8.show() 
        }
        else if (event.target.alt === 'Lighthouse Coast Sea') {
            instance9.show() 
        }
        
    })        



    




    






console.log(galleryItems);
