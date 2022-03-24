/**
 * Author: Pidgola Stanislav
 */


//####Задача 8
//
// Напишите функцию `f` . Данная функция принимает один параметр: одноуровневый или многоуровневый массив.
// Возвращает данная функция сумму всех элементов на всех уровнях.
//
// Обратите внимание что функция должна возвращать число 0,
// если при проходе всех уровней не было найдено ни одного числа.
//
// Функция должна содержать проверки:
//
// - Первый параметр обязателен и может принимать только массив
// - Генерировать ошибку если на каком то уровне было найдено не число и не массив
//
// ```javascript
// const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
// f(arr); // 12
// const arr2 = [[[[[1,2]]]]];
// f(arr2); // 3
// const arr3 = [[[[[1,2]]],2],1];
// f(arr3); // 6
// const arr4 = [[[[[]]]]];
// f(arr4); // 0
// const arr5 = [[[[[],3]]]];
// f(arr5); // 3
//```

const arrTest1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];//12
const arrTest2 = [2,3,4,5,6,7,1,9];//37
const arrTest3 = [[[[[],3]]]];//3

const arrEmpty = [];//0

function f(array) {
    var arrSum = 0;
    if ( Array.isArray(array) ){
        if ( array.length ){
            var transformed = array.flat(4);
            for (let i = 0; i < transformed.length; i++){
                arrSum+=transformed[i];
            }
            return arrSum;
        }else
            return 0;
    }else
        throw new Error('parameter type should be an array!');
}
console.log('Sum : ',f(arrTest1));