//My own app.js

//UI Elements
const minVal=document.querySelector('.min');
const maxVal= document.querySelector('.max');
const game=document.querySelector('.game');
const input = document.querySelector('#form-input');
const submit=document.querySelector('#form-submit');
const message=document.querySelector('.message');

let min=1,max=20 , count=3;
let winningNum=getRandomInt(min,max);

console.log(winningNum);

minVal.textContent=min;
maxVal.textContent=max;

function getRandomInt(max,min)
{
    return (Math.floor(Math.random()*(max-min+1)+min));
}

game.addEventListener('mousedown',function(e){
    if(submit.className==='play-again')
    {
        window.location.reload();
    }
})

submit.addEventListener('click', runEvent);
function runEvent(e){

    const guess=parseInt(input.value);

    //Check if entered number is valid or not
    if(isNaN(guess) || guess>max || guess<min)
        setMessage(`Please enter a number b/w ${min} and ${max}`,'red');

    //Check if won
    else if(guess===winningNum)
    {
        //Game over-won
        gameOver(true,`${winningNum} is correct !!! YOU WIN `);
    }
    else
    {
        count-=1;
        if(count===0)
        {
            //Game over - lost
            gameOver(false,`${winningNum} was correct !!! YOU LOSE`);
        }
        else
        {
            //Game continues - wrong ans
            setMessage(`${guess} is wrong , ${count} guesses left` , 'red');

            input.style.borderColor='red';

        }
    }
    
    e.preventDefault();
}


function setMessage(msg,color)
{
    message.textContent=msg;
    message.style.color=color;
}

function gameOver(won,msg)
{
    let color;
    won===true?color='green':color='red';

    input.disabled=true;
    input.style.borderColor=color;

    setMessage(msg,color);


    //Play Again - Functionality
    submit.value="Play Again";
    submit.className+='play-again';
}