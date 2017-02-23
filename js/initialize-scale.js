'use strict';

window.initializeScale = (function () {
  return function (elem, step, startScale, callback) {
    var buttonDec = elem.querySelector('.upload-resize-controls-button-dec');
    var buttonInc = elem.querySelector('.upload-resize-controls-button-inc');
    var scaleControll = elem.querySelector('.upload-resize-controls-value');
    var currentScale = startScale;
    var minValue = 0;
    var maxValue = 100;

    // высчитываем размер + коллбек
    function setScale(scale) {
      currentScale = scale;
      scaleControll.value = scale + '%';
      callback(scale);
    }

    buttonDec.addEventListener('click', function () {
      setScale(Math.max(currentScale - step, minValue));
    });

    buttonInc.addEventListener('click', function () {
      setScale(Math.min(currentScale + step, maxValue));
    });

    setScale(startScale);
  };
})();
