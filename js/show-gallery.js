'use strict';

window.showGallery = (function () {
  var galleryOverlay = document.querySelector('.gallery-overlay');
  var closeGalleryOverlay = galleryOverlay.querySelector('.gallery-overlay-close');
  var pictureImg = galleryOverlay.querySelector('img');
  var pictureLikes = galleryOverlay.querySelector('.likes-count');
  var pictureComments = galleryOverlay.querySelector('.comments-count');

  closeGalleryOverlay.addEventListener('click', closeGallery);
  closeGalleryOverlay.addEventListener('keydown', function (e) {
    if (window.pressEnterOrSpace(e)) {
      closeGallery();
    }
  });

  function closeGallery() {
    galleryOverlay.classList.add('invisible');
  }

  return function (data) {
    pictureImg.setAttribute('src', data.url);
    pictureLikes.textContent = data.likes;
    pictureComments.textContent = data.comments.length;

    galleryOverlay.classList.remove('invisible');
  };
})();
