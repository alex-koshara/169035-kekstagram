'use strict';

var uploadForm = document.querySelector('#upload-select-image');
var uploadFile = document.querySelector('#upload-file');
var closeForm = document.querySelector('.upload-form-cancel');
var uploadOverlay = document.querySelector('.upload-overlay');
// Закрытие и открытие формы
uploadFile.addEventListener('change', toggleOverlay);
closeForm.addEventListener('click', toggleOverlay);

function toggleOverlay() {
  uploadOverlay.classList.toggle('invisible');
  uploadForm.classList.toggle('invisible');
// делаем 100% по умолчанию фото
  calculatePhotoValue(defaultPhotoValue);
}

// Переключение фильтров
var photo = document.querySelector('.upload-form-preview');
var photoFilters = document.querySelectorAll('input[name="upload-filter"]');

for (var i = 0; i < photoFilters.length; i++) {
  listenFilter(photoFilters[i]);
}

function listenFilter(filter) {
  filter.addEventListener('click', function () {
    toggleFilter(filter);
  });
}

function findFilter(filter) {
  return 'filter-' + filter.value;
}

// удаляем старые фильтры и добавляем кликнутый
function toggleFilter(filter) {
  var activeFilter = findFilter(filter);
  for (var k = 0; k < photoFilters.length; k++) {
    photo.classList.remove(findFilter(photoFilters[k]));
  }
  photo.classList.add(activeFilter);
}

// Контроль размера фото
var imageScale = document.querySelector('.filter-image-preview');
var formPhotoResize = document.querySelector('.upload-resize-controls');
var photoDec = document.querySelector('.upload-resize-controls-button-dec');
var photoInc = document.querySelector('.upload-resize-controls-button-inc');
var photoSize = document.querySelector('.upload-resize-controls-value');
var defaultPhotoValue = 100;
var photoValue = defaultPhotoValue;
var stepSize = 25;

formPhotoResize.addEventListener('click', photoResizeControll);

// высчитываем размер изображения для CSS и для пользователя в %
function photoResizeControll(e) {
  var target = e.target;
  if (target === photoDec && (photoValue - stepSize) > 0) {
    photoValue = photoValue - stepSize;
    calculatePhotoValue(photoValue);
  }
  if (target === photoInc && (photoValue + stepSize) <= 100) {
    photoValue = photoValue + stepSize;
    calculatePhotoValue(photoValue);
  }
}

// показываем значение размера изображения пользователю в %
function calculatePhotoValue(val) {
  photoSize.value = val + '%';
  imageScale.style.transform = 'scale(' + val / 100 + ')';
}
