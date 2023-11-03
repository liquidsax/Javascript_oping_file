let grades=[100,50,80,70,40,60];

grades=grades.sort(descendingSort);
//sort() 方法使用回调函数来确定两个元素的顺序。
//如果回调函数返回一个正值,则第一个元素将排在第二个元素之前。
//如果回调函数返回一个负值,则第二个元素将排在第一个元素之前。
//如果回调函数返回 0,则两个元素的顺序将保持不变。
grades.forEach(print);

function descendingSort(x,y){
    return y-x //y-x 的值将始终是 y 和 x 的差值。如果 y 大于 x,则 y-x 将为正值。如果 x 大于 y,则 y-x 将为负值。

}

//function descendingSort(x, y) {return x < y ? 1 : -1;}这也是一种思路.

function print(element){
    console.log(element);
}
