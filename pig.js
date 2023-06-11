var score1=0;
var score2=0;
var total1=0
var total2=0;
var check=1;
var victory="Player 1 Won!!"
var victory2="Player 2 Won!!"

let mySound = new Audio('/bossa-in-my-heart-13187.mp3');
mySound.play()

document.getElementsByClassName('player1')[0].classList.add("player--active");

function roll(){
    var rand=Math.floor(Math.random()*6)+1;
    var d1="dice-"+rand+".png";
    var img1=document.querySelectorAll("img")[0];
    img1.setAttribute("src",d1);
    if(check==1){
    if(rand==1){
        score1=0
        document.getElementsByClassName('score1')[0].innerHTML=score1;
        hold();
    }
    else{
    score1+=rand;
    document.getElementsByClassName('score1')[0].innerHTML=score1;
    }
    }
    else{
        if(rand==1){
            score2=0
            document.getElementsByClassName('score2')[0].innerHTML=score2;
            hold();
        }
        else{
        score2+=rand;
        document.getElementsByClassName('score2')[0].innerHTML=score2;
        }  
    }
}
function hold(){
    if(check==1){
        total1+=score1;
        document.getElementsByClassName('total1')[0].innerHTML=total1;
        document.getElementsByClassName('score1')[0].innerHTML=0;
        document.getElementsByClassName('player1')[0].classList.remove("player--active");
        document.getElementsByClassName('player2')[0].classList.add("player--active");
        win();
        score1=0;
        check=2;
    }
    else{
        total2+=score2;
        document.getElementsByClassName('total2')[0].innerHTML=total2;
        document.getElementsByClassName('score2')[0].innerHTML=0;
        document.getElementsByClassName('player2')[0].classList.remove("player--active");
        document.getElementsByClassName('player1')[0].classList.add("player--active");
        win();
        score2=0;   
        check=1;
    }
}

function win(){
    if(check==1){
        if(total1>=100){
            document.getElementsByClassName('btn-roll')[0].disabled = true;
            const won=document.getElementsByClassName('player1')[0];
            won.classList.add("player--winner");
            const w=document.getElementsByClassName('name1')[0];
            w.innerHTML=victory;
        }
    }
    else{
        if(total2>=100){
            document.getElementsByClassName('btn-roll')[0].disabled = true;
            const won=document.getElementsByClassName('player2')[0];
            const w=document.getElementsByClassName('name2')[0];
            w.innerHTML=victory2;
            won.classList.add("player--winner");
        }
    }
}

function start(){
    location.reload();
}
