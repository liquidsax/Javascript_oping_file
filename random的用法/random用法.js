let x;
let y;
let z;

document.getElementById('roll').onclick=function(){
    x=Math.floor(Math.random()*2)+1;
    y=Math.floor(Math.random()*2)+1;
    z=(Math.random()*2)+1;

    document.getElementById('r1').innerHTML=x;
    document.getElementById('r2').innerHTML=y;
    document.getElementById('r3').innerHTML=z;
}
