/**
 * Author: Pidgola Stanislav
 */

//####Задача 7
//
// Код ниже получает из массива строк новый массив, содержащий их длины:
//
// ```javascript
// var arr = ['abcd', 'abcde', 'ab', 'abc'];
//
// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
// arrLength[i] = arr[i].length;
// }
// console.log( arrLength ); // 4,5,2,3
// ```
// Перепишите выделенный участок:
// - используйте вместо цикла `for` метод `map`

var arrStr = ['abcd', 'abcde', 'ab', 'abc'];

function arrayMap() {
    var arrLength = arrStr.map(function (v) {
        return v.length;
    })
    return arrLength;
}
console.log('arrayLength : ' ,arrayMap());