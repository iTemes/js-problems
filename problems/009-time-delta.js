/**
 * Напишите функцию getTimeDelta(x, y) определяющую,
 * сколько секунд прошло между двумя моментами времени x и y.
 *
 * Время передается в формате 'HH:MM:SS'. Минимальное значение – '00:00:00', максимальное – '23:59:59'.
 *
 * По условию x всегда меньше y.
 *
 * Пример:
 *
 * getTimeDelta('00:00:00', '00:00:01') === 1
 * getTimeDelta('01:01:01', '02:02:02') === 3661
 * getTimeDelta('01:19:30', '01:20:20') === 50
 *
 * @param {string} x
 * @param {string} y
 * @returns {number} разница между x и y в секундах
 */
function getDate(hour, minutes, seconds) {
    const date = new Date();
    date.setHours(Number(hour), Number(minutes), Number(seconds));

    return date;
}
function getTimeDelta(x, y) {
    const [parse1, parse2] = [x.split(":"), y.split(":")];
    const time1 = getDate(...parse1);
    const time2 = getDate(...parse2);

    return Math.floor((time2 - time1) / 1000);
}

module.exports = getTimeDelta;
