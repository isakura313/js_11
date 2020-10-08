let chislo = 2; // тип данных число
let stroka = "Мама мыла раму";

let logic = true;

let x;

let obj = {
  name: "Vasya",
  surname: "Vasiliev",
};
let arr = [1, 2, 3, 4];

// console.log(typeof(chislo)); // оператор typeof возвращает тип
// console.log(typeof(stroka));
// console.log(typeof(logic))
// console.log(typeof(x))
// console.log(typeof(obj))
// console.log(typeof(null))
// console.log(chislo + stroka);
// console.log(typeof(arr))

let a = {};
let b = null;
console.log(typeof a === typeof b);
console.log(Number.isNaN(stroka * chislo));
console.log(Number.isFinite('2'))