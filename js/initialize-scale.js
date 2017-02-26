'use strict';

window.initializeScale = (function () {
  return function (elem, step, startScale, callback) {
    var MIN_VALUE = 25;
    var MAX_VALUE = 100;

    var buttonDec = elem.querySelector('.upload-resize-controls-button-dec');
    var buttonInc = elem.querySelector('.upload-resize-controls-button-inc');
    var scaleControl = elem.querySelector('.upload-resize-controls-value');
    var currentScale = startScale;

    // высчитываем размер + коллбек
    function setScale(scale) {
      currentScale = scale;
      scaleControl.value = scale.toString() + '%';
      callback(scale);
    }

    function onButtonDecClick() {
      setScale(Math.max(currentScale - step, MIN_VALUE));
    }

    function onButtonIncClick() {
      setScale(Math.min(currentScale + step, MAX_VALUE));
    }

    buttonDec.addEventListener('click', onButtonDecClick);
    buttonInc.addEventListener('click', onButtonIncClick);

    setScale(startScale);

    return function () {
      buttonDec.removeEventListener('click', onButtonDecClick);
      buttonInc.removeEventListener('click', onButtonIncClick);
    };
  };
})();
