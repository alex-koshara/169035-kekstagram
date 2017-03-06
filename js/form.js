'use strict';

(function () {
  var DEFAULT_PHOTO_SCALE = 100;
  var PHOTO_SCALE_STEP = 25;
  var SCALE_PERCENT = 100;

  var uploadForm = document.querySelector('#upload-select-image');
  var uploadFile = document.querySelector('#upload-file');
  var uploadFileLabel = document.querySelector('.upload-file.upload-control');
  var uploadCloseForm = document.querySelector('.upload-form-cancel');
  var uploadOverlay = document.querySelector('.upload-overlay');

  var photoPreview = document.querySelector('.filter-image-preview');
  var photoResizeControl = document.querySelector('.upload-resize-controls');
  var photoFilterControl = document.querySelector('.upload-filter-controls');
  var unbindFilters;
  var unbindScale;

  function setScale(size) {
    photoPreview.style.transform = 'scale(' + (size / SCALE_PERCENT).toString() + ')';
  }

  function onToggleOverlay() {
    uploadOverlay.classList.toggle('invisible');
    uploadForm.classList.toggle('invisible');

    // функция переключения
    if (uploadForm.classList.contains('invisible')) {
      unbindFilters = window.initializeFilters(photoFilterControl, setPhotoFilter);
      unbindScale = window.initializeScale(photoResizeControl, PHOTO_SCALE_STEP, DEFAULT_PHOTO_SCALE, setScale);
      uploadFile.removeEventListener('change', onToggleOverlay);

    } else {
      unbindFilters();
      unbindScale();
      uploadFile.addEventListener('change', onToggleOverlay);
      uploadFile.value = '';
    }
  }

  function setPhotoFilter(newFilter, oldFilter) {
    photoPreview.classList.remove(oldFilter);
    photoPreview.classList.add(newFilter);
  }

  // Закрытие и открытие формы
  uploadFile.addEventListener('change', onToggleOverlay);
  uploadCloseForm.addEventListener('click', onToggleOverlay);

  uploadFileLabel.addEventListener('keydown', function (e) {
    if (window.pressEnterOrSpace(e)) {
      uploadFile.click();
    }
  });
})();
