/**
 * Пароль называется криптостойким,
 * если он включает в себя хотя бы одну строчную английскую букву,
 * хотя бы одну заглавную английскую букву и хотя бы одну цифру,
 * при этом его длина должна быть не менее 7 символов.
 *
 * Напишите функцию validatePassword(password) определяющую,
 * является ли переданный пароль криптостойким.
 *
 * Пример:
 *
 * validatePassword('abc4DEFG') === true
 * validatePassword('abcdefg') === false
 * validatePassword('abcdefG') === false
 * validatePassword('abcdef7') === false
 *
 * @param {string} password
 * @returns {boolean}
 */
function validatePassword(password) {
    if (password.length < 7) return false;

    const str = password.split("");
    let isNum = false;
    let isLower = false;
    let isUpper = false;

    const alphabetHash = [...Array(26)].reduce((acc, _, index) => {
        acc[String.fromCharCode(index + 65)] = String.fromCharCode(index + 97);
        return acc;
    }, {});

    for (let i = 0; i < str.length; i++) {
        if (Number(str[i])) {
            isNum = true;
            continue;
        }

        if (alphabetHash[str[i]]) {
            isUpper = true;
            continue;
        }
        const upperCase = str[i].toUpperCase();
        if (alphabetHash[upperCase] === str[i]) {
            isLower = true;
        }
    }

    return isNum && isUpper && isLower;
}

module.exports = validatePassword;
