class MixorMatch{
  constructor(totalTime, cards) {
    this.cardsArray = cards;
    this.totalTime = totalTime;
    this.timeRemaining = totalTime;
    this.timer = document.getElementsById('time-remaining');
    this.ticker = document.getElementsById('flips');


  }
  startGame() {
    this.cardToCheck = null;
    this.totalClicks = 0;
    this.timeRemaining = this.totalTime;
    this.busy = true;
  }

FlipCard(card) {

}

  canFlipCard(card) {
    return true;
    //return !this.busy && !this.matchedCards.includes(card) && !== this.cardToCheck;
  }
}



function ready() {
  let overlays = Array.from(document.getElementsByClassName('overlay-text'));
  let cards = Array.from(document.getElementsByClassName('card'));


  overlays.forEach(overlay => {
    overlay.addEventListener('click', () =>{
      overlay.classList.remove('visible');
      //game.startgame();
    });
  });
  cards.forEach(card =>{
    card.addEventListener('click', () =>{
      //game-flipCard(card);
    });
  });
}

if(document.readyState === 'loading') {
  document.addEventlistener('DOMContentLoaded', ready());
} else{
  ready();
}
