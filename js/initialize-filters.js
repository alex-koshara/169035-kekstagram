'use strict';

window.initializeFilters = (function () {
  var oldFilter = null;
  var newFilter = null;

  return function (fieldsetControl, callback) {

    function setFilterName(filterRadio) {
      newFilter = 'filter-' + filterRadio.value;
      callback(newFilter, oldFilter);
      oldFilter = newFilter;
    }

    function onFilterClick(e) {
      setFilterName(e.target);
    }

    function onFilterDown(e) {
      if (window.pressEnterOrSpace(e)) {
        var filterRadio = e.target.previousElementSibling;

        filterRadio.checked = true;

        setFilterName(filterRadio);
      }
    }

    fieldsetControl.addEventListener('keydown', onFilterDown);
    fieldsetControl.addEventListener('click', onFilterClick);

    return function () {
      fieldsetControl.removeEventListener('click', onFilterClick);
      fieldsetControl.removeEventListener('keydown', onFilterDown);
    };
  };
})();
