"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./components/Card/Card.js":
/*!*********************************!*\
  !*** ./components/Card/Card.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nvar _jsxFileName = \"C:\\\\Code\\\\Portfolio3\\\\portfolio\\\\components\\\\Card\\\\Card.js\", _this = undefined;\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\nvar Card = function Card(_ref) {\n    _s();\n    var data = _ref.data;\n    var name = data.name, image = data.image, done = data.done, category = data.category;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var formattedName = name.toLowerCase().replace(/\\s+/g, '');\n    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.a, {\n        className: \"w-[22rem] h-[20rem] rounded-3xl\",\n        layout: true,\n        whileHover: {\n            scale: 1.1\n        },\n        onClick: function onClick() {\n            router.push(\"/projects/\".concat(formattedName));\n        },\n        __self: _this,\n        __source: {\n            fileName: _jsxFileName,\n            lineNumber: 12,\n            columnNumber: 5\n        }\n    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        className: \"w-full h-full rounded-3xl relative\",\n        style: {\n            cursor: \"pointer\"\n        },\n        __self: _this,\n        __source: {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 7\n        }\n    }, __jsx(\"img\", {\n        src: image,\n        className: \"w-full object-cover overflow-hidden rounded-3xl\",\n        style: {\n            height: \"100%\"\n        },\n        __self: _this,\n        __source: {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 9\n        }\n    }), !done && __jsx(\"img\", {\n        src: \"projects/inprogress.png\",\n        className: \"w-full object-cover overflow-hidden absolute top-20\",\n        __self: _this,\n        __source: {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 19\n        }\n    }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        className: \"absolute top-0 left-0 w-full h-40 rounded-3xl\",\n        style: {\n            background: \"linear-gradient(180deg, rgba(0,0,0,40) 0%, rgba(0,0,0,0) 100%)\"\n        },\n        __self: _this,\n        __source: {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 9\n        }\n    }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        className: \"top-2 left-0 absolute\",\n        __self: _this,\n        __source: {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 9\n        }\n    }, category.sort(function(a, b) {\n        return a.localeCompare(b);\n    }).map(function(cat, index) {\n        return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n            key: index,\n            className: \"text-md pl-2\",\n            __self: _this,\n            __source: {\n                fileName: _jsxFileName,\n                lineNumber: 33,\n                columnNumber: 15\n            }\n        }, cat);\n    }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h2, {\n        layout: true,\n        className: \"font-medium text-3xl sm:text-4xl z-10 pl-2 overflow-hidden\",\n        style: {\n            transform: \"translateZ(3rem)\"\n        },\n        __self: _this,\n        __source: {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 11\n        }\n    }, name))));\n};\n_s(Card, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO2dCQUFBMEIsVUFBQTtnQkFBQUMsWUFBQTtZQUFBLENBQzlDO1FBRUgsR0FDSlcsR0FBQTtJQUFVLElBQ1JwQyxLQUFNLENBQUFOLG9EQUFBO1FBQ05xQixNQUFBLE1BQVU7UUFDVkQsU0FBTztRQUFBYSxLQUFFO1lBQWdDYyxTQUFBO1FBQUE7UUFBQXBCLE1BQUEsRUFBQXRCLEtBQUE7UUFBQXVCLFFBQUE7WUFBQUMsUUFBQSxFQUFBekIsWUFBQTtZQUFBMEIsVUFBQTtZQUFBQyxZQUFBO1FBQUEsQ0FFeEM7SUFNWixHQUFBcEIsSUFBQTtBQUVEO0dBN0MyQkgsSUFBWDs7UUFJUkwsa0RBQWdCOzs7S0FKR0ssSUFBWDtBQTZDRywrREFBQUEsSUFBQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FyZC9DYXJkLmpzPzU3NjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBDYXJkID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgeyBuYW1lLCBpbWFnZSwgZG9uZSwgY2F0ZWdvcnkgfSA9IGRhdGE7ICBcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgZm9ybWF0dGVkTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICcnKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uYVxyXG4gICAgICBjbGFzc05hbWU9XCJ3LVsyMnJlbV0gaC1bMjByZW1dIHJvdW5kZWQtM3hsXCJcclxuICAgICAgbGF5b3V0XHJcbiAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMSB9fVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9wcm9qZWN0cy8ke2Zvcm1hdHRlZE5hbWV9YCk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgcm91bmRlZC0zeGwgcmVsYXRpdmVcIiBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19PlxyXG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gY2xhc3NOYW1lPVwidy1mdWxsIG9iamVjdC1jb3ZlciBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0zeGxcIiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiIH19IC8+XHJcbiAgICAgICAgeyFkb25lICYmIDxpbWcgc3JjPVwicHJvamVjdHMvaW5wcm9ncmVzcy5wbmdcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgb2JqZWN0LWNvdmVyIG92ZXJmbG93LWhpZGRlbiBhYnNvbHV0ZSB0b3AtMjBcIiAvPn1cclxuICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLTQwIHJvdW5kZWQtM3hsXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsMCwwLDQwKSAwJSwgcmdiYSgwLDAsMCwwKSAxMDAlKWAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID48L21vdGlvbi5kaXY+XHJcbiAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwidG9wLTIgbGVmdC0wIGFic29sdXRlXCI+XHJcbiAgICAgICAgICB7Y2F0ZWdvcnlcclxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSlcclxuICAgICAgICAgICAgLm1hcCgoY2F0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxtb3Rpb24uc3BhbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJ0ZXh0LW1kIHBsLTJcIj5cclxuICAgICAgICAgICAgICAgIHtjYXR9XHJcbiAgICAgICAgICAgICAgPC9tb3Rpb24uc3Bhbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8bW90aW9uLmgyXHJcbiAgICAgICAgICAgIGxheW91dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LTN4bCBzbTp0ZXh0LTR4bCB6LTEwIHBsLTIgb3ZlcmZsb3ctaGlkZGVuXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVooM3JlbSlcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgIDwvbW90aW9uLmgyPlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgPC9tb3Rpb24uYT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJfanN4RmlsZU5hbWUiLCJfdGhpcyIsIl9fanN4IiwiY3JlYXRlRWxlbWVudCIsIkNhcmQiLCJfcmVmIiwiZGF0YSIsIm5hbWUiLCJpbWFnZSIsImRvbmUiLCJjYXRlZ29yeSIsInJvdXRlciIsImZvcm1hdHRlZE5hbWUiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJhIiwiY2xhc3NOYW1lIiwibGF5b3V0Iiwid2hpbGVIb3ZlciIsInNjYWxlIiwib25DbGljayIsInB1c2giLCJjb25jYXQiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImRpdiIsInN0eWxlIiwiY3Vyc29yIiwic3JjIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsInNvcnQiLCJiIiwibG9jYWxlQ29tcGFyZSIsIm1hcCIsImNhdCIsImluZGV4Iiwic3BhbiIsImtleSIsImgyIiwidHJhbnNmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Card/Card.js\n");

/***/ }),

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var C_Code_Portfolio3_portfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var C_Code_Portfolio3_portfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ \"./constants.js\");\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Button/Button */ \"./components/Button/Button.js\");\n/* harmony import */ var _components_Card_Card_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Card/Card.js */ \"./components/Card/Card.js\");\n/* harmony import */ var _components_Seo_Meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Seo/Meta */ \"./components/Seo/Meta.js\");\n/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Loader/Loader */ \"./components/Loader/Loader.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_Header_projectsnav_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Header/projectsnav.js */ \"./components/Header/projectsnav.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar _jsxFileName = \"C:\\\\Code\\\\Portfolio3\\\\portfolio\\\\pages\\\\projects.js\", _templateObject;\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement);\nvar allCategories = [\n    'All'\n].concat((0,C_Code_Portfolio3_portfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(new Set(_constants_js__WEBPACK_IMPORTED_MODULE_3__.PROJECTS.flatMap(function(project) {\n    return project.category;\n}))));\nfunction Projects(_ref) {\n    _s();\n    var _this = this;\n    var isDesktop = _ref.isDesktop;\n    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = _useState[0], setIsLoading = _useState[1];\n    var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), anyCardOpen = _useState2[0], setAnyCardOpen = _useState2[1];\n    var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.PROJECTS), menuItem = _useState3[0], setMenuItem = _useState3[1];\n    var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(allCategories), buttons = _useState4[0], setButtons = _useState4[1];\n    var cardRefs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        // Preload images\n        var imagePromises = _constants_js__WEBPACK_IMPORTED_MODULE_3__.PROJECTS.map(function(project) {\n            var image = new Image();\n            image.src = project.image;\n            return new Promise(function(resolve) {\n                image.onload = resolve;\n            });\n        });\n        // Wait for all images to load\n        Promise.all(imagePromises).then(function() {\n            // Images are loaded, set isLoading to false\n            setIsLoading(false);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        gsap__WEBPACK_IMPORTED_MODULE_9__.gsap.to(cardRefs.current, {\n            autoAlpha: 1,\n            stagger: 0.1,\n            ease: 'none',\n            delay: 2\n        });\n    }, [\n        menuItem\n    ]);\n    var filter = function filter(button) {\n        if (button === 'All') {\n            setMenuItem(_constants_js__WEBPACK_IMPORTED_MODULE_3__.PROJECTS);\n            return;\n        }\n        var filteredData = _constants_js__WEBPACK_IMPORTED_MODULE_3__.PROJECTS.filter(function(project) {\n            return project.category.includes(button);\n        });\n        setMenuItem(filteredData);\n    };\n    var cardData = menuItem.map(function(project, id) {\n        return __jsx(_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            data: project,\n            key: \"card-\".concat(id),\n            ref: function ref(el) {\n                return cardRefs.current[id] = el;\n            },\n            style: {\n                opacity: 0\n            },\n            __self: _this,\n            __source: {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 7\n            }\n        });\n    });\n    return __jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, isLoading ? __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        __self: this,\n        __source: {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 9\n        }\n    }) : __jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, __jsx(_components_Header_projectsnav_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        allCategories: allCategories,\n        filter: filter,\n        __self: this,\n        __source: {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 11\n        }\n    }), __jsx(\"div\", {\n        className: \"\".concat(isDesktop && \"min-h-screen\", \"w-full relative select-none section-container transform-gpu justify-center\"),\n        __self: this,\n        __source: {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 11\n        }\n    }, __jsx(\"div\", {\n        className: \"flex justify-center pt-2\",\n        __self: this,\n        __source: {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 13\n        }\n    }, allCategories.map(function(category, index) {\n        return __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            classes: \"btn-dark text-white p-1 px-2 mx-5 btn fw-bold\",\n            type: \"primary\",\n            onClick: function onClick() {\n                return filter(category);\n            },\n            __self: _this,\n            __source: {\n                fileName: _jsxFileName,\n                lineNumber: 82,\n                columnNumber: 17\n            }\n        }, category);\n    })), __jsx(MainContainer, {\n        initial: {\n            opacity: 0\n        },\n        animate: {\n            opacity: 1\n        },\n        transition: {\n            delay: 1\n        },\n        __self: this,\n        __source: {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n        }\n    }, cardData))));\n};\n_s(Projects, \"CfRhqEW6v7dPhWWLPIhdBKxLDzw=\");\n_c = Projects;\nvar MainContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.main)(_templateObject || (_templateObject = (0,C_Code_Portfolio3_portfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n    \"\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  grid-gap: 3rem;\\n  margin: 2rem 0;\\n\\n  @media screen and (max-width: 1024px) {\\n    grid-template-columns: 1fr 1fr;\\n  }\\n\\n  @media screen and (max-width: 758px) {\\n    grid-template-columns: 1fr;\\n    margin: 0;\\n  }\\n\"\n])));\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQyxPQUFBLEVBQU0sUUFBTyxDQUFBQSxPQUFTO2dCQUFDLE9BQUF0QixNQUFBLENBQUFsQyxRQUFBO1lBQUE7WUFBQThDLE1BQUEsRUFBQTNDLEtBQUE7WUFBQTRDLFFBQUE7Z0JBQUFDLFFBQUEsRUFBQXpELFlBQUE7Z0JBQUEwRCxVQUFBO2dCQUFBQyxZQUFBO1lBQUEsQ0FDekc7UUFFRCxDQUFDLEVBQ05sRCxRQUFDO0lBQWEsS0FDWlAsS0FBTyxDQUFFZ0UsYUFBQTtRQUFBQyxPQUFFLEVBQU87WUFBTWIsT0FBQTtRQUN4QjtRQUFTYyxPQUFFLEVBQU87WUFBTWQsT0FBQTtRQUN4QjtRQUFZZSxVQUNIO1lBQ1AzQixLQUFBO1FBQUE7UUFBQWEsTUFBQTtRQUFBQyxRQUFBO1lBQUFDLFFBQUEsRUFBQXpELFlBQUE7WUFBQTBELFVBQUE7WUFBQUMsWUFBQTtRQUFBLENBRUQ7SUFRZixHQUFBWixRQUFBO0FBRUE7R0ExRitDckMsUUFBQTtLQUFBQSxRQUFBO0FBd0c5QyxJQUFBd0QsYUFBQSxHQUFBdEUsOERBQUEsQ0FBQUMsdURBQUEsRUFBQUksZUFBQSxLQUFBQSxlQUFBLEdBQUFoQixzSkFBQTtJQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMuanM/MjVjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBST0pFQ1RTIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uJztcclxuaW1wb3J0IENhcmQgZnJvbSAnQC9jb21wb25lbnRzL0NhcmQvQ2FyZC5qcyc7XHJcbmltcG9ydCBNZXRhIGZyb20gXCJAL2NvbXBvbmVudHMvU2VvL01ldGFcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL0xvYWRlci9Mb2FkZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwiQC9jb21wb25lbnRzL0hlYWRlci9wcm9qZWN0c25hdi5qc1wiXHJcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xyXG5cclxuY29uc3QgYWxsQ2F0ZWdvcmllcyA9IFsnQWxsJywgLi4ubmV3IFNldChQUk9KRUNUUy5mbGF0TWFwKHByb2plY3QgPT4gcHJvamVjdC5jYXRlZ29yeSkpXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKHsgaXNEZXNrdG9wfSkge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbYW55Q2FyZE9wZW4sIHNldEFueUNhcmRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW21lbnVJdGVtLCBzZXRNZW51SXRlbV0gPSB1c2VTdGF0ZShQUk9KRUNUUyk7XHJcbiAgY29uc3QgW2J1dHRvbnMsIHNldEJ1dHRvbnNdID0gdXNlU3RhdGUoYWxsQ2F0ZWdvcmllcyk7XHJcblxyXG4gIGNvbnN0IGNhcmRSZWZzID0gdXNlUmVmKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIFByZWxvYWQgaW1hZ2VzXHJcbiAgICBjb25zdCBpbWFnZVByb21pc2VzID0gUFJPSkVDVFMubWFwKHByb2plY3QgPT4ge1xyXG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBpbWFnZS5zcmMgPSBwcm9qZWN0LmltYWdlO1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gcmVzb2x2ZTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBXYWl0IGZvciBhbGwgaW1hZ2VzIHRvIGxvYWRcclxuICAgIFByb21pc2UuYWxsKGltYWdlUHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAvLyBJbWFnZXMgYXJlIGxvYWRlZCwgc2V0IGlzTG9hZGluZyB0byBmYWxzZVxyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ3NhcC50byhjYXJkUmVmcy5jdXJyZW50LCB7XHJcbiAgICAgIGF1dG9BbHBoYTogMSxcclxuICAgICAgc3RhZ2dlcjogMC4xLFxyXG4gICAgICBlYXNlOiAnbm9uZScsXHJcbiAgICAgIGRlbGF5OiAyLFxyXG4gICAgfSk7XHJcbiAgfSwgW21lbnVJdGVtXSk7XHJcblxyXG4gIGNvbnN0IGZpbHRlciA9IChidXR0b24pID0+IHtcclxuICAgIGlmIChidXR0b24gPT09ICdBbGwnKSB7XHJcbiAgICAgIHNldE1lbnVJdGVtKFBST0pFQ1RTKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IFBST0pFQ1RTLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuY2F0ZWdvcnkuaW5jbHVkZXMoYnV0dG9uKSk7XHJcbiAgICBzZXRNZW51SXRlbShmaWx0ZXJlZERhdGEpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2FyZERhdGEgPSBtZW51SXRlbS5tYXAoKHByb2plY3QsIGlkKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIGRhdGE9e3Byb2plY3R9XHJcbiAgICAgICAga2V5PXtgY2FyZC0ke2lkfWB9XHJcbiAgICAgICAgcmVmPXtlbCA9PiBjYXJkUmVmcy5jdXJyZW50W2lkXSA9IGVsfVxyXG4gICAgICAgIHN0eWxlPXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgLz5cclxuICAgIClcclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICA8TG9hZGVyIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxOYXYgYWxsQ2F0ZWdvcmllcz17YWxsQ2F0ZWdvcmllc30gZmlsdGVyPXtmaWx0ZXJ9Lz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgaXNEZXNrdG9wICYmIFwibWluLWgtc2NyZWVuXCJcclxuICAgICAgICAgIH13LWZ1bGwgcmVsYXRpdmUgc2VsZWN0LW5vbmUgc2VjdGlvbi1jb250YWluZXIgdHJhbnNmb3JtLWdwdSBqdXN0aWZ5LWNlbnRlcmB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBwdC0yJyA+XHJcbiAgICAgICAgICAgICAge2FsbENhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17XCJidG4tZGFyayB0ZXh0LXdoaXRlIHAtMSBweC0yIG14LTUgYnRuIGZ3LWJvbGRcIn0gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBmaWx0ZXIoY2F0ZWdvcnkpfVxyXG4gICAgICAgICAgICAgICAgPntjYXRlZ29yeX08L0J1dHRvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxNYWluQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDEsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtjYXJkRGF0YX1cclxuICAgICAgICAgICAgPC9NYWluQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgTWFpbkNvbnRhaW5lciA9IHN0eWxlZChtb3Rpb24ubWFpbilgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gIGdyaWQtZ2FwOiAzcmVtO1xyXG4gIG1hcmdpbjogMnJlbSAwO1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1OHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIlBST0pFQ1RTIiwiQnV0dG9uIiwiQ2FyZCIsIk1ldGEiLCJMb2FkZXIiLCJzdHlsZWQiLCJtb3Rpb24iLCJOYXYiLCJnc2FwIiwiX2pzeEZpbGVOYW1lIiwiX3RlbXBsYXRlT2JqZWN0IiwiX19qc3giLCJjcmVhdGVFbGVtZW50IiwiYWxsQ2F0ZWdvcmllcyIsImNvbmNhdCIsIlNldCIsImZsYXRNYXAiLCJwcm9qZWN0IiwiY2F0ZWdvcnkiLCJQcm9qZWN0cyIsIl9yZWYiLCJfdGhpcyIsImlzRGVza3RvcCIsIl91c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIl91c2VTdGF0ZTIiLCJhbnlDYXJkT3BlbiIsInNldEFueUNhcmRPcGVuIiwiX3VzZVN0YXRlMyIsIm1lbnVJdGVtIiwic2V0TWVudUl0ZW0iLCJfdXNlU3RhdGU0IiwiYnV0dG9ucyIsInNldEJ1dHRvbnMiLCJjYXJkUmVmcyIsImltYWdlUHJvbWlzZXMiLCJtYXAiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvbmxvYWQiLCJhbGwiLCJ0aGVuIiwidG8iLCJjdXJyZW50IiwiYXV0b0FscGhhIiwic3RhZ2dlciIsImVhc2UiLCJkZWxheSIsImZpbHRlciIsImJ1dHRvbiIsImZpbHRlcmVkRGF0YSIsImluY2x1ZGVzIiwiY2FyZERhdGEiLCJpZCIsImRhdGEiLCJrZXkiLCJyZWYiLCJlbCIsInN0eWxlIiwib3BhY2l0eSIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJpbmRleCIsImNsYXNzZXMiLCJ0eXBlIiwib25DbGljayIsIk1haW5Db250YWluZXIiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects.js\n");

/***/ })

});