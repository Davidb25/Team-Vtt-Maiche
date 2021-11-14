//popup

const images = document.querySelectorAll('.image_popup');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const largeImage = document.querySelector('.large-image');


images.forEach((i) => {
    i.addEventListener('click', () => {
        let source_image = i;
        console.log(source_image);

        /*largeImage.src = "img/actualites/capture_accueil_site_web.jpg"*/

        largeImage.src = source_image.src;

        popup.classList.toggle('active');
        document.body.style.overflow = 'visible';

    })

})

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
    document.body.style.overflow = 'visible';
})





