/**
 * Самый простой способ зашифровать строку – сдвиг букв.
 * Под сдвигом понимается замена буквы на предыдущую в алфавите.
 * Если предыдущей буквы нет, она заменяется на последнюю букву алфавита (в этой задаче мы имеем дело с английским алфавитом).
 *
 * Вам прислали секретное сообщение, зашифрованное способом, описанным выше и состоящее из строчных английских букв.
 *
 * Напишите функцию decrypt(secret) которая расшифрует и вернет его.
 *
 * Пример:
 *
 * decrypt('bnqqdbs') === 'correct'
 * decrypt('zmc vd hfmnqd rozbdr') === 'and we ignore spaces'
 *
 * @param {string} secret
 * @returns {string}
 */
function decrypt(secret) {
    const string = secret.split("");
    let ans = "";
    const alphabetHash = [...Array(26)].reduce((acc, _, index) => {
        if (index === 25) {
            acc[String.fromCharCode(index + 97)] = String.fromCharCode(0 + 97);
        } else {
            acc[String.fromCharCode(index + 97)] = String.fromCharCode(
                index + 1 + 97
            );
        }
        return acc;
    }, {});

    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            ans += " ";
        } else ans += alphabetHash[string[i]];
    }

    return ans;
}

module.exports = decrypt;
