let price =[5,10,15,20];
let total =price.reduce(checkOut);//reduce() 方法将 checkOut() 函数应用于数组中的每个元素。
                                  //checkOut() 函数接受两个参数：

console.log(`the total is :$${total}`);//${}作为直接输出

function checkOut(total,element){
    return total+element;
}
