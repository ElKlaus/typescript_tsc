// #### Тип для доступных операций
// Создайте тип Operations, который бы описывался уникальными символами `Symbol("Read")`, `Symbol("Write")` и `Symbol("Update")`.
var Read = Symbol("Read");
var Write = Symbol("Write");
var Update = Symbol("Update");
var radius = function (radius) {
    return 3.14 * Math.pow(radius, 2);
};
var getRadius = radius(15);
