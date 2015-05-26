# loader
A simple resource loader, load resources files asynchronously.

Examples

Load a JavaScript files.

```javascript
require("js/simpleLoader1.js", function() {
  // simpleLoader1.js is loaded.
}, function() {
  // simpleLoader1.js is not loaded.
});
```

Load mutiple JavaScript files. Note that the success callback function and error callback function will be triggered for each file. 
```javascript
require(["js/simpleLoader1.js", "js/simpleLoader1.js"], function() {
  // simpleLoader1.js or simpleLoader1.js  is loaded.
}, function() {
  // simpleLoader1.js or simpleLoader1.js is not loaded.
});
```

Load a CSS file.
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
