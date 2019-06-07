$(document).ready(function(){

  //Questions and Answers
 
 var questionList = [
     {question: "In 'The Injury': What is Michaels injury?",
       answers: ["He gets his head stuck in a stair railing", "He crashes his car into a telephone pole", "He gets run over by a co-worker", "He burns his foot on a George Foreman Grill"],
       correct: "He burns his foot on a George Foreman Grill",
       image: "<img src='assets/images/theinjury.jpg'>"
     },
     {question: "In 'Office Olympics': What does Pam name 'Box of paper snowshoe racing'?",
       answers: ["Flonkerton", "Icelandic Snowshoe Racing", "Pegerhosen", "Bixing"],
       correct: "Flonkerton",
       image: "<img src='assets/images/officeolympics.jpg'>"
     },
     {question: "In 'Diversity Day': What famous comedian's stand up routine does Michael imitate?",
       answers: ["Robin Williams", "Chris Rock", "George Carlin", "Richard Pryor"],
       correct: "Chris Rock",
       image: "<img src='assets/images/diversityday.jpg'>"
     },
     {question: "In 'Sexual Harassment': What is Todd Packer's vanity license plate?",
       answers: ["LUVMKR", "WLHUNG", "TODPKR", "BGDADY"],
       correct: "WLHUNG",
       image: "<img src='assets/images/sexualharassment.jpg'>"
     },
     {question: "In 'Diwali': What does Michael mistakenly believe Diwali is?",
       answers: ["Hindu Hannukah", "Hindu Christmas", "Hindu Halloween", "Hindu Flag Day"],
       correct: "Hindu Halloween",
       image: "<img src='assets/images/Diwali.jpg'>"
     },
     {question: "In 'Casino Night': Who has two dates?",
       answers: ["Michael", "Jim", "Pam", "Dwight"],
       correct: "Michael",
       image: "<img src='assets/images/casinonight.jpg'>"
     },
     {question: "In 'Beach Games': Who gets abandoned in the lake wearing a sumo costume?",
       answers: ["Angela", "Andy", "Stanley", "Creed"],
       correct: "Andy",
       image: "<img src='assets/images/beachgames.jpg'>"
     },
     {question: "In 'Goodbye Toby': Where is Toby moving to?",
       answers: ["Belize", "Peru", "Panama", "Costa Rica"],
       correct: "Costa Rica",
       image: "<img src='assets/images/toby.jpg'>"
     },
     {question: "In 'Weight Loss': Where does Jim propose to Pam?",
       answers: ["A romantic restaurant", "At The Office!", "A gas station", "In the parking lot"],
       correct: "A gas station",
       image: "<img src='assets/images/weightloss.jpg'>"
     },
     {question: "In 'Baby Shower': What is Jan's baby name?",
     answers: ["Astrid", "Asturd", "Sofia", "Jan Jr."],
     correct: "Astrid",
     image: "<img src='assets/images/babyshower.jpg'>"
   },
 ];

 
 //Global Variables
//score variables
 var correctAnswers = 0;
 var incorrectAnswers = 0;
 var unanswered = 0;
 //30 second timer for each question
 var timer = 30;
 //keep track of which question we are on
 var currentQuestion = 0;
 var correctAnswer = questionList[currentQuestion].correct;



 //Display question with associated answer based on currentQuestion
 function displayQuestion(){
  $("#questiondisplay").append("<p>" + questionList[currentQuestion].question + "</p>");
  $("#answerdisplay1").html("<button>" + questionList[currentQuestion].answers[0] + "</button>");
  $("#answerdisplay2").html("<button>" + questionList[currentQuestion].answers[1] + "</button>");
  $("#answerdisplay3").html("<button>" + questionList[currentQuestion].answers[2] + "</button>");
  $("#answerdisplay4").html("<button>" + questionList[currentQuestion].answers[3] + "</button>");

 };

 function youWin(){
   $("#questiondisplay").html("<p>That is correct!</p>");
   correctAnswers++;
   console.log(correctAnswers);
   var rightAnswer = questionList[currentQuestion].correct; 
   $("#questiondisplay").append("<p>The answer was:" + rightAnswer + "</p>" + questionList[currentQuestion].image);
   setTimeout(nextQuestion,5000);
   currentQuestion++;
 }

 function youLose(){
   $("#questiondisplay").html("<p>That is wrong!<p>");
   incorrectAnswers++;
   console.log(incorrectAnswers);
   var rightAnswer = questionList[currentQuestion].correct; 
   $("#questiondisplay").append("<p>The correct answer is: " + rightAnswer + questionList[currentQuestion].image + "</p>");
   setTimeout(nextQuestion,5000);
   currentQuestion++;
   
 }

 //Countdown function - pulling in 30 second timer variable - decrementing by 1 second until reaching 0 then running timeUp function 
 function countDown(){
   //timer 
   clock = setInterval(countDown,1000);
   function decrement() {
    if (timer < 1) {
      clearInterval(clock);
      timeUp();
    }
    if (timer > 0){
      timer--;
    $("#timer").html("<p>" + timer + "</p>");
    }
   }
   }


   //function for when time is up on a question - if time reaches 0 the screen should display Out of time!, the correct answer should display and the image associated with the question
function timeUp(){
  if (timer === 0){
    $("#timer").html("<p> Out of time! </p>");
    unanswered++;
    console.log(unanswered);
    $("#questiondisplay").append("<p>Correct Answer:" + correctAnswer + questionList[currentQuestion].image + "</p>");
    currentQuestion++;
    setTimeout(nextQuestion, 5000);
  }
}

function nextQuestion(){
  if (currentQuestion < questionList.length) {
    timer = 30;
    $("#questiondisplay").html("<p>" + timer + " seconds remain!</p>");
    displayQuestion();
    countDown();
    timeUp();
  }
  else {
    resultsDisplay();
  }
}

function resultsDisplay(){
 $("#questiondisplay").html("<p>" + correctAnswers + incorrectAnswers + unanswered + "/<p>");
}

 //On click of start hide start button, show and start timer, get first question
   // $("#start").on("click")
   $("#start").click(function() {
       $("#start").hide();
       $("#guestiondisplay").prepend("<h2>Time Remaining: </h2");
       displayQuestion();
       countDown();
       timeUp();
   });

//answer button
$(".answerbutton").click(function() {
  if (correctAnswer) {
    youWin();
    nextQuestion();
    clearInterval(clock);
  }
  else {
    youLose();
    nextQuestion();
    clearInterval(clock);
  }
});






 });
