const tab_info = document.querySelectorAll('.tab_info'),
num = document.querySelectorAll('.num'),
main__btn_continue = document.querySelector('.main__btn_continue'),
pages = document.querySelectorAll('.pages');

num.forEach(function(item, i) {
    item.addEventListener('click', () => {
        num.forEach((btn) => {
            btn.classList.remove('active');
        })
        item.classList.add('active', 'checked');

        tab_info.forEach((tab, index) => {
            if (i==index) {
                tab.classList.remove('hidden');
            } else {
                tab.classList.add('hidden');
            }
        })
        const checked = document.querySelectorAll('.num.checked').length
        num.length === checked ? main__btn_continue.disabled = false : '';
    })
})

let pages_number = 1;
main__btn_continue.addEventListener('click', () => {
    pages.forEach((item, i) => {
        item.classList.add('hidden');
        if (i == pages_number) {
            item.classList.remove('hidden');
        }
    })
    pages_number++
    if (pages_number === 3) {
        window.location.href='../theory.html'
    }
})
