// Examen JavaScript Amaliy savollar 

// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)

// javob:Pasdan yozib keting kodini


// alert(5  % 2)



// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// сделать рандомное число от 1 до 10 и вывести в алерт

// Javob:Pasdan yozib keting kodini


// let random = Math.round(Math.random() * 10 );
// alert(random);



// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring! 

// сделать число 12.510 целым

// ответ должен выйти 12

// javob: 12 chiqishi kerak!


// let number = Math.floor(12.510)
// alert(number)



// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// с помощью функции найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

// Javob:Kodini yozib bering 


// function mars() {
//     let word = "MARS IT SCHOOL"
//     let result = word.length ;
//     alert(`Слово MARS IT SCHOOL састоит из ${result} букв`)
// }
// mars()



// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// Javob:Kodini yozib bering

// for (let index = 0; index < 10; index++) {
//     let word = "MARS IT SCHOOL"
//         console.log(word);
    
// }




// 6-savol Array methods

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// С помощью этого массива вывести в консоль свое имя

// Javob:Kodini yozib bering

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// console.log(harflar[11],harflar[19],harflar[6],harflar[0],harflar[11],harflar[11],harflar[0],harflar[2],harflar[0],harflar[10],harflar[7]);
// m u h a m m a d a l i


// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// Javob:Kodini yozib bering


// let userAge = +prompt("Yoshingizni kriting")
// if(userAge == 18){
//     console.log("Yoshi muborak")
// }else if(userAge < 18){
//     console.log("Siz balag'ot yoshiga yetmagansiz -")
// }else if(userAge > 18){
//     console.log("Siz balag'ot yoshiga yetgansiz +")
// }



// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Ввести в промпт свое имя и вывести в консоль его наоборот

// Javob:Kodini yozib bering


// let userName = prompt("Введите ваше имя:");
// let reversedName = userName.split('').reverse().join('');
// console.log(reversedName);



// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring

// найти и вывести четные массивы в консоль, с помощью методов

// Javob :Kodini yozib bering


// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let index = 0; index < sonlar.length; index++) {
//     if (sonlar[index] % 2 === 0) {
//         console.log(sonlar[index]);
//     }
// }








