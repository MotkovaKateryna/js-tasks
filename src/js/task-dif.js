// 📌task 1
// Подсчет суммы чисел: Напишите функцию, которая принимает массив чисел в 
// качестве аргумента и возвращает сумму всех чисел в массиве

// FOR 📍
// function sum (arr){
// let sum = 0;
// for (let i = 0; i <= arr.length-1; i+=1 ){
//   console.log(arr[i]);
//   sum = sum + arr[i];
// }
// return sum
// }

// FOR OF 📍

// function sum (arr) {
//   let sum =0 ;
//   for (const item of arr) {
//     console.log(item);
//     sum += item;
//   }
//   return sum; 
// }

// console.log(sum([1,8,9,5,7,9,11]));

// 📌task 2 
// Поиск самого длинного слова: Дана строка, состоящая из нескольких слов, разделенных пробелами.
// Напишите функцию, которая принимает эту строку в качестве аргумента и возвращает самое длинное слово.

// const string = "use laptop government code picture space";

// FOR 📍
// function searchLongestWord (string){
//   const arr = string.split(" ");
//   let longestWord = '';
// for (let i = 0; i <= arr.length-1; i+=1){
// if (longestWord.length < arr[i].length){
//   longestWord = arr[i];
// } 
// }
// return longestWord;
// }


// FOR OF 📍

// function searchLongestWord (string){
//   const arr = string.split(" ");
//   let longestWord = '';
// for (const word of arr){
// if (longestWord.length < word.length){
//   longestWord = word;
// } 
// }
// return longestWord;
// }

// REDUCE 📍

// function searchLongestWord(str) {
//   return str.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
//   // В данном случае, функция сравнивает длину текущего элемента b с 
//   //длиной предыдущего элемента a. Если длина b больше, то он становится 
//   //новым значением a, иначе остается прежним. В результате выполнения этой функции,
//   // мы получаем самое длинное слово в массиве.
// }

// console.log(searchLongestWord('There is the longest word in a string!'));

// console.log(searchLongestWord(string));




// 📌task 3
// Определить сколько раз каждый элемент встречается в массиве.

//  forEach 📍
/*
const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple', "pear"];
// 1. Инициализация объекта count: В начале кода создается пустой объект count 
const count = {};
// 2. Итерация по массиву fruits:
// Затем мы используем метод forEach, чтобы перебрать каждый элемент массива fruits.
fruits.forEach(fruit => {
  // Для каждого фрукта выполняется следующий код:
  //3. Проверка наличия фрукта в объекте count:
// Строка if (!count[fruit]) проверяет, есть ли текущий фрукт в объекте count.
// Если фрукта нет в объекте (то есть count[fruit] равно undefined), то выполняется следующая строка:
  if (!count[fruit]){
 // Текущий элемент отсутствует в объекте count
count[fruit] = 1;//добавляем фрукт в объект count и устанавливаем его значение равным 1.
  } else {
    // Текущий элемент ранее был добавлен в объект count
    //4. Увеличение счетчика для существующего фрукта:
    count[fruit] ++;
  }
});
console.log(count);//5.Вывод результата:После завершения цикла forEach, объект count содержит количество каждого фрукта.
*/

// for .. of 📍
/*
const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple', 'pear'];
const count = {};

for (const fruit of fruits) {
  if (!count[fruit]) {
    count[fruit] = 1;
  } else {
    count[fruit]++;
  }
}
console.log(count);
*/
// reduce📍 Метод reduce() в JavaScript применяет функцию-редуктор (reducer) к каждому элементу массива, проходя по нему слева направо. Он возвращает одно результирующее значение.
/*
const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple', 'pear'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;

//acc[fruit] — это обращение к свойству объекта acc по ключу, который равен значению переменной fruit.
//(acc[fruit] || 0) — это выражение, которое проверяет, есть ли в объекте acc свойство с ключом, равным значению fruit. Если такого свойства нет, то возвращается значение 0.
// + 1 — это инкрементирование значения, полученного из предыдущего шага, на 1.
// подробнее про пример.  Использование метода reduce():
// reduce() — это метод массива, который позволяет нам свести массив к одному значению (в данном случае, объекту count).
// Внутри reduce() мы передаем функцию, которая принимает два аргумента:
// acc (аккумулятор) — объект, в котором мы накапливаем результат.
// fruit — текущий элемент массива (фрукт).
// Внутри функции мы увеличиваем значение свойства объекта acc, соответствующего текущему фрукту (fruit), на 1.
// Если свойства с таким ключом еще нет, оно будет создано и установлено в 1.
// {} - пустой обьект acc

  return acc;
}, {});

console.log(count);

*/


// 📍как функция 
/*
const countItems = (list) => {
  const count = {};
  list.forEach(fruit => {
    if (!count[fruit]) {
      count[fruit] = 1;
    } else {
      count[fruit] ++;
    }
  });
  return count;
};
const fruits = ['kiwi','pear', 'apple', 'kiwi', 'orange', 'kiwi', 'pear', 'apple', 'pear', 'pear'];
const countResult = countItems(fruits);
console.log(countResult);
*/

// 📌task 4
// Создать массив который содержит только уникальные значения исходного массива.

// const fruits = ['kiwi','pear', 'apple', 'kiwi', 'orange', 'kiwi', 'pear', 'apple', 'pear', 'pear'];

//  📍Вариант 1. Используем конструктор Set.
// Самый простой способ создать массив с уникальными значениями - использовать конструктор Set. 
// Данная функция-конструктор позволяет создавать объекты Set, которые хранят уникальные значения. Значения могут относиться к любому типу.

// const fruitsUnique = new Set(fruits);

// new Set(fruits): Здесь мы создаем новый объект типа Set. Объект Set представляет собой коллекцию уникальных значений,
//  то есть в нем не могут быть дубликаты. В данном случае, fruits - это массив, и мы передаем его в конструктор Set. 
//  Это означает, что внутри Set будут только уникальные элементы из массива fruits.
// Array.from(...): Этот метод создает новый массив из итерируемого объекта (например, Set, Map, или другого массива).
//  В нашем случае, мы передаем Set(fruits) как итерируемый объект. Таким образом, Array.from(new Set(fruits)) создает
//   новый массив, содержащий уникальные элементы из исходного массива fruits.
// const fruitsUnique = Array.from(new Set(fruits));
// console.log(fruitsUnique);


//  📍 Вариант 2. Используем пустой массив и цикл forEach.
/*
const fruits = ['kiwi','pear', 'apple', 'kiwi', 'orange', 'kiwi', 'pear', 'apple', 'pear', 'pear'];
const result = [];
fruits.forEach(fruit => {
  if (!result.includes(fruit)){
    result.push(fruit);
  }
})
console.log(result);
*/

//  📍 Вариант 3. Используем пустой объект и цикл forEach.
/*
const myFruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
  const unique = {};
  myFruits.forEach(item => {
    unique[item] = true;
  });
  console.log(unique);// Object { kiwi: true, apple: true, orange: true }

  // Чтобы получить массив из ключей объекта можно использовать метод Object.keys():
  const uniqueArray = Object.keys(unique);
  console.log( uniqueArray); // Array(3) [ "kiwi", "apple", "orange" ];

  const uniqueValues = Object.values(unique);
  console.log( uniqueValues);
*/

/*
📍 Вариант 4. Через функцию

const uniqueItems = (list) => {
  const unique = {};
  list.forEach(item => {
    unique[item] = true;
  });
  return Object.keys(unique);
}

const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
const fruitsUnique =  uniqueItems(fruits);
console.log(fruitsUnique); // Array(3) [ "kiwi", "apple", "orange" ];
*/


// 📌TASK 5
// Создать функцию, которая группирует студентов по возрасту.

const students = [
  { name: 'Alex', age: 20 },
  { name: 'Mike', age: 24 },
  { name: 'Masha', age: 20 },
  { name: 'Stas', age: 18 },
  { name: 'Mila', age: 20 },
  { name: 'Olya', age: 25 },
  { name: 'Asya', age: 18 },
  { name: 'Igor', age: 24 },
  { name: 'Vasya', age: 20 },
  { name: 'Petya', age: 18 },
  { name: 'Lena', age: 24 },
  { name: 'Ira', age: 20 },
  { name: 'Oleg', age: 18 },
];













// 📌task
//  Проверка на палиндром: Создайте функцию, которая проверяет,
//  является ли заданная строка палиндромом (читается одинаково в обоих направлениях)
