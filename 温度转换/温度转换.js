document.getElementById('sub').onclick = function(){
    let temp;
    if(document.getElementById('toC').checked){
        temp=Number(document.getElementById('temNumber').value);//获取输入的temp
        temp=(temp-32)*(5/9);
        document.getElementById('resultT').innerHTML = temp+"度"//在网页里label的词条里把温度显示为摄氏度
    }else{
        temp=Number(document.getElementById('temNumber').value);
        temp=temp*9/5+32;
        document.getElementById('resultT').innerHTML = temp+"华氏度"

    }
}
