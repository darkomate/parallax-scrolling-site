let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let leaf2 = document.getElementById('leaf2');

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.left = value * -1.5 + 'px';
    leaf2.style.left = value * 1.5 + 'px';
})