class MixorMatch{
  constructor(totalTime, cards) {
    this.cardsArray = cards;
    this.totalTime = totalTime;
    this.timeRemaining = totalTime;
    this.timer = document.getElementById('timeremaining');
    this.ticker = document.getElementById('flips');


  }
  startGame() {
    this.cardToCheck = null;
    this.totalClicks = 0;
    this.timeRemaining = this.totalTime;
    this.busy = true;

    setTimeout(() => {
      this.shuffleCards();
      this.countDown = this.StartCountDown();
      this.busy = false;
    }, 500);
    this.hideCards();
    this.timer.innerText = this.timeRemaining;
    this.ticker.innerText = this.totalCliks;
  }

  hideCards() {
    this.cardsArray.forEach(card => {
      card.classList.remove('visivle');
      card.classList.remove('matched');
    });
  }

  flipCard(card) {
          if(this.canFlipCard(card)) {
              this.totalClicks++;
              this.ticker.innerText = this.totalClicks;
              card.classList.add('visible');

              if(this.cardToCheck) {
                  this.checkForCardMatch(card);
              } else {
                  this.cardToCheck = card;
              }
          }
      }
      checkForCardMatch(card) {
          if(this.getCardType(card) === this.getCardType(this.cardToCheck))
              this.cardMatch(card, this.cardToCheck);
          else
              this.cardMismatch(card, this.cardToCheck);

          this.cardToCheck = null;
      }
      cardMatch(card1, card2) {
        this.matchedCards.push(card1);
            this.matchedCards.push(card2);
    card1.classList.add('matched');
    card2.classList.add('matched');
    this.audioController.match();
    if(this.matchedCards.length === this.cardsArray.length)
        this.victory();
      }
      cardMismatch(card1, card2) {
          this.busy = true;
          setTimeout(() => {
              card1.classList.remove('visible');
              card2.classList.remove('visible');
              this.busy = false;
          }, 1000);
      }


getCardType(card) {
  return card.getElementsByClassName('card-value')[0].src;

}

StartCountDown() {
  return setInterval(() =>{
    this.timeRemaining--;
    this.timer.innerText = this.timeRemaining;
    if(this.timeRemaining === 0)
    this.gameOver();
  }, 1000);
}

gameOver() {
  clearInterval(this.countDown);
  document.getElementById('game-over-text').classList.add('visible');
}
victory(){
  clearInterval(this.countDown);
  document.getElementById('victory-text').classList.add('visible');

}

shuffleCards() {
  for(let i = this.cardsArray.length - 1; i > 0; i--) {
    let randIndex = Math.floor(Math.random() * (i+1));
    this.cardsArray[randIndex].style.order = i;
    this.cardsArray[i].style.order = randIndex;
  }
}

canFlipCard(card) {
  return true;
     //return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
 }
}



function ready() {
  let overlays = Array.from(document.getElementsByClassName('overlay-text'));
  let cards = Array.from(document.getElementsByClassName('card'));
  let game = new MixorMatch(10, cards);



  overlays.forEach(overlay => {
    overlay.addEventListener('click', () =>{
      overlay.classList.remove('visible');
      game.startGame();
    });
  });
  cards.forEach(card =>{
    card.addEventListener('click', () =>{
      game.flipCard(card);
    });
  });
}

if(document.readyState === 'loading') {
  document.addEventlistener('DOMContentLoaded', ready());
} else{
  ready();
}
