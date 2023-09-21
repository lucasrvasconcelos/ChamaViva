//ON LOAD

const header = document.querySelector("header")
const loadind = document.querySelector(".loading")

const main = document.querySelector("body main")


$(window).on("load", function () {
    // Handler for .load() called.

    main.style.display  = 'block'
    header.style.display = 'flex'

    setTimeout(() => {
        ScrollReveal().reveal('.headline', 
    { 
        delay: 0, 
        reset: false , 
        duration: 2000,
        distance: '35px',
        origin: 'bottom',
        // rotate: {
        //     x: 20,
        //     z: 20
        // }
        scale: 0.85,
    });

    ScrollReveal().reveal('.headline_02', 
    { 
        delay: 0, 
        reset: true , 
        duration: 3000,
        distance: '45px',
        origin: 'bottom',
        // rotate: {
        //     x: 20,
        //     z: 20
        // }
        scale: 0.85,
    });

    ScrollReveal().reveal('.headline_03', 
    { 
        delay: 0, 
        reset: true , 
        duration: 200,
        distance: '200px',
        origin: 'top',
        opacity: 0,
        // rotate: {
        //     x: 20,
        //     z: 20
        // }
        scale: 0.85,
    });

        loadind.style.display = 'none'
        
        
    }, 1000);
    
});
