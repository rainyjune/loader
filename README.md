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
