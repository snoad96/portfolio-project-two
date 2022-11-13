// Declare const variables for high score
const highScoresList = document.getElementById('highScoresList');
const highScoresFinal = JSON.parse(localStorage.getItem('highScores')) || [];