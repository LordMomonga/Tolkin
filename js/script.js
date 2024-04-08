let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
/*carousel variable*/

/*end carousel variable*/ 
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
    console.log('ok');
}
const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', {delay:200, origin:'top'});
sr.reveal('.hero-img', {delay:450, origin:'top'});
sr.reveal('.icons ', {delay:500, origin:'top'});
sr.reveal('.scroll-down', {delay:500, origin:'left'});

/*carousel script-----------------------------*/


