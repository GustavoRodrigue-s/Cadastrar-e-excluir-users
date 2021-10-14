const buttonExpand = document.querySelector('#expand-h1');
const divExpand = document.querySelector('.expand-add');

let show = false;

buttonExpand.addEventListener('click', () => {
    show = !show;
    
    buttonExpand.dataset.js = show;
    divExpand.classList.toggle('active');
})