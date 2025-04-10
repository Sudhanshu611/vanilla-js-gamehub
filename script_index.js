const gameCard = [
    {
        gameId: 'game-01',
        gameImage: 'images/rock-paper-scissors.png',
        gameName: 'Rock Paper Scissor',
        gameAttempts: 20,
        gameTopScore: 20,
        link: './rock-paper-scissor/index.html'
    },
    {
        gameId: 'game-02',
        gameImage: 'images/hand-cricket.png',
        gameName: 'Hand Cricket',
        gameAttempts: 20,
        gameTopScore: 20,
        link: '#'
    }
];



const cardHTML = gameCard.map((card) =>{
    return `<div class="game-card">
            <a href="${card.link}">
            <img src="${card.gameImage}" alt="">
            <div class="game-name">${card.gameName}</div>
            <div class="game-description">
                Attempts:  ${card.gameAttempts} 
                <br>
                Topscore:  ${card.gameTopScore}
            </div>
            </a>
        </div>`
}).join('');

document.querySelector('.game-card-container').innerHTML = cardHTML;