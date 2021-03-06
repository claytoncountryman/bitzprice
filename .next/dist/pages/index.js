'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _Prices = require('../components/Prices');

var _Prices2 = _interopRequireDefault(_Prices);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\bench\\bitzprice\\pages\\index.js?entry';


var Index = function Index(props) {
    return _react2.default.createElement(_Layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, 'Welcome To BizPrice'), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, 'Check current Bitcoin rate'), _react2.default.createElement(_Prices2.default, { bpi: props.bpi, __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    })));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var res, data;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

                case 2:
                    res = _context.sent;
                    _context.next = 5;
                    return res.json();

                case 5:
                    data = _context.sent;
                    return _context.abrupt('return', { bpi: data.bpi });

                case 7:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJGZXRjaCIsIlByaWNlcyIsIkxheW91dCIsIkluZGV4IiwicHJvcHMiLCJicGkiLCJnZXRJbml0aWFsUHJvcHMiLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBRVAsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7Ozs7Ozs7O0FBRW5CLElBQU0sUUFBUSxTQUFSLEFBQVEsTUFBQSxBQUFDLE9BQUQ7MkJBQ1YsQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBQ0Esd0NBQUEsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BRkosQUFFSSxBQUNBLCtDQUFBLEFBQUMsa0NBQU8sS0FBSyxNQUFiLEFBQW1CO3NCQUFuQjt3QkFMRSxBQUNWLEFBQ0ksQUFHSTtBQUFBOztBQUxaOztBQVVBLE1BQUEsQUFBTSwyRkFBa0IsbUJBQUE7YUFBQTtrRUFBQTtrQkFBQTs2Q0FBQTtxQkFBQTtvQ0FBQTsyQkFDRixNQURFLEFBQ0YsQUFBTTs7cUJBQWxCO0FBRGMsbUNBQUE7b0NBQUE7MkJBRUQsSUFGQyxBQUVELEFBQUk7O3FCQUFqQjtBQUZjLG9DQUFBO3FEQUliLEVBQUMsS0FBSyxLQUpPLEFBSWIsQUFBVzs7cUJBSkU7cUJBQUE7b0NBQUE7O0FBQUE7Z0JBQUE7QUFBeEIsQUFPQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9iZW5jaC9iaXR6cHJpY2UifQ==