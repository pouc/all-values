const allValues = (object) => {
    var keys = Object.keys(object);
    var values = [];
    var key;

    for (key in object) {
        values.push(object[key]);
    }

    return Promise.all(values).then(function (results) {
        return keys.reduce(function (fulfilledObject, key, index) {
            fulfilledObject[key] = results[index];
            return fulfilledObject;
        }, {});
    });
};

export default {
    allValues
}