document.getElementById("myButton").onclick = function(){
    const myCheckBox = document.getElementById("myCheckBox");//使用getelementbyid来找到myCheckBox，在html中已经定义了
    const Wepay = document.getElementById("Wepay");
    const Alipay = document.getElementById("Alipay");
    const Visa = document.getElementById("Visa");

    if (myCheckBox.checked){
        console.log('tks for subs');//如果subscribe的框已经打上了√则输出这个

    }else{
        console.log('pls i need your subs');
    }

    if(Wepay.checked){
        console.log('your are using wepay');
    }
    else if(Alipay.checked){
        console.log('you are using alipay')
    }
    else if(Visa.checked){
        console.log("you are using visa");
    }else{
        console('click one !');//如果三选一，一个都没选则输出这个！
    }

}
