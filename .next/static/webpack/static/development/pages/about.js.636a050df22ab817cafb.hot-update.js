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
  var text = {
    header: {
      line1: 'Passion. Cutting Edge Technologies. Interaction. Creativity. Performant Code. Modern Architecture.',
      line2: 'You deserve it all.'
    },
    blurb: {
      line1: 'Hello,',
      line2: "I am a driven full-stack developer with ".concat(yearsExperience, " years of professional experience currently working as a Software Engineer @ Footlocker. Ages ago, I graduated from Cornell University with a degree in Information Science and another in Fine Arts.")
    }
  };
  var skills = {
    section: [{
      title: 'Development',
      subsections: [{
        description: 'Each project is a unique flower and deserves the correct care. I am most familiar with the following technologies. However, I am always open to new technologies if I can see benefits for your project.',
        list: ['Javascript', 'Webpack', 'React', 'Nodejs', 'Wordpress', 'DigitalOcean', 'Java', 'PHP', 'Jquery', 'CSS3', 'HTML5', 'MySQL', 'PostgreSQL', 'Handlebarsjs', 'Gulp', 'LESS/SASS', 'Angularjs', 'Bootstrap', 'AWS', 'Python']
      }, {
        description: 'Techniques & patterns I\'m following during the development of each project.',
        list: ['Object Oriented Programming', 'Performance Optimization Techniques', 'MVC architecture', 'CSS Regression Testing', 'Flux Application Architecture', 'Responsive Web Design']
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
        promo: 'If you were at all impressed with my background, please feel free to take a peek at my <a target="_blank" href="/resume">resume</a>.'
      }]
    }]
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["Header"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, text.header.line1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, text.header.line2)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["Body"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["Blurb"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, text.blurb.line1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, text.blurb.line2)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["Portrait"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["Current"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Currently I am specializing in developing interactive,", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
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
  }, "I would enjoy working together."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["Skills"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Skills"), skills.section.map(function (section, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["SkillTitle"], null, section.title), section.subsections.map(function (subsection, subindex) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        key: "subsection-".concat(subindex)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["SkillDescription"], null, subsection.description), !!subsection.list && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["SkillList"], null, subsection.list.map(function (item, itemIndex) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["SkillListItem"], {
          id: "".concat(section.title, "-item-").concat(itemIndex)
        }, item);
      })), !!subsection.promo && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_about__WEBPACK_IMPORTED_MODULE_1__["SkillDescription"], null, subsection.promo));
    }));
  }))));
});

/***/ })

})
//# sourceMappingURL=about.js.636a050df22ab817cafb.hot-update.js.map