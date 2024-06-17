let counter = 0;
const counter_profile = document.querySelector('.counter');
let tasks = [
    {
        title: "Тест",
        text: "Поточный шифр - это <br>Выберите правильный вариант ответа (в ответе укажите номер верного ответа): <br>1. способ шифрования данных, при котором информация шифруется одним ключом, а расшифровывается другим. ",
        point: 2,
        text_more:"2. специальный алгоритм, который применяется для защиты информации путем её шифрования. <br>3. симметричный шифр, в котором каждый символ открытого текста преобразуется в символ шифрованного текста в зависимости не только от используемого ключа, но и от его расположения в потоке открытого текста. <br>4. процесс преобразования зашифрованного текста обратно в открытый текст с использованием того же ключа.",
        answer: 3,
        difficulty: 'Легко',
        help: "Стоит лучше изучить тему Шифры",
    },
    {
        title: "Тест",
        text: "Расшифрование шифр - это <br>Выберите правильный вариант ответа (в ответе укажите номер верного ответа): <br>1. специальный алгоритм, который применяется для защиты информации путем её шифрования. ",
        point: 2,
        text_more: "2. способ шифрования данных, при котором информация шифруется одним ключом, а расшифровывается другим.<br>3. процесс преобразования зашифрованного текста обратно в открытый текст с использованием того же ключа.<br>4. симметричный шифр, в котором каждый символ открытого текста преобразуется в символ шифрованного текста в зависимости не только от используемого ключа, но и от его расположения в потоке открытого текста.",
        answer: 3,
        difficulty: 'Легко',
        help: "Стоит лучше изучить тему Шифры",
    },
    {
        title: "Тест",
        text: "Шифр - это <br>Выберите правильный вариант ответа (в ответе укажите номер верного ответа): <br>1. симметричный шифр, в котором каждый символ открытого текста преобразуется в символ шифрованного текста в зависимости не только от ",
        point: 2,
        text_more: "2. используемого ключа, но и от его расположения в потоке открытого текста.<br>3. процесс преобразования зашифрованного текста обратно в открытый текст с использованием того же ключа.<br>4. специальный алгоритм, который применяется для защиты информации путем её шифрования.<br>5. способ шифрования данных, при котором информация шифруется одним ключом, а расшифровывается другим.",
        answer: 3,
        difficulty: 'Легко',
        help: "Стоит лучше изучить тему Шифры",
    },
    {
        title: "Тест",
        text: "Каким шифром закодировано сообщение: АААВА ВАBВА ААААВ AАBAA BAAAA BAAAB AАBBB AAAA AAAA ABABА AAАBB? <br>Выберите правильный вариант ответа (в ответе укажите номер верного ответа):",
        point: 2,
        text_more: "1. Шифр Бифид<br>2. Шифр Гронсфельда<br>3. Стеганография<br>4. Шифр Атбаш<br>5. Шифр Бэкона",
        answer: 5,
        difficulty: 'Легко',
        help: "Стоит лучше изучить тему Шифры",
    },
    {
        title: "Тест",
        text: "Как называется один из старейших и наиболее известных алгоритмов в математике, который используется для нахождения НОД двух целых чисел? (в ответе укажите номер верного ответа):",
        point: 2,
        text_more: "1. Теорема Эйлера<br>2. Алгоритм Евклида<br>3. XOR-шифрование<br>4. Генерация простых чисел",
        answer: 2,
        difficulty: 'Легко',
        help: "Стоит лучше изучить тему Математические алгоритмы",
    },
    {
        title: "Тест",
        text: "Как называется один из старейших и наиболее известных алгоритмов в математике, который используется для нахождения НОД двух целых чисел? (в ответе укажите номер верного ответа):",
        point: 2,
        text_more: "1. Теорема Эйлера<br>2. Алгоритм Евклида<br>3. XOR-шифрование<br>4. Генерация простых чисел",
        answer: 2,
        difficulty: 'Легко',
        help: "Стоит лучше изучить тему Математические алгоритмы",
    },
    {
        title: "Тест",
        text: "Как называется шифр, который заменяет каждую букву алфавита на ее симметричную? (в ответе укажите номер верного ответа):",
        point: 2,
        text_more: "1. Квадрат Полибия<br>2. Стеганография<br>3. Симметричный шифр<br>4. Шифр Трисемус<br>5. Шифр Кардано<br>6. Шифр Атбаш",
        answer: 6,
        difficulty: 'Легко',
        help: "Стоит лучше изучить тему Шифры",
    }
]
let task_steg = [
    {
        title: "Стереограмма",
        desc: "Напишите слово, спрятанное в стереограме",
        image: "../img/tasks/image.png",
        point: 4,
        answer: "Встраивание",
        difficulty: 'Средне',
        help: "1. Откройте стереограмму на вашем устройстве или распечатайте ее.<br>2. Расположите изображение на уровне глаз, сохраняя неподвижность.<br>3. Сфокусируйте взгляд на определенной точке вдали, глядя «сквозь изображение».<br>4. Медленно сближайте глаза, пока две половины изображения не сольются.<br>5. Когда изображение начнет становиться размытым, сконцентрируйтесь на получившемся объемном изображении.",
    },
    {
        title: "Стереограмма",
        desc: "Напишите слово, спрятанное в стереограме",
        image: "../img/tasks/image2.png",
        point: 4,
        answer: "Шифр",
        difficulty: 'Средне',
        help: "1. Откройте стереограмму на вашем устройстве или распечатайте ее.<br>2. Расположите изображение на уровне глаз, сохраняя неподвижность.<br>3. Сфокусируйте взгляд на определенной точке вдали, глядя «сквозь изображение».<br>4. Медленно сближайте глаза, пока две половины изображения не сольются.<br>5. Когда изображение начнет становиться размытым, сконцентрируйтесь на получившемся объемном изображении.",
    },
    {
        title: "Стереограмма",
        desc: "Напишите слово, спрятанное в стереограме",
        image: "../img/tasks/image3.png",
        point: 4,
        answer: "Алгоритм",
        difficulty: 'Средне',
        help: "1. Откройте стереограмму на вашем устройстве или распечатайте ее.<br>2. Расположите изображение на уровне глаз, сохраняя неподвижность.<br>3. Сфокусируйте взгляд на определенной точке вдали, глядя «сквозь изображение».<br>4. Медленно сближайте глаза, пока две половины изображения не сольются.<br>5. Когда изображение начнет становиться размытым, сконцентрируйтесь на получившемся объемном изображении.",
    },
    {
        title: "Стеганография",
        desc: "Напишите слово, спрятанное в изображении",
        image: "../img/tasks/image4.png",
        point: 6,
        answer: "cryptogramma",
        difficulty: 'Средне',
        help: "Воспользуйтесь сайтом https://stylesuxx.github.io/steganography/",
    },
    {
        title: "Стеганография",
        desc: "Напишите слово, спрятанное в изображении",
        image: "../img/tasks/image5.png",
        point: 6,
        answer: "message",
        difficulty: 'Средне',
        help: "Воспользуйтесь сайтом https://stylesuxx.github.io/steganography/",
    },
]
let bolt, gaika, delbtn=0;
//if (location.href=='https://polinkaaa.github.io/CyberShield/html/tasks.html'){
    if (location.href=='http://127.0.0.1:5500/html/tasks.html'){
    let crypto = document.querySelector('.crypto'),
    stegano = document.querySelector('.stegano');
    bolt = JSON.parse(localStorage.getItem("bolt"));
    if (bolt == 3) {
        tasks = JSON.parse(localStorage.getItem("myKey2"));
    }
    function load_tasks() {
        crypto.innerHTML = ""
        if (bolt == 3) {
            tasks = JSON.parse(localStorage.getItem("myKey2"));
        }
        console.log(tasks);
        for (i=0; i<100; i++) {
            if (tasks[i] != undefined) {
                crypto.innerHTML += `<div class="task_item">
                    <div class="flex_text_point">
                        <p class="task_themes">${tasks[i].title}</p>
                        <div class="flex_task">
                            <p class="task_themes">${tasks[i].point}🏆</p>
                            <p class="difficulty">${tasks[i].difficulty}</p>
                        </div>
                    </div>
                    <p class="task_text">${tasks[i].text}</p>
                    <div class="more_task hidden">
                        <p class="task_text">${tasks[i].text_more}</p>
                        <div class="task_flex">
                            <div class="task_flex">
                                <input type="text" class="answer_task"/>
                                <button class="answer_btn">Ответить</button>
                            </div>
                            <button class="answer_btn_help">Помощь</button>
                        </div>
                    </div>
                    <div class="task_flex">
                        <button class="read_more_btn">Читать далее</button>
                        <button class="done">Удалить</button>
                    </div>
                    
                    <div class="modal hidden">
                        <p>${tasks[i].help}</p>
                        <button class="btn_task_modal_close">Закрыть</button>
                    </div>
                </div>`;
            }
        }
    }
    load_tasks()
    
    for (i=0; i<task_steg.length; i++) {
        stegano.innerHTML += `<div class="task_item">
            <div class="flex_text_point">
                <p class="task_themes">${task_steg[i].title}</p>
                <div class="flex_task">
                    <p class="task_themes">${task_steg[i].point}🏆</p>
                    <p class="difficulty">${task_steg[i].difficulty}</p>
                </div>
            </div>
            <p class="task_text">${task_steg[i].desc}</p>
            <div class="more_task hidden">
                <img class="task_img" src="${task_steg[i].image}"></img>
                <div class="task_flex">
                    <div class="task_flex">
                        <input type="text" class="answer_task_steg"/>
                        <button class="answer_btn_steg">Ответить</button>
                    </div>
                    <button class="answer_btn_help_steg">Помощь</button>
                </div>
            </div>
            <button class="read_more_btn">Читать далее</button>
            <div class="modal_steg hidden">
                <p>${task_steg[i].help}</p>
                <button class="btn_task_modal_close_steg">Закрыть</button>
            </div>
        </div>`;
    }
    
    
    const read_more = document.querySelectorAll('.read_more_btn'),
    more_text = document.querySelectorAll(".more_task"),
    answer_btn = document.querySelectorAll('.answer_btn'),
    answer_btn_steg = document.querySelectorAll('.answer_btn_steg'),
    answer_task = document.querySelectorAll('.answer_task'),
    answer_task_steg = document.querySelectorAll('.answer_task_steg'),
    answer_btn_help = document.querySelectorAll('.answer_btn_help'),
    answer_btn_help_steg = document.querySelectorAll('.answer_btn_help_steg'),
    btn_task_modal_close = document.querySelectorAll('.btn_task_modal_close'),
    modal = document.querySelectorAll('.modal'),
    modal_steg = document.querySelectorAll('.modal_steg'),
    btn_task_modal_close_steg = document.querySelectorAll('.btn_task_modal_close_steg');
    let done = document.querySelectorAll('.done');

    done.forEach(function(item, key) {
        item.addEventListener('click', () => {
            tasks.splice(key, 1)
            bolt=3
            localStorage.setItem("myKey2",JSON.stringify(tasks));
            load_tasks()
            
             //   }                
                //console.log(done)
           //})
        })
    })
    read_more.forEach(function(item, i) {
        item.addEventListener('click', () => {
            moreText(i);
        })
    })
    
    
    function moreText(i) {
        if (more_text[i].classList.contains('hidden')) {
            read_more[i].innerHTML = "Меньше";
            more_text[i].classList.remove('hidden');
        } 
        else {
            read_more[i].innerHTML = "Читать далее";
            more_text[i].classList.add('hidden');
        }
    }
    
    answer_btn.forEach(function(item, i) {
        item.addEventListener('click', () => {
            if (answer_task[i].value == tasks[i].answer) {
                answer_task[i].style.borderColor = '#00FF00';
                counter++;
                localStorage.setItem("counter",JSON.stringify(counter));
                done[i].classList.remove('hidden')
                //let qwqwqw=crypto;
                //localStorage.setItem("tasks",JSON.stringify(qwqwqw));
                //console.log(crypto)
                //gaika = 7
                //localStorage.setItem("gaika",JSON.stringify(gaika));
            } else {
                answer_task[i].style.borderColor = '#FF0000'
            }
        })
    })

    answer_btn_help.forEach(function(item, i) {
        item.addEventListener('click', ()=>{
            modal[i].classList.remove('hidden')
        })
    })

    answer_btn_help_steg.forEach(function(item, i) {
        item.addEventListener('click', ()=>{
            modal_steg[i].classList.remove('hidden')
        })
    })/**/
    
    btn_task_modal_close.forEach(function(item,i) {
        item.addEventListener('click', ()=> {
            modal[i].classList.add('hidden')
        })
    })

    btn_task_modal_close_steg.forEach(function(item,i) {
        item.addEventListener('click', ()=> {
            modal_steg[i].classList.add('hidden')
        })
    })

    answer_btn_steg.forEach(function(item, i) {
        item.addEventListener('click', () => {
            if (answer_task_steg[i].value == task_steg[i].answer) {
                answer_task_steg[i].style.borderColor = '#00FF00'
                counter++;
                localStorage.setItem("counter",JSON.stringify(counter));
            } else {
                answer_task_steg[i].style.borderColor = '#FF0000'
            }
        })
    })
    
    const classification = document.querySelectorAll('.classification');
    classification.forEach((item, key) => {
        item.addEventListener('click', () => {
            item.classList.add('is-active');
            if (key == 0) {
                classification[1].classList.remove('is-active');
                crypto.style.display = 'block';
                stegano.style.display = 'none';
            } else {
                classification[0].classList.remove('is-active');
                stegano.style.display = 'block';
                crypto.style.display = 'none';
            }
            
        })
    })
} 

//if (location.href=='https://polinkaaa.github.io/CyberShield/html/admin.html') {
    if (location.href=='http://127.0.0.1:5500/html/admin.html') {
    const title_task_element = document.querySelector('.admin_field_title'),
    description_task_element = document.querySelector('.admin_field_description'),
    help_task_element = document.querySelector('.admin_field_help'),
    answer_task_element = document.querySelector('.admin_field_answer'),
    point_task_element = document.querySelector('.admin_field_point'),
    difficulty_task_element = document.querySelector('.admin_field_difficulty'),
    form_auth_button = document.querySelector('.form_auth_button');

    let title_task, description_task, help_task, answer_task, point_task, difficulty_task;

    form_auth_button.addEventListener('click', function() {
        title_task = title_task_element.value;
        description_task = description_task_element.value;
        help_task = help_task_element.value;
        answer_task = answer_task_element.value;
        point_task = point_task_element.value;
        difficulty_task = difficulty_task_element.value;
        if (title_task != '' && description_task != '' && help_task != '' && answer_task != '' && point_task != '' && difficulty_task != '') {
            let new_task = {
                title: title_task,
                text: description_task,
                point: point_task,
                text_more: "",
                answer: answer_task,
                difficulty: difficulty_task,
                help: help_task,
            }
            bolt = 3;
            localStorage.setItem("bolt",JSON.stringify(bolt));
            tasks.unshift(new_task)
            localStorage.setItem("myKey2",JSON.stringify(tasks));
        }
        
    })
}

let login = false;
let name_user, email_user, password_user;

//if (location.href=='https://polinkaaa.github.io/CyberShield/html/registration.html') {
if (location.href=='http://127.0.0.1:5500/html/registration.html') {
    const reg = document.querySelector('.form_auth_button_reg'),
    input = document.querySelectorAll('.form_login_reg');
    input.forEach((item)=>{
        item.addEventListener('input', function() {
            if (input[0].value != '' && input[1].value != '' && input[2].value != '') {
                login = true;
                name_user = input[0].value;
                email_user = input[1].value;
                password_user = input[2].value;
                reg.style.cursor='pointer'
                
            } else {
                reg.href = '#'
                reg.style.cursor='default'
            }
        })
    })
    reg.addEventListener('click', function() {
        localStorage.setItem("name_user",JSON.stringify(name_user));
        localStorage.setItem("email_user",JSON.stringify(email_user));
        reg.href = '../html/profile.html'
    })
}

//if (location.href=='https://polinkaaa.github.io/CyberShield/html/profile.html') {
if (location.href=='http://127.0.0.1:5500/html/profile.html') {
    name_user = JSON.parse(localStorage.getItem("name_user"));
    email_user = JSON.parse(localStorage.getItem("email_user"));
    const name_field = document.querySelector('.name_profile'),
    email_field = document.querySelector('.email_profile');
    name_field.innerHTML = name_user;
    email_field.innerHTML = email_user;
    counter = JSON.parse(localStorage.getItem("counter"));
    counter_profile.innerHTML = counter
}
