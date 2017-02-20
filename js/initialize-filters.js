'use strict';

window.initializeFilters = (function () {
  return function (fieldsetControll, callback) {

    // var filtersList = fieldsetControll.querySelectorAll('input[name="upload-filter"]');
    fieldsetFilters.addEventListener('keydown', function (e) {
      if (window.pressEnterOrSpace(e)) {
        var filterRadio = e.target.previousElementSibling;
        toggleFilter(filterRadio);
        filterRadio.checked = true;
      }
    });

    fieldsetFilters.addEventListener('click', onFilterClick);
    // function toggleElement(filterRadio) { // toggleFilter
    //   var filterClassName = getFilterName(filterRadio);
    //   for (var k = 0; k < filtersRadio.length; k++) {
    //     element.classList.remove(getFilterName(filtersRadio[k]));
    //   }
    //   element.classList.add(filterClassName);
    // }

  }
})();

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

//**********************************************//
// window.initializeFilters = (function () {

//   function getFilterName(filterRadio) {
//     return 'filter-' + filterRadio.value;
//   }

//   return function (img, fieldsetFilters, filtersRadio) {

//     fieldsetFilters.addEventListener('keydown', function (e) {
//       if (window.pressEnterOrSpace(e)) {
//         var filterRadio = e.target.previousElementSibling;
//         toggleFilter(filterRadio); //  callback
//         filterRadio.checked = true;
//       }
//     });

//     fieldsetFilters.addEventListener('click', onFilterClick);

//     function onFilterClick(e) {
//       toggleFilter(e.target);
//     }

//     // удаляем старые фильтры и добавляем кликнутый
//     function toggleFilter(filterRadio) {
//       var filterClassName = getFilterName(filterRadio);
//       for (var k = 0; k < filtersRadio.length; k++) {
//         img.classList.remove(getFilterName(filtersRadio[k]));
//       }
//       img.classList.add(filterClassName);
//     }
//   };
// })();
