/**
 * Складывает два значения одного типа.
 * 
 * Эта функция принимает два аргумента, которые должны быть строго одного типа из следующего множества:
 * - number
 * - bigint
 * - string
 * 
 * Возвращает результат того же типа, что и аргументы.
 *
 * @param {number|bigint|string} a - Первый операнд.
 * @param {number|bigint|string} b - Второй операнд.
 * @returns {number|bigint|string} - Результат сложения.
 * 
 * @example
 * // складываем числа
 * sum(1, 2); // 3
 * 
 * @example
 * // складываем bigint
 * sum(10n, 20n); // 30n
 * 
 * @example
 * // складываем строки
 * sum("Hello, ", "World!"); // "Hello, World!"
 */
function sum(a, b) {
    return a + b;
}