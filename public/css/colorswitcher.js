document.getElementById('switch-color').onclick = switchNight;

function switchNight(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'gray'; 
    document.getElementsByTagName('body')[0].style.color = 'white';
};