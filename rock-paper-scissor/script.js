import{ scoreCard, scoreAdder, scoreSub, gameRefree, roundLeft, topScoreChecker, saveToLocalStorage } from './scrore.js';

document.querySelector('.score-data').innerHTML = `Score : ${scoreCard.score}`;
document.querySelector('.rounds-data').innerHTML = `Rounds : ${scoreCard.rounds}`;
document.querySelector('.top-score-data').innerHTML = `Top Score : ${scoreCard.topScore}`;

function renderGame(playerHandImage, compHandImage){
    document.querySelector('.player-hand').innerHTML = `<img src="../images/rock-paper-scissor/${playerHandImage}.png" alt="">`;
    document.querySelector('.comp-hand').innerHTML = `<img src="../images/rock-paper-scissor/${compHandImage}.png" alt="">`;

    const gameChecker = gameRefree(playerHandImage, compHandImage);

    if (gameChecker === 'win'){
        scoreAdder();
        roundLeft();
        console.log(scoreCard.score);

    }
    else if (gameChecker === 'lose'){
        if (scoreCard.score > 0){
        scoreSub();
        roundLeft();
        console.log(scoreCard.score);
    }
    }
    document.querySelector('.score-data').innerHTML = `Score : ${scoreCard.score}`;
    document.querySelector('.rounds-data').innerHTML = `Rounds : ${scoreCard.rounds}`
}

function compHandSel(){
    const randomNumber = Math.random();
    let selection = '';
    if (randomNumber >= 0 && randomNumber < 1/3){
        selection = 'rock';
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3){
        selection = 'paper';
    }
    else{
        selection = 'scissor';
    }
    return selection;
}

function topScore(){
    topScoreChecker();
    document.querySelector('.top-score-data').innerHTML = `Top Score : ${scoreCard.topScore}`;
}
function alertGameOver(){
    document.querySelector('.game-wrapper').classList.add('blur');
            document.body.innerHTML += `<div class="game-over">
        <div class="game-msg">
            <div class="text">🎮 No rounds left!</div>
            <div class="score-gained">
                <div class="top-score-data-game-over score-board-bg">Top Score : ${scoreCard.topScore}</div>
                <div class="score-data-game-over score-board-bg">Score : ${scoreCard.score}</div>
                </div>
                <div class="restart-btn"><button class="js-restart-btn">Restart</button></div>
            </div>
        </div>`;
    document.querySelector('.js-restart-btn').addEventListener('click', ()=>{
        window.location.href = window.location.href;
    })
}
document.querySelectorAll('.game-btn').forEach((btn) => {
    btn.addEventListener('click', () =>{
        const playerHand = btn.dataset.gameSel;
        const compHand = compHandSel();

        if (scoreCard.rounds > 0){
            renderGame(playerHand, compHand);
            
        }
        if ((scoreCard.rounds === 0)){
            topScore();
            saveToLocalStorage();
            setTimeout(() => {
                alertGameOver();
            }, 1000);
        }
    })
})


