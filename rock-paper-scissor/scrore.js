export const scoreCard = JSON.parse(localStorage.getItem('score')) || {
    topScore: 0,
    score: 0,
    rounds: 10
}

export function scoreAdder(){
    scoreCard.score += 1;
}
export function scoreSub(){
    scoreCard.score -= 1;
}

export function roundLeft(){
    scoreCard.rounds -= 1;
}

export function topScoreChecker(){
    if (scoreCard.score > scoreCard.topScore){
        scoreCard.topScore = scoreCard.score;
    }
}

export function saveToLocalStorage(){
    const top = scoreCard.topScore;
    localStorage.setItem('score',JSON.stringify({
        topScore: top,
        score: 0,
        rounds: 10
    }));
}

export function gameRefree(playerHandImage, compHandImage){
    if (playerHandImage === compHandImage){
        return 'tie';
    }
    else if (playerHandImage === 'rock' && compHandImage === 'scissor'){
        return 'win';
    }
    else if (playerHandImage === 'rock' && compHandImage === 'paper'){
        return 'lose';
    }
    else if (playerHandImage === 'paper' && compHandImage === 'scissor'){
        return 'lose';
    }
    else if (playerHandImage === 'paper' && compHandImage === 'rock'){
        return 'win';
    }
    else if (playerHandImage === 'scissor' && compHandImage === 'rock'){
        return 'lose';
    }
    else if (playerHandImage === 'scissor' && compHandImage === 'paper'){
        return 'win';
    }
}

