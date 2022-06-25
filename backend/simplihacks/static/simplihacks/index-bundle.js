/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/index.js":
/*!*************************!*\
  !*** ./assets/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _vertex_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .//vertex.glsl */ \"./assets/vertex.glsl\");\n/* harmony import */ var _vertex_glsl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fragment_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .//fragment.glsl */ \"./assets/fragment.glsl\");\n/* harmony import */ var _fragment_glsl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fragment_glsl__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _atmosphereVertex_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .//atmosphereVertex.glsl */ \"./assets/atmosphereVertex.glsl\");\n/* harmony import */ var _atmosphereVertex_glsl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_atmosphereVertex_glsl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _atmosphereFragment_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .//atmosphereFragment.glsl */ \"./assets/atmosphereFragment.glsl\");\n/* harmony import */ var _atmosphereFragment_glsl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_atmosphereFragment_glsl__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\n\r\nconsole.log((_fragment_glsl__WEBPACK_IMPORTED_MODULE_1___default()));\r\n\r\nlet getUrl = window.location;\r\nlet baseUrl = getUrl .protocol + \"//\" + getUrl.host + \"/\" + getUrl.pathname.split('/')[1];\r\n\r\nconsole.log(baseUrl);\r\n\r\nconst scene = new three__WEBPACK_IMPORTED_MODULE_4__.Scene();\r\nconst camera = new three__WEBPACK_IMPORTED_MODULE_4__.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);\r\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\r\n  antialias: true\r\n});\r\n\r\n// window.innerWidth is implied\r\nrenderer.setSize(innerWidth, innerHeight);\r\nrenderer.setPixelRatio(window.devicePixelRatio);\r\n// inject renderer into html\r\ndocument.body.appendChild(renderer.domElement);\r\n\r\n// create globe\r\n// SphereGeometry(radius, width segments, length segments)\r\n// raymond just think how in blender more segments = more verts when u insert mesh like a sphere\r\n// when loading, root is simplihacks app folder\r\n// using '/' instead of './' took an hour to debug :'(\r\nconst sphere = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(\r\n  new three__WEBPACK_IMPORTED_MODULE_4__.SphereGeometry(5, 50, 50),\r\n  new three__WEBPACK_IMPORTED_MODULE_4__.ShaderMaterial({ \r\n    vertexShader: (_vertex_glsl__WEBPACK_IMPORTED_MODULE_0___default()),\r\n    fragmentShader: (_fragment_glsl__WEBPACK_IMPORTED_MODULE_1___default()),\r\n    uniforms: {\r\n      globeTexture: {\r\n        value: new three__WEBPACK_IMPORTED_MODULE_4__.TextureLoader().load(\"/static/simplihacks/globeUV.jpeg\")\r\n      }\r\n    }\r\n  })\r\n );\r\n\r\n // create atmosphere\r\n const atmosphere = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(\r\n  new three__WEBPACK_IMPORTED_MODULE_4__.SphereGeometry(5, 50, 50),\r\n  new three__WEBPACK_IMPORTED_MODULE_4__.ShaderMaterial({ \r\n    vertexShader: (_atmosphereVertex_glsl__WEBPACK_IMPORTED_MODULE_2___default()),\r\n    fragmentShader: (_atmosphereFragment_glsl__WEBPACK_IMPORTED_MODULE_3___default()),\r\n    blending: three__WEBPACK_IMPORTED_MODULE_4__.AdditiveBlending,\r\n    side: three__WEBPACK_IMPORTED_MODULE_4__.BackSide\r\n  })\r\n );\r\n\r\n atmosphere.scale.set(1.1, 1.1, 1.1);\r\n\r\nscene.add(sphere);\r\nscene.add(atmosphere);\r\ncamera.position.z = 15;\r\n\r\nfunction animate() {\r\n  requestAnimationFrame(animate);\r\n  renderer.render(scene, camera);\r\n  sphere.rotation.y += 0.001;\r\n}\r\nanimate();\r\n\n\n//# sourceURL=webpack://backend/./assets/index.js?");

/***/ }),

/***/ "./assets/atmosphereFragment.glsl":
/*!****************************************!*\
  !*** ./assets/atmosphereFragment.glsl ***!
  \****************************************/
/***/ ((module) => {

eval("module.exports = \"varying vec3 vertexNormal;\\nvoid main() {\\n\\tfloat intensity = pow(0.8 - dot(vertexNormal, vec3(0.0, 0.0, 1.0)), 2.0);\\n\\tvec3 atmosphere = vec3(0.1, 0.98, 0.75) * pow(intensity, 1.5);\\n\\tgl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;\\n}\\n\"\n\n//# sourceURL=webpack://backend/./assets/atmosphereFragment.glsl?");

/***/ }),

/***/ "./assets/atmosphereVertex.glsl":
/*!**************************************!*\
  !*** ./assets/atmosphereVertex.glsl ***!
  \**************************************/
/***/ ((module) => {

eval("module.exports = \"varying vec3 vertexNormal;\\nvoid main() {\\n\\tvertexNormal = normalize(normalMatrix * normal);\\n\\tgl_Position = (projectionMatrix * modelViewMatrix) * vec4(position, 1.0);\\n}\\n\"\n\n//# sourceURL=webpack://backend/./assets/atmosphereVertex.glsl?");

/***/ }),

/***/ "./assets/fragment.glsl":
/*!******************************!*\
  !*** ./assets/fragment.glsl ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = \"uniform sampler2D globeTexture;\\nvarying vec2 vertexUV;\\nvarying vec3 vertexNormal;\\nvoid main() {\\n\\tfloat intensity = 1.05 - dot(vertexNormal, vec3(0.0, 0.0, 1.0));\\n\\tvec3 atmosphere = vec3(0.1, 0.98, 0.75) * pow(intensity, 1.5);\\n\\tgl_FragColor = vec4(atmosphere + texture2D(globeTexture, vertexUV).xyz, 1.0);\\n}\\n\"\n\n//# sourceURL=webpack://backend/./assets/fragment.glsl?");

/***/ }),

/***/ "./assets/vertex.glsl":
/*!****************************!*\
  !*** ./assets/vertex.glsl ***!
  \****************************/
/***/ ((module) => {

eval("module.exports = \"varying vec2 vertexUV;\\nvarying vec3 vertexNormal;\\nvoid main() {\\n\\tvertexUV = uv;\\n\\tvertexNormal = normalize(normalMatrix * normal);\\n\\tgl_Position = (projectionMatrix * modelViewMatrix) * vec4(position, 1.0);\\n}\\n\"\n\n//# sourceURL=webpack://backend/./assets/vertex.glsl?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/index.js");
/******/ 	
/******/ })()
;