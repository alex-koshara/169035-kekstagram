'use strict';

window.initializeScale = (function () {
  var formPhotoResize = document.querySelector('.upload-resize-controls');
  var photoDec = document.querySelector('.upload-resize-controls-button-dec');
  var photoInc = document.querySelector('.upload-resize-controls-button-inc');
  var photoSize = document.querySelector('.upload-resize-controls-value');

  return function (img, step, startValue) {
    var photoScale = startValue;

    formPhotoResize.addEventListener('click', photoResizeControll);

    // высчитываем размер изображения для CSS и для пользователя в %
    function photoResizeControll(e) {
      var buttonControl = e.target;

      if (buttonControl === photoDec && (photoScale - step) > 0) {
        photoScale = photoScale - step;
        setPhotoScale(photoScale);
      }
      if (buttonControl === photoInc && (photoScale + step) <= 100) {
        photoScale = photoScale + step;
        setPhotoScale(photoScale);
      }
    }

    function setPhotoScale(scale) {
      photoSize.value = scale + '%';
      img.style.transform = 'scale(' + scale / 100 + ')';
    }

    setPhotoScale(startValue);
  };
})();
