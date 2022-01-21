/**
 * Author: Pidgola Stanislav
 */

//####Задача 1

// Напишите функцию `f`, которая возвращает куб числа.
// Число передается параметром.
// Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.
// f(2); // 8
// f('Content'); // Error: parameter type is not a Number


function cube(number){
    if ( typeof number === 'number' )
        return number**3;
    else
        throw new Error('parameter type is not a Number!')
}

cube(2);