'use strict';

window.pictures = (function () {
  var DATA_URL = 'https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data';
  var pictures = [];
  var currentPictures = [];
  var picturesContainer = document.querySelector('.pictures');

  window.load(DATA_URL, function (data) {
    pictures = data;
    currentPictures = data;
    var sortFilters = document.querySelector('.filters');
    var SHOW_FILTER_COUNT = 10;

    sortFilters.addEventListener('click', function (e) {
      switch (e.target.id) {
        case 'filter-popular':
          currentPictures = data;
          break;
        case 'filter-new':
          currentPictures = getNewPictures(SHOW_FILTER_COUNT);
          break;
        case 'filter-discussed':
          currentPictures = getDiscussedPictures(data);
          break;
      }
      renderPictures(currentPictures);
    });

    sortFilters.classList.remove('hidden');

    renderPictures(pictures);

    picturesContainer.addEventListener('click', showPicture);
    picturesContainer.addEventListener('keydown', function (e) {
      if (window.pressEnterOrSpace(e)) {
        showPicture(e);
      }
    });
  });

  function getDiscussedPictures(array) {
    return array.slice(0).sort(function (item1, item2) {
      return item1.comments.length - item2.comments.length;
    });
  }

  function getNewPictures(count) {
    var newPictures = [];
    var dublicatePicutres = pictures.slice(0);
    var item = null;
    while (newPictures.length !== count) {
      item = dublicatePicutres.splice(getRangomInteger(dublicatePicutres.length - 1), 1);
      newPictures.push(item[0]);
    }
    return newPictures;
  }

  function getRangomInteger(maxInteger) {
    return Math.round(Math.random() * maxInteger);
  }

  function renderPictures(array) {
    picturesContainer.innerText = '';
    currentPictures = array.slice(0);
    array.forEach(function (picture, index) {
      picturesContainer.appendChild(window.pictureRender(picture, index));
    });
  }

  function showPicture(event) {
    event.preventDefault();
    var pictureIndex = getPictureIndex(event);
    if (pictureIndex >= 0) {
      window.showGallery(currentPictures[pictureIndex]);
    }
  }

  function getPictureIndex(event) {
    var picture = event.target;

    if (picture.classList.contains('pictures')) {
      return -1;
    }
    while (!picture.classList.contains('picture')) {
      picture = picture.parentElement;
    }
    return picture.dataset.pictureId;
  }
})();
