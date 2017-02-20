'use strict';

window.initializeScale = (function () {
  return function (elem, step, startValue, callback) {
    var buttonDec = elem.querySelector('.upload-resize-controls-button-dec');
    var buttonInc = elem.querySelector('.upload-resize-controls-button-inc');
    var scaleControll = elem.querySelector('.upload-resize-controls-value');
    var scaleValue = startValue;
    var minValue = 0;
    var maxValue = 100;


    // высчитываем размер + коллбек
    function setScale(scale) {
      scaleControll.value = scale + '%';
      callback(scale);
    }

    buttonDec.addEventListener('click', function() {
      scaleValue = (scaleValue - step) >= minValue ? (scaleValue - step) : minValue;
      setScale(scaleValue);
    })

    buttonInc.addEventListener('click', function() {
      scaleValue = (scaleValue + step) <= maxValue ? (scaleValue + step) : maxValue;
      setScale(scaleValue);
    })
    setScale(scaleValue);
  }
})();
