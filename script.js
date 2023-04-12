const hamburger= document.querySelector(".hamburger");
const ul= document.querySelector("ul");
hamburger.addEventListener("click",()=>{
    ul.classList.toggle("hamactive")

    let hamchild =hamburger.firstElementChild;
    if(ul.classList.contains('hamactive')){
        hamchild.classList.replace('fa-bars','fa-close')
    }
    else{
        hamchild.classList.replace('fa-close','fa-bars')
    }
})
