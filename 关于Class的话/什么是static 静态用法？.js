class Car{
    static numOfCar = 0;//用static语句让这个变量属于class 而不是 object
    constructor(model){
        this.model = model;
        Car.numOfCar +=1;

    }

}

const car1=new Car('bsb');
const car2=new Car('cia');

console.log(Car.numOfCar);//直接用Car来调用这个函数

