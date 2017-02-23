'use strict';

window.pictureRender = (function () {
  var pictureTemplate = document.querySelector('#picture-template');
  var pictureElement = pictureTemplate.content.querySelector('.picture');

  return function (picture, index) {
    var newPictureElement = pictureElement.cloneNode(true);
    var pictureImg = newPictureElement.querySelector('img');
    var pictureLikes = newPictureElement.querySelector('.picture-likes');
    var pictureComments = newPictureElement.querySelector('.picture-comments');

    newPictureElement.dataset.pictureId = index;
    pictureImg.setAttribute('src', picture.url);
    pictureLikes.textContent = picture.likes;
    pictureComments.textContent = picture.comments.length;

    return newPictureElement;
  };
})();
