function changeMainImage(imageSrc, boxColour){
    const mainImage = document.querySelector(".mainImg img");
    const box1=document.querySelector(".box1");
    const box2=document.querySelector(".box2");
    mainImage.src = imageSrc;

    box1.style.backgroundColor=boxColour;
    box2.style.backgroundColor=boxColour;
}




TweenMax.from(".logo", 1, {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom("nav ul li", 1, {
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut
},0.1)

//green
gsap.from('.stripe2',{ duration: 1, y: '100%', x: '-100%', ease:'power2'});
//blue
gsap.from('.stripe4',{ duration: 1, y: '100%', x: '-100%', ease:'power2'});
// red
gsap.from('.stripe3', { duration: 1, height: 0, ease: 'power2' });

// yellow
gsap.from('.stripe1', { duration: 1, height: 0, ease: 'power2' });

