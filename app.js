let left = document.getElementsByClassName('bi-caret-left-fill')[0];
let right = document.getElementsByClassName('bi-caret-right')[0];
let cards = document.getElementsByClassName('cards')[0];

left.addEventListener('click',()=>{
    cards.scrollLeft -= 140;
})

right.addEventListener('click',()=>{
    cards.scrollLeft += 140;
})

let poster = document.getElementById('poster');
let title = document.getElementById("title");
let price_cont = document.getElementById("price_cont");

Array.from(document.getElementsByClassName('card')).forEach((ele, i) =>(
    //console.log
    ele.addEventListener('click', ()=>{
        poster.src =ele.getElementsByTagName('img')[0].scr;

    })
))

