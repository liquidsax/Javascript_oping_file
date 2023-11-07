class students{
    constructor(name,age,gpa){
        this.name=name;//将输入的name当做这个student的name'
        this.age=age;
        this.gpa=gpa;

    }//constructor可以翻译为构造函数或者默认函数
    study(){
        console.log(`${this.name} is studying`);
    }

}
const student1=new students('Spongebob',30,3.2);//用这个students的模版去做一个学生1
console.log(student1.name);//检查是否存入
student1.study();//调用study完全能用
