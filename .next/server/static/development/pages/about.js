module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/about */ "./styles/about.js");


/* harmony default export */ __webpack_exports__["default"] = (() => {
  const yearsExperience = new Date().getFullYear() - 2015;
  const text = {
    header: {
      line1: 'Passion. Cutting Edge Technologies. Interaction. Creativity. Performant Code. Modern Architecture.',
      line2: 'You deserve it all.'
    },
    blurb: {
      line1: 'Hello,',
      line2: `I am a driven full-stack developer with ${yearsExperience} years of professional experience currently working as a Software Engineer @ Footlocker. Ages ago, I graduated from Cornell University with a degree in Information Science and another in Fine Arts.`
    }
  };
  const skills = {
    section: [{
      title: 'Development',
      subsections: [{
        description: 'Each project is a unique flower and deserves the correct care. I am most familiar with the following technologies. However, I am always open to new technologies if I can see benefits for your project.',
        list: ['Javascript', 'Webpack', 'React', 'Nodejs', 'Wordpress', 'DigitalOcean', 'Java', 'PHP', 'Jquery', 'CSS3', 'HTML5', 'MySQL', 'PostgreSQL', 'Handlebarsjs', 'Gulp', 'LESS/SASS', 'Angularjs', 'Bootstrap', 'AWS', 'Python']
      }, {
        description: 'Techniques & patterns I\'m following during the development of each project.',
        list: ['Agile', 'Object Oriented Programming', 'Performance Optimization Techniques', 'MVC architecture', 'CSS Regression Testing', 'Flux Application Architecture', 'Responsive Web Design']
      }]
    }, {
      title: 'Design',
      subsections: [{
        description: 'I have been in love with the arts since I was in the 4th grade and am always looking for new trends. It\'s more likely than not that I have one of the following applications open at any given time on my computer.',
        list: ['Adobe Photoshop CS6', 'Adobe Illustrator CS6', 'Adobe Premiere CS6']
      }]
    }, {
      title: 'Resume',
      subsections: [{
        description: 'I have been in love with the arts since I was in the 4th grade and am always looking for new trends. It\'s more likely than not that I have one of the following applications open at any given time on my computer.',
        promo: 'If you were at all impressed with my background, please feel free to take a peek at my <a target="_blank" href="/static/resume.pdf">resume</a>.'
      }]
    }]
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["Header"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, text.header.line1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, text.header.line2)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["Blurb"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["BlurbText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, text.blurb.line1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, text.blurb.line2)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["Portrait"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["Current"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Currently I am specializing in developing interactive,", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
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
  }, "I would enjoy working together."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["Skills"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Skills"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], null, skills.section.map((section, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["SkillSection"], {
    key: index
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["SkillTitle"], null, section.title), section.subsections.map((subsection, subindex) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: `subsection-${subindex}`
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["SkillDescription"], null, subsection.description), !!subsection.list && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["SkillList"], null, subsection.list.map((item, itemIndex) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["SkillListItem"], {
    key: `${section.title}-item-${itemIndex}`
  }, item))), !!subsection.promo && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["SkillDescription"], {
    dangerouslySetInnerHTML: {
      __html: subsection.promo
    }
  }))))))));
});

/***/ }),

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "about__Header",
  componentId: "sc-1qyys2m-0"
})(["position:sticky;top:100px;height:200px;z-index:5;display:flex;justify-content:center;align-items:center;flex-direction:column;margin:0 auto;h1,p{position:relative;z-index:-1;}h1{color:white;text-align:center;text-transform:uppercase;display:block;font-size:40px;font-weight:300;max-width:768px;letter-spacing:3px;}p{margin-top:16px;color:rgba(255,255,255,0.75);letter-spacing:2px;font-weight:300;font-size:18px;-webkit-font-smoothing:antialiased;text-align:center;}"]);
const section = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "about__section",
  componentId: "sc-1qyys2m-1"
})([""]);
const Body = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "about__Body",
  componentId: "sc-1qyys2m-2"
})(["background-color:white;border-radius:8px;padding:36px;position:relative;z-index:20;margin:48px 0;"]);
const Blurb = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Body).withConfig({
  displayName: "about__Blurb",
  componentId: "sc-1qyys2m-3"
})(["display:grid;grid-template-areas:'blurb portrait';grid-template-columns:1fr 1fr;grid-column-gap:16px;"]);
const BlurbText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "about__BlurbText",
  componentId: "sc-1qyys2m-4"
})(["grid-area:blurb;h2{font-size:47px;color:#333333;font-weight:700;margin:10px 0;}p{font-size:29px;font-weight:500;line-height:34px;margin:10px 0 0 0;color:#333333;}"]);
const Portrait = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "about__Portrait",
  componentId: "sc-1qyys2m-5"
})(["grid-area:portrait;width:100%;padding-top:100%;background:url('/static/profile.png');background-size:cover;background-repeat:no-repeat;background-position:center;"]);
const Current = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Body).withConfig({
  displayName: "about__Current",
  componentId: "sc-1qyys2m-6"
})(["p{&:nth-of-type(even){margin:16px 0;}display:inline-block;letter-spacing:0.75px;color:#333333;font-size:18px;font-weight:300;line-height:21px;text-align:justify;}.bold{color:black;font-weight:700;font-size:17px;}"]);
const Skills = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Body).withConfig({
  displayName: "about__Skills",
  componentId: "sc-1qyys2m-7"
})(["h2{margin:40px 0 10px 0;font-size:40px;font-weight:400;}"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "about__Wrapper",
  componentId: "sc-1qyys2m-8"
})(["display:grid;grid-template-columns:1fr 1fr;grid-column-gap:16px;"]);
const SkillSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "about__SkillSection",
  componentId: "sc-1qyys2m-9"
})(["&:nth-of-type(2n+1){margin-top:16px;}"]);
const SkillTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "about__SkillTitle",
  componentId: "sc-1qyys2m-10"
})(["font-size:18px;font-weight:700;"]);
const SkillDescription = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "about__SkillDescription",
  componentId: "sc-1qyys2m-11"
})(["color:#333333;font-size:16px;margin:16px 0;font-weight:300;line-height:24px;"]);
const SkillList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "about__SkillList",
  componentId: "sc-1qyys2m-12"
})(["display:grid;grid-template-columns:1fr 1fr;grid-column-gap:8px;grid-row-gap:4px;"]);
const SkillListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "about__SkillListItem",
  componentId: "sc-1qyys2m-13"
})(["display:block;margin-bottom:5px;"]);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tylerwilliams/Documents/tylerscottwilliams/pages/about.js */"./pages/about.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map