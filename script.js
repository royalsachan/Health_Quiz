
const questions= [
  {
    question:" From an objective point of view, which of the following factors seems most prominent (or dominant) on your body when you look in the mirror?",
    options: [
      { text:"A. Bone" },

      {  text:"B. Muscle" },

      {  text:"C. Body Fat" },
      
    ]
  },
  { 
    question:" How do your shoulders compare to your hips?",
    options: [
      { text:"A. My shoulders are narrower than my hips." },

      {  text:"B. They’re approximately the same width as my hips. " },

      {  text:"C. My shoulders are wider than my hips." },
    ]

  },
  {
    question:" Which of the following objects best describes your body shape?",
    options: [
      { text:"A. A Pencil" },

      {  text:"B. An hourglass" },

      {  text:"C. A pear" },
      
    ]

  },
  {
    question:" If you encircle one wrist with your other hand’s middle finger and thumb, what happens?",
    options: [
      { text:"A. My middle finger and thumb overlap a bit. " },

      { text:"B. My middle finger and thumb touch, but just barely. " },

      { text:"C. There’s a gap between my middle finger and thumb. " },
    ]

  },
  {
    question:" When it comes to your weight, which of the following patterns best describes your history?",
    options: [
      { text:"A.  I have trouble gaining muscle or body fat. " },

      {  text:"B.  I can gain and lose weight without too much difficulty." },

      {  text:"C.  I gain weight easily but have a hard time losing it." },
    ]

  },
  {
    question:" Think about what your body looked like, before you corrupted it with poor dietary and exercise habits, once you reached your full height as a teenager or young adult. How did you look?",
    options: [
       { text:  "A. I looked long and lanky."},

       { text:  "B.I looked strong and compact."},
        
       { text:  "C. I looked soft and full bodied."},
    ]
      
  },
  {
    question:" If you’d been exercising regularly and you were to take a break for a few months, what would happen to your body?",
    options: [
      { text:  " A. I would lose muscle and strength quickly." },

       { text: " B. My body wouldn’t change that much." },
        
       { text: " C. My body would soften up significantly and I might even gain weight." },
    ]
      
  },
  {
    question:" When you have a serious carb-fest (think: heaping plate of pasta or multiple slices of pizza), how do you feel afterward?",
    options: [
      { text:   "A.  The same as I usually do — normal, really. " },

       { text:  "B. I generally feel good, though I notice my ab muscles are extra hard or my belly feels full. " },
        
       { text:  "C. More often than not, I feel tired or bloated for a few hours after the meal." },
      
    ]

  },
  {
    question:"Put on a pair of form-fitting jeans — where on your body do they get extra clingy or even stuck? ",
    options: [
       { text:  "A. They don’t.In fact, I can’t keep them up without a belt." },

       { text:  "B. With a bit of work, I can wriggle my way into them over my muscular thighs.  " },
        
       { text:  "C. They get caught on my butt or belly." },
      
    ]

  },
  {
    question:" How would you describe your body’s bone structure?",
    options: [
      { text:   "A. I have a small frame." },

      { text:  "B.  I have a medium frame. " },
       
      { text:  "C.  I have a relatively large frame. " }, 
      
    ]

  }
];

// var option_A_Responses = [];
// var option_B_Responses = [];
// var option_C_Responses = [];

// document.getElementById('start-btn').addEventListener('click', function() {
//   document.getElementById('content').style.display = 'none';
//   document.getElementsById('questionElement').style.display = 'block';
// });


   document.getElementById('start-btn').addEventListener('click', function() {
   document.getElementById('content').style.display = 'none';
     var apps = document.getElementsByClassName('app');
  for (var i = 0; i < apps.length; i++) {
    apps[i].style.display = 'block';
  }
})

const questionElement = document.getElementById("question");
const optionButtons = document.getElementById ("option-buttons");
const nextButton = document.getElementById("next-btn");

const emailContainer = document.getElementById('email-container');
const emailInput = document.getElementById('email');
const submitEmailBtn = document.getElementById('submit-email');
  

let currentQuestionIndex=0;
let score= 0;
let correctResponses =  [];

function startQuiz(){
  currentQuestionIndex = 0;
  score=0;
  nextButton.innerHTML ="Next";
  showQuestion();
}
function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNO=currentQuestionIndex + 1;
  questionElement.innerHTML = questionNO + "." + currentQuestion.question;

  currentQuestion.options.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    optionButtons.appendChild(button);
    
    if(optionButtons.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    
  });

}
function resetState() {
  nextButton.style.display="none";
  while(optionButtons.firstChild) {
    optionButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true" ;
   if(isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  }
  else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(optionButtons.children).forEach(button => {
    if(button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}


function showScore(){
  resetState();
  questionElement.innerHTML= `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again"
  nextButton .style.display = "block";
}

function calculateBodyStructure() {
  var countA = option_A_Responses.length;
  var countB = option_B_Responses.length;
  var countC = option_C_Responses.length;

  // if(countA > countB) {

  // } else if ( countB > countA ) {

  // } else if( )
}

function handleNextButton(){
  currentQuestionIndex++;
  if( currentQuestionIndex < questions.length){
    showQuestion();
  }
   else {
    showScore();
  //showEmailInput();
   }
  }

nextButton.addEventListener("click", () => {
  if(currentQuestionIndex<questions.length){
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();

