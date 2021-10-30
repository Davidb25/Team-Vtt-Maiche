/* Tuto pour slider images avec transition automatique ou manuel */
/* https://www.youtube.com/watch?v=REOWRuPpxQE */


window.onload = () => {
    let cpt = 0;
    let left = document.querySelector('.left');
    let right = document.querySelector('.right');
    let contenu = document.querySelector('.contenu');
    let slider = document.querySelector('.slider');

    let defilement = Array.from(contenu.children);
    let screenwidth = slider.getBoundingClientRect().width;
    right.addEventListener('click', avance);
    left.addEventListener('click', recule);
    window. onresize = recentrage; /*fonction quand on redimensionne la fenêtre*/
    setInterval(avance,5000)
    console.log(screenwidth);

    function avance() {
    let screenwidth = slider.getBoundingClientRect().width;
    cpt++;
    if (cpt === defilement.length) {
        cpt = 0;
    }
    let decalage = -screenwidth * cpt;
    contenu.style.transform=`translateX(${ decalage }px)`;
    /*alert('avance d'une image')*/
    /*console.log(cpt);*/
    /*console.log(defilement); */
    }


    function recule() {
    let screenwidth = slider.getBoundingClientRect().width;
    cpt--;
    if (cpt < 0) {
        cpt = defilement.length - 1;
    }
    let decalage = -screenwidth * cpt;
    contenu.style.transform=`translateX(${ decalage }px)`;
    /*console.log(cpt)*/
    /*alert('recule d'une image')*/
    console.log(screenwidth);
    }

    function recentrage() {
        let screenwidth = slider.getBoundingClientRect().width;
        /*cpt++;*/
        if (cpt === defilement.length) {
            cpt = 0;
        }
        let decalage = -screenwidth * cpt;
        contenu.style.transform=`translateX(${ decalage }px)`;
        /*alert('avance d'une image')*/
        /*console.log(cpt);*/
        /*console.log(defilement); */
        }
    


      
}
