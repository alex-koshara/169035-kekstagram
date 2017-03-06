'use strict';

(function () {
  var setupFilterControl = document.querySelector('.upload-filter-level-line');
  var setupFilterProgress = setupFilterControl.querySelector('.upload-filter-level-val');
  var setupFilterPin = setupFilterControl.querySelector('.upload-filter-level-pin');
  var MIN_COORDS_FILTER = 410;
  var MAX_COORDS_FILTER = 860;
  console.log(setupFilterControl.scrollWidth);

  setupFilterPin.addEventListener('mousedown', function (e) {
    e.preventDefault();

    var startCoords = {
      x: e.clientX
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX
      };

      startCoords = {
        x: moveEvt.clientX
      };

      if(startCoords.x > MIN_COORDS_FILTER && startCoords.x < MAX_COORDS_FILTER) {
        setupFilterPin.style.left = (setupFilterPin.offsetLeft - shift.x) + 'px';
        setupFilterProgress.style.width = (setupFilterPin.offsetLeft - shift.x) + 'px';
      }

    }

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
