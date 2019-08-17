webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/about */ "./styles/about.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var yearsExperience = new Date().getFullYear() - 2015;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["Header"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Passion. Cutting Edge Technologies. Interaction. Creativity. Performant Code. Modern Architecture."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You deserve it all.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["Body"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["Blurb"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Hello,"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "I am a driven full-stack developer with ", yearsExperience, " years of professional experience currently working as a Software Engineer @ Footlocker. Ages ago, I graduated from Cornell University with a degree in Information Science and another in Fine Arts.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["Portrait"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["Current"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Currently I am specializing in developing interactive,", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "bold"
  }, "easy-to-maintain, responsive e-commerce websites"), ' ', "that can scale on demand and are accessible across all devices. Along with writing and reviewing code for efficiency, I also", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "bold"
  }, "debug on the fly"), ', ', "collaborate across several teams at Macy's and continue to build side projects to help increase team workflow."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Prior to my current job at Macy's, I worked at a small digital agency called", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "bold"
  }, "Dressler"), ' ', "where I was fortunate enough to learn a lot about web development and got to work for clients like", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "bold"
  }, "The 911 Museum & Memorial"), ', ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "bold"
  }, "The Children's Museum of Manhattan"), ' and ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "bold"
  }, "Wiley Efficient Learning"), ' ', "just to name a few."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Besides my full-time job, I am always programming smaller projects or freelancing. I know I should relax some more, I just have a love of learning. If you are looking for unique website or web app design, ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "bold"
  }, "I would enjoy working together."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["Skills"], null)));
});

/***/ }),

/***/ "./styles/about.js":
/*!*************************!*\
  !*** ./styles/about.js ***!
  \*************************/
/*! exports provided: Header, Body, Blurb, Portrait, Current, Skills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blurb", function() { return Blurb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portrait", function() { return Portrait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Current", function() { return Current; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skills", function() { return Skills; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Header = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "about__Header",
  componentId: "sc-1qyys2m-0"
})(["position:sticky;top:100px;height:200px;z-index:5;display:flex;justify-content:center;align-items:center;flex-direction:column;margin:0 auto;h1,p{position:relative;z-index:-1;}h1{color:white;text-align:center;text-transform:uppercase;display:block;font-size:40px;font-weight:300;max-width:768px;letter-spacing:3px;}p{margin-top:16px;color:rgba(255,255,255,0.75);letter-spacing:2px;font-weight:300;font-size:18px;-webkit-font-smoothing:antialiased;text-align:center;}"]);
var Body = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "about__Body",
  componentId: "sc-1qyys2m-1"
})(["background-color:white;border-radius:8px;padding:36px;position:relative;z-index:20;margin:48px 0;display:grid;grid-template-areas:'blurb portrait' 'current current';grid-template-columns:1fr 1fr;grid-column-gap:16px;grid-row-gap:16px;"]);
var Blurb = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "about__Blurb",
  componentId: "sc-1qyys2m-2"
})(["h2{font-size:47px;color:#333333;font-weight:700;margin:10px 0;}p{font-size:29px;font-weight:500;line-height:34px;margin:10px 0 0 0;color:#333333;}"]);
var Portrait = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "about__Portrait",
  componentId: "sc-1qyys2m-3"
})(["grid-area:portrait;width:100%;padding-top:50%;background:url('/static/profile.png');background-size:cover;background-repeat:no-repeat;background-position:center;"]);
var Current = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "about__Current",
  componentId: "sc-1qyys2m-4"
})(["grid-area:current;p{&:nth-of-type(even){margin:16px 0;}display:inline-block;letter-spacing:0.75px;color:#333333;font-size:18px;font-weight:300;line-height:21px;text-align:justify;}.bold{color:black;font-weight:700;font-size:17px;}"]);
var Skills = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "about__Skills",
  componentId: "sc-1qyys2m-5"
})([""]);

/***/ })

})
//# sourceMappingURL=about.js.de5276555d7afb0495ca.hot-update.js.map