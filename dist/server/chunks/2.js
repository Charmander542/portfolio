exports.id = 2;
exports.ids = [2];
exports.modules = {

/***/ 1341:
/***/ ((module) => {

// Exports
module.exports = {
	"primary__button": "Button_primary__button__3sg2q",
	"secondary__button": "Button_secondary__button__2zXTU"
};


/***/ }),

/***/ 7002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Code_Portfolio3_portfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(159);
/* harmony import */ var C_Code_Portfolio3_portfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1164);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1341);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Button_module_scss__WEBPACK_IMPORTED_MODULE_3__);




var _excluded = [
    "href",
    "onClick",
    "children",
    "classes",
    "type"
];
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
var Button = function Button(_ref) {
    var href = _ref.href, onClick = _ref.onClick, children = _ref.children, classes = _ref.classes, type = _ref.type, otherProps = (0,C_Code_Portfolio3_portfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(_ref, _excluded);
    var additionalClasses = "";
    if (classes) {
        additionalClasses = classes;
    }
    return __jsx("a", (0,C_Code_Portfolio3_portfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        href: href,
        onClick: onClick,
        className: "\n        ".concat(type === "primary" ? !otherProps.disable ? (_Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().primary__button) : (_Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().primary__disabledButton) : !otherProps.disable ? (_Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().secondary__button) : (_Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().secondary__disabledButton), "\n          ").concat(additionalClasses, "\n      ")
    }, otherProps), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ })

};
;