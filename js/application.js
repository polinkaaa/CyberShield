const title = document.querySelectorAll('span'),
pop_up = document.querySelectorAll('.pop-up');

title.forEach(function(item, i) {
    item.addEventListener('mouseover', () => {
        pop_up[i].classList.remove('hidden')
    })
    item.addEventListener('mouseout', () => {
        pop_up[i].classList.add('hidden')
    })
})