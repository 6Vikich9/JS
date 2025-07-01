/*#vV9a6584I5
    – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
    — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
    — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
    — changeYear (newValue) – змінює рік випуску на значення newValue
    — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car*/

function Car(model, producer, year, maxSpeed, engineCapacity)
{
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive=function ()
    {
        console.log(`we are driving at ${this.maxSpeed} per hour`)
    }

    this.info = function ()
    {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }

    this.increaseMaxSpeed = function (newSpeed)
    {
        return this.maxSpeed = this.maxSpeed+newSpeed;
    }

    this.changeYear = function (newValue)
    {
        return this.year = newValue;
    }

    this.addDriver = function (driver)
    {
        return this.driver = driver;
    }
}

let car = new Car('Audi', 'Audi Sport GmbH', 2013, 285, 4);
console.log(car);
car.info();
car.drive();
console.log(`car increase max speed to`,car.increaseMaxSpeed(15));
console.log(`year changed to`, car.changeYear(2024));
console.log('додамо нового водія', car.addDriver({} ));
console.log(car);