// document.getElementById('switch-color').onclick = switchNight; //this is the button id name

// function switchNight(){
//     document.getElementsByTagName('body')[0].style.backgroundColor = 'gray'; 
//     document.getElementsByClassName('night')[0].style.color = 'white';
// };

$('#switch-color').click(function(){
  $('#body-toggle').toggleClass('night');
    $('#switch-color').text(function    (i, v){
        return v === 'Day Mode' ? 'Night Mode' : 'Day Mode'
    });
        $('#switch-color').toggleClass('daymode-button');
});

//better to toggle visibility of existing?