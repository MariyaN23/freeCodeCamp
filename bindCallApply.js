const auto = {
    brand: "Tesla",
    drive () {
        return `Заведем нашу ${this.brand}`
    }
}

console.log(auto.drive()) //Заведем нашу Tesla

const autoDrive = auto.drive
console.log(autoDrive()) //Заведем нашу undefined, метод не привязан к нужному объекту

//bind - привязать к объекту, чтобы использовать метод с определенными данными, контекст привязывается
    // один раз, по цепочке дальше не будет работать еще один bind
const autoDrive1 = auto.drive.bind(auto)
console.log(autoDrive1()) //Заведем нашу Tesla

const motorBike = {
    brand: "Suzuki"
}
const motorDrive = auto.drive.bind(motorBike) //привязать любой объект можно
console.log(motorDrive()) //Заведем нашу Suzuki

const bill = {
    tip: 0.1,
    calculate(total) {
        console.log(this)
        return total + total*this.tip
    }
}
const pay = bill.calculate.bind(bill)
const payCount = bill.calculate.call(bill, 1000)
const payCount2 = bill.calculate.apply(bill, [1000])
console.log(pay(1000))
console.log(payCount)
console.log(payCount2)
//call - вызывает функцию с указанным this и аргументами после запятой
//apply - тоже, но аргументы в виде массива