'use strict';

window.initializeScale = (function () {
  return function (elem, step, startScale, callback) {
    var buttonDec = elem.querySelector('.upload-resize-controls-button-dec');
    var buttonInc = elem.querySelector('.upload-resize-controls-button-inc');
    var scaleControll = elem.querySelector('.upload-resize-controls-value');
    var currentScale = startScale;
    var MIN_VALUE = 0;
    var MAX_VALUE = 100;

    // высчитываем размер + коллбек
    function setScale(scale) {
      currentScale = scale;
      scaleControll.value = scale + '%';
      callback(scale);
    }

    buttonDec.addEventListener('click', function () {
      setScale(Math.max(currentScale - step, MIN_VALUE));
    });

    buttonInc.addEventListener('click', function () {
      setScale(Math.min(currentScale + step, MAX_VALUE));
    });

    setScale(startScale);
  };
})();
