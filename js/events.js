//define functions here
var getIt = () => {
  $('p').on('click', function(){
    alert("Hey!")
  })
}

var frameIt = () => {
  $('img').on('load', function(){
    $('img').addClass('tasty')
  })
}

var pressIt = () => {
  $('input').on('keydown', function(key){
    if(key.which === 71){
      alert('You have pressed the g key');
    }
  })
}

var submitIt = () => {
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.')
  })
}
$(document).ready(function(){

// call functions here

});
