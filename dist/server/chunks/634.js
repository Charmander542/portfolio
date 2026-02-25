"use strict";
exports.id = 634;
exports.ids = [634];
exports.modules = {

/***/ 8634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
var ProgressIndicator = function ProgressIndicator() {
    var progress = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
        window.addEventListener("scroll", function() {
            var totalScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = totalScroll / windowHeight;
            progress.current ? progress.current.style.transform = "scaleX(".concat(scrolled, ")") : "";
        });
    }, [
        progress
    ]);
    return __jsx("div", {
        className: "progress w-full fixed top-0 z-50"
    }, __jsx("div", {
        ref: progress,
        className: "progress-bar"
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressIndicator);


/***/ })

};
;