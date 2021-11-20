/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    // const nums = number.split("").map(Number);
    // let left = 0;
    // let right = 0;

    // nums.forEach((element, idx) => {
    //     idx < 3 ? (left += element) : (right += element);
    // });

    const tickets = number.split("").reduce(
        (acc, item, idx) => {
            idx < 3 ? (acc.left += +item) : (acc.right += +item);
            return acc;
        },
        { left: 0, right: 0 }
    );

    return tickets.left === tickets.right;
}

module.exports = checkTicket;
