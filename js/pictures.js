'use strict';

window.pictures = (function () {
  var DATA_URL = 'https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data';
  var pictures = [];
  var picturesContainer = document.querySelector('.pictures');

  window.load(DATA_URL, function (data) {
    pictures = data;
    pictures.forEach(function (picture, index) {
      picturesContainer.appendChild(window.pictureRender(picture, index));
    });

    picturesContainer.addEventListener('click', showPicture);
    picturesContainer.addEventListener('keydown', function (e) {
      if (window.pressEnterOrSpace(e)) {
        showPicture(e);
      }
    });
  });

  function showPicture(event) {
    event.preventDefault();
    var pictureIndex = getPictureIndex(event);
    if (pictureIndex >= 0) {
      window.showGallery(pictures[pictureIndex]);
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
