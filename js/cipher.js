const tabNav = document.querySelectorAll('.main__btn_tab_exist'),
tabContent = document.querySelectorAll('.tab'),
btn = document.querySelector('.main__btn_continue'),
word = document.querySelectorAll('.main__btn_tab_word'),
pages = document.querySelectorAll('.pages');
let pages_number = 1;

tabNav.forEach((item, key) => {
    item.addEventListener('click', () => {
        checkSelectBtn(key);
        selectTabContent(key);
        selectWordContent(key);
        checkTabs();
    });
});
word.forEach((item, key) => {
    item.addEventListener('click', () => {
        checkSelectBtn(key);
        selectTabContent(key);
        selectWordContent(key);
        checkTabs();
    });
});

btn.addEventListener('click', ()=>{
    pages.forEach((item, i) => {
        item.style.display = 'none'
        if (i == pages_number) {
            item.style.display = 'block'
        }
    })
    pages_number++
    if (pages_number === 6) {
        window.location.href='../theory.html'
    }
})

function checkSelectBtn(key) {
    word.forEach((btn, index) => {
        if (key === index) {
            btn.classList.add('checked')
        }
    })
}

function selectTabContent(key) {
    tabContent.forEach((item, index) => {
        key === index ? item.classList.add('is-active', 'checked') : item.classList.remove('is-active');
    });
}

function selectWordContent(key) {
    word.forEach((item, index) => {
        key === index ? item.classList.add('is-active', 'checked') : item.classList.remove('is-active');
    });
}

function checkTabs() {
    const checked = document.querySelectorAll('.main__btn_tab_word.checked').length;
    word.length === checked ? btn.disabled = false : '';
}



const cards = document.querySelectorAll('.card'),
cardTitle = document.querySelectorAll('.card__title'),
cardDesc = document.querySelectorAll('.card__back_description');

cards.forEach(function (item, index) {
    item.addEventListener('click', function () {
        cardTitle[index].classList.toggle('hidden');
        cards[index].classList.toggle('color_blue')
        cardDesc[index].classList.toggle('hidden');
        item.classList.add('checked');
        item.classList.toggle('flipped');
        if (item.classList.contains('flipped')) {
            cardDesc[index].style.transform = "rotateY(180deg)";
        } else {
            cardDesc[index].style.transform = "rotateY(0deg)";
        }
    });
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