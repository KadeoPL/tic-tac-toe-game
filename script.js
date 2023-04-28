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
      alertDiv.textContent = 'Spróbuj ponownie i zagraj jeszcze raz!';

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
      } else if (movesCount === 5){
        return 'draw';
      }
    }
    return ;
  }
  
const boxes = document.querySelectorAll('div div');

let playerTurn = 'circle';
let movesCount = 0;
let gameResult = '';


boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if(addClass(box, 'circleActive') === true){;
      gameResult = checkWin();
      if (gameResult === 'circleWin') {
        showAlert('winCircle');
        const restartButton = document.querySelector('.winBtn');
        restartButton.addEventListener('click', () => {
          location.reload();
          return;
        });
      } else if (gameResult === 'draw') {
        showAlert('draw');
        const restartButton = document.querySelector('.alertBtn');
        restartButton.addEventListener('click', () => {
          location.reload();
          return;
        });
      }
      
      for (let i = 0; i < boxes.length; i++) {
        if (!boxes[i].classList.contains('circleActive') && !boxes[i].classList.contains('crossActive')) {
          boxes[i].classList.add('crossActive');
          gameResult = checkWin();
          if (gameResult === 'crossWin') {
            showAlert('winCross');
            const restartButton = document.querySelector('.winBtn');
            restartButton.addEventListener('click', () => {
              location.reload();
        });
          } else if (gameResult === 'draw') {
            showAlert('draw');
            const restartButton = document.querySelector('.alertBtn');
            restartButton.addEventListener('click', () => {
              location.reload();
        });
          }
          break;
        }
      }
      movesCount++;
    }
  })
})
