'use strict';

var uploadForm = document.querySelector('#upload-select-image');
var uploadFile = document.querySelector('#upload-file');
var uploadFileLabel = document.querySelector('.upload-file.upload-control');
var closeForm = document.querySelector('.upload-form-cancel');
var uploadOverlay = document.querySelector('.upload-overlay');

// Закрытие и открытие формы
uploadFile.addEventListener('change', onToggleOverlay);
closeForm.addEventListener('click', onToggleOverlay);

uploadFileLabel.addEventListener('keydown', function (e) {
  if (window.pressEnterOrSpace(e)) {
    uploadFile.click(); // принудительный клик
  }
});

var previewPhoto = document.querySelector('.filter-image-preview');
var DEFAULT_PHOTO_SCALE = 50;
var photoScaleStep = 25;
// Функция отвечающая за размер фото
var setAdjustScale = function (size) {
  previewPhoto.style.transform = 'scale(' + size / 100 + ')';
};

function onToggleOverlay() {
  uploadOverlay.classList.toggle('invisible');
  uploadForm.classList.toggle('invisible');

  window.initializeScale(document.querySelector('.upload-resize-controls'), photoScaleStep, DEFAULT_PHOTO_SCALE, setAdjustScale);
}

var setPhotoFilter = function (newFilter, oldFilter) {
  previewPhoto.classList.remove(oldFilter);
  previewPhoto.classList.add(newFilter);
};

// функция переключения
window.initializeFilters(document.querySelector('.upload-filter-controls'), setPhotoFilter);
