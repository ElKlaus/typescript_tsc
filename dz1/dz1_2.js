/**
 * @class
 */
class MathOperations {
  /**
   * Умножает два числа
   *
   * @param {number} a
   * @param {number} b
   * @returns {number}
   *
   * @see {@link MathOperations#divide}
   * @see {@link MathOperations.square}
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Делит два числа
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  divide(a, b) {
    return a / b;
  }

  /**
   * Возводит в квадрат число
   * @param {number} x
   * @returns {number}
   * @see {@link MathOperations#multiply}
   */
  static square(x) {
    return x * x;
  }
}