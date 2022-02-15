"use strict"

const oranges = 15.678;
const apples = 123.965;
const melons = 90.2345;
//Максимальне число:
const maxNum = Math.max(oranges, apples, melons);
console.log(`Максимальне число: ${maxNum} `);

//Мінімальне число
const minNum = Math.min(oranges, apples, melons)
console.log(`Манімальне число: ${minNum} `);
//Суму всіх товарів
const priceALL = oranges + apples + melons;
console.log(`Вартість всіх товарів: ${priceALL}`);

//Сума цілих цін товарів(заокруглював до меншого за умовою а потім додавав їх)
const intOranges = Math.floor(oranges);
const intApples = Math.floor(apples);
const intMelons = Math.floor(melons);
const intPriceAll = intOranges + intApples + intMelons;
console.log(`Сума товарів без копійок: ${intPriceAll}`);

//Заокруглення до сотень
const roundedSum = +oranges.toFixed(2) + +apples.toFixed(2) + +melons.toFixed(2);
const finalRoundedSum = Math.round(roundedSum / 100) * 100;
console.log(`Сума товарів округлена до сотень: ${finalRoundedSum}`);

//Парність числа
const even = intPriceAll % 2;
if (even == 0) {
   const isTrue = true;
   console.log(`Парність числа: ${isTrue}`);
} else {
   console.log("number not even");
}

//Здача з 500
const changes = 500 - priceALL;
console.log(`Здача з 500: ${changes}`);

//Середнє значення до сотень
const avaragePrice = ((oranges + apples + melons) / 3).toFixed(2);
console.log(`Середнє значення цін до сотень: ${avaragePrice}`);

//рандомна знижка від 0 до 100%
const discount = Math.round(Math.random() * 100);
console.log(`Рандомна знижка: ${discount + "%"}`);

//Ціна товару зі знижкою
const discountedPay = priceALL - (priceALL * (discount / 100));
console.log(`Ціна товару з рандомною знижкою ${discountedPay.toFixed(2)}`);

//Чистий прибуток
const netProfit = (priceALL / 2) - (priceALL * (discount / 100));
console.log(`Чистий прибуток: ${netProfit}`);