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
      answers: ["Hindu Hannukah", "Hindu Christmas", "Hindi Halloween", "Hindu Flag Day"],
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

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var countStartNumber = 30;
var nextQuestion = 0;
var card = ("#questiondisplay");



var timer;


var game = {
  questions: questionList,
  currentQuestion: 0,
  counter: CountStartNumber,
  correct: 0,
  incorrect: 0,

  countdown: function(){
    //decrement counter
    //use jquery to dynamically put logic on the page
    //if statement - if time is up run time up function 
  },

  loadQuestion: function (){
    //set timer
    //time = setInterval(game.countdown, 1000)
    //dynamically add question into card variable hint: card.html ("<h2>" + "</h2>")
    //for loop to run through the: 
      //questions 
      //a dynamically added buttons with answer options
  },

  nextQuestion: function (){
    //set the counter game.counter = countStartNumber
    //use jquery to change the text of the game counter
    //increment the currentQuestion by one
    //call the loadQuestion function 
  },

  timeUp: function(){
    //clearInterval(timer)
    //use jquery to change the text of the game counter
    //dynamically add text out of time to the card
    //append the correct answer to the card
    //append image/gif to the card
  },

  results: function(){
    //clearInterval
    //dynamically add html to let them know of their results
    //use jquery to add html of game.counter to the id of counter-number
    //add how many correct answers they got
    //add how many incorret answers they got
    //and how many unanswered
    //add a start over button

  },

  clicked: function(){
    //clearInterval(timer)
    //if / else statement for when an answer is clicked
    //if correct run answeredCorrectly() function
    //else run answeredIncorrectly() 
  },

answeredIncorrectly: function(){
//add a point to the incorrect column
//clearInterval(timer)
//dynamically add html to lte them know they are wrong
//add the right answer
//add the image
//if/else statement: if no more question wait three seconds then show result -- else wait three seconds and show next question
},

answeredCorrectly: function (){
  //add a point to correct column
  //clearInterval(timer);
  //dynamically add html to let them know they are correct
  //add image
  //if/else statement: if no more question wait three seconds then show result -- else wait three seconds and show next question
},

reset: function(){

},


}





//function for displaying the next question on the screen - need a for loop?
function questionOnScreen() {
    $("#questiondisplay").append("<p>" + questionList[nextQuestion].question + "</p>");
    console.log (questionList.question[nextQuestion]);
    // $("#answerdisplay").append("<p>" + questionList.answers + "</p>");
}



//function for timer to being at 30secs for each new question


//change background of answers on hover

//on click of answer reveal true or false with image and stop timer

//if false display correct answer

//if out of time display "out of time" with correct answer and image

//Jump to next question after 5 seconds

//On click of start hide start button, show and start timer, get first question
// $("#start").on("click")
$("#start").click(function() {
    $("#start").hide();
    $("#guestiondisplay").prepend("<h2>Time Remaining: <span")
    questionOnScreen();
});

//answer button
$("#answer")


//function to show results - display correct, incorrect and unanswered questions

//start over button resets game - does not reload page





});