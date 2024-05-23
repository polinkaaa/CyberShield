const word = document.querySelectorAll('.main__btn_tab_word'),
btn = document.querySelector('.main__btn_continue'),
pages = document.querySelectorAll('.pages');
let pages_number = 1;

btn.addEventListener('click', ()=>{
    pages.forEach((item, i) => {
        item.style.display = 'none'
        if (i == pages_number) {
            item.style.display = 'block'
        }
    })
    pages_number++
    if (pages_number === 4) {
        window.location.href='../theory.html'
    }
})

const btn_ex = document.querySelectorAll('.watch_example'),
modal = document.querySelectorAll('.modal_cipher'),
modal_close = document.querySelectorAll('.modal_close')

btn_ex.forEach((item, i) => {
    item.addEventListener('click', function() {
        modal[i].classList.remove('hidden')
    })
})
modal_close.forEach((item, i) => {
    item.addEventListener('click', function() {
        modal[i].classList.add('hidden')
    })
})