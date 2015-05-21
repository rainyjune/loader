(function (window) {
  "use strict";
  function loadJsFiles(files) {
    if (typeof files === "string") {
      requireScript(files);
    } else if(Array.isArray(files)){
      for (var i = 0, len = files.length; i < len; i++) {
        requireScript(files[i]);
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
  if(!Array.isArray) {
    Array.isArray = function (vArg) {
      return Object.prototype.toString.call(vArg) === "[object Array]";
    };
  }
  window.loadJsFiles = loadJsFiles;
})(window);
