'use strict';

var _utils = require('./utils.js');

var _utils2 = _interopRequireDefault(_utils);

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('app.js is running!!');


console.log((0, _utils.square)(4));
console.log((0, _utils.add)(1, 5));
console.log((0, _utils2.default)(100, 19));

console.log(_validator2.default.isEmail('test@testcom'));

var template = '<p>this is jsx from webpack!!</p>';

_reactDom2.default.render(template, document.getElementById('app'));
