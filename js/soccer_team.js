function checkIt() {
  // Initialize scores
  var United = 0;
  var Arsenal = 0;
  var Stoke = 0;
  var Chelsea = 0;
  var Liverpool = 0;
  var Bournmouth = 0;
  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'United') {
        United++;
      }
      else if (e.value == 'Arsenal') {
        Arsenal++;
      }
      else if (e.value == 'Stoke') {
        Stoke++;
      }
      else if (e.value == 'Chelsea') {
        Chelsea++;
      }
      else if (e.value == 'Liverpool') {
        Liverpool++;
      }
      else if (e.value == 'Bournmouth') {
        Bournmouth++;
      }
    }
  }

  // Determine result
  var counts = "Manchester United: " + United + ", " +
               "Arsenal: " + Arsenal  + ", " +
               "Stoke City: " + Stoke  + ", " +
               "Chelsea: " + Chelsea  + ", " +
               "Liverpool: " + Liverpool  + ", " +
               "Bournmouth " + Bournmouth;
  // What is the highest value?
  var max = Math.max(United, Arsenal, Stoke, Chelsea, Liverpool, Bournmouth);

  // Form a message
  var message;
  var image;

  if (max == United) {
    message = "You support Manchester United. You were cool in your 20s and young but now your the has been and trying to be who you once were and everybody except your family hates you.";
    image = "<img src='img/manchester.jpg'>"
  }
  else if (max == Chelsea) {
    message = "You are a Chelsea fan. You probably went to private school for a couple of weeks then left because you realized your family was rich. Put on your fur coat, go drink some mimosa's, and eat lunch in your garden with nicly cut hedges.";
    image = "<img src='img/chelsea.jpg'>"
  }
  else if (max == Arsenal) {
    message = "You support Arsenal. You probably think everybody loves when it's the opposite. You talk about how cool you are in high school and how you won so many things but your still selling concessions at your high school football game.";
    image = "<img src='img/arsenal.jpg'>"
  }
  else if (max == Stoke) {
    message = "You support Stoke City, you try and look hard and tough, you really don't care how you dress as long as you have some adidas on somewhere on you and work at a factory that proabaly produces yogurt lids.";
    image = "<img src='img/stoke.jpg'>"
  }
  else if (max == Liverpool) {
    message = "You support Liverpool. You are pretty well liked no one dislikes you but you don't a lot of friends anymore either and you dream about how you used to be cool but unlike other people have accepted you are not at your former glory.";
    image = "<img src='img/liverpool.jpg'>"
  }
  else if (max == Bournmouth) {
    message = "You support Bournmouth, you are probably the most relaxed people out of all other fans. You don't really have any goals and you just wanna hang on the beach and eat hotdogs.";
    image = "<img src='img/bournmouth.jpg'>"
  }

  // Display result
  // document.getElementById('result-text').innerHTML = counts;
  document.getElementById('result-text').innerHTML = message;
  document.getElementById('result-image').innerHTML = image;
}
