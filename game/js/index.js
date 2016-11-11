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

    function collision($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
        //if it is not colliding, make div2 background green

        return false;
      } 
      else {  
        //if it is colliding, make div2 background yellow
        $("#enemy1").hide();
        return true;
      }
    }

window.setInterval(function() {
    $('#result').text(collision($('#bullet'), $('#enemy1')));
}, 200);

window.setInterval(function() {
    $('#enemy1').show();
}, 3000);

//window.setInterval(function() {
  //  $('#enemy2').show();
//}, 3000);

