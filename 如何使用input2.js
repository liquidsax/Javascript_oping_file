let username;

document.getElementById("myButton").onclick=function(){

    username =document.getElementById("myText").value;//我在这里已经在html的文档中加入了一行label和一行button
    console.log(username);
    document.getElementById("myLabel").innerHTML = 'HELLO '+username;
}//设定一个function用于获取html网页中输入的myText然后输入在屏幕上和console
