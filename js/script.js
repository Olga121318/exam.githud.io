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
        text: 'Существуют тысячи сортов кофе, причем не следует путать понятия вид, разновидность и сорт. На кофейных плантациях мира из 40 природных видов выращивают всего три — арабика, робуста и либерика.'
    },
    {
        imgUrl: 'img/h2-custom-icon-6.png',
        title: 'ВИДЫ ЗЕРЕН',
        text: 'Чем сильнее обжарка, тем труднее различить оригинальный вкус и аромат зерна, поэтому низкосортные смеси всегда подвергаются сильной термообработке. Легкая и средняя обжарка характерна для кенийского, эфиопского, никарагуанского кофе.'
    },
    {
        imgUrl: 'img/h2-custom-icon-8.png',
        title: 'НАВЫНОС',
        text: 'Наречие "навынос" означает, что вы можете покупку унести с собой. Обычно так говорят о еде и напитках из кафе или ресторанов. Пишется слово слитно.'
    },
    {
        imgUrl: 'img/h2-custom-icon-7.png',        
        title: 'СЛАДОСТИ',
        text: 'Парочка модных французских печеньиц-макарон отлично подойдут для колумбийского кофе.'
    },
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


let textCardsData = [
    {
        textCountity: '250',
        title: 'ТИПЫ КОФЕ',
        text: 'Владеем фермой в Колумбии, что позволяет нам ещё больше углубиться в научные исследования и эксперименты.'
    },
    {
        textCountity: '25',
        title: 'ВИДЫ ЗЕРЕН',
        text: 'Жарим на ростерах Тробрат, в создании которых когда-то помогали. Каждую обжарку мы фиксируем в программе.'
    },
    {
        textCountity: '321',
        title: 'СЛАДОСТИ',
        text: 'Готовим свежие сладости по свои собственным рецептам. Всегда свежая выпечка для бодрого дня.'
    },
    {
        textCountity: '35',
        title: 'НАВЫНОС',
        text: 'Скорость приготовления кофе и его качество сильно превосходит конкурентов.'
    }

];

let textCreateCard = function (typeJob) {
    let textListItem = makeElement('div', 'typeJob');
    
    let textCountity = makeElement('div', 'typeJob__textCountity', typeJob.textCountity);
    textListItem.appendChild(textCountity);

    let title = makeElement('h3', 'typeJob__title', typeJob.title);
    textListItem.appendChild(title);

    let text = makeElement('p', 'typeJob__text', typeJob.text);
    textListItem.appendChild(text);

    return textListItem;
};

let textCardList = document.querySelector('.typsJobs');

for (let i = 0; i < textCardsData.length; i++) {
    let textCardItem = textCreateCard(textCardsData[i]);
    textCardList.appendChild(textCardItem);
};

let goodsData =[
    {
        elementGood: '',
        metaLink: 'В КОРЗИНУ',
        title: 'QUATEMALA COFFE',
        price: '18$'

    },
    {
        elementGood: '',
        metaLink: 'В КОРЗИНУ',
        title: 'COLUMBIA COFFE',
        price: '18$'

    },
    {
        elementGood: '',
        metaLink: 'В КОРЗИНУ',
        title: 'KENYA COFFE',
        price: '18$'

    },
    {
        elementGood:  '',
        metaLink: 'В КОРЗИНУ',
        title: 'EFIOPIA COFFE',
        price: '18$'

    }

];

let goodsElement = function (good) {
    let goodListItem = makeElement('div', 'good');

    let elementGood = makeElement('div', 'good__elementGood', good.elementGood);
    goodListItem.appendChild(elementGood);

    let metaLink = makeElement('a', 'good__metaLink', good.metaLink);
    metaLink.href = '#';
    goodListItem.appendChild(metaLink);

    let title = makeElement('h3', 'good__title', good.title);
    goodListItem.appendChild(title);

    let price = makeElement('div', 'good__price', good.price);
    goodListItem.appendChild(price);


    return goodListItem;
};

let goodCardList = document.querySelector('.goods');

for (let i = 0; i < goodsData.length; i++) {
    let goodCardItem = goodsElement(goodsData[i]);
    goodCardList.appendChild(goodCardItem);
};

let logoData = [
        {imgUrl: 'img/clients-img-2-hover.png'},
        {imgUrl: 'img/clients-img-4-hover.png'},
        {imgUrl: 'img/clients-img-5-hover.png'},
        {imgUrl: 'img/clients-img-6-hover.png'},
        {imgUrl: 'img/clients-img-3-hover.png'},
    {imgUrl: 'img/clients-img-1.png'}
];
let logoElement = function (client) {
    let logoListItem = makeElement('li', 'client');

    let picture = makeElement('img', 'client__img');
    picture.src = client.imgUrl;
    picture.alt = client.text;
    logoListItem.appendChild(picture);

   
    return logoListItem;
};

let logoCardList = document.querySelector('.clients');

for (let i = 0; i < logoData.length; i++) {
    let logoCardItem = logoElement(logoData[i]);
    logoCardList.appendChild(logoCardItem);
};



// let backgroundPicture = ['img/product-guatemala.png',
//     'img/product-columbia.png',
//     'img/product-kenya.png',
//     'img/product-efiopia.png'

// ];

// for (let i = 0; i < goodsData.length; i++) {
//     function(){
//     let elementGoodPicture = goodsData[i];
//     let pictureImg
//         good__elementGood
//     }
    
    //     element.style.backgroundImg = backgroundPicture[i];




// let elementGoodPicture = goodsData[i]
// let backgroundPicture = ['img/product-guatemala.png',
//     'img/product-columbia.png',
//     'img/product-kenya.png',
//     'img/product-efiopia.png'

// ];

// for(let i = 0; i < goodsData.length; i++) {
//     let element = document.querySelector('.good__image');
//     element.style.backgroundImg = backgroundPicture[i];

// };
