const fs = require('fs');

let content = fs.readFileSync('src/i18n.js', 'utf-8');

// Replacements for RU
content = content.replace(
    /homeBannersLink:\s*"Смотреть видео"/g,
    'homeBannersLink: "Запросить расчёт стоимости"'
);
content = content.replace(
    /bannerTitle:\s*"Производство земснарядов и насосных станций DREDMARK"/g,
    'bannerTitle: "Земснаряды 2000–4500 м³/ч для добычи песка и дноуглубления"'
);
content = content.replace(
    /bannerSubtitle:[\s\S]*?"Оснащаем проекты по дноуглублению, добыче песка, золота и расчистке водоёмов.*?"/g,
    'bannerSubtitle: "Собственное производство. Прямые цены без посредников. «Под ключ» — от расчёта до запуска за 4–6 месяцев."'
);
content = content.replace(
    /vozmMainSection8P24:\s*"От ХХХ руб."/g,
    'vozmMainSection8P24: "от 45 млн ₽"'
);
content = content.replace(
    /homeTableBtn:\s*"Получить цену на нужную модель"/g,
    'homeTableBtn: "Получить цену и срок изготовления"'
);
content = content.replace(
    /fButton:\s*"Отправить"/g,
    'fButton: "📩 Получить расчёт за 30 минут"'
);

// Replacements for EN
content = content.replace(
    /homeBannersLink:\s*"Watch video"/g,
    'homeBannersLink: "Request a Quote"'
);
content = content.replace(
    /bannerTitle:\s*"Manufacture of Dredgers and Pump Stations DREDMARK"/g,
    'bannerTitle: "Industrial Dredgers 2000–4500 m³/h for Sand Extraction & Dredging"'
);
content = content.replace(
    /bannerSubtitle:[\s\S]*?"We equip projects for dredging, sand and gold extraction, and water body cleaning.*?"/g,
    'bannerSubtitle: "Direct from manufacturer. No middlemen pricing. Turnkey delivery — from design to commissioning in 4–6 months."'
);
content = content.replace(
    /vozmMainSection8P24:\s*"From XXX rub."/g,
    'vozmMainSection8P24: "From 45 million ₽"'
);
content = content.replace(
    /homeTableBtn:\s*"Get a quote for the required model"/g,
    'homeTableBtn: "Get Price & Lead Time"'
);
content = content.replace(
    /fButton:\s*"Send"/g,
    'fButton: "📩 Get Quote in 30 Minutes"'
);

// Replacements for UZ (approximate translations from RU/EN context, since exact is not fully provided)
content = content.replace(
    /homeBannersLink:\s*"Videoni tomosha qiling"/g,
    'homeBannersLink: "Narxini hisoblash"'
);
content = content.replace(
    /bannerTitle:\s*"DREDMARK zemsnaryadlari va nasos stansiyalarini ishlab chiqarish"/g,
    'bannerTitle: "Qum qazib olish va chuqurlashtirish uchun 2000–4500 m³/soat zemsnaryadlar"'
);
content = content.replace(
    /bannerSubtitle:[\s\S]*?"Biz tubni chuqurlashtirish, qum va oltin qazib olish hamda suv havzalarini tozalash loyihalarini jihozlaymiz.*?"/g,
    'bannerSubtitle: "O\'z ishlab chiqarishimiz. Vositasiz to\'g\'ridan-to\'g\'ri narxlar. 4-6 oy ichida kalit taslim."'
);
// fButton for UZ isn't exactly known, but let's just make it a good CTA if it says "Yuborish"
content = content.replace(
    /fButton:\s*"Yuborish"/g,
    'fButton: "📩 30 daqiqada narxni olish"'
);

fs.writeFileSync('src/i18n.js', content);
console.log("i18n.js updated.");
