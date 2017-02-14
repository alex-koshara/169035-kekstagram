'use strict';

window.pressEnterOrSpace = (function () {
  var ENTER_KEY_KODE = 13;
  var SPACE_KEY_KODE = 32;

  return function (e) {
    return e.keyCode === ENTER_KEY_KODE || e.keyCode === SPACE_KEY_KODE;
  };
})();
