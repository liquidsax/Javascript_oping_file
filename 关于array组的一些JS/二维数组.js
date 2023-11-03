let fruits =['banana','apple','ass'];
let vegetables=['carrots','onion','patatos'];
let bigList=[fruits,vegetables];

for (let list of bigList){
    for(let food of list){
        console.log(food);//把列表从矩阵切换成纯元素输出
    }
}

console.log(...fruits);//这个...实际上是一个拓展符号哦,可以把它们拆开
