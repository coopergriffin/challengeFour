// Cooper Griffin 
// JS code for challenge four


//Creating constant variables to interact with HTML elements 
const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const explainerElement = document.getElementById('explainer');
const optionsContainer = document.getElementById('options-container');
const startButton = document.getElementById('start-btn');
const timerElement = document.getElementById('time');
const endContainer = document.getElementById('end-container');
const initialsInput = document.getElementById('initials');
const submitButton = document.getElementById('submit-btn');

let currentQuestionIndex = 0;
let timeLeft = 60; // Set your desired quiz time

const questions = [
    {
        question: "What does IDE stand for?",
        options: ["A. Italy Defeats Edmonton", "B. Integrated Development Envionment", "C. Icey Donuts Erupt"],
        correctAnswer: "B" // The correct answer corresponds to the index of the correct option (0 for A, 1 for B, 2 for C)
    }, 
    {
        question: "What is the capital of Canada?",
        options: ["A. Toronto", "B. Ottawa", "C. Vancouver"],
        correctAnswer: "B" // The correct answer corresponds to the index of the correct option (0 for A, 1 for B, 2 for C)
    },
    {
        question: "What is the capital of Canada?",
        options: ["A. Toronto", "B. Ottawa", "C. Vancouver"],
        correctAnswer: "B" // The correct answer corresponds to the index of the correct option (0 for A, 1 for B, 2 for C)
    }
];

function startQuiz() {
    startButton.style.display = 'none'; //hides element 
    explainerElement.style.display = 'none'; //hides element
    timerElement.textContent = timeLeft;
    startTimer();

    loadQuestion();
}


//Function that starts timer 
function startTimer() {
    const timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0 || currentQuestionIndex === questions.length) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}


//Function that loads question 
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}


//Function that checks if user's answer is correct. If not it deducts time from timer variable
function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
        // Handle correct answer
    } else {
        // Handle incorrect answer
        timeLeft -= 10; // Subtract 10 seconds for incorrect answers
    }

    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

//Function to control what happens when quiz is done
function endQuiz() {
    quizContainer.style.display = 'none';
    endContainer.style.display = 'block';
}

// Event listeners
startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', saveScore);