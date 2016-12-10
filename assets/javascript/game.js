//GLOBAL VARIABLES
//---------------------------------------------------------------------------------------------------------------
var wins = 0; //number of wins
var losses = 0; //number of losses
var currentScore = 0; //player's current score
var targetScore = 0; //target score
var diamondVal = 0; //value of diamond
var pinkGem = 0; //value of pink gem
var rubyGem = 0; //value of ruby gem
var whiteGem = 0; //value of white gem



   $(document).ready(function(){  //The ready() method specifies what happens when a ready event occurs.
  var currentScore = 0;
  var targetScore = Math.floor(Math.random()*101 + 19); //cannot use math ceil in this usecase bc the ceil of 0 is 0
  var diamondVal = Math.floor(Math.random()*12 + 1);
  var pinkGemVal = Math.floor(Math.random()*12 + 1);
  var rubyGemVal = Math.floor(Math.random()*12 + 1);
  var whiteGemVal = Math.floor(Math.random()*12 + 1);
//https://www.codecademy.com/en/forum_questions/555fd11c9113cbf0910006e3
 $('#targetScore').html(targetScore);
 $('#diamond').attr("data-num",diamondVal)
  $('#targetScore').html(targetScore);
  $('#diamond').attr("data-num", diamondVal);
  $('#pink-gem').attr("data-num", pinkGemVal);
  $('#ruby').attr("data-num", rubyGemVal);
  $('#white-gem').attr("data-num", whiteGemVal);
  //data-num-bottom of the page http://stackoverflow.com/questions/17762906/cant-update-data-attribute-value
});

function newGame() {
  console.log(diamondVal)
  currentScore = 0;
  $('#currentScore').html(currentScore);
  diamondVal = 0;
  pinkGemVal = 0;
  rubyGemVal = 0;
  whiteGemVal = 0;
  var targetScore = Math.floor(Math.random()*101 + 19);
  var diamondVal = Math.floor(Math.random()*12 + 1);
  var pinkGemVal = Math.floor(Math.random()*12 + 1);
  var rubyGemVal = Math.floor(Math.random()*12 + 1);
  var whiteGemVal = Math.floor(Math.random()*12 + 1);
  $('#targetScore').html(targetScore);
  $('#diamond').attr("data-num", diamondVal);
  $('#pink-gem').attr("data-num", pinkGemVal);
  $('#ruby').attr("data-num", rubyGemVal);
  $('#white-gem').attr("data-num", whiteGemVal);
  console.log(diamondVal)
}

newGame();
$('#diamond').attr("data-num", diamondVal)
$('#pink-gem').attr("data-num", pinkGemVal)
$('#ruby').attr("data-num", rubyGemVal)
$('#white-gem').attr("data-num", whiteGemVal)

$('#diamond').on('click', function() {
  currentScore += diamondVal;
  $('#currentScore').html(currentScore);

    if (currentScore == targetScore) {
      alert("Congrats You Win!")
      wins++
      $("#wins").html("Wins: " + wins);
      newGame();
    }

    if (currentScore > targetScore) {
      alert("You Lose!")
      losses++
      $('#loses').html(losses);
      newGame();
    }
});

$('#pink-gem').on('click', function() {
  currentScore += pinkGemVal;
  $('#currentScore').html(currentScore);

    if (currentScore == targetScore) {
      alert("Congrats You Win!")
      wins++
      $("#wins").html("Wins: " + wins);
      newGame();
    }

    if (currentScore > targetScore) {
      alert("You Lose!")
      losses++
      $('#loses').html(losses);
      newGame();
    }
});

$('#ruby').on('click', function() {
  currentScore += rubyGemVal;
  $('#currentScore').html(currentScore);

    if (currentScore == targetScore) {
      alert("Congrats You Win!")
      wins++
      $("#wins").html("Wins: " + wins);
      newGame();
    }

    if (currentScore > targetScore) {
      alert("You Lose!")
      losses++
      $('#loses').html(losses);
      newGame();
    }
});

$('#white-gem').on('click', function() {
  currentScore += whiteGemVal;
  $('#currentScore').html(currentScore);

    if (currentScore == targetScore) {
      alert("Congrats You Win!")
      wins++
      $("#wins").html("Wins: " + wins);
      newGame();
    }

    if (currentScore > targetScore) {
      alert("You Lose!")
      losses++
      $('#loses').html(losses);
      newGame();
    }
});