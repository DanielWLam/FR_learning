/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// // // ori
// // // function validateSsn(ssn) {
// // // 	if (/^\d{3}-\d{2}-\d{4}$/.exec(ssn)) {
// // // 		console.log('Valid ssn');
// // // 	} else {
// // // 		console.log('invalid ssn');
// // // 	}
// // // }

// // // function validatePhone(phone) {
// // // 	if (/^(\d{3})\d{3}-\d{4}$/.exec(phone)) {
// // // 		console.log('valid phone');
// // // 	} else {
// // // 		console.log('invalid phone');
// // // 	}
// // // }

// // function validateValue(value, regx, type) {
// // 	if (regx.exec(value)) {
// // 		console.log('valid ' + type);
// // 	} else {
// // 		console.log('invalid ' + type);
// // 	}
// // }

// // //ori
// // function validateAddress(address) {
// // 	if (parseAddress(address)) {
// // 		console.log(true);
// // 	} else {
// // 		console.log(false);
// // 	}
// // }

// // function validateName(name) {
// // 	return parseName(name);
// // }

// // 本质上就是返回一个闭包
// function validateValueWithFunc(value, parseFunc, type) {
// 	return parseFunc(value);
// }

// // validateValueWithFunc('123-45-6789', /^\d{3}-\d{2}-\d{4}$/.exec, 'SSN');

// function makeRegexParser(regex) {
// 	return regex.exec;
// }
// var parseSsn = makeRegexParser(/^\d{3}-\d{2}-\d{4}$/);
// var parsePhone = makeRegexParser(/^(\d{3})\d{3}-\d{4}$/);
// validateValueWithFunc('123-45-6789', parsePhone, 'phone');

var makeAdder = function makeAdder(constantValue) {
  return function (value) {
    return constantValue + value;
  };
};

var add10 = makeAdder(10);
console.log(add10(20));
console.log(add10(30));

/***/ })

/******/ });