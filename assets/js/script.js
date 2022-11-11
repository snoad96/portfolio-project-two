// The Quiz Questions
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
    {
        question: "What Fictional Character has Deadpool killed in the comics",
        a: "Sherlock Holmes",
        b: "Huckleberry Finn",
        c: "Moby Dick",
        d: "All of the above",
        correct: "d"
    },
    {
        question: "Where is Deadpool from?",
        a: "USA",
        b: "UK",
        c: "Canada",
        d: "Sweden",
        correct: "c"
    },
    {
        question: "What Movie was the character first played by Ryan Reynolds?",
        a: "X-Men Origins: Wolverine",
        b: "Deadpool: 1",
        c: "Deadpool: 2",
        d: "Avengers: Endgame",
        correct: "a"
    },
];

// Get the list elements 
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
  
// Score card
let currentQuiz = 0;
let score = 0;

const deselectAnswers = () =>  {
    answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
}

// Loads all questions into Quiz
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};

loadQuiz();

// Event listeners and finds correct answer
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizData.length) loadQuiz();
      else {
        quiz.innerHTML = `
              <h2>You did so well!
              <hr>
              You managed to get${score}/${quizData.length} questions correctly</h2>
              <button onclick="history.go(0)">Play Again</button>
          `;
      }
    }
  });
  