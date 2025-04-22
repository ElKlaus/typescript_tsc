// #### Объектные типы и словари
// Создайте тип `User`, который содержит:
// * `id` (число)
// * `name` (строка)
// * `email` (строка, необязательное поле)
// Затем создайте словарь `UsersDict`, где ключ — это `id` пользователя, а значение — объект типа `User`.
// Напишите функцию `getUserEmail(id: number, users: UsersDict): string | undefined`, которая возвращает email пользователя или `undefined`, если его нет.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var UsersDict = {};
var getUserEmail = function (id, users) {
    var user = users[id];
    return user.email ? user.email : undefined;
};
;
;
var iUser = {
    id: 555,
    name: 'Frodo',
    email: 'frodo@shir.ru',
    logIn: function () {
        console.log('Hello Mordor!!!');
    },
};
var printUser = function (user) {
    for (var key in user) {
        if (user[key] && key != 'logIn') {
            console.log(user[key]);
        }
    }
    ;
    iUser.logIn();
};
printUser(iUser);
;
;
;
var createCircle = function (radius, color) {
    var circle = {
        radius: radius,
        color: color,
        area: function () {
            return Math.PI * Math.pow(this.radius, 2);
        }
    };
    return circle;
};
var createRectangle = function (width, height, color) {
    var rectangle = {
        width: width,
        height: height,
        color: color,
        area: function () {
            return this.width * this.height;
        }
    };
    return rectangle;
};
var calcArea = function (shape) {
    return shape.area();
};
createCircle(14, 'red');
createRectangle(10, 15, 'green');
;
var iUser2 = {
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
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
    UserRole["Editor"] = "Editor";
    UserRole["Viewer"] = "Viewer";
})(UserRole || (UserRole = {}));
;
var AccountStatus;
(function (AccountStatus) {
    AccountStatus["Active"] = "Active";
    AccountStatus["Suspended"] = "Suspended";
    AccountStatus["Banned"] = "Banned";
})(AccountStatus || (AccountStatus = {}));
;
var AllRolesAndStatuses = __assign(__assign({}, UserRole), AccountStatus);
var getAccessLevel = function (value) {
    if (value === 'Admin' || value === 'Active') {
        return "Full access";
    }
    else if (value === 'Editor') {
        return "Limited access";
    }
    else if (value === 'Viewer' || value === 'Suspended' || value === 'Banned') {
        return "No access";
    }
    else {
        return "Unknown";
    }
};
console.log(getAccessLevel('Admin'));
console.log(getAccessLevel('Suspended'));
console.log(getAccessLevel('Editor'));
;
;
var checkPermission = function (role, status) {
    if (role != "Viewer" /* cUserRole.Viewer */ || status != "Banned" /* cAccountStatus.Banned */) {
        return true;
    }
    else {
        return false;
    }
};
function describeLocation(coords) {
    var latitude = coords[0], longitude = coords[1], landmarks = coords.slice(2);
    if (landmarks.length > 0) {
        return "\u0428\u0438\u0440\u043E\u0442\u0430: ".concat(latitude, ", \u0414\u043E\u043B\u0433\u043E\u0442\u0430: ").concat(longitude, ". \u041E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u044B: ").concat(landmarks.join(', '));
    }
    else {
        return "\u0428\u0438\u0440\u043E\u0442\u0430: ".concat(latitude, ", \u0414\u043E\u043B\u0433\u043E\u0442\u0430: ").concat(longitude);
    }
}
;
console.log(describeLocation([40.25, 116.05, 'Великая китайская стена', 'Китай']));
console.log(describeLocation([40.25, 116.05]));
var greet = function (person) {
    var name = person[0], age = person[1], email = person[2];
    var constacts = email ? " \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B: ".concat(email) : '';
    var message = "\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(name, "! \u0422\u0435\u0431\u0435 ").concat(age, " \u043B\u0435\u0442.").concat(constacts);
    return message;
};
console.log(greet(['Дарья', 28]));
console.log(greet(['Сергей', 37, 'sergey@gmail.com']));
var invertColor = function (_a) {
    var r = _a[0], g = _a[1], b = _a[2];
    return [255 - r, 255 - g, 255 - b];
};
var inverted = invertColor([220, 180, 99]);
var RGBA = [220, 180, 99, 0.3];
var processOrder = function (order) {
    var id = order[0], products = order[1], status = order[2], meta = order.slice(3);
    var message = "\u0417\u0430\u043A\u0430\u0437 #".concat(id, ". \u0422\u043E\u0432\u0430\u0440\u044B: ").concat(products.join(', '), ". \u0421\u0442\u0430\u0442\u0443\u0441: ").concat(status || 'не указан', ".").concat(meta.length > 0 ? meta.join(', ') : '');
    return message;
};
var order1 = ['12345', ['яблоки', 'бананы'], 'pending', ['клиент', 'Ирина'], ['доставка', 'курьер']];
console.log(processOrder(order1));
var order2 = ['67890', ['молоко', 'хлеб']];
console.log(processOrder(order2));
var teamLea = {
    id: 85,
    deparment: 'ЖКХ',
    teamSize: 14,
    role: 'Руководитель направления',
};
// #### Тип never
// Напишите функцию `throwError(message: string): never`, которая выбрасывает ошибку с переданным сообщением.
var throwError = function (message) {
    throw new Error(message);
};
throwError('Hello from Error');
