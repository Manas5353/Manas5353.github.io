const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () =>{
    const currScroll =window.scrollX
    if(currScroll <=0){
        body.classList.remove("scroll-up")
    }

    if(currScroll > lastScroll && !body.classList.contains("scroll-down")){
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }
    if(currScroll < lastScroll && !body.classList.contains("scroll-down")){
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
    }
    lastScroll = currScroll;
})
