/*
GAME FUNCTION:
-Player must guess a number b/w a min and max
-Player gets certain amount of guesses
-Notify player of guesses remaining
-Notify the player of the correct answer if loose
-Let player choose to play again
*/

//Game values
let min=1, 
    max=10, 
    winningNum= getRandomNum(min,max), 
    guessesLeft=3;

console.log(winningNum);

//Get Random Number
function getRandomNum(min,max){
    return (Math.floor(Math.random()*(max-min+1)+min));
}


//UI Elements
const game=document.querySelector('#game') , 
    minNum=document.querySelector('.min-num'),
    maxNum=document.querySelector('.max-num'),
    guessBtn=document.querySelector('#guess-btn'),
    guessInput=document.querySelector('#guess-input'),
    message=document.querySelector('.message');



//Assign UI min and max
minNum.textContent=min;
maxNum.textContent=max;

//Play-Again event listener
//mousedown is very important here
game.addEventListener('mousedown',function(e){
    //console.log(e.target);
    if(e.target.className==='play-again')
    {
        window.location.reload();
    }
})

//Listen for guess
guessBtn.addEventListener('click',function(){
    //guessInput.value is a string , first parse it into an integer
    let guess=parseInt(guessInput.value);


    //Validate
    if(isNaN(guess) || guess<min || guess>max){
        setMessage(`Please enter a number between ${min} and ${max}` , 'red');
    }


    //Check if won
    else if(guess===winningNum)
    {
        //Call gameOver :- 1->win 
        gameOver(1,`${winningNum} is correct , YOU WIN!!!`);
       
    }
    else
    {
        //If player selected the wrong number
        guessesLeft-=1;

        if(guessesLeft===0)
        {
            //Call gameOver :- 0 ->lost
            gameOver(0,`${winningNum} was the correct ans , YOU LOSE!!!`);
        }
        else
        {
            //Game continues - ans wrong

            //Change input border to red
            guessInput.style.borderColor='red';

            //Clear Input value
            guessInput.value='';

            //Set message - Let the user know that he/she guessed the wrong ans , and also show the no. of guesses left
            setMessage(`${guess} is wrong , You have ${guessesLeft} guesses left` , 'red');
        }

    }
});


//Game over
function gameOver(won,msg)
{
    //Disable input
    guessInput.disabled=true;

    //Set border color depending on won or not
    let color;
    won===1?color='green':color='red';
    
    //Change border color
    guessInput.style.borderColor=color;
    setMessage(msg,color);

    //Play Again
    guessBtn.value='Play Again';
    guessBtn.className+='play-again';

    //Now we need a event listener for play-again , since the class=play-again was added to the guessBtn after the page loads we need to use Event Delegation meaning we need to add the Event listener onto a parent and then search for the target we want which is play-again over here


}

//Set message
function setMessage(msg,color){
    message.style.color=color;
    message.textContent=msg;
}

