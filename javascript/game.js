$(document).ready(function() {
    var random=Math.floor(Math.random()*101+19)

    $('#randomNumber').text(random);

    var rand1= Math.floor(Math.random()*11+1)
    var rand2= Math.floor(Math.random()*11+1)
    var rand3= Math.floor(Math.random()*11+1)
    var rand4= Math.floor(Math.random()*11+1)
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;

    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    // Resets the game
    function reset() {
        random=Math.floor(Math.random()*101+19);
        $('#randomNumber').text(random);
        rand1= Math.floor(Math.random()*11+1);
        rand2= Math.floor(Math.random()*11+1);
        rand3= Math.floor(Math.random()*11+1);
        rand4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#score').text(userTotal);
    } 

    // adds 1 to losses
    function nomatch() {
    losses++;
    $('#numberLosses').text(losses);
    reset()
    }

  // adds 1 to wins
  function match(){
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }

  // enables the buttons on screen
    $('#a').on ('click', function(){
      userTotal = userTotal + rand1;
      $('#score').text(userTotal); 
          if (userTotal == random){
            match();
          }
          else if ( userTotal > random){
            nomatch();
          }   
    })  
    $('#b').on ('click', function(){
      userTotal = userTotal + rand2;
      $('#score').text(userTotal); 
          if (userTotal == random){
            match();
          }
          else if ( userTotal > random){
            nomatch();
          } 
    })  
    $('#c').on ('click', function() {
      userTotal = userTotal + rand3;
      $('#score').text(userTotal);
            if (userTotal == random) {
            match();
          }
          else if ( userTotal > random) {
            nomatch();
          } 
    })  
    $('#d').on ('click', function() {
      userTotal = userTotal + rand4;
      $('#score').text(userTotal); 
            if (userTotal == random) {
            match();
          }
          else if ( userTotal > random) {
            nomatch();
          }
    });   
  });
