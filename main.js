"use strict"

const ORANGES = 15.678;
const APPLES = 123.965;
const MELONS = 90.2345;
//Максимальне число:
const MAX_NUM = Math.max(ORANGES, APPLES, MELONS);
console.log(`Максимальне число: ${MAX_NUM} `);

//Мінімальне число
const MIN_NUM = Math.min(ORANGES, APPLES, MELONS)
console.log(`Манімальне число: ${MIN_NUM} `);
//Суму всіх товарів
const PRICE_ALL = ORANGES + APPLES + MELONS;
console.log(`Вартість всіх товарів: ${PRICE_ALL}`);

//Сума цілих цін товарів(заокруглював до меншого за умовою а потім додавав їх)
const INT_ORANGES = Math.floor(ORANGES);
const INT_APPLES = Math.floor(APPLES);
const INT_MELONS = Math.floor(MELONS);
const INT_PRICE_ALL = INT_ORANGES + INT_APPLES + INT_MELONS;
console.log(`Сума товарів без копійок: ${INT_PRICE_ALL}`);

//Заокруглення до сотень
const ROUNDED_SUM = PRICE_ALL.toFixed(2);
const FINAL_ROUNDED_SUM = Math.round(+ROUNDED_SUM / 100) * 100;
console.log(`Сума товарів округлена до сотень: ${FINAL_ROUNDED_SUM}`);

//Парність числа
const EVEN = INT_PRICE_ALL % 2;
if (EVEN === 0) {
   console.log(`Парність числа: true `);
} else {
   console.log("number not even");
}

//Здача з 500
const CHANGES = 500 - PRICE_ALL;
console.log(`Здача з 500: ${CHANGES}`);

//Середнє значення до сотень
const AVARAGE_PRICE = (PRICE_ALL / 3).toFixed(2);
console.log(`Середнє значення цін до сотень: ${AVARAGE_PRICE}`);

//рандомна знижка від 0 до 100%
const DISCOUNT = Math.round(Math.random() * 100);
console.log(`Рандомна знижка: ${DISCOUNT + "%"}`);

//Ціна товару зі знижкою
const DISCOUNTED_PAY = (PRICE_ALL - PRICE_ALL * (DISCOUNT / 100)).toFixed(2);
console.log(`Ціна товару з рандомною знижкою ${DISCOUNTED_PAY}`);

//Чистий прибуток
const NET_PROFIT = PRICE_ALL / 2 - PRICE_ALL * (DISCOUNT / 100);
console.log(`Чистий прибуток: ${NET_PROFIT}`);
