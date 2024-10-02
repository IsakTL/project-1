const initialSelection=document.querySelector('#initial-selection');
let username='name';
let avatarChoice; // Stores the image address, initialized by the below event listener.

initialSelection.addEventListener('click', function () {
    avatarChoice = document.querySelector('.carousel-inner').querySelector('.active').children[0].getAttribute('src');
    username = document.querySelector('#exampleFormControlInput1').value;
    localStorage.setItem('username', username);
    localStorage.setItem('avatarChoice',avatarChoice);
    //console.log(localStorage.getItem('avatarChoice')); // Used to test output of avatarChoice.
    //console.log(localStorage.getItem('username')); // Used to test output of username.
});