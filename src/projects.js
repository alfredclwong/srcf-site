var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Projects = function (_React$Component) {
    _inherits(Projects, _React$Component);

    function Projects(props) {
        _classCallCheck(this, Projects);

        var _this = _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this, props));

        _this.state = {
            expanded: false
        };
        return _this;
    }

    _createClass(Projects, [{
        key: 'renderProjects',
        value: function renderProjects() {
            var renderedProjects = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Object.entries(this.props.projects)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _ref = _step.value;

                    var _ref2 = _slicedToArray(_ref, 2);

                    var section = _ref2[0];
                    var info = _ref2[1];

                    if (!this.state.expanded) {
                        projects.push(React.createElement('br', null), React.createElement('br', null), React.createElement('hr', { width: '15%' }), React.createElement(
                            'h2',
                            null,
                            section
                        ));
                    }
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = Object.entries(info.projects)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var _ref3 = _step2.value;

                            var _ref4 = _slicedToArray(_ref3, 2);

                            var caption = _ref4[0];
                            var src = _ref4[1];

                            projects.push(React.createElement(Thumbnail, { src: 'images/' + src, height: info.height, caption: caption }));
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
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

            projects.shift(3);
        }
    }, {
        key: 'render',
        value: function render() {
            var projects = [];
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = Object.entries(this.props.projects)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _ref5 = _step3.value;

                    var _ref6 = _slicedToArray(_ref5, 2);

                    var section = _ref6[0];
                    var info = _ref6[1];

                    projects.push(React.createElement(
                        'h2',
                        null,
                        section
                    ));
                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = undefined;

                    try {
                        for (var _iterator4 = Object.entries(info.projects)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                            var _ref7 = _step4.value;

                            var _ref8 = _slicedToArray(_ref7, 2);

                            var caption = _ref8[0];
                            var src = _ref8[1];

                            projects.push(React.createElement(Thumbnail, { src: 'images/' + src, height: info.height, caption: caption }));
                        }
                    } catch (err) {
                        _didIteratorError4 = true;
                        _iteratorError4 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                _iterator4.return();
                            }
                        } finally {
                            if (_didIteratorError4) {
                                throw _iteratorError4;
                            }
                        }
                    }

                    projects.push(React.createElement('br', null), React.createElement('br', null), React.createElement('hr', { width: '15%' }));
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            projects.pop(3);
            return React.createElement(
                'div',
                null,
                projects
            );
        }
    }]);

    return Projects;
}(React.Component);

var Thumbnail = function (_React$Component2) {
    _inherits(Thumbnail, _React$Component2);

    function Thumbnail(props) {
        _classCallCheck(this, Thumbnail);

        var _this2 = _possibleConstructorReturn(this, (Thumbnail.__proto__ || Object.getPrototypeOf(Thumbnail)).call(this, props));

        _this2.state = {
            expanded: false,
            invisible: false
        };
        return _this2;
    }

    _createClass(Thumbnail, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            if (this.state.invisible) return;
            return React.createElement(
                'figure',
                null,
                React.createElement('input', {
                    type: 'image',
                    src: this.props.src,
                    alt: this.props.caption,
                    height: this.props.height,
                    onClick: function onClick() {
                        _this3.setState(function (state) {
                            return { expanded: !state.expanded };
                        });
                    }
                }),
                React.createElement(
                    'figcaption',
                    null,
                    this.props.caption
                )
            );
        }
    }]);

    return Thumbnail;
}(React.Component);

var projects = {
    'Engineering': {
        'projects': {
            'Mobile Audio System': 'electronics.jpg',
            'Quadcopter Control': 'image50.jpg',
            'Tetris': 'tetris_diagram.png'
        },
        'height': '280px'
    },
    'Mathematics': {
        'projects': {
            'Ordinary Differential Equations': 'ODEs.jpg',
            'Golden Section Search': 'gss.jpg',
            'Three Body Problem': '3bp.jpg',
            'Public-Key Cryptography': 'crypt.jpg'
        },
        'height': '200px'
    },
    'Computer Science': {
        'projects': {
            'CFU Tracker for Water Testing': 'waterscope-improc.png',
            'APV-MCTS for a newly released TCG': 'apv-mcts.png'
        },
        'height': '300px'
    }
};

ReactDOM.render(React.createElement(Projects, { projects: projects }), $('#projects')[0]);