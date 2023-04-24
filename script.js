function showAlert(message) {
  const alertDiv = document.createElement('div');
  const alertHeading = document.createElement('h1');
  const alertBtn = document.createElement('button');
  

  switch (message) {
    case 'error':
      alertDiv.classList.add('alertDiv');
      alertDiv.textContent = 'Pole już wybrane, nie możesz wybrać tego pola!';
  
      alertHeading.classList.add('alertHeading');
      alertHeading.textContent = 'upppps!';
      alertDiv.prepend(alertHeading);
  
      alertBtn.classList.add('alertBtn');
      alertBtn.textContent = 'Spróbuj ponownie';
      alertDiv.appendChild(alertBtn);
  
      document.body.appendChild(alertDiv);
      break;
    
    case 'winCircle':
      alertDiv.classList.add('alertDiv');
      alertDiv.textContent = 'Gratuluję wygranej!';

      alertHeading.classList.add('winHeading');
      alertHeading.textContent = 'Gracz kółko wygrywa!';
      alertDiv.prepend(alertHeading);

      alertBtn.classList.add('winBtn');
      alertBtn.textContent = 'Zagraj ponownie';
      alertDiv.appendChild(alertBtn);

      document.body.appendChild(alertDiv);
      break;
    
    case 'winCross':
      alertDiv.classList.add('alertDiv');
      alertDiv.textContent = 'Gratuluję wygranej!';

      alertHeading.classList.add('winHeading');
      alertHeading.textContent = 'Gracz krzyżyk wygrywa!';
      alertDiv.prepend(alertHeading);

      alertBtn.classList.add('winBtn');
      alertBtn.textContent = 'Zagraj ponownie';
      alertDiv.appendChild(alertBtn);

      document.body.appendChild(alertDiv);
      break; 
      
    case 'draw':
      alertDiv.classList.add('alertDiv');
      alertDiv.textContent = 'Żaden z graczy nie wygrał!';

      alertHeading.classList.add('alertHeading');
      alertHeading.textContent = 'Remis!';
      alertDiv.prepend(alertHeading);

      alertBtn.classList.add('alertBtn');
      alertBtn.textContent = 'Zagraj ponownie';
      alertDiv.appendChild(alertBtn);

      document.body.appendChild(alertDiv);
      break;  
  }
}

function restartGame() {
  const winBtn = document.querySelector('.winBtn');
  winBtn.addEventListener('click', () => {
    location.reload();
  });
}
  
function addClass(element, className) {
    if(element.classList.contains('circleActive') || element.classList.contains('crossActive')){
       showAlert('error');
       const alertBtn = document.querySelector('.alertBtn');
       alertBtn.addEventListener('click', () => {
        const alertToRemove = document.querySelector('.alertDiv');
        alertToRemove.remove();
        return false;
       });
    } else {
      element.classList.add(className);
      return true;
    }};


  function checkWin() {
    const winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (let i = 0; i < winningPositions.length; i++) {
      const [a, b, c] = winningPositions[i];
      const boxA = boxes[a];
      const boxB = boxes[b];
      const boxC = boxes[c];
  
      if (
        boxA.classList.contains('circleActive') &&
        boxB.classList.contains('circleActive') &&
        boxC.classList.contains('circleActive')
      ) {
        return 'circleWin';
      } else if (
        boxA.classList.contains('crossActive') &&
        boxB.classList.contains('crossActive') &&
        boxC.classList.contains('crossActive')
      ) {
        return 'crossWin';
      } else if(movesCount === 9){
        return 'draw';
      }
    }
    return ;
  }
  
const boxes = document.querySelectorAll('div div');

let endGame = false;
let playerTurn = 'circle';
let movesCount = 0;

/* ---- Player vs. Player ------
boxes.forEach((box) => {
  box.addEventListener('click', () => {
    movesCount++;
    if (playerTurn === 'circle') {
      if(addClass(box, 'circleActive') === true){
        playerTurn = 'cross';
        checkWin();
      } else {
        playerTurn = 'circle';
        movesCount--;
      };
      
    } else {
      if(addClass(box, 'crossActive') === true){
        playerTurn = 'circle';
        checkWin();
      } else {
        playerTurn = 'cross';
        movesCount--;
      };
    }
    */

    boxes.forEach((box) => {
      box.addEventListener('click', () => {
        movesCount++;
        if (playerTurn === 'circle') {
          if(addClass(box, 'circleActive') === true){
            playerTurn = 'cross';
            checkWin();
          } else {
            playerTurn = 'circle';
            movesCount--;
          };
          
        } else {
          const crossbox = document.querySelector("div:not([circleActive || crossActive]");
          addClass(crossbox, 'circleActive');
        }


  const gameResult = checkWin();
  if (gameResult === 'circleWin') {
      showAlert('winCircle');
      restartGame();
    } else if (gameResult === 'crossWin') {
      showAlert('winCross');
      restartGame();
    } else if (gameResult === 'draw') {
      showAlert('draw');
      restartGame();
    }
  });
});
