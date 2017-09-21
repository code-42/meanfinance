document.getElementById('switch-color').onclick = switchNight; //this is the button id name

function switchNight(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'gray'; 
    document.getElementsByClassName('night')[0].style.color = 'white';
};