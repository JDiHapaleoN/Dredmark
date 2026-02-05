import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  ru: {
    translation: {
      navLink1: "Главная",
      navLink2: "Перечень продукции",
      navLink4: "О нас",
      navLink5: "Сертификаты",
      navLink7: "Контакты",
      navLink8: "Наверх",
      navLink9: "Назад",
      navLin10: "Связаться",
      whatsappMsg: "Здравствуйте! Хочу проконсультироваться по поводу земснаряда DREDMARK.",
      gallery: "Галерея ▾",
      video: "Видео",
      images: "Изображения",

      homeText1:
        "Эффективно восстанавливайте, обслуживайте и развивайте водные пути, реки, озера, побережья, пристани для яхт, водохранилища и промышленные водоемы с помощью многофункционального земснаряда DREDMARK — вашего единого решения для дноуглубительных работ, удаления инвазивной растительности, забивки свай и других работ на мелководье.",
      homeText2: "Узнайте, почему DREDMARK — разумное решение",
      homePrice: "От",
      homeCard2Text: "Пример возможностей",
      homeCardsText1: "Амфибия",
      homeCardsText2: "Земснаряд 2000/63",
      homeMainBlock1Text1: "Узбекский регистр судоходства",
      homeMainBlock1Text2:
        "Использование запчастей от любых иностранных производителей",
      homeCardsLink: "Посмотреть как »",
      homeText3:
        "БОЛЕЕ 20лет успешной работы на рынке СНГ и ближайшем зарубежье",
      homeText3Link: "Смотреть видео примера проекта",
      homeText4: "Производство земснарядов",
      homeText4Card1: "Многофункциональный земснаряд амфибия от 600м3 и выше",
      homeText4Card2: "Микро ГЭС",
      homeText4Card3: "Земснаряды без регистра судоходства",
      homeText4Card4: "Земснаряды с регистром судоходства",
      homeText4Card5: "Дополнительное производство узп",
      homeText4CardLink: "Смотреть видео »",
      homeText4CardLink2: "Читать далее »",
      homeBannerText1: "Все ваши решения в сфере дноуглубления",
      homeBannerText2: "Выбирайте оборудование компании DREDMARK",
      homeBannersLink: "Смотреть видео",

      homeModelTitle: "Модельный ряд земснарядов",
      homeTableTitle1: "Производительность",
      homeTableTitle2: "Глубина",
      homeTableText1: "Земснаряд 2000/63 стандартный",
      homeTableText2: "2500/63 стандартный с Фрезой",
      homeTableText3: "3000/70 стандартный с фрезерным рыхлителем",
      homeTableText4: "4000/60 тяжелый земснаряд",
      homeTableText5: "4500/70 тяжелый с фрезой",
      homeTableText6: "по пульпе",
      homeTableBtn: "Получить цену на нужную модель",

      homeRealProjectTitle: "Реальные проекты",
      homeRealProjectText1: "Срок изготовления",
      homeRealProjectText2: "Обьем работы",
      homeRealProjectText3: "Обьем добытого материала",
      homeRealProjectText4: "Срок",
      homeRealProjectText5: "Результат",
      homeRealProjectText6: "Обьем работы",
      homeRealProjectText7: "добыча ПГС",
      homeRealProjectText8: "Обьем добытого материала",
      homeRealProjectText9: "100 000 м3 в месяц.",

      bannerTitle: "Производство земснарядов и насосных станций DREDMARK",
      bannerSubtitle:
        "Оснащаем проекты по дноуглублению, добыче песка, золота и расчистке водоёмов. Земснаряды 200–450 мм “под ключ”.",

      homeAdvTitle: "Почему выбирают DREDMARK",
      homeAdvText1: "Собственное производство в Узбекистане",
      homeAdvText2: "Контроль качества, прямые цены без посредников",
      homeAdvText3: "Двигатели Weichai / Sinotruk / Cummins",
      homeAdvText4: "Легкий сервис и доступные запчасти",
      homeAdvText5: "Сборка “под проект”",
      homeAdvText6:
        "Можно изменить: фрезу, длину понтонов, насос, дизель, гидросистему.",
      homeAdvText7:
        "Доставка в Казахстан, Таджикистан, Афганистан, ОАЭ, Африку",
      homeAdvText8: "Авто и контейнерные перевозки",
      homeAdvText9: "Монтаж, обучение, запуск",
      homeAdvText10: "Инженер DREDMARK выезжает на объект.",

      fTel: "Телефон",
      fAddress:
        "Адрес: Республика Узбекистан, город Ташкент, улица Ферганская 25/11-118",
      fP1: "Официальный партнер в России",
      fH1: "Контакты",
      fP2: "Пожалуйста, свяжитесь с нами, чтобы узнать больше о DREDMARK",
      fP3: "Текст...",
      fEmail: "Электронная почта*",
      fButton: "Отправить",
      fName: "Введите имя...",
      videoMain: "Реализованные проекты",
      fP4: "Отдел продаж:",
      fP5: "Финансовый отдел:",
      fP6: "Группа компаний DREDMARK:",
      fP7: "DREDGER компания и гидромехмонтаж:",
      fP8: "Коммерческий директор:",
      fP9: "Технический директор:",

      vozmBannerH1: "Многофункциональный Земснаряд-Амфибия DREDMARK",
      vozmBannerP: "Универсальный, мобильный, надежный",

      vozmMainNav2Text1: "Главная",
      vozmMainNav2Text2: "» Перечень продукции",
      vozmMainSection1H2:
        "Для экологичных дноуглубительных работ, удаления растительности граблями, забивки свай и многого другого. От сухого грунта до глубины 6 метров.",
      vozmMainSection1P:
        "DREDMARK «ВСЕ В ОДНОМ» — это многофункциональный фрезерный земснаряд, совмещающий в себе функции земснаряда, амфибийного экскаватора, установки для удаления водной растительности и сваебойной машины для работы в водной среде. Один DREDMARK способен заменить сразу несколько традиционных машин, действуя автономно и перемещаясь без необходимости в дополнительной технике или рабочем персонале. Используя DREDMARK, вы повышаете эффективность и производительность, одновременно снижая затраты, экономя время и заботясь об окружающей среде. Больше результатов при меньших расходах — разумное решение.",

      vozmMainSection2H3: "ДОСТУП ПОВСЮДУ",
      vozmMainSection2P:
        "Оцените неограниченную мобильность и надежно работайте в сложных условиях, где не может работать ни одна другая машина.",
      vozmMainSection2Card1H3: "1 Транспортировка",
      vozmMainSection2Card2H3: "2 Самостоятельный запуск",
      vozmMainSection2Card3H3: "3 Самостоятельное перемещение",
      vozmMainSection2Card4H3: "4 Самостоятельное якорение",
      vozmMainSection2Card1P:
        "Компактный DREDMARK легко транспортируется в собранном виде на стандартном трейлере.",
      vozmMainSection2Card2P:
        "DREDMARK выполняет автономную выгрузку с прицепа с использованием четырёх стабилизаторов и стрелы экскаватора, что позволяет ему без труда заходить в воду без привлечения крана или вспомогательной техники.",
      vozmMainSection2Card3P:
        "DREDMARK способен самостоятельно передвигаться к удалённым объектам со скоростью до 4 узлов, не требуя буксировки или сопровождения другим транспортом.",
      vozmMainSection2Card4P:
        "DREDMARK самостоятельно устанавливается на якорь с помощью четырёх стабилизаторов, обеспечивая надёжное и устойчивое рабочее положение без необходимости в дополнительных якорях или тросах, которые могут мешать свободному движению в акватории.",

      vozmMainSection3H2: "Любая работа",
      vozmMainSection3P:
        "Благодаря быстро заменяемому мощному навесному оборудованию DREDMARK вы сможете выполнять все работы на мелководье с помощью всего лишь одной машины.",

      vozmMainSection4H3: "Дноуглубительные работы",
      vozmMainSection4P1:
        "С помощью земснаряда DREDMARK вы можете эффективно проводить дноуглубительные работы на мелководье, даже в районах с мусором и водной растительностью. Способность DREDMARK проводить дноуглубительные работы на большой площади с каждой рабочей позиции и, при необходимости, быстро перемещаться гарантирует, что почти все общее рабочее время будет потрачено активно на дноуглубительные работы. Запатентованный погружной режущий землесос DREDMARK позволяет откачивать до 900 кубических метров пульпы в час и сбрасывать пульпу на расстоянии до 1,5 км. Нужно перекачивать пульпу дальше? Просто добавьте бустерный насос.",
      vozmMainSection4P2: "ПОГРУЖНОЙ РЕЖУЩИЙ ЗЕМЛЕСОС DREDMARK",
      vozmMainSection4P3:
        "DREDMARK ПРОИЗВОДИТ ДНОУГЛУБИТЕЛЬНЫЕ РАБОТЫ С ТРУБОЙ-РАЗБРЫЗГИВАТЕЛЕМ",

      vozmMainSection5H3: "Экскаваторные работы",
      vozmMainSection5P1:
        "При любом типе почвы, DREDMARK предлагает на выбор 600-литровый ковш с зубьями, 1000-литровый ковш для мягких грунтов или ковш-грейфер. DREDMARK стабильно обрабатывает примерно 40-60 кубических метров грунта в час, в зависимости от типа почвы.",
      vozmMainSection5P2: "КОВШ-ГРЕЙФЕР",
      vozmMainSection5P3: "Ковш 600 Л",
      vozmMainSection5P4: "Ковш 1000 Л",
      vozmMainSection5P5: "DREDMARK загружает баржу с помощью обратного ковша",

      vozmMainSection6H3: "Работа граблями",
      vozmMainSection6P1:
        "Используйте грабли DREDMARK шириной 2,75 м для эффективного удаления укоренившейся инвазивной водной растительности, а также плавучей растительности, такой как водный гиацинт. Вы также можете эффективно очищать городские воды от мусора.",
      vozmMainSection6P2: "ГРАБЛИ DREDMARK",
      vozmMainSection6P3:
        "Земснаряд DREDMARK удаляет инвазивную растительность из озера граблями",

      vozmMainSection7H3: "Забивка свай",
      vozmMainSection7P1:
        "Забивайте сваи со стороны воды с помощью DREDMARK. Вы можете использовать ковш для забивки свай для деревянных свай или свайный вибропогружатель как для деревянных свай, так и для металлических шпунтов. Кабина земснаряда сертифицирована по стандарту FOPS и обеспечивает безопасность во время работы.",
      vozmMainSection7P2: "КОВШ ДЛЯ ЗАБИВКИ СВАЙ DREDMARK",
      vozmMainSection7P3: "СВАЙНЫЙ ВИБРОПОГРУЖАТЕЛЬ",
      vozmMainSection7P4: "DREDMARK ЗАБИВАЕТ СВАИ ВИБРОПОГРУЖАТЕЛЕМ",

      vozmMainSection8H2: "Ассортимент амфибий и земснарядов",
      vozmMainSection8P1: "Модель",
      vozmMainSection8P2: "Производительность",
      vozmMainSection8P3: "Тип",
      vozmMainSection8P4: "Цена",
      vozmMainSection8P5: "Амфибия 300",
      vozmMainSection8P6: "300 м³/час",
      vozmMainSection8P7: "Бюджетная",
      vozmMainSection8P8: "до 30 млн ₽",
      vozmMainSection8P9: "Амфибия 600",
      vozmMainSection8P10: "600 м³/час",
      vozmMainSection8P11: "Стандартная",
      vozmMainSection8P12: "от 30 млн ₽",
      vozmMainSection8P13: "Амфибия 900",
      vozmMainSection8P14: "900 м³/час",
      vozmMainSection8P15: "Универсальная",
      vozmMainSection8P16: "до 45 млн ₽",
      vozmMainSection8P17: "Амфибия 1300",
      vozmMainSection8P18: "1300 м³/час",
      vozmMainSection8P19: "Производительная",
      vozmMainSection8P20: "от 45 млн ₽",
      vozmMainSection8P21: "Земснаряд 2000/63",
      vozmMainSection8P22: "2000 м³/час",
      vozmMainSection8P23: "Регистровый",
      vozmMainSection8P24: "От ХХХ руб.",
      vozmMainSection8P25: "Производительность по воде",
      vozmMainSection8P26: "Земснаряд 400",
      vozmMainSection8P27: "400 м³/час",
      vozmMainSection8P28: "Электрический / Дизельный",
      vozmMainSection8P29: "Земснаряд 800",
      vozmMainSection8P30: "800 м³/час",
      vozmMainSection8P31: "Земснаряд 1800",
      vozmMainSection8P32: "1800 м³/час",
      vozmMainSection8P33: "Земснаряд 2000",
      vozmMainSection8P34: "2000 м³/час",
      vozmMainSection8P35: "Земснаряд 4000",
      vozmMainSection8P36: "4000 м³/час",
      vozmMainSection8P37: "Индивидуальная комплектация",
      vozmMainSection8P38: "Тех. задание клиента",
      vozmMainSection8P39: "По запросу",

      vozmNavLink1: "многофункциональные земснаряды амфибия", //
      vozmNavLink2: "Модельный ряд многофункционального земснаряда амфибия",
      vozmNavLink5: "Проточный ГЭС",
      vozmNavLink6: "Устройство заграждения переезда(УЗП)",

      vozmSection9Text1: "От 1кВт и выше",
      vozmSection9Text2: "Смотреть фото",

      vozmSection10Text1:
        "Устройства заграждения переезда — комплект устройств, предназначенных для автоматического ограждения проезжей части на железнодорожных переездах путём поднятия установленного на шарнирах заграждающего элемента (крышки). УЗП устанавливается в количестве 4 или 8 отдельных устройств (в зависимости от ширины проезжей части), ширина поднимающихся крышек — от 3,5 до 5 метров.",
      vozmSection10Text2:
        "Основные части устройства заграждения переезда (УЗП):",
      vozmSection10List1:
        "фундамент — основание, на которое установлены каркас и крышка УЗП;",
      vozmSection10List2:
        "поднимающиеся крышки — прямоугольные рамы, установленные на шарнирные опоры, и имеющие с обратной стороны светоотражающие элементы; крышки поднимаются на угол до 30°;",
      vozmSection10List3:
        "электропривод — передаёт крутящий момент на брусья с установленными на них крышками;",
      vozmSection10List4:
        "датчики обнаружения транспортных средств (датчики контроля занятости крышки (КЗК));",
      vozmSection10List5:
        "противовес — фиксирует крышки УЗП в закрытом или открытом положении;",
      vozmSection10List6: "защитная решётка противовеса;",
      vozmSection10List7: "соединительные кабели, муфты;",
      vozmSection10List8: "щиток управления УЗП.",

      usMainNav2Text2: "» О нас",
      usMainH1: "О компании DREDMARK",
      usMainSection1P1:
        "DREDMARK — это команда профессионалов, специализирующихся на производстве и внедрении многофункциональных земснарядов и плавающих мини-экскаваторов для очистки, углубления и восстановления водоёмов. Наша техника применяется для экосанации прудов, озёр, рек, болот, а также для строительных задач на воде.",
      usMainSection1P2:
        "Мы гордимся тем, что наша продукция создаётся в Узбекистане на базе компании Dredger, и уже сегодня востребована не только в регионах республики, но и за её пределами — в Кыргызстане, Казахстане и других странах СНГ.", //

      usMainSection2H2: "Участие в выставке с Президентом Узбекистана",
      usMainSection2P:
        "Во время престижной выставки в Ташкентском технопарке наши разработки были представлены лично Президенту Республики Узбекистан — Шавкату Миромоновичу Мирзиёеву. Макет земснаряда вызвал живой интерес, а специалисты компании наглядно показали, как наша техника решает актуальные экологические задачи.",
      usMainSection3H2: "Интервью директора компании",
      usMainSection3P:
        "Александр Апареев, директор компании Dredger, в эфире Oʻzbekiston 24 рассказал о миссии компании и перспективах развития. В интервью была подчёркнута уникальность конструкторских решений и растущий спрос на продукцию DREDMARK.", //

      usMainSection4H2: "Презентация работы земснаряда",
      usMainSection4P:
        "Во время демонстрации сотрудники компании детально рассказали о возможностях мини-экскаватора: очистка от водорослей и ила, углубление дна, строительство островов и каналов. Обсуждение происходило на фоне макета, который отражает реальные функции оборудования.На выставке присутствовал министр промышленности России — Мантуров Денис Валентинович.",

      usMainSection5H2: "Завершение сборки в Кыргызстане",
      usMainSection5P:
        "Компания DREDMARK продолжает расширять своё присутствие за рубежом. В Кыргызстане завершается сборка нового земснаряда, что говорит о доверии к нашей технике и её эффективности в условиях горных и заболоченных местностей. Это ещё один шаг к укреплению международного сотрудничества.",

      usMainSection6:
        "Присоединяйтесь к нам на пути к более чистым, безопасным и лучше функционирующим водным ресурсам с меньшим количеством машин и затрат. Заполните форму ниже и свяжитесь с нами сегодня!",

      usMainSection7H2: "География работы нашей компании с 2011 года",
      usMainSection7Title1: "Страна",
      usMainSection7Title2: "Город",
      usMainSection7Title3: "Производительность",
      usMainSection7Title4: "Количество",

      usMainSection7Russia: "Россия",
      usMainSection7RussiaCity1: "Калининград",
      usMainSection7RussiaCity2: "Норильск",
      usMainSection7RussiaCity3: "Омск",
      usMainSection7RussiaCity4: "Тобольск",
      usMainSection7RussiaCity5: "Норильск",
      usMainSection7RussiaCity6: "Москва",
      usMainSection7RussiaCity7: "Курган",
      usMainSection7RussiaCity8: "Цимлянск",

      usMainSection7Uz: "Узбекистан",
      usMainSection7UzCity1: "Сырдарья",
      usMainSection7UzCity2: "Термез",
      usMainSection7UzCity3: "Ташкент",
      usMainSection7UzCity4: "Бухара",
      usMainSection7UzCity5: "Нукус",
      usMainSection7UzCity6: "Самарканд",

      usMainSection7Kz: "Казахстан",
      usMainSection7KzCity1: "Караганда",
      usMainSection7KzCity2: "Актау",
      usMainSection7KzCity3: "Алматы",

      usMainSection7Tj: "Таджикистан",
      usMainSection7TjCity: "Курган-Тюбе",

      usMainSection7Krg: "Кыргызстан",
      usMainSection7KrgCity: "Ала-Бука",

      usMainSection7P1: "Гидроразмыв",
      usMainSection7P2: "Гидромонитор",
      usMainSection7P3: "Фреза",
      usMainSection7P4: "Фреза PP",
      usMainSection7P5: "Амфибия 600м3",
      usMainSection7P6: "Морской",

      usMainFreshH2: "Свежие проекты 2025 года",
      gM3FreshH2: "Свежие проекты",
      gM3FreshH1: "Галерея свежих проектов в Термезе 2025 года", //
      gM3FreshH3:
        "Галерея свежих проектов в Туябугузском водохранилище 2025 года", //
      usMainFreshP1: "Земснаряд",
      usMainFreshP2: "География поставки",
      usMainFreshP3: "Галерея свежих проектов",
      usMainFreshP4: "2000/63 дизельный с Узбекским регистром судоходства",
      usMainFreshP5: "Город Термез, Сурхандарьинская область, порт Термез",
      usMainFreshP6: "Туябугузское водохранилище",
      usMainFreshP7: "Ожидается заливка фото, видео материала...",

      usMainFabricP1: "Наши производственные площади",

      gMain3Text1: "Изображения",
      gMain3Text2: "многофункциональный земснаряд амфибия",
      gMain3Text3: "Производственный цех и перевозка",

      seoText1: "Часто ищут:",
      seoText2: "Земснаряд для драгирования и добычи песка",
      seoText3: "Передвижной и мини земснаряд на шасси",
      seoText4: "Гидравлический земснаряд под заказ",
      seoText5: "Купить земснаряд в Узбекистане России и т.д",
      seoText6: "Оборудование DREDMARK подходит для:",
      seoText7:
        "Углубление рек, очистки озёр, добычи песка, углубления каналов, технических работ на водоёмах. Мы производим земснаряды с гидравлическим приводом, мини-модели, земснаряды-амфибии и установки на шасси. Доступна доставка по Узбекистану, Казахстану, России, Таджикистану, и Кыргызстану.",
      toastSuccess: "Сообщение успешно отправлено!",
      toastError: "Ошибка при отправке. Попробуйте позже.",
      toastNetError: "Ошибка сети. Проверьте подключение.",
      unitM: "м",
      unitH: "час",
      unitMonth: "мес",
      seoBuy: "земснаряд купить",
      seoProducer: "производитель земснарядов",
      seoPrice: "земснаряд цена",
      seoTitleHome: "DREDMARK – Официальный сайт | Производство земснарядов и оборудования", // Updated per user request
      seoDescHome: "Официальный сайт DREDMARK. Производство земснарядов, оборудования для дноуглубления и добычи песка. Гарантия качества, собственное производство, доставка в страны СНГ.",
      seoKeywordsHome: "Dredmark, официальный сайт, земснаряды, купить земснаряд, производство земснарядов, дноуглубление",
      seoTitleUs: "О компании DREDMARK | Официальный сайт",
      seoDescUs: "Узнайте больше о компании DREDMARK на официальном сайте. Мы производим современные земснаряды и насосные станции с 20-летним опытом работы.",
      seoTitleVozm: "Каталог продукции DREDMARK | Официальный сайт",
      seoDescVozm: "Полный перечень продукции DREDMARK на официальном сайте: многофункциональные земснаряды-амфибии, насосные станции и запчасти.",
      seoTitleSert: "Сертификаты и патенты DREDMARK | Официальный сайт",
      seoDescSert: "Официальные сертификаты качества и патенты на производство земснарядов DREDMARK.",
      seoTitleGallery: "Фото и видео галерея DREDMARK | Реальные проекты",
      seoDescGallery: "Галерея реализованных проектов DREDMARK. Видео и фото с объектов.",
      pageNotFound: "Страница не найдена",
      pageNotFoundSub: "Кажется, вы заплыли слишком далеко или такой страницы не существует.",
      goHome: "Вернуться на главную",
      loading: "Отправка...",
      fEmail: "Ваш Email",
      fOnlineHeader: "Мгновенная онлайн-заявка",
      fOnlineStatus: "Онлайн",
      fInstantReply: "Моментальный ответ",
      fSpecialistWait: "Специалист на связи и готов вам ответить",
      mailSubject: "Спасибо за ваше обращение — DREDMARK",
      mailBody: "Здравствуйте! Мы получили вашу заявку. Наш специалист свяжется с вами в ближайшее время.",
    },
  },
  en: {
    translation: {
      navLink1: "Home",
      navLink2: "List of products",
      navLink4: "About Us",
      navLink5: "Certificates",
      navLink7: "Contacts",
      navLink8: "Top",
      navLink9: "Back",
      navLin10: "Get in touch",
      whatsappMsg: "Hello! I'm interested in a DREDMARK dredger. Could you please provide more information?",
      gallery: "Gallery ▾",
      brochure: "Brochures",
      video: "Video",
      images: "Images",
      caseExamples: "Examples of cases",
      homeText1:
        "Efficiently restore, maintain and develop waterways, rivers, lakes, coastlines, marinas, reservoirs and industrial ponds with the DREDMARK multi-purpose dredger - your one-stop solution for dredging, invasive vegetation removal, piling and other shallow water applications.",
      homeText2: "Find out why DREDMARK is the smart choice",
      homeCard1Text: "PRICE FROM:",
      homePrice: "From",
      homeCard2Text: "Example of capabilities",
      homeCard3Text: "Configuration",
      homeCardsText1: "Amphibious",
      homeCardsText2: "Dredger 2000/63",
      homeMainBlock1Text1: "Uzbek Register of Shipping",
      homeMainBlock1Text2: "Use of spare parts from any foreign manufacturers",
      homeCardsLink: "See how »",
      homeText3:
        "MORE THAN 20 years of successful work in the CIS market and neighboring countries",
      homeText3Link: "Watch a video of an example project",
      homeText4: "Dredger production",
      homeText4Card1: "Multifunctional amphibious dredger from 600m3 and above",
      homeText4Card2: "micro hydroelectric power station",
      homeText4Card3: "Dredgers without a shipping register",
      homeText4Card4: "Dredgers with a shipping register",
      homeText4Card5: "Additional production of UZP",
      homeText4CardLink: "Watch video »",
      homeText4CardLink2: "Read more »",
      homeBannerText1: "All your dredging solutions",
      homeBannerText2: "Choose equipment from DREDMARK",
      homeBannersLink: "Watch video",

      homeModelTitle: "Model range of dredgers",
      homeTableTitle1: "Performance",
      homeTableTitle2: "Depth",
      homeTableText1: "Standard dredger 2000/63",
      homeTableText2: "Standard dredger 2500/63 with cutter",
      homeTableText3: "Standard dredger 3000/70 with cutter suction loosener",
      homeTableText4: "Heavy-duty dredger 4000/60",
      homeTableText5: "Heavy-duty dredger 4500/70 with cutter",
      homeTableText6: "by pulp",
      homeTableBtn: "Get a quote for the required model",

      homeRealProjectTitle: "Real projects",
      homeRealProjectText1: "Manufacturing time",
      homeRealProjectText2: "Scope of work",
      homeRealProjectText3: "Volume of extracted material",
      homeRealProjectText4: "Duration",
      homeRealProjectText5: "Result",
      homeRealProjectText6: "Scope of work",
      homeRealProjectText7: "Sand and gravel extraction",
      homeRealProjectText8: "Volume of extracted material",
      homeRealProjectText9: "100,000 m³ per month.",

      bannerTitle: "Manufacture of Dredgers and Pump Stations DREDMARK",
      bannerSubtitle:
        "We equip projects for dredging, sand and gold extraction, and water body cleaning. Turnkey dredgers 200–450 mm.",

      homeAdvTitle: "Why choose DREDMARK",
      homeAdvText1: "Own production in Uzbekistan",
      homeAdvText2: "Quality control, direct prices without intermediaries",
      homeAdvText3: "Weichai / Sinotruk / Cummins engines",
      homeAdvText4: "Easy service and affordable spare parts",
      homeAdvText5: "Assembly tailored to the project",
      homeAdvText6:
        "You can change: cutter, pontoon length, pump, diesel engine, hydraulic system.",
      homeAdvText7:
        "Delivery to Kazakhstan, Tajikistan, Afghanistan, UAE, Africa",
      homeAdvText8: "Truck and container transportation",
      homeAdvText9: "Installation, training, commissioning",
      homeAdvText10: "A DREDMARK engineer visits the site.",

      fTel: "Telephone",
      fAddress:
        "Address: Republic of Uzbekistan, Tashkent city, Fergana street 25/11-118",
      fP1: "Official partner in Russia",
      fH1: "Contacts",
      fP2: "Please contact us to learn more about DREDMARK",
      fP3: "Text...",
      fEmail: "E-mail*",
      fButton: "Send",
      fName: "Enter name...",
      videoMain: "Completed projects",
      fP4: "Sales department:",
      fP5: "Finance department:",
      fP6: "DREDMARK Group of Companies:",
      fP7: "DREDGER Company and Hydromechmontazh:",
      fP8: "Commercial Director:",
      fP9: "Technical Director:",

      vozmBannerH1: "Multifunctional Amphibious Dredger DREDMARK",
      vozmBannerP: "Universal, mobile, reliable",

      vozmMainNav2Text1: "Home",
      vozmMainNav2Text2: "» List of products",
      vozmMainSection1H2:
        "For eco-friendly dredging, vegetation raking, pile driving and more. From dry soil to 6m depth.",
      vozmMainSection1P:
        "The DREDMARK ALL-IN-ONE is a multifunctional cutter dredger that combines the functions of a dredger, amphibious excavator, weed remover and aquatic piling machine. One DREDMARK can replace several traditional machines at once, operating autonomously and moving without the need for additional equipment or personnel. With DREDMARK, you increase efficiency and productivity while reducing costs, saving time and caring for the environment. More results with less – a smart decision.",

      vozmMainSection2H3: "ACCESS EVERYWHERE",
      vozmMainSection2P:
        "Enjoy unlimited mobility and work reliably in challenging environments where no other machine can operate.",
      vozmMainSection2Card1H3: "1 Transportation",
      vozmMainSection2Card2H3: "2 Self-launch",
      vozmMainSection2Card3H3: "3 Independent movement",
      vozmMainSection2Card4H3: "4 Self anchoring",
      vozmMainSection2Card1P:
        "The compact DREDMARK is easy to transport when assembled on a standard trailer.",
      vozmMainSection2Card2P:
        "DREDMARK unloads autonomously from a trailer using four stabilizers and an excavator boom, allowing it to easily enter water without the need for a crane or auxiliary equipment.",
      vozmMainSection2Card3P:
        "DREDMARK is capable of autonomously moving to remote sites at speeds of up to 4 knots, without requiring towing or support from other vehicles.",
      vozmMainSection2Card4P:
        "DREDMARK is self-anchoring with four stabilizers, providing a secure and stable working position without the need for additional anchors or lines that could interfere with free movement in the water.",

      vozmMainSection3H2: "Any job",
      vozmMainSection3P:
        "With the quick-change, powerful DREDMARK attachments, you can handle all your shallow water work with just one machine.",

      vozmMainSection4H3: "Dredging works",
      vozmMainSection4P1:
        "With the DREDMARK you can dredge efficiently in shallow waters, even in areas with debris and aquatic vegetation. The DREDMARK's ability to dredge a large area from each working position and, if necessary, to move quickly ensures that almost all of the total working time is spent actively dredging. The patented DREDMARK submersible cutter dredger pumps up to 900 cubic meters of slurry per hour and discharges slurry up to 1.5 km away. Need to pump slurry further? Just add a booster pump.",
      vozmMainSection4P2: "SUBMERSIBLE CUTTING DREDGER DREDMARK",
      vozmMainSection4P3: "DREDMARK CARRYING OUT SPRAY PIPE DREDGING",

      vozmMainSection5H3: "Excavation work",
      vozmMainSection5P1:
        "Whatever the soil type, the DREDMARK offers a choice of a 600-litre bucket with teeth, a 1,000-litre bucket for soft soils or a grab bucket. The DREDMARK reliably processes approximately 40-60 cubic metres of soil per hour, depending on the soil type.",
      vozmMainSection5P2: "BUCKET-GRAPPLER",
      vozmMainSection5P3: "Bucket 600 L",
      vozmMainSection5P4: "Bucket 1000 L",
      vozmMainSection5P5: "DREDMARK loads a barge using a backhoe",

      vozmMainSection6H3: "Working with a rake",
      vozmMainSection6P1:
        "Use the 2.75m wide DREDMARK rake to effectively remove established invasive aquatic vegetation as well as floating vegetation such as water hyacinth. You can also effectively clear debris from urban waters.",
      vozmMainSection6P2: "DREDMARK RAKE",
      vozmMainSection6P3:
        "Dredger DREDMARK removes invasive vegetation from a lake with a rake",

      vozmMainSection7H3: "Pile driving",
      vozmMainSection7P1:
        "Drive piles from the water side with the DREDMARK. You can use the pile driver bucket for timber piles or the pile driver for both timber piles and sheet metal piles. The dredger cabin is FOPS certified and ensures safety during operation.",
      vozmMainSection7P2: "DREDMARK PILE DRIVING BUCKET",
      vozmMainSection7P3: "VIBRATORY PILE DRIVERS",
      vozmMainSection7P4: "DREDMARK DRIVES PILES WITH VIBRATOR",

      vozmMainSection8H2: "Range of Amphibians and Dredgers",
      vozmMainSection8P1: "Model",
      vozmMainSection8P2: "Performance",
      vozmMainSection8P3: "Type",
      vozmMainSection8P4: "Price",
      vozmMainSection8P5: "Amphibian 300",
      vozmMainSection8P6: "300 m³/hour",
      vozmMainSection8P7: "Budget",
      vozmMainSection8P8: "up to 30 million ₽",
      vozmMainSection8P9: "Amphibian 600",
      vozmMainSection8P10: "600 m³/hour",
      vozmMainSection8P11: "Standard",
      vozmMainSection8P12: "from 30 million ₽",
      vozmMainSection8P13: "Amphibian 900",
      vozmMainSection8P14: "900 m³/hour",
      vozmMainSection8P15: "Universal",
      vozmMainSection8P16: "up to 45 million ₽",
      vozmMainSection8P17: "Amphibian 1300",
      vozmMainSection8P18: "1300 m³/hour",
      vozmMainSection8P19: "High-performance",
      vozmMainSection8P20: "from 45 million ₽",
      vozmMainSection8P21: "Dredger 2000/63",
      vozmMainSection8P22: "2000 m³/hour",
      vozmMainSection8P23: "Registered",
      vozmMainSection8P24: "From XXX rub.",

      vozmMainSection8P25: "Water Performance",
      vozmMainSection8P26: "Dredger 400",
      vozmMainSection8P27: "400 m³/hour",
      vozmMainSection8P28: "Electric / Diesel",
      vozmMainSection8P29: "Dredger 800",
      vozmMainSection8P30: "800 m³/hour",
      vozmMainSection8P31: "Dredger 1800",
      vozmMainSection8P32: "1800 m³/hour",
      vozmMainSection8P33: "Dredger 2000",
      vozmMainSection8P34: "2000 m³/hour",
      vozmMainSection8P35: "Dredger 4000",
      vozmMainSection8P36: "4000 m³/hour",
      vozmMainSection8P37: "Custom Configuration",
      vozmMainSection8P38: "Client's Technical Specifications",
      vozmMainSection8P39: "On request",

      vozmNavLink1: "multifunctional amphibious dredgers",
      vozmNavLink2: "Model range of multifunctional amphibious dredgers",
      vozmNavLink5: "Run-of-river hydropower plant",
      vozmNavLink6: "Railway crossing barrier device (UZP)",

      vozmSection9Text1: "From 1kW and above",
      vozmSection9Text2: "View photo",

      vozmSection10Text1:
        "Railway crossing barrier devices — a set of devices designed to automatically block the roadway at railway crossings by raising a hinged barrier element (lid). The UZP is installed in quantities of 4 or 8 individual units (depending on the width of the roadway), the width of the rising lids ranges from 3.5 to 5 meters.",
      vozmSection10Text2:
        "Main components of the railway crossing barrier device (UZP):",
      vozmSection10List1:
        "foundation — the base on which the UZP frame and lid are mounted;",
      vozmSection10List2:
        "rising lids — rectangular frames mounted on hinged supports, with reflective elements on the back side; lids rise at an angle up to 30°;",
      vozmSection10List3:
        "electric drive — transmits torque to the beams with the attached lids;",
      vozmSection10List4:
        "vehicle detection sensors (lid occupancy control sensors - KZK);",
      vozmSection10List5:
        "counterweight — holds the UZP lids in closed or open position;",
      vozmSection10List6: "counterweight protective grid;",
      vozmSection10List7: "connecting cables, couplings;",
      vozmSection10List8: "UZP control panel.",

      usMainNav2Text2: "» About Us",
      usMainH1: "About DREDMARK",

      usMainSection1P1:
        "DREDMARK is a team of professionals specializing in the production and implementation of multifunctional dredgers and floating mini-excavators for cleaning, deepening, and restoring water bodies. Our equipment is used for eco-rehabilitation of ponds, lakes, rivers, and wetlands, as well as for construction tasks on water.",
      usMainSection1P2:
        "We are proud that our products are created in Uzbekistan on the basis of the Dredger company, and today they are already in demand not only in the regions of the republic, but also beyond its borders - in Kyrgyzstan, Kazakhstan and other CIS countries.",

      usMainSection2H2:
        "Participation in the Exhibition with the President of Uzbekistan",
      usMainSection2P:
        "During a prestigious exhibition at the Tashkent Technopark, our developments were personally presented to the President of the Republic of Uzbekistan — Shavkat Mirziyoyev. The dredger model sparked great interest, and our specialists clearly demonstrated how our technology solves current environmental challenges.",

      usMainSection3H2: "Interview with the Company Director",
      usMainSection3P:
        "Alexander Apareyev, Director of Dredger, spoke on Oʻzbekiston 24 about the company's mission and development prospects. The interview emphasized the uniqueness of design solutions and the growing demand for DREDMARK products.",

      usMainSection4H2: "Dredger Operation Presentation",
      usMainSection4P:
        "During the demonstration, the company's team explained in detail the capabilities of the mini-excavator: cleaning algae and silt, deepening the bottom, building islands and channels. The discussion took place next to a model that illustrates the actual functionality of the equipment. The Minister of Industry of Russia, Denis Valentinovich Manturov, was present at the exhibition.",

      usMainSection5H2: "Assembly Completion in Kyrgyzstan",
      usMainSection5P:
        "DREDMARK continues to expand its international presence. In Kyrgyzstan, the assembly of a new dredger is nearing completion, reflecting trust in our equipment and its effectiveness in mountainous and swampy areas. This marks another step toward strengthening international cooperation.",

      usMainSection6:
        "Join us on the journey to cleaner, safer, and better-functioning water resources with fewer machines and lower costs. Fill out the form below and contact us today!",

      usMainSection7H2: "Geography of our company's operations since 2011",
      usMainSection7Title1: "Country",
      usMainSection7Title2: "City",
      usMainSection7Title3: "Performance",
      usMainSection7Title4: "Quantity",

      usMainSection7Russia: "Russia",
      usMainSection7RussiaCity1: "Kaliningrad",
      usMainSection7RussiaCity2: "Norilsk",
      usMainSection7RussiaCity3: "Omsk",
      usMainSection7RussiaCity4: "Tobolsk",
      usMainSection7RussiaCity5: "Norilsk", // duplicate?
      usMainSection7RussiaCity6: "Moscow",
      usMainSection7RussiaCity7: "Kurgan",
      usMainSection7RussiaCity8: "Tsimlyansk",

      usMainSection7Uz: "Uzbekistan",
      usMainSection7UzCity1: "Syrdarya",
      usMainSection7UzCity2: "Termez",
      usMainSection7UzCity3: "Tashkent",
      usMainSection7UzCity4: "Bukhara",
      usMainSection7UzCity5: "Nukus",
      usMainSection7UzCity6: "Samarkand",

      usMainSection7Kz: "Kazakhstan",
      usMainSection7KzCity1: "Karaganda",
      usMainSection7KzCity2: "Aktau",
      usMainSection7KzCity3: "Almaty",

      usMainSection7Tj: "Tajikistan",
      usMainSection7TjCity: "Kurgan-Tyube",

      usMainSection7Krg: "Kyrgyzstan", // fixed spelling
      usMainSection7KrgCity: "Ala-Buka",

      usMainSection7P1: "Hydraulic washing",
      usMainSection7P2: "Hydromonitor",
      usMainSection7P3: "Cutter",
      usMainSection7P4: "Cutter PP",
      usMainSection7P5: "Amphibian 600 m³",
      usMainSection7P6: "Marine",

      usMainFreshH2: "Fresh Projects of 2025",
      gM3FreshH2: "Fresh Projects",
      gM3FreshH1: "Gallery of Fresh Projects in Termez of 2025",
      gM3FreshH3: "Gallery of fresh projects in Tuyabuguz reservoir 2025",
      usMainFreshP1: "Dredger",
      usMainFreshP2: "Geography of Delivery",
      usMainFreshP3: "Gallery of Fresh Projects",
      usMainFreshP4:
        "2000/63 diesel with registration in the Uzbekistan Maritime Register",
      usMainFreshP5: "Termiz City, Surkhandarya Region, Termiz Port",
      usMainFreshP6: "Tuyabuguz Reservoir",
      usMainFreshP7: "Photo and video materials coming soon...",

      usMainFabricP1: "Our Production Facilities",

      gMain3Text1: "Images",
      gMain3Text2: "multifunctional amphibious dredger",
      gMain3Text3: "Production shop and transportation",

      seoText1: "Popular searches:",
      seoText2: "Dredger for dredging and sand extraction",
      seoText3: "Mobile and mini dredger on chassis",
      seoText4: "Hydraulic dredger made to order",
      seoText5: "Buy a dredger in Uzbekistan, Russia, etc.",
      seoText6: "DREDMARK equipment is suitable for:",
      seoText7:
        "River deepening, lake cleaning, sand extraction, channel deepening, and technical operations on water bodies. We manufacture hydraulic dredgers, mini dredgers, amphibious dredgers, and chassis-mounted units. Delivery available to Uzbekistan, Kazakhstan, Russia, Tajikistan, and Kyrgyzstan.",
      toastSuccess: "Message sent successfully!",
      toastError: "Sending error. Please try again later.",
      toastNetError: "Network error. Check your connection.",
      unitM: "m",
      unitH: "h",
      unitMonth: "mo",
      seoBuy: "buy dredger",
      seoProducer: "dredger manufacturer",
      seoPrice: "dredger price",
      seoTitleHome: "DREDMARK – Official Website | Dredger & Equipment Production", // Updated per user request
      seoDescHome: "Official DREDMARK website. Manufacture of dredgers, dredging equipment, and sand extraction machinery. Quality guarantee, own production, delivery to CIS countries.",
      seoKeywordsHome: "Dredmark, official website, dredgers, buy dredger, dredger production, dredging",
      seoTitleUs: "About DREDMARK | Official Website",
      seoDescUs: "Learn more about DREDMARK on the official website. We manufacture modern dredgers and pump stations with over 20 years of experience.",
      seoTitleVozm: "DREDMARK Product Catalog | Official Website",
      seoDescVozm: "Complete list of DREDMARK products on the official website: multifunctional amphibious dredgers, pump stations, and spare parts.",
      seoTitleSert: "DREDMARK Certificates & Patents | Official Website",
      seoDescSert: "Official quality certificates and patents for DREDMARK dredger production.",
      seoTitleGallery: "DREDMARK Photo & Video Gallery | Real Projects",
      seoDescGallery: "Gallery of completed DREDMARK projects. See our dredgers in action.",
      pageNotFound: "Page Not Found",
      pageNotFoundSub: "It looks like you've drifted too far, or this page doesn't exist.",
      goHome: "Go back to Home",
      loading: "Sending...",
      fEmail: "Your Email",
      fOnlineHeader: "Instant Online Request",
      fOnlineStatus: "Online",
      fInstantReply: "Instant Response",
      fSpecialistWait: "A specialist is online and ready to help",
      mailSubject: "Thank you for your request — DREDMARK",
      mailBody: "Hello! We have received your request. Our specialist will contact you shortly.",
    },
  },

  uz: {
    translation: {
      navLink1: "Uy",
      navLink2: "Mahsulotlar ro'yxati",
      navLink4: "Biz Haqimizda",
      navLink5: "Sertificatlar",
      navLink7: "Kontaktlar",
      navLink8: "Tepaga",
      navLink9: "Orqaga",
      navLin10: "bog'laning",
      whatsappMsg: "Assalomu alaykum! DREDMARK zemsnaryadlari haqida ma'lumot olmoqchi edim.",
      gallery: "Galereya ▾",
      brochure: "Broshyuralar",
      video: "Video",
      images: "Rasmlar",
      caseExamples: "Holatlar misollari",
      homeText1:
        "Ko'p funktsiyali DREDMARK drenaj yordamida suv yo'llari, daryolar, ko'llar, qirg'oqlar, marinalar, suv omborlari va sanoat suv havzalarini samarali tiklang, saqlang va rivojlantiring - chuqurlashtirish, o'simliklarni invaziv olib tashlash, qoziqlarni yig'ish va boshqa sayoz suvlarni qo'llash uchun yagona yechim.",
      homeText2: "DREDMARK nima uchun aqlli yechim ekanligini bilib oling",
      homeCard1Text: "DAN NARX:",
      homePrice: "Dan",
      homeCard2Text: "Imkoniyatlar namunasi",
      homeCard3Text: "Jihozlanish",
      homeCardsText1: "Amfibiya",
      homeCardsText2: "Zemsnaryad 2000/63",
      homeMainBlock1Text1: "O'zbekiston yuk tashish reestri",
      homeMainBlock1Text2:
        "Har qanday xorijiy ishlab chiqaruvchilarning ehtiyot qismlaridan foydalanish",
      homeCardsLink: "Qanday qilib ko'ring »",
      homeText3:
        "MDH va qo'shni mamlakatlar bozorida 20 yildan ortiq muvaffaqiyatli ish",
      homeText3Link: "Loyihaning namunaviy videosini tomosha qiling",
      homeText4: "Dredger ishlab chiqarish",
      homeText4Card1:
        "Hajmi 600 m3 va undan yuqori bo'lgan ko'p funktsiyali amfibiya drageri",
      homeText4Card2: "mikro gidroelektr stansiyasi",
      homeText4Card3: "Yuk tashish reestriga ega bo'lmagan dredgerlar",
      homeText4Card4: "Yuk tashish reestriga ega bo'lgan dredgerlar",
      homeText4Card5: "Qo'shimcha ishlab chiqarish usp",
      homeText4CardLink: "Videoni tomosha qiling »",
      homeText4CardLink2: "Ko'proq o'qish »",
      homeBannerText1: "Barcha chuqurlashtirish yechimlaringiz",
      homeBannerText2: "DREDMARK uskunasini tanlang",
      homeBannersLink: "Videoni tomosha qiling",

      homeModelTitle: "Zemsnaryadlar model qatori",
      homeTableTitle1: "Ishlab chiqarish quvvati",
      homeTableTitle2: "Chuqurlik",
      homeTableText1: "Standart 2000/63 zemsnaryad",
      homeTableText2: "Freza bilan standart 2500/63 zemsnaryad",
      homeTableText3: "Frezerli yumshatkich bilan standart 3000/70 zemsnaryad",
      homeTableText4: "Og‘ir turdagi 4000/60 zemsnaryad",
      homeTableText5: "Freza bilan og‘ir turdagi 4500/70 zemsnaryad",
      homeTableText6: "pulpa bo'yicha",
      homeTableBtn: "Kerakli model uchun narx olish",

      homeRealProjectTitle: "Haqiqiy loyihalar",
      homeRealProjectText1: "Ishlab chiqarish muddati",
      homeRealProjectText2: "Ish hajmi",
      homeRealProjectText3: "Qazib olingan material hajmi",
      homeRealProjectText4: "Muddat",
      homeRealProjectText5: "Natija",
      homeRealProjectText6: "Ish hajmi",
      homeRealProjectText7: "Qum-shag‘al qazib olish",
      homeRealProjectText8: "Qazib olingan material hajmi",
      homeRealProjectText9: "Oyiga 100 000 m³.",

      bannerTitle:
        "DREDMARK zemsnaryadlari va nasos stansiyalarini ishlab chiqarish",
      bannerSubtitle:
        "Biz tubni chuqurlashtirish, qum va oltin qazib olish hamda suv havzalarini tozalash loyihalarini jihozlaymiz. 200–450 mm ‘kalit topshirish’ asosidagi zemsnaryadlar.",

      homeAdvTitle: "Nima uchun DREDMARKni tanlashadi",
      homeAdvText1: "O‘zbekistonda o‘z ishlab chiqarishi",
      homeAdvText2:
        "Sifat nazorati, vositachilarsiz to‘g‘ridan-to‘g‘ri narxlar",
      homeAdvText3: "Weichai / Sinotruk / Cummins dvigatellari",
      homeAdvText4: "Oson servis va arzon ehtiyot qismlar",
      homeAdvText5: "Loyiha bo‘yicha yig‘ilish",
      homeAdvText6:
        "O‘zgartirish mumkin: freza, ponton uzunligi, nasos, dizel, gidrosistema.",
      homeAdvText7:
        "Qozog‘iston, Tojikiston, Afg‘oniston, BAA, Afrika davlatlariga yetkazib berish",
      homeAdvText8: "Avto va konteyner tashish",
      homeAdvText9: "Montaj, o‘qitish, ishga tushirish",
      homeAdvText10: "DREDMARK muhandisi obyektga chiqib boradi.",
      fTel: "Telefon raqami",
      fAddress:
        "Manzil: O‘zbekiston Respublikasi, Toshkent shahri, Farg‘ona ko‘chasi 25/11-118",
      fP1: "Rossiyadagi rasmiy hamkor",
      fH1: "Kontaktlar",
      fP2: "DREDMARK haqida ko'proq ma'lumot olish uchun biz bilan bog'laning",
      fP3: "Matn...",
      fEmail: "E-Mail*",
      fButton: "Yuborish",
      fName: "Ismni kiriting...",
      videoMain: "Tugallangan loyihalar",
      fP4: "Savdo bo'limi:",
      fP5: "Moliya bo'limi",
      fP6: "DREDMARK kompaniyalar guruhi:",
      fP7: "DREDGER kompaniyasi va Gidromexmontaj:",
      fP8: "Tijorat direktori:",
      fP9: "Texnik direktor:",

      vozmBannerH1:
        "Ko‘p funksiyali DREDMARK Amfibiya Tipidagi Drenaj Qurilmasi",
      vozmBannerP: "Universal, mobil, ishonchli",

      vozmMainNav2Text1: "Bosh sahifa",
      vozmMainNav2Text2: "» Mahsulotlar ro‘yxati",

      vozmMainSection1H2:
        "Ekologik tozalovchi chuqurlashtirish ishlari, o‘simliklarni tortib olish, qoziklarni qoqish va boshqa ko‘plab ishlar uchun. Quruq yerda ham, 6 metrgacha chuqurlikda ham ishlaydi.",
      vozmMainSection1P:
        "DREDMARK “HAMMASI BIRDA” — bu ko‘p funksiyali frezer drenaj qurilmasi bo‘lib, u drenaj qurilmasi, amfibiya ekskavatori, suv o‘simliklarini tozalash uskunasi va suvda ishlash uchun qozik qoqish mashinasining funksiyalarini o‘zida birlashtiradi. DREDMARK bir nechta an’anaviy texnikalarni almashtira oladi, mustaqil harakatlanadi va qo‘shimcha texnika yoki ishchi kuchisiz ishlaydi. DREDMARK’dan foydalanish orqali siz samaradorlik va unumdorlikni oshirasiz, xarajatlarni kamaytirasiz, vaqtingizni tejaysiz va atrof-muhitni muhofaza qilasiz. Kamroq xarajat bilan ko‘proq natija — oqilona tanlov.",

      vozmMainSection2H3: "HAR QAYERGA KIRISH IMKONIYATI",
      vozmMainSection2P:
        "Hech bir boshqa texnika ishlay olmaydigan murakkab sharoitlarda ishonchli ishlang va cheksiz mobil imkoniyatdan foydalaning.",
      vozmMainSection2Card1H3: "1 Tashish",
      vozmMainSection2Card2H3: "2 Mustaqil ishga tushirish",
      vozmMainSection2Card3H3: "3 Mustaqil harakatlanish",
      vozmMainSection2Card4H3: "4 Mustaqil langar tashlash",
      vozmMainSection2Card1P:
        "Kompakt DREDMARK standart treylerda yig‘ilgan holda oson tashiladi.",
      vozmMainSection2Card2P:
        "DREDMARK to‘rt barqarorlashtirgich va ekskavator boomidan foydalangan holda treylerdan mustaqil ravishda tushiriladi va qo‘shimcha texnika yoki kranlarsiz suvga kira oladi.",
      vozmMainSection2Card3P:
        "DREDMARK o‘z kuchi bilan 4 tugungacha tezlikda uzoq manzillarga yetib boradi, boshqa transport vositasiga bog‘liq bo‘lmasdan.",
      vozmMainSection2Card4P:
        "DREDMARK to‘rt barqarorlashtirgich yordamida mustaqil ravishda langar tashlaydi, bu esa qo‘shimcha langar yoki arqonsiz xavfsiz va barqaror ish holatini ta’minlaydi.",

      vozmMainSection3H2: "Har qanday ish",
      vozmMainSection3P:
        "Kuchli va tez almashtiriladigan qo‘shimcha uskunalari bilan DREDMARK suv bo‘yidagi barcha ishlarni faqat bitta qurilma yordamida bajaradi.",

      vozmMainSection4H3: "Chuqurlashtirish ishlari",
      vozmMainSection4P1:
        "DREDMARK drenaj qurilmasi bilan siz axlat va suv o‘simliklari bor hududlarda ham samarali chuqurlashtirish ishlarini olib borishingiz mumkin. Har bir ish pozitsiyasidan keng maydonni ishlash qobiliyati va kerak bo‘lsa, tez joyini o‘zgartirish imkoniyati tufayli umumiy ish vaqtining deyarli barchasi samarali ishlarga ketadi. Patentlangan DREDMARK cho‘kma nasosi soatiga 900 kub metr ko‘pikni haydashga va 1,5 km masofagacha chiqarishga qodir. Uzoqroq masofaga chiqarish kerakmi? Faqat qo‘shimcha booster nasos qo‘shing.",
      vozmMainSection4P2: "DREDMARK CHO‘KMA KESUVCHI SUVOSTI NASOSI",
      vozmMainSection4P3:
        "DREDMARK QUYI QISMI BILAN CHUQURLASHTIRISH ISHLARINI OLIB BORADI",

      vozmMainSection5H3: "Ekskavator ishlari",
      vozmMainSection5P1:
        "Har qanday tuproq turida, DREDMARK sizga 600 litrli tishli chelak, yumshoq tuproq uchun 1000 litrli chelak yoki grab chelakni taklif qiladi. DREDMARK barqaror ravishda soatiga 40–60 kub metr tuproqni qayta ishlaydi.",
      vozmMainSection5P2: "GRAB CHELAK",
      vozmMainSection5P3: "600 L CHELAK",
      vozmMainSection5P4: "1000 L CHELAK",
      vozmMainSection5P5: "DREDMARK barjani orqa chelak bilan yuklayapti",

      vozmMainSection6H3: "G‘o‘rilar bilan ishlash",
      vozmMainSection6P1:
        "2,75 metrli DREDMARK g‘o‘rilari yordamida ildiz otgan invaziv suv o‘simliklarini va suzuvchi o‘simliklarni, masalan, suv giatsintini samarali tarzda olib tashlang. Shuningdek, shahar suv havzalarini chiqindilardan tozalash ham mumkin.",
      vozmMainSection6P2: "DREDMARK G‘O‘RILARI",
      vozmMainSection6P3:
        "DREDMARK g‘o‘rilar yordamida ko‘ldan invaziv o‘simliklarni olib tashlamoqda",

      vozmMainSection7H3: "Qozik qoqish ishlari",
      vozmMainSection7P1:
        "DREDMARK yordamida suv tomondan qozik qoqish ishlarini bajaring. Yog‘och qoziklar uchun qozik qoqish chelagini, metall shpuntlar va yog‘ochlar uchun esa vibratsiyali qozik urish moslamasini qo‘llang. DREDMARK kabinasi FOPS standarti bo‘yicha sertifikatlangan va ish vaqtida xavfsizlikni ta’minlaydi.",
      vozmMainSection7P2: "DREDMARK QOZIK QOQISH CHELAK",
      vozmMainSection7P3: "VIBRATSIYALI QOZIK URGICH",
      vozmMainSection7P4:
        "DREDMARK QOZIKLARNI VIBRATSIYALI USKUNA BILAN QOQMOQDA",

      vozmMainSection8H2: "Amfibiya va zemsnaryadlar assortimenti",
      vozmMainSection8P1: "Model",
      vozmMainSection8P2: "Ish unumdorligi",
      vozmMainSection8P3: "Turi",
      vozmMainSection8P4: "Narxi",
      vozmMainSection8P5: "Amfibiya 300",
      vozmMainSection8P6: "300 m³/soat",
      vozmMainSection8P7: "Byudjet",
      vozmMainSection8P8: "30 million ₽ gacha",
      vozmMainSection8P9: "Amfibiya 600",
      vozmMainSection8P10: "600 m³/soat",
      vozmMainSection8P11: "Standart",
      vozmMainSection8P12: "30 million ₽ dan boshlab",
      vozmMainSection8P13: "Amfibiya 900",
      vozmMainSection8P14: "900 m³/soat",
      vozmMainSection8P15: "Universal",
      vozmMainSection8P16: "45 million ₽ gacha",
      vozmMainSection8P17: "Amfibiya 1300",
      vozmMainSection8P18: "1300 m³/soat",
      vozmMainSection8P19: "Yuqori unumdorlikdagi",
      vozmMainSection8P20: "45 million ₽ dan boshlab",
      vozmMainSection8P21: "Zemsnaryad 2000/63",
      vozmMainSection8P22: "2000 m³/soat",
      vozmMainSection8P23: "Ro‘yxatga olingan",
      vozmMainSection8P24: "XXX rub. dan",

      vozmMainSection8P25: "Suv bo‘yicha unumdorlik",
      vozmMainSection8P26: "Zemsnaryad 400",
      vozmMainSection8P27: "400 m³/soat",
      vozmMainSection8P28: "Elektr / dizel",
      vozmMainSection8P29: "Zemsnaryad 800",
      vozmMainSection8P30: "800 m³/soat",
      vozmMainSection8P31: "Zemsnaryad 1800",
      vozmMainSection8P32: "1800 m³/soat",
      vozmMainSection8P33: "Zemsnaryad 2000",
      vozmMainSection8P34: "2000 m³/soat",
      vozmMainSection8P35: "Zemsnaryad 4000",
      vozmMainSection8P36: "4000 m³/soat",
      vozmMainSection8P37: "Individual konfiguratsiya",
      vozmMainSection8P38: "Mijozning texnik topshirig‘i",
      vozmMainSection8P39: "So‘rov bo‘yicha",

      vozmNavLink1: "ko‘p funksiyali amfibiya tipidagi zemsnaryadlar",
      vozmNavLink2: "Ko‘p funksiyali amfibiya tipidagi zemsnaryadlar modellari",
      vozmNavLink5: "Oqimli GES",
      vozmNavLink6: "Temir yo‘l o‘tish joyi to‘siq qurilmasi (UZP)",

      vozmSection9Text1: "1 kVt dan boshlab",
      vozmSection9Text2: "Fotosuratni ko‘rish",

      vozmSection10Text1:
        "Temir yo‘l o‘tish joyi to‘siq qurilmalari — temir yo‘l o‘tish joylarida yo‘l qismini avtomatik ravishda to‘sib qo‘yish uchun mo‘ljallangan qurilmalar to‘plami, bunda menteşali to‘siq elementi (qopqoq) ko‘tariladi. UZP yo‘l qismining kengligiga qarab 4 yoki 8 ta alohida qurilmadan iborat bo‘ladi, ko‘tariluvchi qopqoqlarning kengligi 3,5 metrdan 5 metrgacha.",
      vozmSection10Text2:
        "Temir yo‘l o‘tish joyi to‘siq qurilmasining (UZP) asosiy qismlari:",
      vozmSection10List1:
        "poydevor — UZP karkasi va qopqog‘i o‘rnatilgan asos;",
      vozmSection10List2:
        "ko‘tariluvchi qopqoqlar — menteşali tayanchlarga o‘rnatilgan to‘rtburchak ramkalar, orqa tomonida yorug‘lik aks ettiruvchi elementlar mavjud; qopqoqlar 30° burchakka ko‘tariladi;",
      vozmSection10List3:
        "elektr uzatma — qopqoqlar o‘rnatilgan to‘sinlarga aylanish momentini uzatadi;",
      vozmSection10List4:
        "transport vositalarini aniqlash datchiklari (qopqoq bandligini nazorat qiluvchi datchiklar - KZK);",
      vozmSection10List5:
        "qarshi vazn — UZP qopqoqlarini yopiq yoki ochiq holatda ushlab turadi;",
      vozmSection10List6: "qarshi vaznni himoya qiluvchi panjara;",
      vozmSection10List7: "ulovchi kabellar, muftalar;",
      vozmSection10List8: "UZP boshqaruv paneli.",

      usMainNav2Text2: "» Biz haqimizda",
      usMainH1: "DREDMARK kompaniyasi haqida",

      usMainSection1P1:
        "DREDMARK — bu suv havzalarini tozalash, chuqurlashtirish va tiklash uchun ko‘p funksiyali zemsnaryadlar va suzuvchi mini-ekskavatorlarni ishlab chiqarish va joriy etishga ixtisoslashgan mutaxassislar jamoasi. Bizning texnikamiz hovuzlar, ko‘llar, daryolar, botqoqlarni ekologik tozalash, shuningdek, suv ustida qurilish ishlari uchun qo‘llaniladi.",
      usMainSection1P2:
        "Mahsulotlarimiz O‘zbekistonda, Toshkentdagi nostandart mashinalar zavodida ishlab chiqarilishi bilan faxrlanamiz. Ular nafaqat respublika hududlarida, balki Qirg‘iziston, Qozog‘iston va boshqa MDH davlatlarida ham talabga ega.",

      usMainSection2H2:
        "O‘zbekiston Prezidenti bilan ko‘rgazmada ishtirok etish",
      usMainSection2P:
        "Toshkent texnoparkida o‘tkazilgan nufuzli ko‘rgazma doirasida bizning ishlanmalarimiz O‘zbekiston Respublikasi Prezidenti Shavkat Miromonovich Mirziyoyevga shaxsan taqdim etildi. Zemsnaryadning maketi katta qiziqish uyg‘otdi, kompaniya mutaxassislari esa texnikamiz qanday ekologik muammolarni hal etishini amalda namoyish etdilar.",

      usMainSection3H2: "Kompaniya direktori bilan intervyu",
      usMainSection3P:
        "Toshkentdagi nostandart mashinalar zavodi direktori Aleksandr Apareev “Oʻzbekiston 24” telekanalida kompaniya missiyasi va rivojlanish istiqbollari haqida so‘zlab berdi. Intervyuda muhandislik yechimlarining noyobligi va DREDMARK mahsulotlariga bo‘lgan talabning ortib borayotgani ta’kidlandi.",

      usMainSection4H2: "Zemsnaryad ishini namoyish qilish",
      usMainSection4P:
        "Namoyish vaqtida kompaniya xodimlari mini-ekskavatorning imkoniyatlari haqida batafsil ma’lumot berdilar: suv o‘tlari va cho‘kmani tozalash, tubni chuqurlashtirish, orollar va kanallar qurish. Suhbat uskunaning real funksiyalarini aks ettiruvchi maket fonida bo‘lib o‘tdi. Ko'rgazmada Rossiya sanoat vaziri Denis Valentinovich Manturov ishtirok etdi.",

      usMainSection5H2: "Qirg‘izistonda yig‘ish yakunlanmoqda",
      usMainSection5P:
        "DREDMARK kompaniyasi xorijda o‘z faoliyatini kengaytirishda davom etmoqda. Qirg‘izistonda yangi zemsnaryadning yig‘ilishi yakunlanmoqda, bu esa bizning texnikamizga bo‘lgan ishonch va uning tog‘li va botqoqli hududlardagi samaradorligini ko‘rsatadi. Bu xalqaro hamkorlikni mustahkamlash yo‘lida yana bir qadamdir.",

      usMainSection6:
        "Kamroq texnika va kamroq xarajat bilan toza, xavfsiz va samarali ishlaydigan suv resurslari sari biz bilan birga yuring. Quyidagi formani to‘ldiring va bugunoq biz bilan bog‘laning!",

      usMainSection7H2:
        "Kompaniyamiz faoliyati geografiyasi — 2011 yildan buyon",
      usMainSection7Title1: "Mamlakat",
      usMainSection7Title2: "Shahar",
      usMainSection7Title3: "Ish unumdorligi",
      usMainSection7Title4: "Soni",

      usMainSection7Russia: "Rossiya",
      usMainSection7RussiaCity1: "Kaliningrad",
      usMainSection7RussiaCity2: "Norilsk",
      usMainSection7RussiaCity3: "Omsk",
      usMainSection7RussiaCity4: "Tobolsk",
      usMainSection7RussiaCity5: "Norilsk", // dublikat?
      usMainSection7RussiaCity6: "Moskva",
      usMainSection7RussiaCity7: "Kurgan",
      usMainSection7RussiaCity8: "Tsimlyansk",

      usMainSection7Uz: "O‘zbekiston",
      usMainSection7UzCity1: "Sirdaryo",
      usMainSection7UzCity2: "Termiz",
      usMainSection7UzCity3: "Toshkent",
      usMainSection7UzCity4: "Buxoro",
      usMainSection7UzCity5: "Nukus",
      usMainSection7UzCity6: "Samarqand",

      usMainSection7Kz: "Qozog‘iston",
      usMainSection7KzCity1: "Qarag‘anda",
      usMainSection7KzCity2: "Aktau",
      usMainSection7KzCity3: "Olmaota",

      usMainSection7Tj: "Tojikiston",
      usMainSection7TjCity: "Qurg‘ontepa", // или "Qurgon-Tyube", в зависимости от предпочтения

      usMainSection7Krg: "Qirg‘iziston", // исправлено
      usMainSection7KrgCity: "Ala-Buka",

      usMainSection7P1: "Gidro yuvish",
      usMainSection7P2: "Gidromonitor",
      usMainSection7P3: "Freza",
      usMainSection7P4: "Freza PP",
      usMainSection7P5: "Amfibiya 600 m³",
      usMainSection7P6: "Dengizga mos",

      usMainFreshH2: "2025-yilgi yangi loyihalar",
      gM3FreshH2: "Yangi loyihalar",
      gM3FreshH1: "Termizdagi 2025 yilgi yangi loyihalar galereyasi",
      gM3FreshH3: "Tuyabuguz suv omboridagi yangi loyihalar galereyasi 2025",
      usMainFreshP1: "Zemsnaryad",
      usMainFreshP2: "Yetkazib berish geografiyasi", //
      usMainFreshP3: "Yangi loyihalar galereyasi", //
      usMainFreshP4: "2000/63 dizelli, O‘zbekiston dengiz reestridan o‘tgan", //
      usMainFreshP5: "Termiz shahri, Surxondaryo viloyati, Termiz porti", //
      usMainFreshP6: "Tuyabo'g'iz suv ombori", //
      usMainFreshP7: "Foto va video materiallar tez orada yuklanadi...", //

      usMainFabricP1: "Bizning ishlab chiqarish maydonlarimiz",

      gMain3Text1: "Rasmlar",
      gMain3Text2: "ko'p funktsiyali amfibiya ekspeditori",
      gMain3Text3: "Ishlab chiqarish sexi va transport",

      seoText1: "Ko‘p izlanadiganlar:",
      seoText2: "Qum qazish va daryo tubini tozalash uchun zemsyornyad",
      seoText3: "Shassidagi mobil va mini zemsyornyad",
      seoText4: "Buyurtma asosida gidravlik zemsyornyad",
      seoText5:
        "Zemsyornyadni O‘zbekistonda, Rossiyada va boshqa davlatlarda xarid qilish",
      seoText6: "DREDMARK uskunalari quyidagilar uchun mos:",
      seoText7:
        "Daryo chuqurlashtirish, ko‘llarni tozalash, qum qazib olish, kanallarni kengaytirish va suv havzalarida texnik ishlar uchun. Biz gidravlik zemsyornyadlar, mini modellari, amfibiyali va shassiga o‘rnatiladigan uskunalarni ishlab chiqaramiz. Yetkazib berish O‘zbekiston, Qozog‘iston, Rossiya, Tojikiston va Qirg‘izistonga mavjud.",
      toastSuccess: "Xabar muvaffaqiyatli yuborildi!",
      toastError: "Yuborishda xatolik yuz berdi. Keyinroq qayta urinib ko'ring.",
      toastNetError: "Tarmoq xatosi. Ulanishni tekshiring.",
      unitM: "m",
      unitH: "soat",
      unitMonth: "oy",
      seoBuy: "zemsnaryad sotib olish",
      seoProducer: "zemsnaryad ishlab chiqaruvchi",
      seoPrice: "zemsnaryad narxi",
      seoTitleHome: "DREDMARK – Rasmiy veb-sayt | Zemsnaryad va uskunalar ishlab chiqarish", // Updated per user request
      seoDescHome: "DREDMARK rasmiy sayti. Zemsnaryadlar, daryo tubini chuqurlashtirish va qum qazib olish uskunalari ishlab chiqarish. Sifat kafolati, o'z ishlab chiqarish, MDH davlatlariga yetkazib berish.",
      seoKeywordsHome: "Dredmark, rasmiy sayt, zemsnaryad, zemsnaryad sotib olish, zemsnaryad ishlab chiqarish, daryo tozalash",
      seoTitleUs: "DREDMARK kompaniyasi haqida | Rasmiy sayt",
      seoDescUs: "DREDMARK haqida ko'proq bilib oling rasmiy saytda. Biz 20 yillik tajribaga ega zamonaviy zemsnaryadlar va nasos stansiyalarini ishlab chiqaramiz.",
      seoTitleVozm: "DREDMARK Mahsulotlar Katalogi | Rasmiy sayt",
      seoDescVozm: "DREDMARK mahsulotlarining to'liq ro'yxati rasmiy saytda: ko'p funktsiyali amfibiya zemsnaryadlari, nasos stansiyalari va ehtiyot qismlar.",
      seoTitleSert: "DREDMARK Sertifikatlari va Patentlari | Rasmiy sayt",
      seoDescSert: "DREDMARK zemsnaryadlarini ishlab chiqarish uchun rasmiy sifat sertifikatlari va patentlar.",
      seoTitleGallery: "DREDMARK Foto va Video Galereya | Haqiqiy loyihalar",
      seoDescGallery: "Amalga oshirilgan DREDMARK loyihalari galereyasi. Bizning zemsnaryadlarimizni amalda ko'ring.",
      pageNotFound: "Sahifa topilmadi",
      pageNotFoundSub: "Siz juda uzoqqa suzib ketdingiz yoki bunday sahifa mavjud emas.",
      goHome: "Bosh sahifaga qaytish",
      loading: "Yuborilmoqda...",
      fEmail: "Sizning Emailingiz",
      fOnlineHeader: "Muntazam onlayn ariza",
      fOnlineStatus: "Onlayn",
      fInstantReply: "Tezkor javob",
      fSpecialistWait: "Mutaxassis aloqada va sizga javob berishga tayyor",
      mailSubject: "Murojaatingiz uchun tashakkur — DREDMARK",
      mailBody: "Salom! Biz sizning arizangizni qabul qildik. Mutaxassisimiz tez orada siz bilan bog'lanadi.",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ru",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  localStorage.setItem("language", lng);
};

export default i18n;
