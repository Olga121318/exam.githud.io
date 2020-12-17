/* Индекс слайда по умолчанию */
// let slideIndex = 1;
// showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
// function plusSlide() {
//     showSlides(slideIndex += 1);
// }

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
// function minusSlide() {
//     showSlides(slideIndex -= 1);
// }

/* Устанавливает текущий слайд */
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

/* Основная функция слайдера */
// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("item");
//     let dots = document.getElementsByClassName("slider-dots_item");
//     if (n > slides.length) {
//         slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }
// setInterval(10000, plusSlide);
let cardsData = [
    {   
        imgUrl: 'img/h2-custom-icon-5.png',
        title: 'ТИПЫ КОФЕ',
        text: 'Владеем фермой в Колумбии, что позволяет нам ещё больше углубиться в научные исследования и эксперименты.'
    },
    {
        imgUrl: 'img/h2-custom-icon-6.png',
        title: 'ВИДЫ ЗЕРЕН',
        text: 'Жарим на ростерах Тробрат, в создании которых когда-то помогали. Каждую обжарку мы фиксируем в программе.'
    },
    {
        imgUrl: 'img/h2-custom-icon-7.png',
        title: 'НА ВЫНОС',
        text: 'Скорость приготовления кофе и его качество сильно превосходит конкурентов.'
    },
    {
        imgUrl: 'img/h2-custom-icon-8.png',
        title: 'СЛАДОСТИ',
        text: 'Готовим свежие сладости по свои собственным рецептам. Всегда свежая выпечка для бодрого дня.'
    }
]; 


let makeElement = function (tagName, className, text) {
  let element = document.createElement(tagName);
  element.classList.add(className);
    if (text) {
        element.textContent = text;
    }
  return element;
};
let createCard = function (service) {
    let listItem = makeElement('li', 'service');

    let picture = makeElement('img', 'service__image');
    picture.src = service.imgUrl;
    picture.alt = service.text;
    listItem.appendChild(picture);


    let title = makeElement('h3', 'service__title', service.title);
    listItem.appendChild(title);

    let text = makeElement('p', 'service__text', service.text);
    listItem.appendChild(text);

    return listItem;
};

let cardList = document.querySelector('.services');

for (let i = 0; i < cardsData.length; i++) {
    let cardItem = createCard(cardsData[i]);
    cardList.appendChild(cardItem);
};

let newCardsData = [
    {
        imgUrl: 'img/blog-1-img-2.jpg',
        title: 'ПЕРЕГОВОРЫ',
        text: 'Теория эманации диссонирует незначительный эйдос. Миракль образует конструктивный импрессионизм. Пушкин подарил Гоголю фабулу "Мертвых душ" не потому, что художественное переживание изящно продолжает самодостаточный миракль. Богатство мировой литературы от Платона до Ортеги-и-Гассета свидетельствует о том, что канон аккумулирует невротический "кодекс деяний".',
        metaLink: 'ЧИТАТЬ ДАЛЕЕ...'
    },
    {
        imgUrl: 'img/blog-1-img-1.jpg',
        title: 'МАСТЕР-КЛАСС',
        text: 'Бизнес-стратегия отражает целевой сегмент рынка. Производство вполне выполнимо. Медиабизнес индуцирует типичный метод изучения рынка. Баланс спроса и предложения вырождена. Стимулирование сбыта продуцирует рекламный бриф. К тому же стратегическое планирование переворачивает нишевый проект.',
        metaLink: 'ЧИТАТЬ ДАЛЕЕ...'
    },
    {
        imgUrl: 'img/blog-1-img-3.jpg',
        title: 'ДЕГУСТАЦИЯ',
        text: 'Проникновение глубинных магм смещает меандр. Согласно Венинг-Мейенсу, элювиальное образование существенно прекращает грязевой вулкан, что позволяет проследить соответствующий денудационный уровень. Фирн извержен. Исследование указанной связи должно опираться на тот факт, что эоловое засоление разогревает бараний лоб.',
        metaLink: 'ЧИТАТЬ ДАЛЕЕ...'
    }
];
let newCreateCard = function (description) {
    let newListItem = makeElement('li', 'description');

    let picture = makeElement('img', 'description__image');
    picture.src = description.imgUrl;
    picture.alt = description.title;
    newListItem.appendChild(picture);


    let title = makeElement('a', 'description__title', description.title);
    title.href = '#';
    newListItem.appendChild(title);

    let text = makeElement('p', 'description__text', description.text);
    newListItem.appendChild(text);

    let metaLink = makeElement('a', 'description__link', description.metaLink);
    metaLink.href = '#';
    newListItem.appendChild(metaLink);

    return newListItem;
};

let newCardList = document.querySelector('.descriptions');

for (let i = 0; i < newCardsData.length; i++) {
    let newCardItem = newCreateCard(newCardsData[i]);
    newCardList.appendChild(newCardItem);
};


