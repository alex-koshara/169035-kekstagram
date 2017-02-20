'use strict';

window.initializeFilters = (function () {
  var oldFilter = null;
  var newFilter = null;

  return function (fieldsetControll, callback) {

    fieldsetControll.addEventListener('keydown', function (e) {
      if (window.pressEnterOrSpace(e)) {
        var filterRadio = e.target.previousElementSibling;
        setFilterName(filterRadio);
        filterRadio.checked = true;
      }
    });

    fieldsetControll.addEventListener('click', onFilterClick);

    function setFilterName(filterRadio) {
      newFilter = 'filter-' + filterRadio.value;
      callback(newFilter, oldFilter);
      oldFilter = newFilter;
    }

    function onFilterClick(e) {
      setFilterName(e.target);
    }
  };
})();
