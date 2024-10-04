let error=false;

//Get data from welcome page
const avatarChoice = localStorage.getItem('avatarChoice');
const username = localStorage.getItem('username');
console.log(localStorage.getItem('avatarChoice')); // Used to test output of avatarChoice.
console.log(localStorage.getItem('username')); // Used to test output of username.

//Set up local storage
const initialSubmit=document.querySelector('#Submit');
let mainGoalChoice = "Lose Weight";
let startdate = Date();
let enddate = Date();
let bodyfat=100;
let musclemass=0;
let endurance=0;
let strength=0;

//Summary in local storage
const initialSummary=document.querySelector("#summary");



initialSubmit.addEventListener('click', function(){
//Check with main goals is selected and add to mainGoalChoice variable
    if(document.querySelector('input[id="LW"]').checked){
        mainGoalChoice = "Lose Weight";
    }else if(document.querySelector('input[id="MM"]').checked){
        mainGoalChoice = "Gain Muscle Mass";
    }else{
        mainGoalChoice = "Maintain Weight";
    }
    //Add the start and end dates to variables
    console.log(mainGoalChoice);
    startdate = document.querySelector('input[id="start"]').value;
    console.log(startdate);
    enddate = document.querySelector('input[id="end"]').value;
    console.log(enddate);
    if(enddate<startdate){
        alert("End date can't be before start date");
        error=true;
    }
    //Add the personal goals to their respective variables
    bodyfat = document.querySelector('input[id="bodyfat"]').value;
    console.log(bodyfat);
    musclemass = document.querySelector('input[id="musclemass"]').value;
    console.log(musclemass);
    endurance = document.querySelector('input[id="endurance"]').value;
    console.log(endurance);
    strength = document.querySelector('input[id="strength"]').value;
    console.log(strength);
if(error){
    //If error exist, send a message and wait for the next submission to add to local drive
    alert("Please fix error(s)");
}else{
    //Ok to add to personal storage
    localStorage.setItem('mainGoalChoice', mainGoalChoice);
    localStorage.setItem('startdate', startdate);
    localStorage.setItem('enddate', enddate);
    localStorage.setItem('bodyfat', bodyfat);
    localStorage.setItem('musclemass', musclemass);
    localStorage.setItem('endurance', endurance);
    localStorage.setItem('strength', strength);
    alert("File updated");
}
//Reset back the error message
error=false;
});
  


