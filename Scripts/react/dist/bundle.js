/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.jsx":
/*!*******************!*\
  !*** ./index.jsx ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: Cannot find module '@babel/core'\\n babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.\\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:582:15)\\n    at Function.Module._load (internal/modules/cjs/loader.js:508:25)\\n    at Module.require (internal/modules/cjs/loader.js:637:17)\\n    at require (C:\\\\projects\\\\ReactApp\\\\ReactApp\\\\Scripts\\\\react\\\\node_modules\\\\v8-compile-cache\\\\v8-compile-cache.js:159:20)\\n    at Object.<anonymous> (C:\\\\projects\\\\ReactApp\\\\ReactApp\\\\Scripts\\\\react\\\\node_modules\\\\babel-loader\\\\lib\\\\index.js:10:11)\\n    at Module._compile (C:\\\\projects\\\\ReactApp\\\\ReactApp\\\\Scripts\\\\react\\\\node_modules\\\\v8-compile-cache\\\\v8-compile-cache.js:178:30)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)\\n    at Module.load (internal/modules/cjs/loader.js:600:32)\\n    at tryModuleLoad (internal/modules/cjs/loader.js:539:12)\\n    at Function.Module._load (internal/modules/cjs/loader.js:531:3)\\n    at Module.require (internal/modules/cjs/loader.js:637:17)\\n    at require (C:\\\\projects\\\\ReactApp\\\\ReactApp\\\\Scripts\\\\react\\\\node_modules\\\\v8-compile-cache\\\\v8-compile-cache.js:159:20)\\n    at loadLoader (C:\\\\projects\\\\ReactApp\\\\ReactApp\\\\Scripts\\\\react\\\\node_modules\\\\loader-runner\\\\lib\\\\loadLoader.js:18:17)\\n    at iteratePitchingLoaders (C:\\\\projects\\\\ReactApp\\\\ReactApp\\\\Scripts\\\\react\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:169:2)\\n    at runLoaders (C:\\\\projects\\\\ReactApp\\\\ReactApp\\\\Scripts\\\\react\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:365:2)\\n    at NormalModule.doBuild (C:\\\\projects\\\\ReactApp\\\\ReactApp\\\\Scripts\\\\react\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:225:3)\\n    at NormalModule.build (C:\\\\projects\\\\ReactApp\\\\ReactApp\\\\Scripts\\\\react\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:343:15)\\n    at Compilation.buildModule (C:\\\\projects\\\\ReactApp\\\\ReactApp\\\\Scripts\\\\react\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:361:10)\\n    at moduleFactory.create (C:\\\\projects\\\\ReactApp\\\\ReactApp\\\\Scripts\\\\react\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:717:12)\\n    at factory (C:\\\\projects\\\\ReactApp\\\\ReactApp\\\\Scripts\\\\react\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:366:6)\\n    at hooks.afterResolve.callAsync (C:\\\\projects\\\\ReactApp\\\\ReactApp\\\\Scripts\\\\react\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:143:13)\\n    at AsyncSeriesWaterfallHook.eval [as callAsync] (eval at create (C:\\\\projects\\\\ReactApp\\\\ReactApp\\\\Scripts\\\\react\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesWaterfallHook.lazyCompileHook (C:\\\\projects\\\\ReactApp\\\\ReactApp\\\\Scripts\\\\react\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at resolver (C:\\\\projects\\\\ReactApp\\\\ReactApp\\\\Scripts\\\\react\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:126:29)\\n    at process.nextTick (C:\\\\projects\\\\ReactApp\\\\ReactApp\\\\Scripts\\\\react\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:304:9)\\n    at process._tickCallback (internal/process/next_tick.js:61:11)\");\n\n//# sourceURL=webpack:///./index.jsx?");

/***/ })

/******/ });