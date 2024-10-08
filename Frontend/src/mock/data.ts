import Photo1 from "../assets/images/catalog1.png";
import Photo2 from "../assets/images/catalog2.png";
import Photo3 from "../assets/images/catalog3.png";
import Photo4 from "../assets/images/catalog4.png";
import CategoryIcon from "../assets/images/categoryIcon.png";
import CategoryIcon2 from "../assets/images/categoryIcon2.png";
import CategoryIcon3 from "../assets/images/categoryIcon3.png";
import CategoryIcon4 from "../assets/images/categoryIcon4.png";
import CategoryIcon5 from "../assets/images/categoryIcon5.png";
import mobile from "../assets/icons/mobile.svg";
import mail from "../assets/icons/mail.svg";
import location from "../assets/icons/location.svg";
import megafon from "../assets/CompanyIcons/megafon.png";
import cart from "../assets/CompanyIcons/cart.png";
import delivery from "../assets/CompanyIcons/delivery.png";

export const TopbarLink = {
  Topbar_l: [
    { path: "tel:8-800-333-6784", name: "8-800-333-6784", icon: mobile },
    { path: "mailto: name@email.com", name: "info@maldex.ru", icon: mail },
    { path: "", name: "Москва", icon: location },
  ],
  Topbar_r: [
    { path: "", name: "Доставка", link: "/delivery#delivery" },
    { path: "", name: "Оплата", link: "/delivery#payment" },
    { path: "", name: "Контакты", link: "/delivery#contacts" },
  ],
};

export const footerLinks = [
    {
        title: "Основные категории",
        items: [
            "Коллекции",
            "Автомобильные аксессуары",
            "Деловые подарки",
            "Для дома",
            "Для отдыха",
            "Для путешествий",
            "Для спорта",
            "",
            "Женские аксессуары",
            "Зонты",
            "Кухня и посуда",
            "Личные",
            "Мужские аксессуары",
            "Одежда",
            "Для офиса",
        ],
    },
    {
        title: "-",
        items: [
            "Пишушие инструменты",
            "Сумки",
            "Вкусные подарки",
            "Товары для детей",
            "Упаковка",
            "Электроника",
            "Подарочные наборы",
        ],
    },
    {
        title: "разделы",
        items: [
            "Главная",
            "О компании",
            "Каталог",
            "Доставка и оплата",
            "Новости и статьи",
            "Команда",
            "Наши дилеры",
            "Стать дилером",
            "Контакты",
        ],
    },
    {
        title: "Адрес",
        items: [
            "Мы в Москве:" +
                "Огородный проезд, д. 5, стр. 2" +
                "Телефон:" +
                "+7 (499) 704-33-62",
            "Мы в Санкт-Петербурге" +
                "Московский пр., 10-12" +
                "Телефон:" +
                "+7 (812) 389-44-14",
        ],
    },
    {
        title: "Мы в сети",
        items: ["Одежда", "Ручки", "Ежедневники и блокноты", "Посуда"],
    },
];










export const Categories = [
  { id: 1, name: "Category 1" },
  { id: 2, name: "Category 2" },
  { id: 3, name: "Category 3" },
  { id: 4, name: "Category 4" },
  { id: 5, name: "Category 5" },
  { id: 6, name: "Category 6" },
  { id: 7, name: "Category 7" },
  { id: 8, name: "Category 8" },
  { id: 9, name: "Category 9" },
  { id: 10, name: "Category 10" },
  { id: 11, name: "Category 11" },
  { id: 12, name: "Category 12" },
  { id: 13, name: "Category 13" },
  { id: 14, name: "Category 14" },
  { id: 15, name: "Category 15" },
  { id: 16, name: "Category 16" },
  { id: 17, name: "Category 17" },
  { id: 18, name: "Category 18" },
  { id: 19, name: "Category 19" },
  { id: 20, name: "Category 20" },
];

export const SubCategories = [
  {
    id: 1,
    categoryName: "Electronika",
    categoryItem: [
      { id: 1, name: "SubCategory 1" },
      { id: 2, name: "SubCategory 2" },
      { id: 3, name: "SubCategory 3" },
      { id: 4, name: "SubCategory 4" },
      { id: 5, name: "SubCategory 5" },
      { id: 6, name: "SubCategory 6" },
    ],
  },
  {
    id: 2,
    categoryName: "Wears",
    categoryItem: [
      { id: 1, name: "SubCategory 1" },
      { id: 2, name: "SubCategory 2" },
      { id: 3, name: "SubCategory 3" },
      { id: 4, name: "SubCategory 4" },
      { id: 5, name: "SubCategory 5" },
      { id: 6, name: "SubCategory 6" },
      { id: 7, name: "SubCategory 7" },
      { id: 8, name: "SubCategory 8" },
    ],
  },
  {
    id: 3,
    categoryName: "Kitchen Products",
    categoryItem: [
      { id: 1, name: "SubCategory 1" },
      { id: 2, name: "SubCategory 2" },
      { id: 3, name: "SubCategory 3" },
      { id: 4, name: "SubCategory 4" },
      { id: 5, name: "SubCategory 5" },
      { id: 6, name: "SubCategory 6" },
      { id: 7, name: "SubCategory 7" },
      { id: 8, name: "SubCategory 8" },
      { id: 9, name: "SubCategory 9" },
      { id: 10, name: "SubCategory 10" },
      { id: 11, name: "SubCategory 11" },
      { id: 12, name: "SubCategory 12" },
    ],
  },
  {
    id: 4,
    categoryName: "Village Products",
    categoryItem: [
      { id: 1, name: "SubCategory 1" },
      { id: 2, name: "SubCategory 2" },
      { id: 3, name: "SubCategory 3" },
      { id: 4, name: "SubCategory 4" },
      { id: 5, name: "SubCategory 5" },
      { id: 6, name: "SubCategory 6" },
      { id: 7, name: "SubCategory 7" },
      { id: 8, name: "SubCategory 8" },
    ],
  },
  {
    id: 5,
    categoryName: "Accessuar",
    categoryItem: [
      { id: 1, name: "SubCategory 1" },
      { id: 2, name: "SubCategory 2" },
      { id: 3, name: "SubCategory 3" },
      { id: 4, name: "SubCategory 4" },
      { id: 5, name: "SubCategory 5" },
      { id: 6, name: "SubCategory 6" },
      { id: 9, name: "SubCategory 9" },
      { id: 10, name: "SubCategory 10" },
      { id: 11, name: "SubCategory 11" },
      { id: 12, name: "SubCategory 12" },
    ],
  },
  {
    id: 6,
    categoryName: "Wears & jeans",
    categoryItem: [
      { id: 1, name: "SubCategory 1" },
      { id: 2, name: "SubCategory 2" },
      { id: 3, name: "SubCategory 3" },
      { id: 4, name: "SubCategory 4" },
      { id: 5, name: "SubCategory 5" },
      { id: 6, name: "SubCategory 6" },
      { id: 7, name: "SubCategory 7" },
      { id: 8, name: "SubCategory 8" },
    ],
  },
  {
    id: 7,
    categoryName: "Wears & jeans",
    categoryItem: [
      { id: 1, name: "SubCategory 1" },
      { id: 2, name: "SubCategory 2" },
      { id: 3, name: "SubCategory 3" },
      { id: 4, name: "SubCategory 4" },
      { id: 5, name: "SubCategory 5" },
      { id: 6, name: "SubCategory 6" },
      { id: 7, name: "SubCategory 7" },
      { id: 8, name: "SubCategory 8" },
    ],
  },
];

export const Product = [
  {
    id: 1,
    name: "Electronic",
    img: "https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png",
  },
  {
    id: 2,
    name: "Umbrella",
    img: "https://purepng.com/public/uploads/large/red-umbrella-upi.png",
  },
  {
    id: 3,
    name: "Comb",
    img: "https://pngimg.com/d/comb_PNG107.png",
  },
  {
    id: 4,
    name: "Black Cap",
    img: "https://pics.clipartpng.com/Black_Baseball_Cap_PNG_Image_Clipart-979.png",
  },
];

export const Faq = [
  {
    id: 1,
    title: "О компании (сувенирная продукция в Москве)",
    content:
      "Maldex– это комплексный сервис по производству сувенирной продукции для российских и международных компаний. С нашей помощью компании смогут расширить клиентскую базу, повысить лояльность аудитории, укрепить позиции на рынке. <br/> <br/> Наша команда берет на себя весь спектр задач по ведению сделки, Вам нужно предоставить лишь логотип для нанесения. Мы изготовим, забрендируем и доставим ваш бизнес сувенир. ",
  },
  {
    id: 2,
    title: "Более 60 000 наименований",
    content:
      "Maldex– это комплексный сервис по производству сувенирной продукции для российских и международных компаний. С нашей помощью компании смогут расширить клиентскую базу, повысить лояльность аудитории, укрепить позиции на рынке.<br/>  Наша команда берет на себя весь спектр задач по ведению сделки, Вам нужно предоставить лишь логотип для нанесения. Мы изготовим, забрендируем и доставим ваш бизнес сувенир. ",
  },
  {
    id: 3,
    title: "Почему maldex?",
    content:
      "Maldex– это комплексный сервис по производству сувенирной продукции для российских и международных компаний. С нашей помощью компании смогут расширить клиентскую базу, повысить лояльность аудитории, укрепить позиции на рынке.  Наша команда берет на себя весь спектр задач по ведению сделки, Вам нужно предоставить лишь логотип для нанесения. Мы изготовим, забрендируем и доставим ваш бизнес сувенир. ",
  },
  {
    id: 4,
    title: "Услуги",
    content:
      "Maldex– это комплексный сервис по производству сувенирной продукции для российских и международных компаний. С нашей помощью компании смогут расширить клиентскую базу, повысить лояльность аудитории, укрепить позиции на рынке.  Наша команда берет на себя весь спектр задач по ведению сделки, Вам нужно предоставить лишь логотип для нанесения. Мы изготовим, забрендируем и доставим ваш бизнес сувенир. ",
  },
];

export const DishesCategories = [
  {
    categoryItem: [
      { id: 1, name: "Графины", number: 160 },
      { id: 2, name: "Наборы ложек", number: 42 },
      { id: 3, name: "Наборы столовых приборов", number: 28 },
      { id: 4, name: "Ножи и наборы ножей", number: 40 },
      { id: 5, name: "Подставки для бутылок", number: 67 },
      { id: 6, name: "Сервизы", number: 67 },
      { id: 7, name: "Тарелки", number: 27 },
    ],
  },
  {
    categoryName: "термокружки и термосы",
    categoryItem: [
      { id: 1, name: "Наборы с термосом", number: 12 },
      { id: 2, name: "Термокружки", number: 22 },
      { id: 3, name: "Термосы", number: 35 },
    ],
  },
];

export const CardCatalogData = [
  {
    id: 1,
    img: Photo1,
    title: "Гаджеты для него",
    description: "107045356",
    price: "15 185.",
    index1: "52",
    money: "₽",
    index2: "564",
  },
  {
    id: 2,
    img: Photo2,
    title: "Гаджеты для него",
    description: "107045356",
    price: "15 185.",
    index1: "52",
    money: "₽",
    index2: "564",
  },
  {
    id: 3,
    img: Photo3,
    title: "Гаджеты для него",
    description: "107045356",
    price: "15 185.",
    index1: "52",
    money: "₽",
    index2: "564",
  },
  {
    id: 4,
    img: Photo4,
    title: "Гаджеты для него",
    description: "107045356",
    price: "15 185.",
    index1: "52",
    money: "₽",
    index2: "564",
  },
  {
    id: 5,
    img: Photo2,
    title: "Гаджеты для него",
    description: "107045356",
    price: "15 185.",
    index1: "52",
    money: "₽",
    index2: "564",
  },
  {
    id: 5,
    img: Photo3,
    title: "Гаджеты для него",
    description: "107045356",
    price: "15 185.",
    index1: "52",
    money: "₽",
    index2: "564",
  },
  {
    id: 7,
    img: Photo1,
    title: "Гаджеты для него",
    description: "107045356",
    price: "15 185.",
    index1: "52",
    money: "₽",
    index2: "564",
  },
  {
    id: 8,
    img: Photo4,
    title: "Гаджеты для него",
    description: "107045356",
    price: "15 185.",
    index1: "52",
    money: "₽",
    index2: "564",
  },
  {
    id: 9,
    img: Photo1,
    title: "Гаджеты для него",
    description: "107045356",
    price: "15 185.",
    index1: "52",
    money: "₽",
    index2: "564",
  },
  {
    id: 10,
    img: Photo3,
    title: "Гаджеты для него",
    description: "107045356",
    price: "15 185.",
    index1: "52",
    money: "₽",
    index2: "564",
  },
];

export const CategoryItems = [
  {
    id: 1,
    logo: CategoryIcon,
    name: "Одежда",
    childCategories: [
      "Бытовая техника",
      "Внешние аккумуляторы",
      "Внешние жесткие диски",
      "Гаджеты",
      "Зарядные устройства",
      "Компьютерные и мобильные аксессуары",
      "Лампы и светильники",
      "Наушники",
      "Портативная акустика",
      "Флешки",
    ],
  },
  {
    id: 2,
    logo: CategoryIcon2,
    name: "Ручки",
    childCategories: [
      "Бытовая техника",
      "Внешние аккумуляторы",
      "Внешние жесткие диски",
      "Гаджеты",
      "Зарядные устройства",
      "Компьютерные и мобильные аксессуары",
      "Лампы и светильники",
      "Наушники",
      "Портативная акустика",
      "Флешки",
    ],
  },
  {
    id: 3,
    logo: CategoryIcon3,
    name: "Ежедневники и блокноты",
    childCategories: [
      "Бытовая техника",
      "Внешние аккумуляторы",
      "Внешние жесткие диски",
      "Гаджеты",
      "Зарядные устройства",
      "Компьютерные и мобильные аксессуары",
      "Лампы и светильники",
      "Наушники",
      "Портативная акустика",
      "Флешки",
    ],
  },
  {
    id: 4,
    logo: CategoryIcon4,
    name: "Посуда",
    childCategories: [
      "Бытовая техника",
      "Внешние аккумуляторы",
      "Внешние жесткие диски",
      "Гаджеты",
      "Зарядные устройства",
      "Компьютерные и мобильные аксессуары",
      "Лампы и светильники",
      "Наушники",
      "Портативная акустика",
      "Флешки",
    ],
  },
  {
    id: 5,
    logo: CategoryIcon5,
    name: "Сумки",
    childCategories: [
      "Бытовая техника",
      "Внешние аккумуляторы",
      "Внешние жесткие диски",
      "Гаджеты",
      "Зарядные устройства",
      "Компьютерные и мобильные аксессуары",
      "Лампы и светильники",
      "Наушники",
      "Портативная акустика",
      "Флешки",
    ],
  },
  {
    id: 6,
    logo: CategoryIcon,
    name: "Сумки",
    childCategories: [
      "Бытовая техника",
      "Внешние аккумуляторы",
      "Внешние жесткие диски",
      "Гаджеты",
      "Зарядные устройства",
      "Компьютерные и мобильные аксессуары",
      "Лампы и светильники",
      "Наушники",
      "Портативная акустика",
      "Флешки",
    ],
  },
  {
    id: 7,
    logo: CategoryIcon3,
    name: "Сумки",
    childCategories: [
      "Бытовая техника",
      "Внешние аккумуляторы",
      "Внешние жесткие диски",
      "Гаджеты",
      "Зарядные устройства",
      "Компьютерные и мобильные аксессуары",
      "Лампы и светильники",
      "Наушники",
      "Портативная акустика",
      "Флешки",
    ],
  },
  {
    id: 8,
    logo: CategoryIcon2,
    name: "Сумки",
    childCategories: [
      "Бытовая техника",
      "Внешние аккумуляторы",
      "Внешние жесткие диски",
      "Гаджеты",
      "Зарядные устройства",
      "Компьютерные и мобильные аксессуары",
      "Лампы и светильники",
      "Наушники",
      "Портативная акустика",
      "Флешки",
    ],
  },
  {
    id: 9,
    logo: CategoryIcon5,
    name: "Сумки",
    childCategories: [
      "Бытовая техника",
      "Внешние аккумуляторы",
      "Внешние жесткие диски",
      "Гаджеты",
      "Зарядные устройства",
      "Компьютерные и мобильные аксессуары",
      "Лампы и светильники",
      "Наушники",
      "Портативная акустика",
      "Флешки",
    ],
  },
  {
    id: 10,
    logo: CategoryIcon4,
    name: "Сумки",
    childCategories: [
      "Бытовая техника",
      "Внешние аккумуляторы",
      "Внешние жесткие диски",
      "Гаджеты",
      "Зарядные устройства",
      "Компьютерные и мобильные аксессуары",
      "Лампы и светильники",
      "Наушники",
      "Портативная акустика",
      "Флешки",
    ],
  },
];

export const ProductColor = [
  { id: 1, color: "#2b395c" },
  { id: 2, color: "#F0503B" },
  { id: 3, color: "#F0503B" },
  { id: 4, color: "#43AD58" },
  { id: 5, color: "#ECE04C" },
];

export const whoWe = [
  {
    text: "Maldex– это комплексный сервис по производству сувенирной продукции для российских и международных компаний.",
    text2:
      "С нашей помощью компании смогут расширить клиентскую базу, повысить лояльность аудитории, укрепить позиции на рынке.",
    bulletColor: "#ff0000", // Красный цвет bullet
  },
  {
    text: "Наша команда берет на себя весь спектр задач по ведению сделки, Вам нужно предоставить лишь логотип для нанесения.",
    text2: "Мы изготовим, забрендируем и доставим ваш бизнес сувенир.",
    bulletColor: "#00ff00", // Зеленый цвет bullet
  },
  {
    text: "У Вас есть идеи собственных сувениров? –Прекрасно!",
    text2:
      "С нашей помощью вы можете изготовить любой сувенир по индивидуальному дизайну.",
    bulletColor: "#0000ff", // Синий цвет bullet
  },
  {
    text: "Бизнес-сувениры из России, Европы, Америки и Китая. Более 1 000 000 подарков со всего мира.",
    text2: "Нам есть что вам предложить! / Нам есть чем вас удивить?",
    bulletColor: "#ff00ff", // Фиолетовый цвет bullet
  },
  {
    text: "Maldex – производи правильное впечатление!",
    bulletColor: "#ffff00", // Желтый цвет bullet
  },
];

export const services = [
  {
    icon: megafon, // Подставьте правильный путь к изображению
    title: "Брендинг",
    items: [
      "Тампопечать",
      "Вышивка",
      "Шелкография",
      "Гравировка",
      "Деколь",
      "Термотрансфер",
      "Уф печать",
      "Сублимация",
      "Цифровая печать",
      "Прямая печать на ткани DTG",
    ],
  },
  // Добавьте другие услуги по аналогии, если нужно
];

export const services_two = [
  {
    icon: cart, // Иконка для складирования
    title: "Складирование",
    color: "#BD43F6", // Цвет для заголовка и маркера
    items: [
      "Управление запасами",
      "Сокращение складских <br /> затрат для наших клиентов",
      "Управление складской <br /> инвентаризацией <br /> (ушло/пришло)",
    ],
  },
  {
    icon: delivery, // Иконка для логистики
    title: "Логистика",
    color: "#52B5A1", // Цвет для заголовка и маркера
    items: ["Фирменная упаковка", "Бесплатная доставка"],
  },
  // Добавьте другие услуги по аналогии, если нужно
];
