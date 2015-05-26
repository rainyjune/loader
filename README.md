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

