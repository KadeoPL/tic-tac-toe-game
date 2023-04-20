
  function addClass(element, className) {
    element.classList.add(className);
  };


function checkWin(){

}

const boxes = document.querySelectorAll('div div');

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
  