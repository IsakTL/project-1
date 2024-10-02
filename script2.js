//const avatarChoice = localStorage.getItem("avatarChoice");
//const username = localStorage.getItem("username");
const GoalsNTimeline = document.querySelectorId('GoalsNTimeline');
 
        GoalsNTimeline.addEventListener('submit', function (event) {
            // Prevent the default form submission
            event.preventDefault();
        
            // Get form values
            const GoalsNTimeline {
            LossWeight = document.querySelectorId('LW').value,
            MuscleMass = document.querySelectorId('MM').value,
            MaintainWeight = document.querySelectorId('MW').value,
            startdate = document.querySelectorId('start').value,
            enddate = document.querySelectorId('end').value,
            bodyfat = document.querySelectorId('bodyfat').value,
            musclemass = document.querySelectorId('musclemass').value,
            endurance = document.querySelectorId('endurance').value,
            strength = document.gquerySelectorId('strength').value
            };
            
            //Enter data into localStorage
            localStoarage.setItem("GoalsNTimeline");
           
        };
    console.log(GoalsNTimeline);

