webpackHotUpdate("static/development/pages/about.js",{

/***/ "./styles/about.js":
/*!*************************!*\
  !*** ./styles/about.js ***!
  \*************************/
/*! exports provided: Header, Body, Blurb, BlurbText, Portrait, Current, Skills, Wrapper, SkillSection, SkillTitle, SkillDescription, SkillList, SkillListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blurb", function() { return Blurb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlurbText", function() { return BlurbText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portrait", function() { return Portrait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Current", function() { return Current; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skills", function() { return Skills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillSection", function() { return SkillSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillTitle", function() { return SkillTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillDescription", function() { return SkillDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillList", function() { return SkillList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillListItem", function() { return SkillListItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Header = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "about__Header",
  componentId: "sc-1qyys2m-0"
})(["position:sticky;top:100px;height:200px;z-index:5;display:flex;justify-content:center;align-items:center;flex-direction:column;margin:0 auto;h1,p{position:relative;z-index:-1;}h1{color:white;text-align:center;text-transform:uppercase;display:block;font-size:40px;font-weight:300;max-width:768px;letter-spacing:3px;}p{margin-top:16px;color:rgba(255,255,255,0.75);letter-spacing:2px;font-weight:300;font-size:18px;-webkit-font-smoothing:antialiased;text-align:center;}"]);
var section = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "about__section",
  componentId: "sc-1qyys2m-1"
})([""]);
var Body = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "about__Body",
  componentId: "sc-1qyys2m-2"
})(["background-color:white;border-radius:8px;padding:36px;position:relative;z-index:20;margin:48px 0;"]);
var Blurb = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Body).withConfig({
  displayName: "about__Blurb",
  componentId: "sc-1qyys2m-3"
})(["display:grid;grid-template-areas:'blurb portrait';grid-template-columns:1fr 1fr;grid-column-gap:16px;"]);
var BlurbText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "about__BlurbText",
  componentId: "sc-1qyys2m-4"
})(["grid-area:blurb;h2{font-size:47px;color:#333333;font-weight:700;margin:10px 0;}p{font-size:29px;font-weight:500;line-height:34px;margin:10px 0 0 0;color:#333333;}"]);
var Portrait = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "about__Portrait",
  componentId: "sc-1qyys2m-5"
})(["grid-area:portrait;width:100%;padding-top:100%;background:url('/static/profile.png');background-size:cover;background-repeat:no-repeat;background-position:center;"]);
var Current = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Body).withConfig({
  displayName: "about__Current",
  componentId: "sc-1qyys2m-6"
})(["p{&:nth-of-type(even){margin:16px 0;}display:inline-block;letter-spacing:0.75px;color:#333333;font-size:18px;font-weight:300;line-height:21px;text-align:justify;}.bold{color:black;font-weight:700;font-size:17px;}"]);
var Skills = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Body).withConfig({
  displayName: "about__Skills",
  componentId: "sc-1qyys2m-7"
})(["h2{margin:40px 0 10px 0;font-size:40px;font-weight:400;}"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "about__Wrapper",
  componentId: "sc-1qyys2m-8"
})(["display:grid;grid-template-columns:1fr 1fr;grid-column-gap:16px;"]);
var SkillSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "about__SkillSection",
  componentId: "sc-1qyys2m-9"
})(["&:nth-of-type(2n+1){margin-top:16px;}"]);
var SkillTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "about__SkillTitle",
  componentId: "sc-1qyys2m-10"
})(["font-size:18px;font-weight:700;"]);
var SkillDescription = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "about__SkillDescription",
  componentId: "sc-1qyys2m-11"
})(["color:#333333;font-size:16px;margin:16px 0;font-weight:300;line-height:24px;"]);
var SkillList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "about__SkillList",
  componentId: "sc-1qyys2m-12"
})(["display:grid;grid-template-columns:1fr 1fr;grid-column-gap:8px;grid-row-gap:4px;"]);
var SkillListItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "about__SkillListItem",
  componentId: "sc-1qyys2m-13"
})(["display:block;margin-bottom:5px;"]);

/***/ })

})
//# sourceMappingURL=about.js.469f2eff04d042f7fe8f.hot-update.js.map