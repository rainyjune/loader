# loader
A simple resource loader, load resources files asynchronously.

## Usage 

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Sample Project</title>
  </head>
  <body>
    <h1>My Sample Project</h1>
    <script src="simpleLoader.js"></script>
    <!-- id="entry" tells simpleLoader to load app.js after simpleLoader.js loads. -->
    <script id="entry" src="app.js"></script>
  </body>
</html>
```

Inside the app.js, you can use require() to load any other scripts you need to run. This ensures a single entry point.
```javascript
require("zepto.js", function(){
  // zepto.js is loaded.
  require(["zepto.touch.js", "slider.js"], initApp);
});
function initApp(){
  // This function is called when zepto.touch.js and slider.js are loaded.
}
```

## Examples

Load a JavaScript files.

```javascript
require("js/simpleLoader1.js", function() {
  // simpleLoader1.js is loaded.
}, function() {
  // simpleLoader1.js is not loaded.
});
```

Load mutiple JavaScript files. The success callback function or error callback function will be triggered after these files loading finished, but the execution order is not guaranteed.  
```javascript
require(["js/simpleLoader1.js", "js/simpleLoader2.js"], function() {
  // Both simpleLoader1.js and simpleLoader2.js were loaded.
}, function() {
  // Either simpleLoader1.js or simpleLoader2.js was not loaded, or both.
});
```

Load a CSS file. Note that no callbacks are supported, few people need callbacks.
```javascript
require("yellow.css");
```

Load JavaScript files that with dependencies.
```javascript
var jq = "//code.jquery.com/jquery-1.11.3.min.js";
var jqc = "//cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js";

require(jq, function(){
  showLog("jQuery is loaded and executed.");
  require(jqc, function() {
    showLog("jquery.cookie.min.js is loaded and executed.");
  });
});
```


**Supported Browsers**

* IE 9+
* Chrome 14+
* Firefox 2+
* Safari 4+
* Opera 11+
* Android 2.3+
* iOS 3.2+
