document.addEventListener('DOMContentLoaded', () => {

  // an array of image names and an array of objects created using map method with name and img properties
  const imageNames = ['burger', 'cupcake', 'egg', 'jam', 'milk', 'sausage', 'chocolate', 
  'pizza', 'sausage', 'jam', 'burger', 'cupcake', 'egg', 'milk', 'chocolate', 'pizza'];
  const cardArray = imageNames.map(name => ({ name, img: `images/${name}.png` }));

  // shuffle the card array
  cardArray.sort(() => 0.5 - Math.random());
  
   // get the container element and result display element 
  const grid = document.getElementById('pics');
  const resultDisplay = document.getElementById('result');

  // arrays to store the chosen card and its ID, and the won cards
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
    
  // create board and add cards to it
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'images/gift.png');
      card.setAttribute('style', 'width: 25%; height: auto;');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

    
  // check if two cards match or not
  function checkForMatch() {
    const cards = document.querySelectorAll('#pics img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    const messageDisplay = document.querySelector('#message');
        
    if (optionOneId == optionTwoId) {
    // if the same card is clicked twice
      cards[optionOneId].setAttribute('src', 'images/gift.png');
      cards[optionTwoId].setAttribute('src', 'images/gift.png');
      messageDisplay.textContent = 'You have clicked the same image!';
    } else if (cardsChosen[0] === cardsChosen[1]) {
      // if the two cards match
        messageDisplay.textContent = 'You found a match!';
        cards[optionOneId].setAttribute('src', 'images/approve.png');
        cards[optionTwoId].setAttribute('src', 'images/approve.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
      // if the two cards don't match
        messageDisplay.textContent = 'Sorry, try again!';
        cards[optionOneId].setAttribute('src', 'images/gift.png');
        cards[optionTwoId].setAttribute('src', 'images/gift.png');
    }
        
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
        
    if (cardsWon.length === cardArray.length / 2) {
    // if all cards are matched and won
      resultDisplay.textContent = 'Congratulations! You found them all!';
    }
  }
      
  // flip the card when it's clicked and check for matches when two cards are chosen
  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
    
  createBoard()
});
    

// reset the game and start over
document.addEventListener('DOMContentLoaded', () => {
  const resetBtn = document.getElementById('btn');
  resetBtn.textContent = 'Reset';
  resetBtn.addEventListener('click', () => {
    location.reload();
      });
    });