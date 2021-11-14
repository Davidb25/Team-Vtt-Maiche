const images = [...document.querySelectorAll('.image')];


//popup

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');



let index = 0;

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');

    })
})

const updateImage = (i) => {
    let path = `img/gallery/img${i+1}.jpg`;
    largeImage.src = path;
   /* imageName.innerHTML = path;*/
    imageIndex.innerHTML = `${i+1}`;
    index = i;
    document.body.style.overflow = 'hidden';
    console.log(path)

}

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
    document.body.style.overflow = 'visible';
})

leftArrow.addEventListener('click', () => {
    if(index > 0){
        updateImage(index - 1);
    }
else{
    (index = images.length -1)
    updateImage(index)
}

})

rightArrow.addEventListener('click', () => {
    if(index < images.length -1){
        updateImage(index + 1); 
    }

    else {
        index = 0
    updateImage(index)}
})



