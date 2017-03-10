'use strict';

(function () {
  var setupFilterControl = document.querySelector('.upload-filter-level-line');
  var setupFilterProgress = setupFilterControl.querySelector('.upload-filter-level-val');
  var setupFilterPin = setupFilterControl.querySelector('.upload-filter-level-pin');
  var MIN_COORDS_FILTER = setupFilterControl.getBoundingClientRect().left;
  var MAX_COORDS_FILTER = setupFilterControl.getBoundingClientRect().right;

  setupFilterPin.addEventListener('mousedown', function (e) {
    e.preventDefault();
    console.log(e.clientX);

    var startCoords = {
      x: e.clientX
    };

    function onMouseMove(moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX
      };

      startCoords = {
        x: moveEvt.clientX
      };

      if(startCoords.x > MIN_COORDS_FILTER && startCoords.x < MAX_COORDS_FILTER) {
        console.log(setupFilterPin.offsetLeft);
        setupFilterPin.style.left = (setupFilterPin.offsetLeft - shift.x) + 'px';
        setupFilterProgress.style.width = (setupFilterPin.offsetLeft - shift.x) + 'px';
      }

    }

    function onMouseUp(upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
