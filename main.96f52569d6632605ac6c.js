/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/ResponsiveSlider */ "./src/js/ResponsiveSlider.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
__webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");




swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Thumbs, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Autoplay, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.FreeMode, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.EffectCards, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.EffectFade, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Controller]);
document.addEventListener("DOMContentLoaded", function (event) {
  var welcomeSlider = document.querySelector('.welcome-slider__swiper');
  if (welcomeSlider) {
    // Функция для анимации слайдов
    var handleSlideAnimation = function handleSlideAnimation(swiper) {
      var _this = this;
      var prevSlide = this.slides[this.previousIndex];
      prevSlide.classList.add('still-visible');
      this.allowSlideNext = false;
      this.allowSlidePrev = false;
      navigation.classList.add('circle-animation');
      setTimeout(function () {
        prevSlide.classList.remove('still-visible');
        var currentSlide = _this.slides[_this.activeIndex];
        currentSlide.classList.add('animate-back');
        setTimeout(function () {
          currentSlide.classList.remove('animate-back');
          navigation.classList.remove('circle-animation');
          _this.allowSlideNext = true;
          _this.allowSlidePrev = true;
        }, 800);
      }, 600);
    }; // Навешиваем логику на кнопки навигации
    var navigation = document.querySelector('.welcome-slider__navigation');
    var nextButton = document.querySelector('.welcome-slider__next');
    var prevButton = document.querySelector('.welcome-slider__prev');
    var slider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".welcome-slider .swiper", {
      slidesPerView: 1,
      effect: "fade",
      loop: true,
      navigation: {
        nextEl: '.welcome-slider__next',
        prevEl: '.welcome-slider__prev'
      },
      pagination: {
        el: '.welcome-slider__pagination',
        type: 'fraction'
      },
      on: {
        beforeSlideChangeStart: function beforeSlideChangeStart(swiper) {
          if (window.innerWidth >= 576) {
            handleSlideAnimation.call(this, swiper);
          }
        }
      }
    });
    nextButton.addEventListener('click', function (e) {
      if (!slider.allowSlideNext) return; // Блокировка навигации во время анимации
      handleSlideAnimation.call(slider, slider);
    });
    prevButton.addEventListener('click', function (e) {
      if (!slider.allowSlidePrev) return; // Блокировка навигации во время анимации
      handleSlideAnimation.call(slider, slider);
    });
  }
  var header = document.querySelector('header'); // Находим элемент хедер
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 100) {
        // Если прокручено более чем на 100px
        header.classList.add('scrolled'); // Добавляем класс
      } else {
        header.classList.remove('scrolled'); // Убираем класс
      }
    });
  }
  new _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_3__.ResponsiveSlider('.interiors').initSwipers({
    slidesOffsetAfter: _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_3__.ResponsiveSlider.getOffsetKey(),
    slidesOffsetBefore: _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_3__.ResponsiveSlider.getOffsetKey(),
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: '.interiors__prev',
      prevEl: '.interiors__next'
    },
    pagination: {
      el: '.interiors__pagination',
      type: 'fraction'
    },
    breakpoints: {
      601: {
        spaceBetween: 24
      },
      768: {
        spaceBetween: 32
      },
      992: {
        spaceBetween: 36,
        slidesOffsetBefore: 0
      },
      1440: {
        spaceBetween: 48,
        slidesOffsetBefore: 0
      }
    }
  }, true);
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".video-slider__slider.swiper", {
    slidesPerView: 1,
    navigation: {
      nextEl: '.video-slider__next',
      prevEl: '.video-slider__prev'
    },
    pagination: {
      el: '.video-slider__pagination',
      // Это можно оставить, если нужен индикатор
      type: 'custom',
      // Устанавливаем кастомную пагинацию
      renderCustom: function renderCustom(swiper, current, total) {
        document.querySelector('.video-slider__current-num').textContent = current <= 9 ? '0' + current : current;
        document.querySelector('.video-slider__total-num').textContent = total <= 9 ? '0' + total : total;
      }
    }
  });
  function scrollToElementWithHeaderOffset(element, header) {
    var headerHeight = document.querySelector('header').offsetHeight; // Высота хедера
    var elementPosition = element.getBoundingClientRect().top; // Позиция элемента относительно верхней границы окна
    var offsetPosition = elementPosition - headerHeight; // Позиция с учетом высоты хедера

    // Прокручиваем страницу на нужное расстояние
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  var tabsBlock = document.querySelectorAll('[data-tabs]');
  if (tabsBlock.length) {
    tabsBlock.forEach(function (tabsBlock) {
      var btns = tabsBlock.querySelectorAll('[data-tab]');
      var blocks = tabsBlock.querySelectorAll('[data-tab-block]');
      var _iterator = _createForOfIteratorHelper(btns),
        _step;
      try {
        var _loop = function _loop() {
          var btn = _step.value;
          btn.addEventListener('click', function () {
            var id = parseInt(btn.getAttribute('data-tab'));
            var _iterator2 = _createForOfIteratorHelper(blocks),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var block = _step2.value;
                if (parseInt(block.getAttribute('data-tab-block')) === id) {
                  block.setAttribute('data-active', '');
                  scrollToElementWithHeaderOffset(block);
                } else {
                  block.removeAttribute('data-active');
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            btn.setAttribute('data-active', '');
            var _iterator3 = _createForOfIteratorHelper(btns),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var otherBtn = _step3.value;
                if (parseInt(otherBtn.getAttribute('data-tab')) !== id) {
                  otherBtn.removeAttribute('data-active');
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          });
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }
  var doProportionIcon = function doProportionIcon(icons) {
    var _iterator4 = _createForOfIteratorHelper(icons),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var icon = _step4.value;
        var widthAttr = icon.getAttribute('width');
        var widthReal = icon.clientWidth;
        var heightAttr = icon.getAttribute('height');
        var heightReal = widthReal / widthAttr * heightAttr;
        icon.style.height = "".concat(heightReal, "px");
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  };
  var icons = document.querySelectorAll('.icon-pr');
  if (icons.length) {
    doProportionIcon(icons);
    window.addEventListener('resize', lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(function () {
      doProportionIcon(icons);
    }, 300));
  }
});

/***/ }),

/***/ "./src/js/ResponsiveSlider.js":
/*!************************************!*\
  !*** ./src/js/ResponsiveSlider.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResponsiveSlider: function() { return /* binding */ ResponsiveSlider; }
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var ResponsiveSlider = /*#__PURE__*/function () {
  function ResponsiveSlider(selector) {
    _classCallCheck(this, ResponsiveSlider);
    this._selector = selector;
    this._sliders = document.querySelectorAll("".concat(selector));
    this._container = document.querySelector('.container');
    if (this._sliders && this._container) {
      this.initSwipers = this.initSwipers.bind(this);
      this._reinitSlider = this._reinitSlider.bind(this);
    }
  }
  return _createClass(ResponsiveSlider, [{
    key: "_getContainerWidth",
    value: function _getContainerWidth() {
      var fullWidth = this._container.getBoundingClientRect().width;
      var style = window.getComputedStyle(this._container);
      var paddingLeft = parseFloat(style.paddingLeft);
      var paddingRight = parseFloat(style.paddingRight);
      return (window.innerWidth - (fullWidth - paddingLeft - paddingRight)) / 2;
    }
  }, {
    key: "_updateBreakpointConfig",
    value: function _updateBreakpointConfig(breakpoints, distanceFromEdge) {
      var _this = this;
      var reInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      Object.keys(breakpoints).forEach(function (breakpoint) {
        if (reInit) {
          breakpoints[breakpoint].slidesOffsetBefore ? breakpoints[breakpoint].slidesOffsetBefore = distanceFromEdge : '';
          breakpoints[breakpoint].slidesOffsetAfter ? breakpoints[breakpoint].slidesOffsetAfter = distanceFromEdge : '';
        } else {
          breakpoints[breakpoint].slidesOffsetBefore === _this.constructor.getOffsetKey() ? breakpoints[breakpoint].slidesOffsetBefore = distanceFromEdge : '';
          breakpoints[breakpoint].slidesOffsetAfter === _this.constructor.getOffsetKey() ? breakpoints[breakpoint].slidesOffsetAfter = distanceFromEdge : '';
        }
      });
    }
  }, {
    key: "_setDataForSwiper",
    value: function _setDataForSwiper(swiperConfig) {
      var reInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var distanceFromEdge = this._getContainerWidth();
      if (reInit) {
        swiperConfig.slidesOffsetBefore ? swiperConfig.slidesOffsetBefore = distanceFromEdge : '';
        swiperConfig.slidesOffsetAfter ? swiperConfig.slidesOffsetAfter = distanceFromEdge : '';
      } else {
        swiperConfig.slidesOffsetBefore === this.constructor.getOffsetKey() ? swiperConfig.slidesOffsetBefore = distanceFromEdge : '';
        swiperConfig.slidesOffsetAfter === this.constructor.getOffsetKey() ? swiperConfig.slidesOffsetAfter = distanceFromEdge : '';
      }
      if (swiperConfig.breakpoints) {
        this._updateBreakpointConfig(swiperConfig.breakpoints, distanceFromEdge, reInit);
      }
      return swiperConfig;
    }
  }, {
    key: "_reinitSlider",
    value: function _reinitSlider() {
      var _this2 = this;
      this._initedSliders.forEach(function (value, ind) {
        _this2._initedSliders.get(ind).slider.destroy();
        var updatedConfig = _this2._setDataForSwiper(_this2._initedSliders.get(ind).config, true);
        _this2._initedSliders.set(ind, {
          config: updatedConfig,
          slider: new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector("".concat(_this2._selector, "[data-slider=\"").concat(ind, "\"] .swiper")), updatedConfig)
        });
      });
    }
  }, {
    key: "_addNavigation",
    value: function _addNavigation(config, selector, ind) {
      config.navigation = {
        nextEl: "".concat(selector, "[data-slider='").concat(ind, "'] .nav-next"),
        prevEl: "".concat(selector, "[data-slider='").concat(ind, "'] .nav-prev")
      };
      return config;
    }
  }, {
    key: "initSwipers",
    value: function initSwipers(swiperConfig) {
      var _this3 = this;
      var navNeeded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this._initedSliders = new Map();
      this._sliders.forEach(function (slider, ind) {
        slider.setAttribute('data-slider', ind);
        var updatedConfig = _this3._setDataForSwiper(swiperConfig);
        if (navNeeded) {
          updatedConfig = _this3._addNavigation(updatedConfig, _this3._selector, ind);
        }
        _this3._initedSliders.set(ind, {
          config: updatedConfig,
          slider: new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider.querySelector('.swiper'), updatedConfig)
        });
      });
      window.addEventListener('resize', lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(this._reinitSlider, 100));
    }
  }], [{
    key: "getOffsetKey",
    value: function getOffsetKey() {
      return 'SHOULD_BE_COUNTED';
    }
  }]);
}();

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhefo"] = self["webpackChunkhefo"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.96f52569d6632605ac6c.js.map