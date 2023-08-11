let session = new Map();

function handleSession() {
    // Сохраним время начала сессии
    session.set("startDate", new Date().toLocaleString())
    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent)
}

let sessionLog = function logSession() {
    for (let l of session) {
        console.log(l);
    }
}

function checkAge(){
    session.set("age", prompt("Введите ваш возраст"));

    if (session.get("age") >= 18) {
        let loginDate = new Date().toLocaleString();
        alert('Приветствуем на LifeSpot ' + loginDate);
        session.set("StartSessionDate", loginDate);
    } else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}

/*Код ниже отрабатывает каждый раз при вводе символа в input */
function filterContent() {
    // Сохраняем текст пользовательского запроса.
    let inputString=document.getElementsByTagName('input')[0].value.toLowerCase();
    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements=document.getElementsByClassName('video-container');
    // Пробегаемся по контейнерам
    for (let i=0; i <= elements.length; i++ ){
        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].querySelector(".video-title").innerText;
        // Выполняем фильтрацию, сравнивая значения в нижнем регистре
        if (!videoText.toLowerCase().includes(inputString.toLowerCase())) {
            // Описание
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}

setTimeout(() =>
    alert("Нравится LifeSpot? " + '\n' + "Подпишитесь на наш Instagram @lifespot999!"), 5000);
