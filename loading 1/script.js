const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');
function handleindicator(el){
    items.forEach(items=> {
        items.classList.remove('is-active');
        items.removeAttribute('style');
    })

    indicator.style.width = `${el.offsetwidth}px`;
    indicator.style.left = `${el.offsetleft}px`;
    indicator.style.backgroundColor = el.getAttribute('active-color');

    el.classList.add('is-active');
    el.style.color = el.getAttribute('active-color');
    
}

items.forEach((item,index)=>{
    item.addEventListener('click', (e) => {handleindicator(e.target)});
    item.classList.contains('is-active')&& handleindicator(item);
})

