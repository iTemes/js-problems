/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */

function makePrefixSum(lenght) {
    if (lenght <= 2) {
        return [0, 1];
    }

    const newArr = [0, 1, ...Array(lenght - 1)];
    for (let i = 2; i < newArr.length; i++) {
        newArr[i] = newArr[i - 1] + newArr[i - 2];
    }
    return newArr;
}

function isFibonacci(value) {
    const fibSeq = makePrefixSum(15);
    const index = fibSeq.indexOf(value);

    return +index < 0 ? undefined : index;
}

module.exports = isFibonacci;
