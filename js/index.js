let login = false;
const reg = document.querySelector('.form_auth_button_reg'),
log = document.querySelector('.form_auth_button'),
reg_nick = document.querySelector('.form_login_reg');
console.log(reg_nick.ariaValueText)

reg.addEventListener('click', function() {
    login = true
})
log.addEventListener('click', function() {
    login = true
})