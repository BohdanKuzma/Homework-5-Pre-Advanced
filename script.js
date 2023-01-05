// //Task 1 
// function MyNumber() {
//     let sum = 0;

//     return function NewSum(number) {
//         sum += number;
//         console.log(sum);
//     }


// }
// let s = new MyNumber();

// s(3);
// s(5);
// s(228);


//Task 2
const MyModule = (function () {
    let cash = 1000;

    let countBeer = 100;
    let priceBeer = 30;
   
    let countWyne = 50;
    let priceWyne = 100;
  
    let countPepsi = 80;
    let pricePepsi = 20;

    function checkInfo() {
        return `
        Баланс: ${cash}
        Пива залишилося: ${countBeer}
        Вина залишилося: ${countWyne}
        Пепсі залишилося: ${countPepsi} `
    }

    function sell(beer, wyne, pepsi) {
        if (beer <= countBeer || wyne <= countWyne || pepsi <= countPepsi) {
            countBeer -= beer;
            countWyne -= wyne;
            countPepsi -= pepsi;
            cash += (beer * priceBeer) + (wyne * priceWyne) + (pepsi * pricePepsi);
            return `Чек: ${(beer * priceBeer) + (wyne * priceWyne) + (pepsi * pricePepsi)} грн.`
        }
        return `Не достатньо товару`
    }

    return {
        check: checkInfo,
        sell: sell
    }
}());

console.log(MyModule.check());
console.log(MyModule.sell(5, 5, 5));
console.log(MyModule.check());
console.log(MyModule.sell(10, 10, 10));
console.log(MyModule.check());
console.log(MyModule.sell(85, 35, 65));
console.log(MyModule.check());
console.log(MyModule.sell(1, 1, 1));
console.log(MyModule.check());