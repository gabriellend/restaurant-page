/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/img-urls.js":
/*!********************************!*\
  !*** ./src/assets/img-urls.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   unsplashImageUrl: () => (/* binding */ unsplashImageUrl)\n/* harmony export */ });\nconst unsplashImageUrl =\n  \"https://plus.unsplash.com/premium_photo-1671394138398-fe1ce5e5b03b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHN8ZW58MHx8MHx8fDA%3D\";\n\n\n//# sourceURL=webpack://restaurant-page/./src/assets/img-urls.js?");

/***/ }),

/***/ "./src/components/nav.js":
/*!*******************************!*\
  !*** ./src/components/nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearAllExceptNavTabs: () => (/* binding */ clearAllExceptNavTabs),\n/* harmony export */   createNavTabs: () => (/* binding */ createNavTabs)\n/* harmony export */ });\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/contact */ \"./src/pages/contact.js\");\n\n\n\n\nfunction createNavTabs() {\n  const tabs = [\"Home\", \"Menu\", \"Contact\"];\n\n  const nav = document.createElement(\"nav\");\n  const ul = document.createElement(\"ul\");\n\n  for (let tabName of tabs) {\n    const li = document.createElement(\"li\");\n    const a = document.createElement(\"a\");\n    a.textContent = tabName;\n    a.addEventListener(\"click\", () => navigate(tabName));\n    li.appendChild(a);\n    ul.append(li);\n  }\n\n  nav.appendChild(ul);\n\n  return nav;\n}\n\nfunction navigate(destination) {\n  const navOptions = [_pages_home__WEBPACK_IMPORTED_MODULE_0__.loadHome, _pages_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenu, _pages_contact__WEBPACK_IMPORTED_MODULE_2__.loadContact];\n  for (let option of navOptions) {\n    if (option.name === `load${destination}`) {\n      option();\n      break;\n    }\n  }\n}\n\nfunction clearAllExceptNavTabs(parent) {\n  // Collect all elements except navs\n  const elementsToRemove = [];\n  for (let child of parent.children) {\n    if (child.tagName !== \"NAV\") {\n      elementsToRemove.push(child);\n    }\n  }\n\n  // Remove them\n  for (let element of elementsToRemove) {\n    parent.removeChild(element);\n  }\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/nav.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n\n\n(0,_pages_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\n/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/nav */ \"./src/components/nav.js\");\n\n\nfunction loadContact() {\n  const contentDiv = document.querySelector(\"#content\");\n\n  (0,_components_nav__WEBPACK_IMPORTED_MODULE_0__.clearAllExceptNavTabs)(contentDiv);\n\n  // Parent div\n  const contactDiv = document.createElement(\"div\");\n\n  // Header\n  const contactTitle = document.createElement(\"h1\");\n  contactTitle.textContent = \"Contact the Greatest Restaurant\";\n\n  contactDiv.appendChild(contactTitle);\n  contentDiv.appendChild(contactDiv);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/nav */ \"./src/components/nav.js\");\nconst { unsplashImageUrl } = __webpack_require__(/*! ../assets/img-urls */ \"./src/assets/img-urls.js\");\n\n\nfunction loadHome() {\n  const contentDiv = document.querySelector(\"#content\");\n  if (!contentDiv.querySelector(\"nav\")) {\n    // Create nav tabs if they don't already exist\n    const nav = (0,_components_nav__WEBPACK_IMPORTED_MODULE_0__.createNavTabs)();\n    contentDiv.appendChild(nav);\n  } else {\n    (0,_components_nav__WEBPACK_IMPORTED_MODULE_0__.clearAllExceptNavTabs)(contentDiv);\n  }\n\n  // Create image\n  const img = new Image();\n  img.src = unsplashImageUrl;\n\n  // Create header\n  const h1 = document.createElement(\"h1\");\n  h1.textContent = \"The Restaurant\";\n\n  // Create description\n  const p = document.createElement(\"p\");\n  p.textContent = \"This is the absolute best restaurant you will ever eat at.\";\n\n  // Add everything to the body\n  contentDiv.append(img, h1, p);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/nav */ \"./src/components/nav.js\");\n\n\nfunction loadMenu() {\n  const contentDiv = document.querySelector(\"#content\");\n\n  (0,_components_nav__WEBPACK_IMPORTED_MODULE_0__.clearAllExceptNavTabs)(contentDiv);\n\n  // Parent div\n  const menuDiv = document.createElement(\"div\");\n\n  // Header\n  const menuTitle = document.createElement(\"h1\");\n  menuTitle.textContent = \"The Greatest Restaurant Menu\";\n\n  menuDiv.appendChild(menuTitle);\n  contentDiv.appendChild(menuDiv);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menu.js?");

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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;