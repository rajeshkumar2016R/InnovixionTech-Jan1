const questions = [
    {
        question: "which is the largest animal in the world ? ",
        answers: [
            { text: 'shark', correct: false },
            { text: 'Blue whale', correct: true },
            { text: 'Elepahant', correct: false },
            { text: 'Giraffe', correct: false },
        ]
    },
    {
        question: "which is the samllest continent in the world ? ",
        answers: [
            { text: 'Asia', correct: false },
            { text: 'Australia', correct: true },
            { text: 'Arctic', correct: false },
            { text: 'Africa', correct: false },
        ]
    },
    {
        question: "which is the largest desert in the world ? ",
        answers: [
            { text: 'Kalahari', correct: false },
            { text: 'gobi', correct: false },
            { text: 'Sahara', correct: false },
            { text: 'Antarctica', correct: true },
        ]
    },
    {
        question: "which is the Smallest country in the world ? ",
        answers: [
            { text: 'Vatican city', correct: true },
            { text: 'Bhutan', correct: false },
            { text: 'Nepal', correct: false },
            { text: 'Shri Lanka', correct: false },
        ]
    },

];

let questionElement = document.querySelector('.question');
let answerButtons = document.querySelector('.answer-button');
let nextButton = document.querySelector('.next-btn');

let questionIndex = 0;
let score = 0;

function startQuiz() {
    questionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[questionIndex];
    let questionNumber = questionIndex + 1;
    questionElement.innerHTML = questionNumber + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    })
}


function resetState() {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    let selectBtn = e.target;
    let isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add('correct');
        score++;
    } else {
        selectBtn.classList.add('incorrect')
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

function showScore() {
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = 'play again';
    nextButton.style.display = 'block';
}

function handleButton() {
    questionIndex++;
    if (questionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (questionIndex < questions.length) {
        handleButton();
    } else {
        startQuiz();
    }
})

startQuiz();