'use strict';

window.initializeFilters = (function () {

  function getFilterName(filterRadio) {
    return 'filter-' + filterRadio.value;
  }

  return function (img, fieldsetFilters, filtersRadio) {

    fieldsetFilters.addEventListener('keydown', function (e) {
      if (window.pressEnterOrSpace(e)) {
        var filterRadio = e.target.previousElementSibling;
        toggleFilter(filterRadio);
        filterRadio.checked = true;
      }
    });

    fieldsetFilters.addEventListener('click', onFilterClick);

    function onFilterClick(e) {
      toggleFilter(e.target);
    }

    // удаляем старые фильтры и добавляем кликнутый
    function toggleFilter(filterRadio) {
      var filterClassName = getFilterName(filterRadio);
      for (var k = 0; k < filtersRadio.length; k++) {
        img.classList.remove(getFilterName(filtersRadio[k]));
      }
      img.classList.add(filterClassName);
    }
  };
})();
