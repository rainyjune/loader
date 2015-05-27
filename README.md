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

Load a CSS file. Note that callbacks only works in a few browsers.
```javascript
require("yellow.css", function() {
  // yellow.css  is loaded.
}, function() {
  // yellow.css is not loaded.
});
```

Preload an image file.
```javascript
var imgUrl = "http://images.apple.com/v/home/bv/images/home_hero_iphone_medium.png";
require(imgUrl, function(){
  // This file is loaded.
});
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

**Known Issues**

* The success callback instead of error callback will be called if an invalid CSS file is loaded in IE, the reason is that IE does not support the `error` event. This is a browser bug:
  https://connect.microsoft.com/IE/feedback/details/1171082/support-the-error-event-on-link
