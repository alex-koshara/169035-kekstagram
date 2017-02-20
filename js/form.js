'use strict';

var uploadForm = document.querySelector('#upload-select-image');
var uploadFile = document.querySelector('#upload-file');
var uploadFileLabel = document.querySelector('.upload-file.upload-control');
var closeForm = document.querySelector('.upload-form-cancel');
var uploadOverlay = document.querySelector('.upload-overlay');

// Закрытие и открытие формы
uploadFile.addEventListener('change', toggleOverlay);
closeForm.addEventListener('click', toggleOverlay);

uploadFileLabel.addEventListener('keydown', function (e) {
  if (window.pressEnterOrSpace(e)) {
    uploadFile.click(); // принудительный клик
  }
});

function toggleOverlay() {
  uploadOverlay.classList.toggle('invisible');
  uploadForm.classList.toggle('invisible');

// Функция отвечающая за размер фото
  var adjustScale = function (size) {
    var photo = document.querySelector('.upload-form-preview');
    photo.style.transform = 'scale(' + size / 100 + ')';
  };

  window.initializeScale(document.querySelector('.upload-resize-controls'), 25, 50, adjustScale);
}

var previewPhoto = document.querySelector('.upload-form-preview');
var fieldsetFilters = document.querySelectorAll('.upload-filter-controls');

// функция переключения фильтров
window.initializeFilters(fieldsetFilters, function (filters) {

}
);
