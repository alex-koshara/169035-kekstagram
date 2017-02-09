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
// так же делает при открытии нового фото
// размер по умолчанию
  window.initializeScale(document.querySelector('.filter-image-preview'), 25, 50);
}

// функция переключения фильтров
window.initializeFilters(
    document.querySelector('.upload-form-preview'),
    document.querySelector('.upload-filter-controls'),
    document.querySelectorAll('input[name="upload-filter"]')
);
