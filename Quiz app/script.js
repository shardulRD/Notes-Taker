const questions = [
    {
        question:"What is the capital of Australia?",
        answers: [
            {text : "Canabera" , correct: false},
            {text : "Sydney", correct: true},
            {text: "Jalna", correct: false},
            {text : "Brisbane", correct: false},
        ]
    }, 
    {
        question:"What is the capital of France?",
        answers: [
            {text : "paris" , correct: true},
            {text : "rome", correct: false},
            {text: "madrid", correct: false},
            {text : "berlin", correct: false},
        ]
    },
    {
        question:"What is the chemical symbol for gold?",
        answers: [
            {text : "Ag" , correct: false},
            {text : "Au", correct: true},
            {text: "NA", correct: false},
            {text : "Cu", correct: false},
        ]
    },
    {
        question:"Which planet is known as the Red Planet?",
        answers: [
            {text : "Venus" , correct: false},
            {text : "Jupiter", correct: false},
            {text: "Mars", correct: true},
            {text : "Earth", correct: false},
        ]
    },
    {
        question:"Who painted the Mona Lisa?",
        answers: [
            {text : "Vincent van Gogh", correct: false},
            {text : "Leonardo da Vinci ", correct: true},
            {text: "Majnu Bhia", correct: false},
            {text : "salman khan", correct: false},
        ]
    }
    
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementsById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex  = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score=0;
    nextButton.innerHTML= "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNO = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNO + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer =>  {
        const button = document.createElement("button");
        button.innerHTML  = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();