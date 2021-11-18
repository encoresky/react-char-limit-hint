"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CharLimitInput = _interopRequireDefault(require("./CharLimitInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// src/components/CharLimitInput.stories.js
var _default = {
  title: "Example/CharLimitInput",
  component: _CharLimitInput.default,
  argTypes: {}
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_CharLimitInput.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  charLimit: 10
};