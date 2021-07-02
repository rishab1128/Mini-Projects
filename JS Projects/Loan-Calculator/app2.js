 //Listen for submit

 document.getElementById('loan-form').addEventListener('submit',function(e){

    //Hide previous results
    document.getElementById('results').style.display = 'none';
    
    // Show loader
    document.getElementById('loading').style.display = 'block';

    //Call the calculateResults() func after 2 seconds
    setTimeout(calculateResults,2000)

    e.preventDefault();
 });

 //Calculate Results
 function calculateResults(){
    //console.log('Calculating...');
    
     
   
    //UI Vars
    const amount=document.getElementById('amount');
    const interest=document.getElementById('interest');
    const years=document.getElementById('years');
    const monthlyPayment=document.getElementById('monthly-payment');
    const totalPayment=document.getElementById('total-payment');
    const totalInterest=document.getElementById('total-interest');

    //Maths part
    const principal=parseFloat(amount.value);
    const calculatedInterest=parseFloat(interest.value) /100 /12;
    const calculatedPayments=parseFloat(years.value)*12;
    //Compute monthly payments
    const x=Math.pow(1+calculatedInterest,calculatedPayments);
    const monthly=(principal*x*calculatedInterest)/(x-1);


    //Setting(Rendering) the values to the UI 
    if(isFinite(monthly))
    {
        monthlyPayment.value=monthly.toFixed(2); //toFixed is use to fix the no. of digits after the decimal point
        totalPayment.value=(monthly*calculatedPayments).toFixed(2);
        totalInterest.value=((monthly*calculatedPayments)-principal).toFixed(2);

         //Show results
        document.getElementById('results').style.display = 'block';

        //Hide loader
        document.getElementById('loading').style.display = 'none';
    }
    else
    {
        showError('Please check your numbers')
    }

}

//Show Error
function showError(error){

    //Hide loader
    //If input is invalid then first hide the loader and then show alert message
    document.getElementById('loading').style.display = 'none';


    //Create a div
    const errorDiv=document.createElement('div');

    //Add class
    errorDiv.className='alert alert-danger' //Note the alert-danger part is specifically for bootstrap for creating a red alert warning

    //Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error))

    console.log(errorDiv);
    console.log(errorDiv.childNodes);

    //Insert error above heading
    //First get the req elements from the DOM
    const card=document.querySelector('.card');
    const heading=document.querySelector('.heading');
    card.insertBefore(errorDiv , heading);


    //Clear error message after 3 seconds
    setTimeout(clearError,3000) //3000 ms = 3s
}

//Clear Error
function clearError(){
    document.querySelector('.alert').remove();
}

