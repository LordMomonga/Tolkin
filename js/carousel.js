let nextButton = document.querySelector("#next");
let prevButton = document.querySelector("#prev");
let backButton = document.getElementById('back');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let carousel = document.querySelector('.carousel');
let listHtml = document.querySelector('.carousel .list');
 

 nextButton.onclick = () => {

   showSlider('next');
    console.log('ok');
    }

    prevButton.onclick = () => {
        console.log('ok');
        showSlider('prev');
    }
    let unAcceplick ;
    const showSlider = (type) => {
        nextButton.style.pointerEvents = 'none';
        prevButton.style.pointerEvents = 'none';

        carousel.classList.remove('prev', 'next');
        let items = document.querySelectorAll('.carousel .list .items');
        if(type === 'next'){
            listHtml.appendChild(items[0]);
            carousel.classList.add('next')
        }else{
            let positionLast = items.length -1;
            listHtml.prepend(items[positionLast]);
            carousel.classList.add('prev')
             }
             clearTimeout(unAcceplick)
             unAcceplick = setTimeout(() => {
                nextButton.style.pointerEvents = 'auto';
                prevButton.style.pointerEvents = 'auto';
        

             }, 2000)
    }
    seeMoreButtons.forEach(button => {
        button.onclick = function(){
            carousel.classList.add('showDetail')
        }
    })
    backButton.onclick = function(){
        carousel.classList.remove('showDetail')
    }