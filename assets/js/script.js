const quizData = [
    {
      question: "What is Deadpools real name?",
      a: "Richard Webber",
      b: "Wade Wilson",
      c: "Slade Wilson",
      d: "Hal Jordan",
      correct: "b"
    },
    {
        question: "When was the first Deadpool comic released",
        a: "2000",
        b: "2016",
        c: "2018",
        d: "1991",
        correct: "d"
    },
    {
        question: "When was the first Deadpool Movie released",
        a: "2000",
        b: "2016",
        c: "2018",
        d: "1991",
        correct: "b"
    },
    {
        question: "Who is Deadpools main Romance/girlfriend in the Movies",
        a: "Rogue",
        b: "Storm",
        c: "Vanessa",
        d: "Logan",
        correct: "c"
    },
    {
        question: "Deadpool has bovinophobia, whis is the fear of what..?",
        a: "Cows",
        b: "Apples",
        c: "Driving",
        d: "Children",
        correct: "a"
    },
    
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
  
let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
}

const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};