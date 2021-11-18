"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CharLimitInput;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["onChange", "charLimit"],
    _excluded2 = ["hintStyle", "inputStyle", "parentContainerStyle"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CharLimitInput(_ref) {
  var onChange = _ref.onChange,
      charLimit = _ref.charLimit,
      props = _objectWithoutProperties(_ref, _excluded);

  var parsedIntCharLimit = parseInt(charLimit || 0);

  var _React$useState = _react.default.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = _react.default.useState(parsedIntCharLimit),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      remainingCount = _React$useState4[0],
      setRemainingCount = _React$useState4[1];

  var onTextChange = function onTextChange(event) {
    var remaining_count = parsedIntCharLimit - event.target.value.length;
    if (remaining_count < 0) return false;
    setRemainingCount(remaining_count);
    setValue(event.target.value);
    onChange(event.target.value);
  };

  var hintStyle = props.hintStyle,
      inputStyle = props.inputStyle,
      parentContainerStyle = props.parentContainerStyle,
      restProps = _objectWithoutProperties(props, _excluded2);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: parentContainerStyle
  }, /*#__PURE__*/_react.default.createElement("input", _extends({
    className: inputStyle,
    value: value,
    onChange: onTextChange,
    maxLength: charLimit
  }, restProps)), /*#__PURE__*/_react.default.createElement("span", {
    className: hintStyle
  }, remainingCount, " words are remaining"));
}

CharLimitInput.propTypes = {
  charLimit: _propTypes.default.number.isRequired,
  parentContainerStyle: _propTypes.default.string,
  inputStyle: _propTypes.default.string,
  hintStyle: _propTypes.default.string,
  onChange: _propTypes.default.func
};
CharLimitInput.defaultProps = {
  onChange: undefined
};