'use strict';

window.pictures = (function () {
  var SHOW_FILTER_COUNT = 10;
  var DATA_URL = 'https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data';

  var pictures = [];
  var currentPictures = [];
  var picturesContainer = document.querySelector('.pictures');

  function onSortClick(e) {
    renderPicturesByFilter(e.target.id);
  }

  function renderPicturesByFilter(filterId) {
    switch (filterId) {
      case 'filter-popular':
        currentPictures = pictures;
        break;
      case 'filter-new':
        currentPictures = getNewPictures(SHOW_FILTER_COUNT);
        break;
      case 'filter-discussed':
        currentPictures = getDiscussedPictures(pictures);
        break;
    }
    renderPictures(currentPictures);
  }

  function getDiscussedPictures(array) {
    return array.slice(0).sort(function (left, right) {
      return right.comments.length - left.comments.length;
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

  function onShowPicture(event) {
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

  window.load(DATA_URL, function (data) {
    var sortFilters = document.querySelector('.filters');
    pictures = data;
    currentPictures = data;

    sortFilters.classList.remove('hidden');

    renderPictures(pictures);

    sortFilters.addEventListener('click', onSortClick);
    picturesContainer.addEventListener('click', onShowPicture);
    picturesContainer.addEventListener('keydown', function (e) {
      if (window.pressEnterOrSpace(e)) {
        onShowPicture(e);
      }
    });
  });
})();
