//My-own app.js without taking any help from the video

const calc=document.querySelector('#btn');
calc.addEventListener('click',function(e){

    //Hide previous results
    const result=document.querySelectorAll('.results');
    result.forEach((res)=>{
        res.style.display="none";
    })

    //Expand card height
    const card=document.querySelector('.card');
    card.style.height="30rem";

    //Show loader
    const loader=document.querySelector('#loading');
    loader.style.display="inline-block";

    //Call calculateResults(previously I named it as runEvent) function after 2 seconds - (2 seconds is provided for the loader animation)
    setTimeout(calculateResults,2000)

    e.preventDefault();
});

function calculateResults(){
    
    //UI Vars
    const amount=document.querySelector('#amt');
    const interest=document.querySelector('#int-rate');
    const years=document.querySelector('#years');
    const total_payment=document.querySelector('#tot-pay');
    const total_interest=document.querySelector('#tot-int');

    //Maths part
    const principal=parseFloat(amount.value);
    const rate=parseFloat(interest.value);
    const time=parseFloat(years.value);
    const simple_interest=((principal*rate*time)/100).toFixed(2);
    const totalAmount=parseFloat(principal)+parseFloat(simple_interest);


    //Setting(Rendering) the values to the UI 
    if(isFinite(totalAmount))
    {
        total_payment.value=`Total Amount :  ${totalAmount} ` ;
        total_interest.value=`Total Interest :   ${simple_interest}` ;

        //Hide loader
        const loader=document.querySelector('#loading');
        loader.style.display="none";

        //Show Results
        const result=document.querySelectorAll('.results');
        /*for(let i=0; i<result.length; i++)
        {
            result[i].style.display="inline-block";
        }*/
        result.forEach((res)=>{
            res.style.display="inline-block";
        })
    }
    else
    {
        //Hide loader
        const loader=document.querySelector('#loading');
        loader.style.display="none";

        //Contract the size of the card
        const card=document.querySelector('.card');
        card.style.height="19rem";
        
        alert('Please enter correct values');
    }
    
}
