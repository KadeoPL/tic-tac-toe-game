function showAlert() {
  const alertDiv = document.createElement('div');
  alertDiv.classList.add('alertDiv');
  alertDiv.textContent = 'Pole już wybrane, nie możesz wybrać tego pola!';

  const alertHeading = document.createElement('h1');
  alertHeading.classList.add('alertHeading');
  alertHeading.textContent = 'upppps!';
  alertDiv.prepend(alertHeading);

  const alertBtn = document.createElement('button');
  alertBtn.classList.add('alertBtn');
  alertBtn.textContent = 'Spróbuj ponownie';
  alertDiv.appendChild(alertBtn);

  document.body.appendChild(alertDiv);
}
  
  function addClass(element, className) {
    if(element.classList.contains('circleActive') || element.classList.contains('crossActive')){
       showAlert();
       const alertBtn = document.querySelector('.alertBtn');
       alertBtn.addEventListener('click', () => {
        const alertToRemove = document.querySelector('.alertDiv');
        alertToRemove.remove();
       });
    } else {
      element.classList.add(className);
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
        // wygrane circle
        return true;
      } else if (
        boxA.classList.contains('crossActive') &&
        boxB.classList.contains('crossActive') &&
        boxC.classList.contains('crossActive')
      ) {
        // wygrana cross
        return true;
      }
    }
    // remis
    return draw;
  }
  
const boxes = document.querySelectorAll('div div');

let endGame = false;

/*const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
  
];*/

/*while (!endGame) {
    boxes.forEach((box) => {
      box.addEventListener('click', () => {
        addClass(box, 'circleActive');
        boxes.forEach((otherBox) => {
          if (!otherBox.classList.contains('circleActive')) {
            addClass(otherBox, 'crossActive');
          }
        });
      });
    });
  }*/


    boxes.forEach((box) => {
      box.addEventListener('click', () => {
        addClass(box, 'circleActive');
        /*boxes.forEach((otherBox) => {
          if (!otherBox.classList.contains('circleActive')) {
            addClass(otherBox, 'crossActive');
          }
        });*/
      });
    });
