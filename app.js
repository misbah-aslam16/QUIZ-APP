var questions = [
    {
      question: "Which animal is known as the King of the Jungle?",
      answers: [
        { text: "Elephant", correct: false },
        { text: "Lion", correct: true },
        { text: "Tiger", correct: false },
        { text: "Bear", correct: false }
      ]
    },
    {
      question: "How many continents are there in the world?",
      answers: [
        { text: "5", correct: false },
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false }
      ]
    },
    {
      question: "Which is the largest planet in our solar system?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Jupiter", correct: true },
        { text: "Saturn", correct: false },
        { text: "Mars", correct: false }
      ]
    },
    {
      question: "What is the primary color of a banana?",
      answers: [
        { text: "Green", correct: false },
        { text: "Yellow", correct: true },
        { text: "Red", correct: false },
        { text: "Blue", correct: false }
      ]
    },
    {
      question: "Which country is famous for the Eiffel Tower?",
      answers: [
        { text: "Spain", correct: false },
        { text: "Italy", correct: false },
        { text: "France", correct: true },
        { text: "Germany", correct: false }
      ]
    },
    {
      question: "What is the fastest land animal?",
      answers: [
        { text: "Cheetah", correct: true },
        { text: "Lion", correct: false },
        { text: "Horse", correct: false },
        { text: "Kangaroo", correct: false }
      ]
    },
    {
      question: "What is 2 + 2?",
      answers: [
        { text: "3", correct: false },
        { text: "4", correct: true },
        { text: "5", correct: false },
        { text: "6", correct: false }
      ]
    },
    {
      question: "Which shape has three sides?",
      answers: [
        { text: "Circle", correct: false },
        { text: "Square", correct: false },
        { text: "Triangle", correct: true },
        { text: "Pentagon", correct: false }
      ]
    },
    {
      question: "Which ocean is the largest?",
      answers: [
        { text: "Atlantic", correct: false },
        { text: "Indian", correct: false },
        { text: "Pacific", correct: true },
        { text: "Arctic", correct: false }
      ]
    }
  ];
  
   var questionElement = document.getElementById("question");
   var answerContainer = document.getElementById("answer");
   var next = document.getElementById("next");

   var currentQuestionIndex = 0;
   var score = 0;

   function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    next.innerHTML = "Next";
    showQuestion();
   }

   function showQuestion(){
    resetState();
    var currentQuestion = questions[currentQuestionIndex];
    var questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

    currentQuestion.answers.forEach(ans => {
        var button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("btn");
        answerContainer.appendChild(button);
        if(ans.correct){
            button.dataset.correct = ans.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
   }

function resetState(){
    next.style.display = "none";
    while(answerContainer.firstChild){
        answerContainer.removeChild(answerContainer.firstChild);
    }
}


function selectAnswer(e){
    var selectedBtn = e.target;
    var isCorrect =selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerContainer.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
next.style.display ="block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    next.innerHTML = "Try Again";
    // answerContainer.target.src="!#"
    //next.style.display = "block";
   
    
}
// next.addEventListener("click", () => {
//     if (next.innerHTML === "Try Again") {
//         startQuiz(); // Restart the quiz when the user clicks "Try Again"
//     } else if (currentQuestionIndex < questions.length) {
//         handleNextButton(); // Move to the next question
//     }
// });

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

next.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        showScore();
    }
});

startQuiz();




