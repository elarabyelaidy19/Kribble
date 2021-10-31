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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/shots.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/shots.js":
/*!***************************************!*\
  !*** ./app/javascript/packs/shots.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("turbolinks:load", function () {
  var Shots = {
    previewShot: function previewShot() {
      if (window.File && window.FileList && window.FileReader) {
        var handleFileSelect = function handleFileSelect(evt) {
          evt.stopPropagation();
          evt.preventDefault();
          var files = evt.target.files || evt.dataTransfer.files; // files is a FileList of File objects. List some properties.

          for (var i = 0, f; f = files[i]; i++) {
            // Only process image files.
            if (!f.type.match('image.*')) {
              continue;
            }

            var reader = new FileReader(); // Closure to capture the file information.

            reader.onload = function (theFile) {
              return function (e) {
                // Render thumbnail.
                var span = document.createElement('span');
                span.innerHTML = ['<img class="thumb" src="', e.target.result, '" title="', escape(theFile.name), '"/>'].join('');
                document.getElementById('list').insertBefore(span, null);
              };
            }(f); // Read in the image file as a data URL.


            reader.readAsDataURL(f);
          }
        };

        var handleDragOver = function handleDragOver(evt) {
          evt.stopPropagation();
          evt.preventDefault();
          evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
        }; // Setup the dnd listeners.
        // https://stackoverflow.com/questions/47515232/how-to-set-file-input-value-when-dropping-file-on-page


        var dropZone = document.getElementById('drop_zone');
        var target = document.documentElement;
        var fileInput = document.getElementById('shot_user_shot');
        var previewImage = document.getElementById('previewImage');
        var newShotForm = document.getElementById('new_shot');

        if (dropZone) {
          dropZone.addEventListener('dragover', handleDragOver, false);
          dropZone.addEventListener('drop', handleFileSelect, false); // Drop zone classes itself

          dropZone.addEventListener('dragover', function (e) {
            dropZone.classList.add('fire');
          }, false);
          dropZone.addEventListener('dragleave', function (e) {
            dropZone.classList.remove('fire');
          }, false);
          dropZone.addEventListener('drop', function (e) {
            e.preventDefault();
            dropZone.classList.remove('fire');
            fileInput.files = e.dataTransfer.files; // if on shot/id/edit hide preview image on drop

            if (previewImage) {
              previewImage.style.display = 'none';
            } // If on shots/new hide dropzone on drop


            if (newShotForm) {
              dropZone.style.display = 'none';
            }
          }, false); // Body specific 

          target.addEventListener('dragover', function (e) {
            e.preventDefault();
            dropZone.classList.add('dragging');
          }, false); // removes dragging class to body WHEN NOT dragging

          target.addEventListener('dragleave', function (e) {
            dropZone.classList.remove('dragging');
            dropZone.classList.remove('fire');
          }, false);
        }
      }
    },
    shotHover: function shotHover() {
      $('.shot').hover(function () {
        $(this).children('.shot-data').toggleClass('visible');
      });
    }
  };
  Shots.previewShot();
  Shots.shotHover();
});

/***/ })

/******/ });
//# sourceMappingURL=shots-c226bc1d98b95788a7d9.js.map