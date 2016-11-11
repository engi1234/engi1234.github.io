var Speed = 50;
var Drift = 50;
var enemySpeed = randomIntFromInterval(45,68);
var enemyDrift = randomIntFromInterval(48,55);

$(document).keydown(function(e) {
    switch(e.which) {
      case 37: // left
        $('#hero').animate({
        'left' : '-='+Speed+"px" //moves right
        }, 'fast', 'linear');

        $('#bullet').animate({
        'left' : '-='+Speed+"px" //moves right
        }, 'fast', 'linear');


      break;

      case 38: // up
        $('#hero').animate({
        'top' : '-='+Drift+"px"
        }, 'fast', 'linear');
        $('#bullet').animate({
        'top' : '-='+Drift+"px"
        }, 'fast', 'linear');
      break;
       
        case 39: // right
        $('#hero').animate({
        'left' : '+='+Speed+"px" //moves right
        }, 'fast', 'linear');
           $('#bullet').animate({
        'left' : '+='+Speed+"px" //moves right
        }, 'fast', 'linear');
        
   
      break;

      case 40: // down
        $('#hero').animate({
        'top' : '+='+Drift+"px"
        }, 'fast', 'linear');
         $('#bullet').animate({
        'top' : '+='+Drift+"px"
        }, 'fast', 'linear');
        
        
       break;
        


        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

$("body").click(function() {  
  $("#bullet").css("opacity", "1");
  $("#bullet").css("top", "-150px");
});

setInterval(function(){ 
  $("#bullet").css("opacity", "0");;
  $("#bullet").css("top", "97%");
}, 800);

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}