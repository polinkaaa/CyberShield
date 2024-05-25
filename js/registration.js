const reg = document.querySelector('.form_auth_button_reg'),
input = document.querySelectorAll('.form_login_reg'),
name_field = document.querySelector('.name_profile'),
email_field = document.querySelector('.email_profile');
let login = false;
let name_user, email_user, password_user;

input.forEach((item)=>{
    item.addEventListener('input', function() {
        if (input[0].value != '' && input[1].value != '' && input[2].value != '') {
            reg.style.cursor='pointer'
            reg.href = '../html/profile.html'
            login = true;
            name_user = input[0].value;
            email_user = input[1].value;
            password_user = input[2].value;
        } else {
            reg.href = '#'
            reg.style.cursor='default'
        }
    })
})
if (login) {
    console.log('working')
    name_field.innerHTML = name_user;
    email_field.innerHTML = email_user
}


