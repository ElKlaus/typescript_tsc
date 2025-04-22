// #### Объектные типы и словари
// Создайте тип `User`, который содержит:
// * `id` (число)
// * `name` (строка)
// * `email` (строка, необязательное поле)
// Затем создайте словарь `UsersDict`, где ключ — это `id` пользователя, а значение — объект типа `User`.
// Напишите функцию `getUserEmail(id: number, users: UsersDict): string | undefined`, которая возвращает email пользователя или `undefined`, если его нет.

type User = {
    id: number;
    name: string;
    email?: string;
};

const UsersDict: {[id: number]: User} = {};

type getUserEmail = {(id: number, users: typeof UsersDict): (string | undefined)};

const getUserEmail = function(id, users) {
    const user = users[id];

    return user.email ? user.email : undefined;
};


// #### Объединение интерфейсов
// Объявите интерфейс `User` с полями:
// * `id` (число)
// * `name` (строка)
// Дополните этот же интерфейс (новым объявлением):
// * `email` (строка, необязательное поле)
// * `logIn` (метод, возвращает void)
// Создайте объект, соответствующий полному интерфейсу `User`, и напишите функцию:
// // Выводит информацию о пользователе
// // Если email есть - включает его в вывод
// // Вызывает user.logIn()
// function printUser(user: User): void {}

interface iUser {
    id: number;
    name: string;
};

interface iUser {
    email?: string;
    logIn: () => void;
};

const iUser: iUser = {
    id: 555,
    name: 'Frodo',
    email: 'frodo@shir.ru',
    logIn: () => {
        console.log('Hello Mordor!!!')
    },
};

const printUser = function (user: iUser): void {
    for (let key in user) {
        if (user[key] && key != 'logIn') {
            console.log(user[key]);
        }
    };

    iUser.logIn();
};

printUser(iUser);


// #### Наследование интерфейсов
// Создайте базовый интерфейс `Shape`:
// * `color` (строка)
// * `area` (метод, возвращает число)
// Наследуйте от него два интерфейса:
// * `Circle` с дополнительным полем `radius`
// * `Rectangle` с полями `width` и `height`
// Реализуйте функции:
// function createCircle(radius: number): Circle;
// function createRectangle(width: number, height: number): Rectangle;
// function calcArea(shape: Shape): number;

interface Shape {
    color: string;
    area(): number;
};

interface Circle extends Shape {
    radius: number;
};

interface Rectangle extends Shape {
    width: number;
    height: number;
};

const createCircle = function(radius: number, color: string): Circle {
    const circle: Circle = {
        radius,
        color,
        area() {
            return Math.PI * this.radius ** 2;
        }
    };

    return circle;
}

const createRectangle = function(width: number, height: number, color: string): Rectangle {
    const rectangle: Rectangle = {
        width,
        height,
        color,
        area() {
            return this.width * this.height;
        }
    };

    return rectangle;
};

const calcArea = function(shape: Shape): number {
    return shape.area();
};

createCircle(14, 'red');
createRectangle(10, 15, 'green');


// #### this внутри Interface
// Создайте интерфейс User, который:
// 1. Содержит объект data с полями:
//    * `name` (строка)
//    * `age` (число)
// 2. Имеет свойства верхнего уровня:
//     * name — должно автоматически брать тип из `data.name` через `this`
//     * age — аналогично, из `data.age`

interface iUser2{
    name: this['data']['name'];
    age: this['data']['age'];
    data: {
        name: string;
        age: number
    };
};

const iUser2: iUser2 = {
    name: 'Sam',
    age: 35,
    data: {
        name: 'Rosa',
        age: 30,
    },
};


// #### Создание и объединение перечислений
// Объявите два перечисления:
// * `UserRole` с вариантами: `Admin`, `Editor`, `Viewer`;
// * `AccountStatus` с вариантами: `Active`, `Suspended`, `Banned`.
// Создайте новый объект `AllRolesAndStatuses`, который объединяет оба перечисления с помощью spread-оператора (`...`) и `as const` (подсказка: помните про возможность конфликта дискрименанта при объединении).
// На основе этого объекта создайте тип `RoleOrStatus` (подсказка: используйте `keyof typeof`).
// Напишите функцию `getAccessLevel(value: RoleOrStatus): string`, которая возвращает:
// * `"Full access"` для `Admin` и `Active`;
// * `"Limited access"` для `Editor`;
// * `"No access"` для `Viewer`, `Suspended` и `Banned`.

enum UserRole {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer",
};

enum AccountStatus {
    Active = "Active",
    Suspended = "Suspended",
    Banned = "Banned",
};

const AllRolesAndStatuses = {
    ...UserRole,
    ...AccountStatus,
} as const;

type RoleOrStatus = keyof typeof AllRolesAndStatuses;

const getAccessLevel = function(value: RoleOrStatus): string {
    if (value === 'Admin' || value === 'Active') {
        return "Full access";
    } else if (value === 'Editor') {
        return "Limited access";
    } else if (value === 'Viewer' || value === 'Suspended' || value === 'Banned') {
        return "No access";
    } else {
        return "Unknown";
    }
}

console.log(getAccessLevel('Admin'));
console.log(getAccessLevel('Suspended'));
console.log(getAccessLevel('Editor'));


// #### Оптимизация с помощью const enum
// Перепишите `UserRole` и `AccountStatus` как `const enum`.
// Напишите функцию `checkPermission(role: UserRole, status: AccountStatus): boolean`, которая возвращает:
// * `true`, если роль не `Viewer` и статус не `Banned`
// * `false` во всех остальных случаях
// Прокомментируйте, как `const enum` влияет на итоговый JavaScript-код.
const enum cUserRole {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer",
};

const enum cAccountStatus {
    Active = "Active",
    Suspended = "Suspended",
    Banned = "Banned",
};

const checkPermission = function(role: cUserRole, status: cAccountStatus): boolean {
    if (role != cUserRole.Viewer || status != cAccountStatus.Banned) {
        return true;
    } else {
        return false;
    }
};
//const убирает enum из runtime, т.е. emum`ы существую только на этапе разработки и компиляции. Но мы можем обратиться к содержимому энама,
//что позволяет оптимизировать размер и эффективность кода.


// #### Кортежи с rest-параметрами
// Создайте тип Coordinates:
// * Первые 2 элемента — числа (`latitude`, `longitude`).
// * Остальные элементы (если есть) — строки с названиями ориентиров (`...landmarks: string[]`).
// Напишите функцию:
// // Возвращает строку:
// // "Широта: {lat}, Долгота: {lon}. Ориентиры: {landmarks.join(', ')}"
// // Если ориентиров нет, выводит только координаты
// function describeLocation(coords: Coordinates): string {}

type Coordinates = [latitude: number, longitude: number, ...string[]];

function describeLocation(coords: Coordinates): string {
    const [latitude, longitude, ...landmarks] = coords;
  
    if (landmarks.length > 0) {
        return `Широта: ${latitude}, Долгота: ${longitude}. Ориентиры: ${landmarks.join(', ')}`;
    } else {
        return `Широта: ${latitude}, Долгота: ${longitude}`;
    }
};

console.log(describeLocation([40.25, 116.05, 'Великая китайская стена', 'Китай']));
console.log(describeLocation([40.25, 116.05]));


// #### Базовые операции с кортежами
// Объявите кортеж `Person` с именованными полями:
// * `name` (строка, обязательное)
// * `age` (число, обязательное)
// * `email` (строка, опциональное)
// Создайте функцию:
// // Возвращает строку вида "Привет, {name}! Тебе {age} лет."
// // Если есть email, добавляет " Контакты: {email}"
// function greet(person: Person): string {}
type Person = [name: string, age: number, email?: string];

const greet = function(person: Person): string {
    const [name, age, email] = person;
    const constacts = email ? ` Контакты: ${email}` : '';
    const message = `Привет, ${name}! Тебе ${age} лет.${constacts}`;

    return message;
}

console.log(greet(['Дарья', 28]));
console.log(greet(['Сергей', 37, 'sergey@gmail.com']));


// #### Readonly и деструктуризация
// Объявите readonly кортеж RGB с тремя числами.
// Напишите функцию:
// // Возвращает инвертированный цвет (255 - r, 255 - g, 255 - b)
// function invertColor([r, g, b]: RGB): RGB {}
// Создайте readonly кортеж RGBA на основе RGB + альфа-канал (число, опциональное).
type RGB = readonly [r: number, g: number, b: number];

const invertColor = function([r, g, b]: RGB): RGB {
    return [255 - r, 255 - g, 255 - b];
};

type RGBA = readonly [...RGB, b?: number];

const inverted = invertColor([220, 180, 99]);
const RGBA: RGBA = [220, 180, 99, 0.3];


// #### Гибридные кортежи
// Создайте кортеж Order:
// * Первый элемент — `id` (строка).
// * Второй — массив товаров (`string[]`).
// * Третий — опциональный статус (`"pending" | "completed"`).
// * Четвертый и далее — дополнительные метаданные `(...meta: [string, any][])`.
// Напишите функцию:
// // Возвращает строку:
// // "Заказ #{id}. Товары: {items.join(', ')}. Статус: {status || 'не указан'}"
// // Если есть метаданные, добавляет их в конец
// function processOrder(order: Order): string {}

type Order = [
    id: string,
    products: string[],
    status?: 'pending' | 'completed',
    ...[string, any][]
];

const processOrder = function(order: Order): string {
    const [id, products, status, ...meta] = order;
    const message = `Заказ #${id}. Товары: ${products.join(', ')}. Статус: ${status || 'не указан'}.${meta.length > 0 ? meta.join(', ') : ''}`;

    return message;
};

const order1: Order = ['12345', ['яблоки', 'бананы'], 'pending', ['клиент', 'Ирина'], ['доставка', 'курьер']];
console.log(processOrder(order1));

const order2: Order = ['67890', ['молоко', 'хлеб']];
console.log(processOrder(order2));


// #### Пересечение типов
// Создайте два типа:
// * `Employee` (с полями `id: number` и `department: string`)
// * `Manager` (с полями `teamSize: number` и `role: string`)
// Создайте тип `TeamLead`, который является пересечением Employee и Manager. Затем создайте объект этого типа.

type Employee = {
    id: number;
    deparment: string;
};

type Manager = {
    teamSize: number;
    role: string;
};

type TeamLead = Employee & Manager;

const teamLea: TeamLead = {
    id: 85,
    deparment: 'ЖКХ',
    teamSize: 14,
    role: 'Руководитель направления',
};


// #### Тип never
// Напишите функцию `throwError(message: string): never`, которая выбрасывает ошибку с переданным сообщением.

const throwError = function(message: string): never {
    throw new Error(message);
};

throwError('Hello from Error');