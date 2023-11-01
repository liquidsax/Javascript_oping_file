let fullName='Bob Hires';
let firstName;
let lastName;

firstName=fullName.slice(0,fullName.indexOf(' '));//这一行是读取到空格之前的单词们！！
lastName=fullName.slice(fullName.indexOf(' ')+1);//这里是读取空格之后的单词！！

console.log(firstName);
console.log(lastName);//在输出console中输出lastname
