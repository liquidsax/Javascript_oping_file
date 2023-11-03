let students = ['spbob','papa','ass'];
students.forEach(capitalize);//不要加上()哦!
students.forEach(print);//遍历每一个元素!

function capitalize(element,index,array){
    array[index]=element[0].toUpperCase()+element.substring(1);//将每一行的首字母大写
}

function print(element){
    console.log(element);


}
