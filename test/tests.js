QUnit.test("Load a JavaScript file from the same domain", function(assert) {
  var done = assert.async();
  var url = "local1.js";
  require(url, function() {
    assert.ok(true, "local1.js is loaded and executed!");
    done();
  }, function() {
    assert.ok(false, "local1.js is loaded and executed!");
    done();
  });
});
QUnit.test("Load knockout from Microsoft CDN", function(assert) {
  var done = assert.async();
  var url = "http://ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1.debug.js";
  require(url, function() {
    assert.ok(typeof ko !== "undefined", "Knockout.js is loaded");
    done();
  }, function() {
    assert.ok(false, "Knockout.js is loaded");
    done();
  });
});
QUnit.test("Load jQuery and jquery cookie plugin from CDN", function(assert) {
  assert.expect(2);
  var done1 = assert.async();
  var done2 = assert.async();
  var jq = "//code.jquery.com/jquery-1.11.3.min.js";
  var jqc = "//cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js";
  require(jq, function() {
    assert.ok(typeof jQuery !== "undefined", "jquery is loaded");
    done1();
    require(jqc, function(){
      assert.ok(typeof $.cookie !== "undefined", "jquery-cookie is loaded.");
      done2();
    }, function() {
      assert.ok(false, "jquery-cookie is loaded.");
      done2();
    });
  }, function() {
    assert.ok(false, "jquery is loaded");
    done1();
  });
});
QUnit.test("Load an invalid JavaScript file", function(assert) {
  var done = assert.async();
  var url = "local2.js";
  require(url, function() {
    assert.ok(false, "local2.js is not loaded and executed!");
    done();
  }, function() {
    assert.ok(true, "local2.js is not loaded and executed!");
    done();
  });
});
QUnit.test("Load three JavaScript files using require(['fn1.js', 'fn2.js', 'fn3.js']", function(assert) {
  var done = assert.async();
  var js1 = "fn1.js", js2 = "fn2.js", js3 = "fn3.js";
  require([js1, js2, js3], function() {
    assert.ok((typeof fn1 === "function") && (typeof fn2 === "function") && (typeof fn3 === "function") , "The success callback function is called. All three JS file were loaded successfully.");
    done();
  }, function() {
    assert.ok(false, "All three JS file were loaded successfully.");
    done();
  });
});
QUnit.test("Load JavaScript files using require(['fn1.js', 'fn2.js', 'fn4.js'], but fn4.js does not exists", function(assert) {
  var done = assert.async();
  var js1 = "fn1.js", js2 = "fn2.js", js3 = "fn4.js";
  require([js1, js2, js3], function() {
    assert.ok((typeof fn1 === "function") && (typeof fn2 === "function") && (typeof fn4 === "function") , "All three JS file were loaded successfully.");
    done();
  }, function() {
    assert.ok((typeof fn1 === "function") && (typeof fn2 === "function") && (typeof fn4 === "undefined"), "The error callback function is called. fn1.js and fn2.js were loaded, but fn4.js not.");
    done();
  });
});
QUnit.test("Load a CSS file", function(assert) {
  var done = assert.async();
  var url = "test.css";
  require(url, function(){
    assert.ok(true, "test.css is loaded");
    done();
  }, function() {
    assert.ok(false, "test.css is loaded");
    done();
  });
});
QUnit.test("Load an invalid CSS file", function(assert) {
  var done = assert.async();
  var url = "test1.css";
  require(url, function(){
    assert.ok(false, "test1.css is not loaded");
    done();
  }, function() {
    assert.ok(true, "test1.css is not loaded");
    done();
  });
});
QUnit.test("Preload an image file", function(assert) {
  var done = assert.async();
  var url = "http://images.apple.com/v/home/bv/images/home_hero_iphone_medium.png";
  require(url, function() {
    assert.ok(true, "The png file is loaded");
    done();
  }, function() {
    assert.ok(false, "The png file is loaded");
    done();
  });
});
QUnit.test("Preload an invalid image file", function(assert) {
  var done = assert.async();
  var url = "test.png";
  require(url, function() {
    assert.ok(false, "The png file is not loaded");
    done();
  }, function() {
    assert.ok(true, "The png file is not loaded");
    done();
  });
});
