// =====================
// SCROLL RESET
// =====================

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

// =====================
// GLOBAL STATE
// =====================

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let selectedOptions = {};
let currentGallery = null;


// =====================
// TRANSLATIONS
// =====================

const translations = {
ru: {
title: "Karina Handmade Toys 🧶",
subtitle: "Теплые вязаные игрушки с любовью",
frogTitle: "Лягушечка",
frogDesc: "Мягкая вязаная лягушечка, 23 см.",
sunflowerTitle: "Подсолнух",
sunflowerDesc: "Весёлый подсолнух с глазками, 21 см.",
turtleTitle: "Черепашка",
turtleDesc: "Уютная черепашка, 15 см.",
tulipTitle: "Тюльпан",
tulipDesc: "Вязаный тюльпан, 27 см.",
spiderTitle: "Паучок",
spiderDesc: "Забавный паучок, 17 см.",
cowTitle: "Плюшевая коровка",
cowDesc: "Большая мягкая коровка, 39 см.",
pigTitle: "Свинка",
pigDesc: "Высота 35 см. Мягкая свинка в стиле копилки.",
balloonBearTitle: "Мишка с шариками",
balloonBearDesc: "Персонализированная картина. На шариках можно написать имя.",
snowmanTitle: "Снеговик",
snowmanDesc: "Уютный зимний снеговик ручной работы.",
babyBunnyTitle: "Зайчик для малышей",
babyBunnyDesc: "Набиты только ручки, ножки и голова. Безопасный для малышей.",
bowBunnyTitle: "Зайчик с бантиками",
bowBunnyDesc: "Милый зайчик с бантиками на ушках.",
beerTitle: "Вязаное пиво",
beerDesc: "Высота 30 см. Возможны жёлтый, коричневый и зелёный цвета.",
squirrelTitle: "Белочка",
squirrelDesc: "Большая мягкая белочка, 56 см. Пушистая, уютная и идеально подходит для объятий.",

colors: {
red: "Красный",
lavender: "Лавандовый",
pink: "Розовый",
yellow: "Жёлтый",
brown: "Коричневый",
green: "Зелёный",
blue: "Синий",
beige: "Бежевый"
},
orderBtn: "Заказать",
cartTitle: "Корзина",
checkoutBtn: "Оформить заказ",
clearCartBtn: "Очистить корзину",
totalLabel: "Итого",
emptyCart: "Корзина пуста",
clearConfirm: "Удалить все товары?",
fillError: "Пожалуйста, заполните имя и телефон",
namePlaceholder: "Ваше имя",
phonePlaceholder: "Телефон",
addressPlaceholder: "Адрес доставки (с почтовым индексом)",
commentPlaceholder: "Комментарий или пожелания (необязательно)",
aboutTitle: "Обо мне",
aboutMain: "Я вяжу крючком, потому что это меня успокаивает.",
aboutText1: "Каждая игрушка создаётся вручную с вниманием к деталям.",
aboutText2: "Иногда я продаю готовые работы, а иногда вяжу на заказ.",
aboutText3: "Если вам что-то понравилось — я буду рада связать это для вас.",

orderMessage: "🧶 Новый заказ:",
nameLabel: "Имя",
phoneLabel: "Телефон",
addressLabel: "Адрес",
commentLabel: "Комментарий",

materialsTitle: "О материалах и качестве",
materialsQualityTitle: "Качественная пряжа",
materialsQualityText: "Игрушки связаны из мягкой плюшевой пряжи (100% микрополиэстер). Материал приятный на ощупь и идеально подходит для создания уютных игрушек.",
materialsCareTitle: "Простой уход",
materialsCareText: "Игрушки можно стирать в машине и сушить в сушилке, поэтому за ними легко ухаживать.",
materialsHandmadeTitle: "Ручная работа",
materialsHandmadeText: "Каждая игрушка создаётся вручную с вниманием к деталям и аккуратной обработкой.",

deliveryTitle: "Доставка",
deliveryText1: "Отправляю заказы по всей Чехии любой удобной местной почтовой службой.",
deliveryText2: "Также возможна доставка в другие европейские страны через DHL.",
},

ua: {
title: "Karina Handmade Toys 🧶",
subtitle: "Теплі в’язані іграшки з любов’ю",
frogTitle: "Жабка",
frogDesc: "М’яка в’язана жабка, 23 см.",
sunflowerTitle: "Соняшник",
sunflowerDesc: "Веселий соняшник з оченятами, 21 см.",
turtleTitle: "Черепашка",
turtleDesc: "Затишна черепашка, 15 см.",
tulipTitle: "Тюльпан",
tulipDesc: "В’язаний тюльпан, 27 см.",
spiderTitle: "Павучок",
spiderDesc: "Кумедний павучок, 17 см.",
cowTitle: "Плюшева корівка",
cowDesc: "Велика м’яка корівка, 39 см.",
pigTitle: "Свинка",
pigDesc: "Висота 35 см. М’яка свинка у стилі скарбнички.",
balloonBearTitle: "Ведмедик з кульками",
balloonBearDesc: "Персоналізована картина.",
snowmanTitle: "Сніговик",
snowmanDesc: "Затишний зимовий сніговик ручної роботи.",
babyBunnyTitle: "Зайчик для малюків",
babyBunnyDesc: "Наповнені лише ручки, ніжки та голова.",
bowBunnyTitle: "Зайчик з бантиками",
bowBunnyDesc: "Милий зайчик з бантиками.",
beerTitle: "В’язане пиво",
beerDesc: "Висота 30 см. Можливе в жовтому, коричневому та зеленому кольорах",
squirrelTitle: "Білочка",
squirrelDesc: "Велика м’яка білочка, 56 см. Пухнаста, затишна та ідеальна для обіймів.",

colors: {
red: "Червоний",
lavender: "Лавандовий",
pink: "Рожевий",
yellow: "Жовтий",
brown: "Коричневий",
green: "Зелений",
blue: "Синій",
beige: "Бежевий"
},
orderBtn: "Замовити",
cartTitle: "Кошик",
checkoutBtn: "Оформити замовлення",
clearCartBtn: "Очистити кошик",
totalLabel: "Разом",
emptyCart: "Кошик порожній",
clearConfirm: "Видалити всі товари?",
fillError: "Будь ласка, заповніть ім’я та телефон",
namePlaceholder: "Ваше ім’я",
phonePlaceholder: "Телефон",
addressPlaceholder: "Адреса доставки",
commentPlaceholder: "Коментар (необов’язково)",

aboutTitle: "Про мене",
aboutMain: "Я в’яжу гачком, бо це мене заспокоює.",
aboutText1: "Кожна іграшка створюється вручну з увагою до деталей.",
aboutText2: "Іноді я продаю готові роботи, а іноді в’яжу на замовлення.",
aboutText3: "Якщо вам щось сподобалось — я з радістю зв’яжу це для вас.",

orderMessage: "🧶 Нове замовлення:",
nameLabel: "Ім’я",
phoneLabel: "Телефон",
addressLabel: "Адреса",
commentLabel: "Коментар",

materialsTitle: "Про матеріали та якість",
materialsQualityTitle: "Якісна пряжа",
materialsQualityText: "Іграшки пов’язані з м’якої плюшевої пряжі (100% мікрополіестер). Матеріал приємний на дотик і чудово підходить для створення затишних іграшок.",
materialsCareTitle: "Легкий догляд",
materialsCareText: "Іграшки можна прати в машині та сушити в сушарці, тому за ними легко доглядати.",

deliveryTitle: "Доставка",
deliveryText1: "Відправляю замовлення по всій Чехії зручною місцевою поштовою службою.",
deliveryText2: "Також можлива доставка до інших європейських країн через DHL.",
},

cz: {
title: "Karina Ručně Háčkované Hračky 🧶",
subtitle: "Teplé háčkované hračky s láskou",
frogTitle: "Žabka",
frogDesc: "Měkká háčkovaná žabka, 23 cm.",
sunflowerTitle: "Slunečnice",
sunflowerDesc: "Veselá slunečnice s očima, 21 cm.",
turtleTitle: "Želvička",
turtleDesc: "Roztomilá želvička, 15 cm.",
tulipTitle: "Tulipán",
tulipDesc: "Háčkovaný tulipán, 27 cm.",
spiderTitle: "Pavouček",
spiderDesc: "Roztomilý pavouček, 17 cm.",
cowTitle: "Plyšová kravička",
cowDesc: "Velká měkká kravička, 39 cm.",
pigTitle: "Prasátko",
pigDesc: "Výška 35 cm. Měkké prasátko ve stylu pokladničky.",
balloonBearTitle: "Medvídek s balónky",
balloonBearDesc: "Personalizovaný obraz. Na balónky lze napsat jméno.",
snowmanTitle: "Sněhulák",
snowmanDesc: "Útulný zimní sněhulák ruční výroby.",
babyBunnyTitle: "Zajíček pro miminka",
babyBunnyDesc: "Vyplněné pouze ruce, nohy a hlava. Bezpečný pro miminka.",
bowBunnyTitle: "Zajíček s mašličkami",
bowBunnyDesc: "Roztomilý zajíček s mašličkami na uších.",
beerTitle: "Háčkované pivo",
beerDesc: "Výška 30 cm. Dostupné barvy: žlutá, hnědá a zelená.",
squirrelTitle: "Veverka",
squirrelDesc: "Velká měkká veverka, 56 cm. Nadýchaná, roztomilá a ideální na mazlení.",

colors: {
red: "Červený",
lavender: "Levandulový",
pink: "Růžový",
yellow: "Žlutý",
brown: "Hnědý",
green: "Zelený",
blue: "Modrý",
beige: "Béžový"
},
orderBtn: "Objednat",
cartTitle: "Košík",
checkoutBtn: "Dokončit objednávku",
clearCartBtn: "Vymazat košík",
totalLabel: "Celkem",
emptyCart: "Košík je prázdný",
clearConfirm: "Odstranit všechny položky?",
fillError: "Vyplňte prosím jméno a telefon",
namePlaceholder: "Vaše jméno",
phonePlaceholder: "Telefon",
addressPlaceholder: "Adresa doručení",
commentPlaceholder: "Komentář (nepovinné)",

aboutTitle: "O mně",
aboutMain: "Háčkuji, protože mě to uklidňuje.",
aboutText1: "Každá hračka je vyráběna ručně s důrazem na detail.",
aboutText2: "Někdy prodávám hotové výrobky, někdy háčkuji na zakázku.",
aboutText3: "Pokud se vám něco líbí — ráda vám to uháčkuji na přání.",

orderMessage: "🧶 Nová objednávka:",
nameLabel: "Jméno",
phoneLabel: "Telefon",
addressLabel: "Adresa",
commentLabel: "Komentář",

materialsTitle: "O materiálech a kvalitě",
materialsQualityTitle: "Kvalitní příze",
materialsQualityText: "Hračky jsou háčkované z měkké plyšové příze (100% mikropolyester). Materiál je příjemný na dotek a ideální pro výrobu útulných hraček.",
materialsCareTitle: "Snadná údržba",
materialsCareText: "Hračky lze prát v pračce a sušit v sušičce, takže péče je velmi jednoduchá.",
materialsHandmadeTitle: "Ruční výroba",
materialsHandmadeText: "Každá hračka je vyrobena ručně s důrazem na detail a pečlivé zpracování.",

deliveryTitle: "Delivery",
deliveryText1: "I ship across the Czech Republic using convenient local postal services.",
deliveryText2: "Delivery to other European countries is available via DHL.",
},

en: {
title: "Karina Handmade Crochet Toys 🧶",
subtitle: "Cozy handmade crochet toys made with love",
frogTitle: "Frog",
frogDesc: "Soft crochet frog, 23 cm.",
sunflowerTitle: "Sunflower",
sunflowerDesc: "Cute sunflower with eyes, 21 cm.",
turtleTitle: "Turtle",
turtleDesc: "Adorable crochet turtle, 15 cm.",
tulipTitle: "Tulip",
tulipDesc: "Handmade crochet tulip, 27 cm.",
spiderTitle: "Spider",
spiderDesc: "Cute crochet spider, 17 cm.",
cowTitle: "Plush Cow",
cowDesc: "Large soft plush cow, 39 cm.",
pigTitle: "Pig",
pigDesc: "Height 35 cm. Soft pig in piggy-bank style.",
balloonBearTitle: "Bear with Balloons",
balloonBearDesc: "Personalized artwork. You can add a name on the balloons.",
snowmanTitle: "Snowman",
snowmanDesc: "Cozy handmade winter snowman.",
babyBunnyTitle: "Baby Bunny",
babyBunnyDesc: "Stuffed only in arms, legs and head. Safe for babies.",
bowBunnyTitle: "Bow Bunny",
bowBunnyDesc: "Cute bunny with bows on the ears.",
beerTitle: "Crochet Beer",
beerDesc: "Height 30 cm. Available in yellow, brown and green colors.",
squirrelTitle: "Squirrel",
squirrelDesc: "Large soft squirrel, 56 cm tall. Fluffy, cozy and perfect for cuddles.",

colors: {
red: "Red",
lavender: "Lavender",
pink: "Pink",
yellow: "Yellow",
brown: "Brown",
green: "Green",
blue: "Blue",
beige: "Beige"
},
orderBtn: "Order",
cartTitle: "Cart",
checkoutBtn: "Checkout",
clearCartBtn: "Clear cart",
totalLabel: "Total",
emptyCart: "Cart is empty",
clearConfirm: "Remove all items?",
fillError: "Please enter your name and phone number",
namePlaceholder: "Your name",
phonePlaceholder: "Phone number",
addressPlaceholder: "Delivery address",
commentPlaceholder: "Comment (optional)",

aboutTitle: "About Me",
aboutMain: "I crochet because it helps me relax.",
aboutText1: "Each toy is handmade with attention to detail.",
aboutText2: "Sometimes I sell ready-made pieces, and sometimes I crochet custom orders.",
aboutText3: "If something catches your eye — I would be happy to make it for you.",

orderMessage: "🧶 New order:",
nameLabel: "Name",
phoneLabel: "Phone",
addressLabel: "Address",
commentLabel: "Comment",

materialsTitle: "Materials & Quality",
materialsQualityTitle: "High-quality yarn",
materialsQualityText: "The toys are made from soft plush yarn (100% micropolyester). The material is pleasant to the touch and perfect for cozy handmade toys.",
materialsCareTitle: "Easy care",
materialsCareText: "The toys can be machine washed and tumble dried, making them easy to care for.",
materialsHandmadeTitle: "Handmade",
materialsHandmadeText: "Each toy is carefully handmade with attention to detail and neat finishing.",

deliveryTitle: "Doručení",
deliveryText1: "Zásilky po celé České republice odesílám prostřednictvím místní poštovní služby dle domluvy.",
deliveryText2: "Doručení do dalších evropských zemí je možné přes DHL.",
}
}

// =====================
// LANGUAGE
// =====================

function setLanguage(lang) {

document.querySelectorAll("[data-i18n]").forEach(el => {
const key = el.getAttribute("data-i18n");
if (translations[lang][key]) {
el.textContent = translations[lang][key];
}
});

document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
const key = el.getAttribute("data-i18n-placeholder");
if (translations[lang][key]) {
el.placeholder = translations[lang][key];
}
});

localStorage.setItem("language", lang);

document.querySelectorAll(".lang-switch button")
.forEach(btn => btn.classList.remove("active-lang"));

const activeBtn = document.querySelector(
`.lang-switch button[onclick="setLanguage('${lang}')"]`
);

if (activeBtn) activeBtn.classList.add("active-lang");

updateCart();
}

// =====================
// CART
// =====================

function addToCart(id, price) {

    cart.push({
        id,
        price,
        color: selectedOptions[id] || null
    });

    updateCart();

    const icon = document.querySelector(".cart-icon");

    // перезапуск анимации
    icon.classList.remove("bump");
    void icon.offsetWidth;
    icon.classList.add("bump");
}


function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}


function clearCart() {
    const lang = localStorage.getItem("language") || "ru";

    if (!confirm(translations[lang].clearConfirm)) return;

    cart = [];
    updateCart();
}


function updateCart() {

    const lang = localStorage.getItem("language") || "ru";
    const items = document.getElementById("cart-items");
    items.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        const productName = translations[lang][item.id + "Title"];
        let colorText = "";

        if (item.color && translations[lang].colors[item.color]) {
            colorText = " (" + translations[lang].colors[item.color] + ")";
        }

        const li = document.createElement("li");

        li.innerHTML = `
            <span class="cart-text">
                ${productName}${colorText} — ${item.price} Kč
            </span>
            <button class="remove-btn" onclick="removeFromCart(${index})">✕</button>
        `;

        items.appendChild(li);
    });

    document.getElementById("cart-count").textContent = cart.length;
    document.getElementById("cart-total").textContent = total;

    localStorage.setItem("cart", JSON.stringify(cart));
}


function toggleCart() {

    const cartElement = document.getElementById("cart");
    const overlay = document.getElementById("overlay");

    const isOpen = cartElement.classList.toggle("open");
    overlay.classList.toggle("active");

    document.body.classList.toggle("cart-open", isOpen);

    if (isOpen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
}

// =====================
// CHECKOUT
// =====================

function checkout() {

    const lang = localStorage.getItem("language") || "ru";

    if (cart.length === 0) {
        alert(translations[lang].emptyCart);
        return;
    }

    const name = document.getElementById("customer-name")?.value.trim() || "";
    const phone = document.getElementById("customer-phone")?.value.trim() || "";
    const address = document.getElementById("customer-address")?.value.trim() || "";
    const comment = document.getElementById("customer-comment")?.value.trim() || "";

    if (!name || !phone) {
        alert("Введите имя и телефон");
        return;
    }

    // 🔥 Проверяем мишку ДО формирования сообщения
    const hasBalloonBear = cart.some(item => item.id === "balloonBear");

    if (hasBalloonBear && comment === "") {
        alert("Для заказа «Мишки с шариками» нужно указать имя в комментарии.");
        return;
    }

    let message = translations[lang].orderMessage + "\n\n";

    cart.forEach(item => {
        const productName = translations[lang][item.id + "Title"];

        let colorText = "";
        if (item.color && translations[lang].colors[item.color]) {
            colorText = " (" + translations[lang].colors[item.color] + ")";
        }

        message += `• ${productName}${colorText} — ${item.price} Kč\n`;
    });

    message += `\n👤 ${translations[lang].nameLabel}: ${name}`;
    message += `\n📞 ${translations[lang].phoneLabel}: ${phone}`;

    if (address !== "") {
        message += `\n📍 ${translations[lang].addressLabel}: ${address}`;
    }

    if (comment !== "") {
        message += `\n💬 ${translations[lang].commentLabel}: ${comment}`;
    }

    const telegramUrl =
        "https://t.me/kArishkaaaaaaaaaaaa?text=" +
        encodeURIComponent(message);

    window.open(telegramUrl, "_blank");
}

// =====================
// GALLERY
// =====================

const galleries = {
cow: ["cow1.jpeg", "cow2.jpeg", "cow3.jpeg"],
pig: ["pig1.jpeg", "pig2.jpeg"],
balloonBear: ["balloon1.jpeg", "balloon2.jpeg"],
squirrel: ["squirrel1.jpeg", "squirrel2.jpeg", "squirrel3.jpeg"],
};

function openLightbox(src, galleryName = null, index = 0) {

currentGallery = galleryName;
currentIndex = index;

const lightbox = document.getElementById("lightbox");
const img = document.getElementById("lightbox-img");

img.src = src;

document.querySelectorAll(".lightbox-arrow").forEach(arrow => {
arrow.style.display = galleryName ? "block" : "none";
});

lightbox.style.display = "flex";
}

function closeLightbox(event) {
if (event) event.stopPropagation();
document.getElementById("lightbox").style.display = "none";
}

function nextLightbox(event) {
event.stopPropagation();
if (!currentGallery) return;

currentIndex = (currentIndex + 1) % galleries[currentGallery].length;
document.getElementById("lightbox-img").src =
galleries[currentGallery][currentIndex];
}

function prevLightbox(event) {
event.stopPropagation();
if (!currentGallery) return;

currentIndex =
(currentIndex - 1 + galleries[currentGallery].length) %
galleries[currentGallery].length;

document.getElementById("lightbox-img").src =
galleries[currentGallery][currentIndex];
}
// =====================
// MINI GALLERY (карточки)
// =====================

let galleryIndexes = {};

function nextImageGallery(event, galleryName, imgId) {
    event.stopPropagation();

    if (!galleryIndexes[galleryName]) {
        galleryIndexes[galleryName] = 0;
    }

    galleryIndexes[galleryName] =
        (galleryIndexes[galleryName] + 1) %
        galleries[galleryName].length;

    document.getElementById(imgId).src =
        galleries[galleryName][galleryIndexes[galleryName]];
}

function prevImageGallery(event, galleryName, imgId) {
    event.stopPropagation();

    if (!galleryIndexes[galleryName]) {
        galleryIndexes[galleryName] = 0;
    }

    galleryIndexes[galleryName] =
        (galleryIndexes[galleryName] - 1 + galleries[galleryName].length) %
        galleries[galleryName].length;

    document.getElementById(imgId).src =
        galleries[galleryName][galleryIndexes[galleryName]];
}
// =====================
// COLOR SWITCH
// =====================

function selectColor(element, productId, colorKey) {

const parent = element.parentElement;

parent.querySelectorAll(".color-circle")
.forEach(circle => circle.classList.remove("active"));

element.classList.add("active");

selectedOptions[productId] = colorKey;

const img = document.getElementById(productId + "-main");

if (img) {
img.src = productId + "-" + colorKey + ".jpeg";
}
}

// =====================
// SCROLL BUTTON
// =====================

window.addEventListener("scroll", () => {
const btn = document.getElementById("scrollTopBtn");
btn.style.display = window.scrollY > 300 ? "flex" : "none";
});

function scrollToTop() {
window.scrollTo({ top: 0, behavior: "smooth" });
}

// =====================
// DOM READY
// =====================

document.addEventListener("DOMContentLoaded", () => {

window.scrollTo(0, 0);

const savedLang = localStorage.getItem("language") || "ru";
setLanguage(savedLang);

updateCart();
});
