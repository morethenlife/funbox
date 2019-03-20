"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* global document window history location Element */
document.addEventListener('DOMContentLoaded', function () {
  var cardProduct = document.querySelectorAll('.js-product-card');

  for (var i = 0; i < cardProduct.length; i++) {
    cardProduct[i].addEventListener('click', clickHandler);
  }
  /**
   * определение нужного предка
   *
   * @param {object} el
   * @param {object} cls
   */


  function findParent(el, cls) {
    console.log(_typeof(el));

    while ((el = el.parentElement) && !el.classList.contains(cls)) {
      ;
    }

    return el;
  }

  function clickHandler() {
    var parent = findParent(this, 'product-card');
    var classList = parent.classList;

    if (classList.contains('product-card--active')) {
      classList.remove('product-card--active');
      classList.add('product-card--default');
    } else if (classList.contains('product-card--default')) {
      classList.add('product-card--active');
      classList.remove('product-card--default');
    } else {
      return false;
    }
  }
});
"use strict";