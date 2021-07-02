//Init Github
const github=new Github();

//Init UI
const ui=new UI();

//Search input DOM element
const searchUser=document.getElementById('searchUser');

searchUser.addEventListener('keyup',(e)=>{
    //Get input text

    const userText=e.target.value;

    if(userText!=='')
    {
        //console.log(userText);

        //Make HTTP call
        github.getUser(userText)
        .then(data => {
            
            if(data.profile.message==='Not Found')
            {
                //Show alert
                ui.showAlert('User not found' , 'alert alert-danger'); //Takes 2 params - message , className          (alert-danger is for the bootstrap part)
            }
            else
            {
                //Show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }
    else
    {
        //Clear Profile
        ui.clearProfile();
    }
    
})