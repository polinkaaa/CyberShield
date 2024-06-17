const modal_w = document.querySelector('.modal_w'),
modal_w_close = document.querySelector('.modal_w_close'),
modal_open_icon = document.querySelector('.modal_open_icon');

modal_open_icon.addEventListener('click', () => {
    modal_w.style.top = "0px"
})

modal_w_close.addEventListener('click', () => {
    modal_w.style.top = "-400px"
})