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

  function loadFile(file, callback, errorCallback) {
    var ext = getExtention(file);
    switch (ext) {
      case "js":
        requireScript(file, callback, errorCallback);
        break;
      case "css":
        requireCSS(file, callback, errorCallback);
        break;
      case "png":
      case "jpg":
      case "jpeg":
      case "gif":
        requireImage(file, callback, errorCallback);
        break;
      default:
        break;
    }
  }

  function require(files, callback, errorCallback) {
    if (typeof files === "string") {
      loadFile(files, callback, errorCallback);
    } else if(Array.isArray(files)){
      var len = files.length;
      for (var i = 0; i < len; i++) {
        loadFile(files[i], callback, errorCallback);
      }
    }
  }

  function requireScript(file, callback, errorCallback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = file;
    script.async = false;
    script.defer = false;
    if("onload" in script) {
      script.onload = callback;
      script.onerror = errorCallback;
    } else if ("onreadystatechange" in script) {
      // onreadystatechange is not a reliable way to detect script file load status
      // It's your responsibility to check whether it's loaded successfully or not.
      script.onreadystatechange = function() {
        var readyState = script.readyState;
        // readyState property 
        // https://msdn.microsoft.com/en-us/library/ms534359(v=vs.85).aspx
        if (readyState === "complete" || readyState === "loaded") {
          script.onreadystatechange = null;
          callback();
        }
      };
    }
    document.body.appendChild(script);
  }

  /**
   * Load CSS files. 
   * Note the callback and errorCallback are only supported in modern browsers.
   * Too few people used it.
   * @param {string | array} file - CSS files that you want to load.
   * @param {function} callback - success callback.
   * @param {function} errorCallback - error callback.
   * @return {undefined}
   */
  function requireCSS(file, callback, errorCallback) {
    var head = document.getElementsByTagName("head")[0];
    var css = document.createElement("link");
    css.type = "text/css";
    css.rel = "stylesheet";
    css.href = file;
    css.onload = callback || null; 
    css.onerror = errorCallback || null;
    head.appendChild(css);
  }

  /**
   * Preload image files. 
   * @param {string | array} file - Image files that you want to preload.
   * @param {function} callback - success callback.
   * @param {function} errorCallback - error callback.
   * @return {undefined}
   */
  function requireImage(file, callback, errorCallback) {
    var img = new Image();
    img.onload = callback || null;
    img.onerror = errorCallback || null;
    img.src = file;
  }

  if(!Array.isArray) {
    Array.isArray = function (vArg) {
      return Object.prototype.toString.call(vArg) === "[object Array]";
    };
  }
  window.require = require;
})(window);
