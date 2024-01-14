"use strict";
exports.id = 857;
exports.ids = [857];
exports.modules = {

/***/ 8857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1665);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);





var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
var Nav = function Nav() {
    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isScrolled = _useState[0], setIsScrolled = _useState[1];
    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    var handleScroll = function handleScroll() {
        var offset = window.scrollY;
        if (offset > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
        window.addEventListener('scroll', handleScroll);
    });
    var navbarClasses = [
        'fixed top-0 z-50 select-none transition-all duration-300'
    ];
    return __jsx("nav", {
        className: navbarClasses.join(" ")
    }, __jsx((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default()), null, __jsx("div", {
        className: "flex justify-center section-container"
    }, __jsx("a", {
        onClick: function onClick() {
            router.push("/");
        },
        className: "link cursor-pointer"
    }, __jsx("div", {
        className: "w-16 h-16 bg-gray-dark-5 flex items-center justify-center"
    }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
        src: "/cvh.svg",
        alt: "CVH",
        width: 30 * 1.5,
        height: 25 * 1.5
    }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);


/***/ })

};
;