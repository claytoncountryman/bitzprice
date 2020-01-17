'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\bench\\bitzprice\\components\\Prices.js';


var Prices = function (_React$Component) {
    (0, _inherits3.default)(Prices, _React$Component);

    function Prices() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Prices);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Prices.__proto__ || (0, _getPrototypeOf2.default)(Prices)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            currency: 'USD'
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Prices, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var list = '';

            if (this.state.currency === 'USD') {
                list = _react2.default.createElement('li', { className: 'list-group-item', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                }, 'Bitcoin rate for ', this.props.bpi.USD.description, ':', _react2.default.createElement('span', { 'class': 'badge badge-primary', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                }, this.props.bpi.USD.code), _react2.default.createElement('strong', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    }
                }, this.props.bpi.USD.rate));
            } else if (this.state.currency === 'GBP') {
                list = _react2.default.createElement('li', { className: 'list-group-item', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                }, 'Bitcoin rate for ', this.props.bpi.GBP.description, ':', _react2.default.createElement('span', { 'class': 'badge badge-primary', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    }
                }, this.props.bpi.GBP.code), _react2.default.createElement('strong', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                }, this.props.bpi.GBP.rate));
            } else if (this.state.currency === 'EUR') {
                list = _react2.default.createElement('li', { className: 'list-group-item', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                }, 'Bitcoin rate for ', this.props.bpi.EUR.description, ':', _react2.default.createElement('span', { 'class': 'badge badge-primary', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                }, this.props.bpi.EUR.code), _react2.default.createElement('strong', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                }, this.props.bpi.EUR.rate));
            }

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('ul', { className: 'list-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, list), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }), _react2.default.createElement('select', { onChange: function onChange(e) {
                    return _this2.setState({ currency: e.target.value });
                }, className: 'form-control', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('option', { value: 'USD', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, 'USD'), _react2.default.createElement('option', { value: 'GBP', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, 'GBP'), _react2.default.createElement('option', { value: 'EUR', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, 'EUR')));
        }
    }]);

    return Prices;
}(_react2.default.Component);

exports.default = Prices;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFByaWNlcy5qcyJdLCJuYW1lcyI6WyJQcmljZXMiLCJzdGF0ZSIsImN1cnJlbmN5IiwibGlzdCIsInByb3BzIiwiYnBpIiwiVVNEIiwiZGVzY3JpcHRpb24iLCJjb2RlIiwicmF0ZSIsIkdCUCIsIkVVUiIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU0sQTs7Ozs7Ozs7Ozs7Ozs7Z04sQUFDRjtzQkFBUSxBQUNNLEE7QUFETixBQUNKOzs7OztpQ0FHSzt5QkFFTDs7Z0JBQUksT0FBSixBQUFXLEFBRVg7O2dCQUFJLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBZixBQUE0QixPQUFNLEFBQzlCO3VDQUFPLGNBQUEsUUFBSSxXQUFKLEFBQWM7a0NBQWQ7b0NBQUE7QUFBQTtpQkFBQSxFQUNlLDBCQUFBLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxJQUQ5QixBQUNrQyxhQUNyQyxxQkFBQSxjQUFBLFVBQU0sU0FBTixBQUFZO2tDQUFaO29DQUFBLEFBQW1DO0FBQW5DO3dCQUFtQyxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFGL0MsQUFFSCxBQUFzRCxBQUN0RCx1QkFBQSxjQUFBOztrQ0FBQTtvQ0FBQSxBQUFTO0FBQVQ7QUFBQSx3QkFBUyxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFINUIsQUFBTyxBQUdILEFBQTRCLEFBRW5DO0FBTkQsdUJBTVcsS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFmLEFBQTRCLE9BQU0sQUFDckM7dUNBQU8sY0FBQSxRQUFJLFdBQUosQUFBYztrQ0FBZDtvQ0FBQTtBQUFBO2lCQUFBLEVBQ2UsMEJBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLElBRDlCLEFBQ2tDLGFBQ3JDLHFCQUFBLGNBQUEsVUFBTSxTQUFOLEFBQVk7a0NBQVo7b0NBQUEsQUFBbUM7QUFBbkM7d0JBQW1DLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxJQUYvQyxBQUVILEFBQXNELEFBQ3RELHVCQUFBLGNBQUE7O2tDQUFBO29DQUFBLEFBQVM7QUFBVDtBQUFBLHdCQUFTLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxJQUg1QixBQUFPLEFBR0gsQUFBNEIsQUFFbkM7QUFOTSxhQUFBLE1BTUEsSUFBSSxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQWYsQUFBNEIsT0FBTSxBQUNyQzt1Q0FBTyxjQUFBLFFBQUksV0FBSixBQUFjO2tDQUFkO29DQUFBO0FBQUE7aUJBQUEsRUFDZSwwQkFBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFEOUIsQUFDa0MsYUFDckMscUJBQUEsY0FBQSxVQUFNLFNBQU4sQUFBWTtrQ0FBWjtvQ0FBQSxBQUFtQztBQUFuQzt3QkFBbUMsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLElBRi9DLEFBRUgsQUFBc0QsQUFDdEQsdUJBQUEsY0FBQTs7a0NBQUE7b0NBQUEsQUFBUztBQUFUO0FBQUEsd0JBQVMsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLElBSDVCLEFBQU8sQUFHSCxBQUE0QixBQUVuQztBQUVEOzttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUEsUUFBSSxXQUFKLEFBQWM7OEJBQWQ7Z0NBQUEsQUFDSztBQURMO2VBREosQUFDSSxBQUdBOzs4QkFBQTtnQ0FKSixBQUlJLEFBQ0E7QUFEQTtBQUFBLGdDQUNBLGNBQUEsWUFBUSxVQUFXLHFCQUFBOzJCQUFLLE9BQUEsQUFBSyxTQUFTLEVBQUMsVUFBVSxFQUFBLEFBQUUsT0FBaEMsQUFBSyxBQUFjLEFBQW9CO0FBQTFELG1CQUFtRSxXQUFuRSxBQUE2RTs4QkFBN0U7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsWUFBUSxPQUFSLEFBQWM7OEJBQWQ7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFDQSx3QkFBQSxjQUFBLFlBQVEsT0FBUixBQUFjOzhCQUFkO2dDQUFBO0FBQUE7ZUFGSixBQUVJLEFBQ0Esd0JBQUEsY0FBQSxZQUFRLE9BQVIsQUFBYzs4QkFBZDtnQ0FBQTtBQUFBO2VBVFosQUFDSSxBQUtJLEFBR0ksQUFJZjs7Ozs7RUExQ2dCLGdCQUFNLEEsQUE2QzNCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlByaWNlcy5qcyIsInNvdXJjZVJvb3QiOiJEOi9iZW5jaC9iaXR6cHJpY2UifQ==