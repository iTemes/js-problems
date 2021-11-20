/**
 * Напишите функцию isPalindrome(value) определяющую,
 * является ли переданная строка палиндромом, то есть строкой,
 * которая одинаково читается слева направо и справа налево.
 *
 * Пример:
 *
 * isPalindrome('121') === true
 * isPalindrome('boob') === true
 * isPalindrome('true') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function isPalindrome(value) {
    const string = value.split("");
    let i = 0;
    let j = string.length - 1;

    while (i < j) {
        if (string[i] !== string[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
}

module.exports = isPalindrome;
