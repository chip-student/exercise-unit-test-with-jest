console.log("Hello World")

// esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(7, 3)

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (dollar_amount) =>  {
    return (dollar_amount * oneEuroIs.JPY);
}

const fromEuroToDollar = (euro_amount) => {
    return (euro_amount * oneEuroIs.USD);
}

const fromYanToPound = (yan_amount) => {
    return (yan_amount * oneEuroIs.GBP);
}

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum , fromDollarToYen, fromEuroToDollar, fromYanToPound };
// console.log(fromYanToPound(1));