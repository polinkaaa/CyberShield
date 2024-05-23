const accordion = document.querySelectorAll(".tab__accordion"),
tab = document.querySelectorAll(".tab"),
arrow = document.querySelectorAll(".tab__arrow"),
pages = document.querySelectorAll('.pages'),
btn = document.querySelector('.main__btn_continue');
let pages_number = 1;

btn.addEventListener('click', ()=>{
    pages.forEach((item, i) => {
        item.style.display = 'none'
        if (i == pages_number) {
            item.style.display = 'block'
        }
    })
    pages_number++
    if (pages_number === 3) {
        window.location.href='../theory.html'
    }
})

tab.forEach(function (item, index) {
    item.addEventListener("click", function () {
        toggleTwoClasses(accordion[index], "is-visible", "is-hidden", 500);
        item.classList.add('checked');
        if (accordion[index].classList.contains('is-hidden')) {
            arrow[index].src = '../../img/theory/plus.png'
        } else {
            arrow[index].src = '../../img/theory/minus.png'
            item.style.transition = "0.6s";
        }
    })
})

function toggleTwoClasses(element, first, second, timeOfAnimation) {
    if (!element.classList.contains(first)) {
      element.classList.add(first);
      element.classList.remove(second);
    } else {
      element.classList.add(second);
      window.setTimeout(function() {
        element.classList.remove(first);
      }, timeOfAnimation);
    }
  }