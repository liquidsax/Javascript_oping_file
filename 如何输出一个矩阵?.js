let symbol=window.prompt("enter a symbol to use"); //这里是把要输出的东西替换为你想使用的符号
let rows=window.prompt("enter ur row");//输入行数
let columns=window.prompt("enter ya column");//输入列数 

//接下来我们来输出一个矩阵，矩阵的内容就是你输入的符号
for(let i=0;i<rows;i+=1){
    for(let j = 0;j<columns;j+=1){
        document.getElementById('myTanangle').innerHTML +=symbol;//记得要let j而不能直接用j;
      
    }
  document.getElementById("myTanangle").innerHTML +="<br>";//在每行后加上换行符！

}
