(function (window) {

  "use strict";

  function getExtention(file) {
    var ext = "js";
    var arr = file.split(".");
    if (arr.length > 1) {
      ext = arr.pop();
    }
    return ext;
  } 

  function loadFile(file, callback) {
    var ext = getExtention(file);
    switch (ext) {
      case "js":
        requireScript(file, callback);
        break;
      case "css":
        requireCSS(file, callback);
        break;
      case "png":
      case "jpg":
      case "jpeg":
      case "gif":
        requireImage(file, callback);
        break;
      default:
        break;
    }
  }

  function require(files, callback) {
    if (typeof files === "string") {
      loadFile(files, callback);
    } else if(Array.isArray(files)){
      for (var i = 0, len = files.length; i < len; i++) {
        loadFile(files[i], callback);
      }
    }
  }

  function requireScript(file) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = file;
    script.async = false;
    script.defer = false;
    document.body.appendChild(script);
  }

  function requireCSS(file, callback) {
    var head = document.getElementsByTagName("head")[0];
    var css = document.createElement("link");
    css.type = "text/css";
    css.rel = "stylesheet";
    css.href = file;
    css.onload = callback; 
    head.appendChild(css);
  }

  function requireImage(file, callback) {
    var img = new Image();
    img.onload = callback;
    img.src = file;
  }

  if(!Array.isArray) {
    Array.isArray = function (vArg) {
      return Object.prototype.toString.call(vArg) === "[object Array]";
    };
  }
  window.require = require;
})(window);
