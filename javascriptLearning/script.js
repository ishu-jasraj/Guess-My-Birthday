'use strict';
const birthDate = 24;
let score = 20,highscore=0;

const displayMessage=function(message)
{
   document.querySelector('.message').textContent=message;
};
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('guess').value);
    if(!guess)
    {
        //document.querySelector('.message').textContent='⛔ No Number';
        displayMessage('⛔ No Number');
    }
    else{
        highscore=Math.max(score,highscore);
        if(guess===birthDate)
        {
            document.querySelector('.number').textContent=birthDate;
            //document.querySelector('.message').textContent='😍 You guessed it right';
            displayMessage('😍 You guessed it right');
            document.querySelector('body').style.backgroundColor='green';
            document.querySelector('.number').style.width='30rem';
            document.querySelector('.highscore').textContent=highscore;

        }
        else if(guess<1||guess>31)
        {
       // document.querySelector('.message').textContent='😐 Enter a valid number';
        displayMessage('😐 Enter a valid number');
       score--;
        document.querySelector('.score').textContent=score;
        }
        else if(guess!=birthDate)
        {
            score--;
            if(score==0)
            {
               // document.querySelector('.message').textContent='😔 You lost the game, Try Again!!';
               displayMessage('😔 You lost the game, Try Again!!');
                document.querySelector('.highscore').textContent=highscore;
                //reset the game here
            }
            else
            {
               //document.querySelector('.message').textContent=guess>birthDate?'Too High!!':'Too Low!!';
               displayMessage(guess>birthDate?'Too High!!':'Too Low!!');
               // document.querySelector('.score').textContent=score;
            }
            document.querySelector('.score').textContent=score;
        }
          
    }
});

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    document.querySelector('.message').textContent='Start Guessing!!';
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.highscore').textContent=highscore;
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').textContent='';
});