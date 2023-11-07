class Car{
    constructor(power){
        this._gas=25;
        this._power=power;//这里的下划线表示这个变量不要动
    }
    get power(){
        return this._power;
    }
    get gas(){
        return this._gas;
    }
    set gas(value){
        if (value>50){
            value =50;
        }else if(value <0){
            value=0;
        }

        this._gas=value;//这让gas变的可写
    }
}
let car = new Car(400);//马力是400

console.log(car.power)//调用get power来快速获取值

