// Declare const variables for high score
const highScoresList = document.getElementById('highScoresList');
const highScoresFinal = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML =
highScoresFinal.map(score=>{
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('');