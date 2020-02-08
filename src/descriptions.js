var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

export var descriptions = {};
var _descriptions = {
    'Mobile Audio System': ['Test 1', 'Test 2', 'sahgfdksagna'],
    'Quadcopter Control': ['', '', ''],
    'Embedded Tetris': [,],
    'Ordinary Differential Equations': [,],
    'Golden Section Search': [,],
    'Three Body Problem': [,],
    'Public-Key Cryptography': [,],
    'CFU Tracker for Water Testing': [],
    'APV-MCTS for a newly released TCG': []
};
var sections = ['Introduction', 'Method', 'Discussion'];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = Object.entries(_descriptions)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _ref = _step.value;

        var _ref2 = _slicedToArray(_ref, 2);

        var project = _ref2[0];
        var description = _ref2[1];

        descriptions[project] = [];
        for (var i in sections) {
            descriptions[project].push(React.createElement(
                'h3',
                { key: sections[i] },
                sections[i]
            ));
            descriptions[project].push(React.createElement(
                'div',
                { key: sections[i] + '-' + i },
                description[i]
            ));
        }
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}