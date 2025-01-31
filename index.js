// // 42.Funksiyaga raqam string ko’rinishida berilsa, funksiya ushbu ma’lumotni yana raqam ma’lumot turi ko’rinishida qaytarib bersin.
// function raqam(str) {
//   return Number(str);
// }

// console.log(raqam("5"));

// // 43.To’rtburchakning yuzini hisoblaydigan funksiya yasang. Bunda funksiyaga to’rtburchakning(ya’ni to’g’ri turtburchak) tomonlari beriladi. Funksiya uning yuzini qaytarishi kerak, agar tomonlar xato kiritilgan bo’lsa funksiya -1 qaytarsin.
// function tortYuzi(a, b) {
//   if (a <= 0 || b <= 0) {
//     return -1;
//   }
//   return a * b;
// }
// console.log(tortYuzi(10, 11));

// // 44.Funksiyaga ism va familiya argument qilib berilsa, funksiya “ism, familiya” formatdagi string qaytarsin.

// function ismFam(ism, familiya) {
//   return familiya + ism;
// }

// console.log(ismFam("Ayubxon", "Sattorov "));

// // 46.Shunday funksiya yasangki, ushbu funksiya 2ta argument qabul qiladi. Birinchi argument massive, ikkinchi argument ushbu massivni boshidan boshlab nechta elementni tushurib qoldirish. Tushirib qoldirilgandan so’ng funksiya natijani qaytarsin.

// function tushirMassiv(arr, tushirishSoni) {
//   return arr.slice(tushirishSoni);
// }
// console.log(tushirMassiv([1, 2, 3], 1));

// // 47.Funksiya argument sifatida ovoz berib qo’llab quvvatlashlar soni va ovoz berib qo’llamaganlar sonini qabul qiladi. Funksiya natijani qaytarsin.
// function ovozlar(ovozObj) {
//   return ovozObj.upvotes - ovozObj.downvotes;
// }
// console.log(ovozlar({ upvotes: 2, downvotes: 33 }));

// // 48.Funksiya son qabul qilsa, ushbu sonning negativini qaytarsin.
// function negativ(son) {
//   return son - son - son;
// }

// console.log(negativ(4));

// // 49.Massivni elementlarini o’rnin almashtiradigan funksiya yasang. Reverse metodi siz ham urinib ko’ring.
// function almash(arr) {
//   return arr;
// }

// console.log(almash([1, 2, 3, 4].reverse()));

// function kinogaKirish(yosh, otaOna) {
//   if (otaOna || yosh > 15) {
//     return true;
//   } else {
//     return false;
//   }
//   return yosh, otaOna;
// }
// console.log(kinogaKirish(14, true));

// 51.Quyidagi namunalarda kamchilik bor funksiya aslida har bir massivning elementiga 1 qo’shishi kerak. Funksiya to’g’ri yasang.
// function oshir1ga(almash) {
//   return almash.map((num) => num + 1);
// }

// console.log(oshir1ga([0, 1, 2, 3]));

// //  52.Template string yordamida ya’ni backticlar orqali  `` ushbu formatdagi stringni hosil qiling.
// var ism = "Donyor";
// var familiya = "Olimov";
// console.log(`${ism} ${familiya}`);

// 54.Funksiya string qabul qiladi. Agar ushbu stringning uzunligi. juft bo’lsa funksiya true qaytarsin, aks holda false
// function sozUzunligi(str) {
//   return str.length % 2 === 0;
// }

// console.log(sozUzunligi("cherry"));

// 55.Funksiya 2ta argument qabul qiladi. Ikkala argument ham son, funksiya 1-sonni 2-songa darajaga ko’tarilgan qiymatni qaytarsin.
// function daraja(x, y) {
//   return x ** y;
// }

// console.log(daraja(5, 5));

// 56.Funksiya massiv qabul qiladi. Ushbu funksiya massivning so’nggi elementini qaytarib bersin.
// function songiElement(arr) {
//   return arr[2];
// }

// console.log(songiElement([1, 2, 3]));

// 58.Funskiyaga so’z kiritilsa funksiya ushbu so’zni birinchi harfisiz qaytarib bersin.
// function soz(word) {
//   return word.slice(1);
// }
// console.log(soz("apple"));

// 59.Boolen qiymatini teskarisini qaytarib beradigan funksiya yasang.
// function teskariBool(bool) {
//   return !bool;
// }

// console.log(teskariBool(false));

// 60.Funskiya son qabul qiladi, agar son juft bo’lsa funskiya “juft” qaytaradi, agar toq bo’lsa “toq” qaytarsin.
// function juftMiToqmi(son) {
//   if (son % 2 == 0) {
//     console.log("juft");
//   } else {
//     console.log("toq");
//   }
//   return son;
// }

// console.log(juftMiToqmi(3));
