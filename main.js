
var button = document.querySelector('button');

function getRandomColor() {
    var result = '#';

    for (x = 1; x < 4 ; x ++ )
    {
        result = result + Math.floor(Math.random()*10);
    }
    return result;
}  
  
button.onclick = function(){
   document.body.style.backgroundColor = getRandomColor();
}