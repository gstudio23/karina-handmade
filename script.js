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
frogSize: "Размер: ~ 20 см",
sunflowerTitle: "Подсолнух",
sunflowerSize: "Размер: ~ 21 см",
turtleTreeTitle: "Черепашка Ёлочка",
turtleTreeSize: "Размер: ~ 15 см",
turtleSantaTitle: "Черепашка Санта-Клаус",
turtleSantaSize: "Размер",
tulipTitle: "Тюльпан",
tulipSize: "Размер: ~ 27 см",
spiderTitle: "Паучок",
spiderSize: "Размер: ~ 17 см",
cowTitle: "Плюшевая коровка",
cowSize: "Размер: ~ 39 см",
pigTitle: "Свинка",
pigSize: "Размер: ~ 35 см",
balloonBearTitle: "Мишка с шариками",
balloonBearDesc: "Персонализированная картина. На шариках можно написать имя.",
snowmanTitle: "Снеговик",
snowmanSize: "Размер",
babyBunnyTitle: "Зайчик для малышей",
babyBunnySize: "Размер",
bowBunnyTitle: "Зайчик с бантиками",
bowBunnySize: "Размер",
beerTitle: "Вязаное пиво",
beerSize: "Размер",
squirrelTitle: "Белочка",
squirrelSize: "Размер",
dollTitle: "Кукла",
dollSize: "Размер",
deerTitle: "Оленёнок",
deerSize: "Размер",
gingerbreadTitle: "Имбирный пряник",
gingerbreadSize: "Размер",
wreathTitle: "Зимний веночек",
wreathSize: "Размер",
pumpkinTitle: "Тыковка",
pumpkinSize: "Размер",
miniTurtlesTitle: "Мини-черепашки",
miniTurtlesSize: "Размер",
octopusKeychainTitle: "Осьминожки-брелоки",
octopusKeychainSize: "Размер",

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

deliveryTitle: "🚚 Доставка",
deliveryText1: "Отправляю заказы по всей Чехии любой удобной местной почтовой службой.",
deliveryText2: "Также возможна доставка в другие европейские страны через DHL.",

menuAbout: "Обо мне",
menuMaterials: "Материалы и качество",
menuDelivery: "Доставка",
},

ua: {
title: "Karina Handmade Toys 🧶",
subtitle: "Теплі в’язані іграшки з любов’ю",
frogTitle: "Жабка",
frogSize: "Розмір: ~ 20 см",
sunflowerTitle: "Соняшник",
sunflowerSize: "Розмір: ~ 21 см",
turtleTreeTitle: "Черепашка Ялинка",
turtleTreeSize: "Розмір: ~ 15 см",
turtleSantaTitle: "Черепашка Санта-Клаус",
turtleSantaSize: "Розмір",
tulipTitle: "Тюльпан",
tulipSize: "Розмір: ~ 27 см",
spiderTitle: "Павучок",
spiderSize: "Розмір: ~ 17 см",
cowTitle: "Плюшева корівка",
cowSize: "Розмір: ~ 39 см",
pigTitle: "Свинка",
pigSize: "Розмір: ~ 35 см",
balloonBearTitle: "Ведмедик з кульками",
balloonBearDesc: "Персоналізована картина.",
snowmanTitle: "Сніговик",
snowmanSize: "Розмір",
babyBunnyTitle: "Зайчик для малюків",
babyBunnySize: "Розмір",
bowBunnyTitle: "Зайчик з бантиками",
bowBunnySize: "Розмір",
beerTitle: "В’язане пиво",
beerSize: "Розмір",
squirrelTitle: "Білочка",
squirrelSize: "Розмір",
dollTitle: "Лялька",
dollSize: "Розмір",
deerTitle: "Оленя",
deerSize: "Розмір",
gingerbreadTitle: "Імбирний пряник",
gingerbreadSize: "Розмір",
wreathTitle: "Зимовий віночок",
wreathSize: "Розмір",
pumpkinTitle: "Гарбузик",
pumpkinSize: "Розмір",
miniTurtlesTitle: "Міні-черепашки",
miniTurtlesSize: "Розмір",
octopusKeychainTitle: "Восьминіжки-брелоки",
octopusKeychainSize: "Розмір",

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
materialsHandmadeTitle: "Ручна робота",
materialsHandmadeText: "Кожна іграшка створюється вручну з любов’ю та увагою до деталей. Це не масове виробництво, а індивідуальна робота.",

deliveryTitle: "🚚 Доставка",
deliveryText1: "Відправляю замовлення по всій Чехії зручною місцевою поштовою службою.",
deliveryText2: "Також можлива доставка до інших європейських країн через DHL.",

menuAbout: "Про мене",
menuMaterials: "Матеріали та якість",
menuDelivery: "Доставка",
},

cz: {
title: "Karina Ručně Háčkované Hračky 🧶",
subtitle: "Teplé háčkované hračky s láskou",
frogTitle: "Žabka",
frogSize: "Velikost: ~ 20 cm",
sunflowerTitle: "Slunečnice",
sunflowerSize: "Velikost: ~ 21 cm",
turtleTreeTitle: "Želvička Stromek",
turtleTreeSize: "Velikost: ~ 15 cm",
turtleSantaTitle: "Želvička Santa Claus",
turtleSantaSize: "Velikost",
tulipTitle: "Tulipán",
tulipSize: "Velikost: ~ 27 cm",
spiderTitle: "Pavouček",
spiderSize: "Velikost: ~ 17 cm",
cowTitle: "Plyšová kravička",
cowSize: "Velikost: ~ 39 cm",
pigTitle: "Prasátko",
pigSize: "Velikost: ~ 35 cm",
balloonBearTitle: "Medvídek s balónky",
balloonBearDesc: "Personalizovaný obraz. Na balónky lze napsat jméno.",
snowmanTitle: "Sněhulák",
snowmanSize: "Velikost",
babyBunnyTitle: "Zajíček pro miminka",
babyBunnySize: "Velikost",
bowBunnyTitle: "Zajíček s mašličkami",
bowBunnySize: "Velikost",
beerTitle: "Háčkované pivo",
beerSize: "Velikost",
squirrelTitle: "Veverka",
squirrelSize: "Velikost",
dollTitle: "Panenka",
dollSize: "Velikost",
deerTitle: "Kolouch",
deerSize: "Velikost",
gingerbreadTitle: "Perníček",
gingerbreadSize: "Velikost",
wreathTitle: "Zimní věneček",
wreathSize: "Velikost",
pumpkinTitle: "Dýně",
pumpkinSize: "Velikost",
miniTurtlesTitle: "Mini želvičky",
miniTurtlesSize: "Velikost",
octopusKeychainTitle: "Chobotničky – přívěsky",
octopusKeychainSize: "Velikost",

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

deliveryTitle: "🚚 Doručení",
deliveryText1: "Zásilky po celé České republice odesílám prostřednictvím místní poštovní služby dle domluvy.",
deliveryText2: "Doručení do dalších evropských zemí je možné přes DHL.",

menuAbout: "O mně",
menuMaterials: "Materiály a kvalita",
menuDelivery: "Doručení",
},

en: {
title: "Karina Handmade Crochet Toys 🧶",
subtitle: "Cozy handmade crochet toys made with love",
frogTitle: "Frog",
frogSize: "Size: ~ 20 cm",
sunflowerTitle: "Sunflower",
sunflowerSize: "Size: ~ 21 cm",
turtleTreeTitle: "Christmas Turtle",
turtleTreeSize: "Size: ~ 15 cm",
turtleSantaTitle: "Santa Turtle",
turtleSantaSize: "Size",
tulipTitle: "Tulip",
tulipSize: "Size: ~ 27 cm",
spiderTitle: "Spider",
spiderSize: "Size: ~ 17 cm",
cowTitle: "Plush Cow",
cowSize: "Size: ~ 39 cm",
pigTitle: "Pig",
pigSize: "Size: ~ 35 cm",
balloonBearTitle: "Bear with Balloons",
balloonBearDesc: "Personalized artwork. You can add a name on the balloons.",
snowmanTitle: "Snowman",
snowmanSize: "Size",
babyBunnyTitle: "Baby Bunny",
babyBunnySize: "Size",
bowBunnyTitle: "Bow Bunny",
bowBunnySize: "Size",
beerTitle: "Crochet Beer",
beerSize: "Size",
squirrelTitle: "Squirrel",
squirrelSize: "Size",
dollTitle: "Doll",
dollSize: "Size",
deerTitle: "Fawn",
deerSize: "Size",
gingerbreadTitle: "Gingerbread",
gingerbreadSize: "Size",
wreathTitle: "Winter Wreath",
wreathSize: "Size",
pumpkinTitle: "Pumpkin",
pumpkinSize: "Size",
miniTurtlesTitle: "Mini Turtles",
miniTurtlesSize: "Size",
octopusKeychainTitle: "Octopus Keychains",
octopusKeychainSize: "Size",

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

deliveryTitle: "🚚 Delivery",
deliveryText1: "I ship across the Czech Republic using convenient local postal services.",
deliveryText2: "Delivery to other European countries is available via DHL.",

menuAbout: "About",
menuMaterials: "Materials & Quality",
menuDelivery: "Delivery",
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
wreath: ["wreath1.jpeg", "wreath2.jpeg"],
gingerbread: ["gingerbread1.jpeg", "gingerbread2.jpeg"],
doll: ["doll1.jpeg", "doll2.jpeg"],
reindeer: ["reindeer1.jpeg", "reindeer2.jpeg"],
snowmanRed: ["snowman-red1.jpeg", "snowman-red2.jpeg"],
turtleTree: ["turtle1.jpeg", "turtle2.jpeg"],
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
    if (!img) return;

    // ===== ОСОБАЯ ЛОГИКА ДЛЯ СНЕГОВИКА =====

    if (productId === "snowman") {

        const wrapper = img.closest(".image-wrapper");
        const arrows = wrapper.querySelectorAll(".arrow");

        if (colorKey === "red") {

            img.src = "snowman-red1.jpeg";

            img.setAttribute(
                "onclick",
                "openLightbox('snowman-red1.jpeg','snowmanRed',0)"
            );

            // ✅ включаем галерею
            wrapper.classList.add("has-gallery");

            arrows.forEach(a => a.style.display = "flex");

        } else {

            img.src = "snowman-" + colorKey + ".jpeg";

            img.setAttribute(
                "onclick",
                "openLightbox('" + img.src + "')"
            );

            // ❌ выключаем галерею
            wrapper.classList.remove("has-gallery");

            arrows.forEach(a => a.style.display = "none");
        }

        return;
    }

    // ===== ДЛЯ ВСЕХ ОСТАЛЬНЫХ ТОВАРОВ =====
    img.src = productId + "-" + colorKey + ".jpeg";
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

function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("menuOverlay");
    const burger = document.querySelector(".burger");

    menu.classList.toggle("open");
    overlay.classList.toggle("active");
    burger.classList.toggle("active");

    document.body.classList.toggle("menu-open");
}


document.querySelectorAll('.side-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const id = this.getAttribute('href').substring(1);
        const section = document.getElementById(id);

        if (!section) return;

        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;

        const offset = section.offsetTop - (windowHeight / 2) + (sectionHeight / 2);

        window.scrollTo({
            top: offset,
            behavior: "smooth"
        });

        toggleMenu();
    });
});
// =====================
// FOOTER YEAR
// =====================

document.addEventListener("DOMContentLoaded", function () {
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

