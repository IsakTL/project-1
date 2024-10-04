const initialSelection=document.querySelector('#initial-selection');
let username='name';
let avatarChoice; // Stores the image address, initialized by the below event listener.

// Create node list of all nav items, then make two and three invisible.
let pageNav = document.querySelectorAll('.nav-link');

console.log(localStorage.getItem('username'));

// Currently, entering a name is technically optional.
if(localStorage.getItem('username')??true){
    for(i=1;i<3;i++){
        pageNav[i].style.display = 'none';
    }
}

initialSelection.addEventListener('click', function () {
    avatarChoice = document.querySelector('.carousel-inner').querySelector('.active').children[0].getAttribute('src');
    username = document.querySelector('#exampleFormControlInput1').value;
    localStorage.setItem('username', username);
    localStorage.setItem('avatarChoice',avatarChoice);
    for(i=1;i<3;i++){
        pageNav[i].style.display = 'flex';
    }
    //console.log(localStorage.getItem('avatarChoice')); // Used to test output of avatarChoice.
    //console.log(localStorage.getItem('username')); // Used to test output of username.
});