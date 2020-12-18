document.addEventListener('DOMContentLoaded', ()=>{
    const elemntosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elemntosCarousel, {
        duration:250,
        dist: -80,
        shift:5,
        padding:5,
        numVisible:3,
        indicators: true,
        noWrap: false,
        
    });
})