let a;
let b;
let c;//先定义一下三个边

document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("aTextBox").value;   //在js中有一个比较强迫症的点:若是aTextBox就不能是aTextbox,否则会报错！
    a = Number(a);

    b = document.getElementById('bTextBox').value;//记得打上.value
    b = Number(b);

    c=Math.pow(a,2)+Math.pow(b,2);
    c=Math.sqrt(c);

    document.getElementById("cLabel").innerHTML="side c "+c;

}
