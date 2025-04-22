// #### Тип для идентификатора
// Создайте тип Identifier, который может быть строкой или числом.
type Identifier = string | number;


// #### Тип для доступных операций
// Создайте тип Operations, который бы описывался уникальными символами `Symbol("Read")`, `Symbol("Write")` и `Symbol("Update")`.
const Read = Symbol("Read");
const Write = Symbol("Write");
const Update = Symbol("Update");

type Operations = typeof Read | typeof Write | typeof Update;


// #### Тип для массива оценок
// Создайте тип Grades, который описывает массив чисел (оценок).
// Также создайте тип GradeStatus, который может быть `"pass"` или `"fail"`.
type Grades = number[];
type GradeStatus = 'pass' | 'fail';


// #### Тип для функции с перегрузкой
// Создайте тип функции CalculateArea, который описывает функцию, вычисляющую площадь геометрической фигуры в зависимости от переданных параметров:
// * Для круга – принимает один параметр `(radius: number)` и возвращает площадь круга (`number`).
// * Для прямоугольника – принимает два параметра `(width: number, height: number)` и возвращает площадь прямоугольника (`number`).
// * Для треугольника – принимает три параметра `(a: number, b: number, c: number)` и возвращает площадь по формуле Герона (`number`).
type CalculateArea = {
    (radius: number): number;
    (width: number, height: number): number;
    (a: number, b: number, c: number): number;
};

const calculateArea: CalculateArea = function(..args: number[]): number {
    const argCount = args.length;

    switch(argCount) {
        case 1:
            const [radius] = args;

            return Math.PI * Math.pow(radius, 2);
        case 2:
            const [width, height] = args;

            return width * height;
        case 3:
            const [a, b, c] = args;
            const halfPer =  (a + b + c) / 2;

            return Math.sqrt(halfPer * (halfPer - a) * (halfPer - b) * (halfPer - c));;
        default:
            throw new Error('Неверное количество параметров');
    }
};

calculateArea(15);
calculateArea(6, 7);
calculateArea(6, 7, 8);

// @ts-expect-error
calculateArea('6', '7', '8');


// #### Тип по строковому шаблону
// Опишите тип, который бы соответствовал шаблону `${любое целое число}${px или %}`.
type Size = `${bigint}${"px" | "%"}`;