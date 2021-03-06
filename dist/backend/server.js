'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/', function (req, res) {
  return res.send('Hello World!');
});

app.listen(3000, function () {
  return console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=server.js.map