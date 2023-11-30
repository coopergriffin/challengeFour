// Cooper Griffin 
// JS code for challenge four

const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
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
        question: "What is the capital of Canada?",
        options: ["A. Toronto", "B. Ottawa", "C. Vancouver"],
        correctAnswer: "B" // The correct answer corresponds to the index of the correct option (0 for A, 1 for B, 2 for C)
    },
];

function startQuiz() {
    startButton.style.display = 'none';
    timerElement.textContent = timeLeft;
    startTimer();

    loadQuestion();
}

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

function endQuiz() {
    quizContainer.style.display = 'none';
    endContainer.style.display = 'block';
}

// Event listeners
startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', saveScore);