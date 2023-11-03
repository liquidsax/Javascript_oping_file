const answer= Math.floor(Math.random()*10+1);
let guesses =0;//这里的guesses指的是猜测次数!

document.getElementById('submit').onclick = function(){

    let guess =document.getElementById('guessField').value;
    guesses+=1;

    if(guess==answer){
        alert(`${answer} is right!,it took you ${guesses}!`);//alert会出现一个吓人的弹窗

    }else if(guess<answer){
        alert('your number is too small');

    }else{
        alert('your number is too big');
    }

}
