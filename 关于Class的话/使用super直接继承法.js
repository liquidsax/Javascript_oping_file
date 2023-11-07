class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

}

class Rabbit{
    constructor(name,age,run){
        super(name,age);//这里就是用super直接调用在父类constructor的内容
        this.run=run;
    }


}
