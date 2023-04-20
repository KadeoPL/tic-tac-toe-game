function addClassOnClick(elements, className) {
    elements.forEach((element) => {
      element.addEventListener('click', () => {
        element.classList.add(className);
      });
    });
  }

const boxes = document.querySelectorAll('div div');
addClassOnClick(boxes, 'circleActive');
//addClassOnClick(boxes, 'crossActive');
