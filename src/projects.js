var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { descriptions } from './descriptions.js';

var Projects = function (_React$Component) {
    _inherits(Projects, _React$Component);

    function Projects(props) {
        _classCallCheck(this, Projects);

        var _this = _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this, props));

        _this.state = {
            pageExpanded: false
        };
        _this.toggleExpand = _this.toggleExpand.bind(_this);
        return _this;
    }

    _createClass(Projects, [{
        key: 'toggleExpand',
        value: function toggleExpand() {
            this.setState(function (state) {
                return { pageExpanded: !state.pageExpanded };
            });
        }
    }, {
        key: 'renderProjects',
        value: function renderProjects() {
            var projects = this.props.projects;
            var pageExpanded = this.state.pageExpanded;


            var renderedProjects = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Object.entries(projects)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _ref = _step.value;

                    var _ref2 = _slicedToArray(_ref, 2);

                    var section = _ref2[0];
                    var info = _ref2[1];

                    if (!pageExpanded) {
                        renderedProjects.push(React.createElement('hr', { key: section + ' line break', width: '20%' }), React.createElement(
                            'h2',
                            { key: section },
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

                            renderedProjects.push(React.createElement(Project, {
                                key: caption,
                                src: 'images/' + src,
                                caption: caption,
                                height: info.height,
                                pageExpanded: pageExpanded,
                                toggleExpand: this.toggleExpand
                            }));
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

            if (!pageExpanded) renderedProjects.shift();
            return renderedProjects;
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.renderProjects()
            );
        }
    }]);

    return Projects;
}(React.Component);

var Project = function (_React$Component2) {
    _inherits(Project, _React$Component2);

    function Project(props) {
        _classCallCheck(this, Project);

        var _this2 = _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this, props));

        _this2.state = {
            expanded: false
        };
        return _this2;
    }

    _createClass(Project, [{
        key: 'renderNormal',
        value: function renderNormal() {
            var _this3 = this;

            var _props = this.props,
                src = _props.src,
                caption = _props.caption,
                height = _props.height,
                toggleExpand = _props.toggleExpand;


            return React.createElement(
                'figure',
                null,
                React.createElement('input', { type: 'image', src: src, alt: caption, height: height,
                    onClick: function onClick() {
                        _this3.setState({ expanded: true }, function () {
                            return toggleExpand();
                        });
                    }
                }),
                React.createElement(
                    'figcaption',
                    null,
                    caption
                )
            );
        }
    }, {
        key: 'renderExpanded',
        value: function renderExpanded() {
            var _this4 = this;

            var _props2 = this.props,
                src = _props2.src,
                caption = _props2.caption,
                height = _props2.height,
                toggleExpand = _props2.toggleExpand;


            var imgStyle = caption == 'APV-MCTS for a newly released TCG' ? { 'width': '90%' } : { 'height': height };
            return React.createElement(
                'div',
                { style: {
                        position: 'relative',
                        margin: 'auto',
                        height: '100vh',
                        width: '61.8%',
                        background: 'rgba(0, 0, 0, 0.05)',
                        paddingTop: '10px'
                    } },
                React.createElement(
                    'h2',
                    null,
                    caption
                ),
                React.createElement('a', { href: '#', className: 'close', style: { top: '5px', right: '5px' }, onClick: function onClick() {
                        _this4.setState({ expanded: false }, function () {
                            return toggleExpand();
                        });
                    } }),
                React.createElement('img', { src: src, alt: caption, style: imgStyle }),
                descriptions[caption]
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var expanded = this.state.expanded;
            var pageExpanded = this.props.pageExpanded;


            if (pageExpanded) {
                if (!expanded) return null;
                return this.renderExpanded();
            } else {
                return this.renderNormal();
            }
        }
    }]);

    return Project;
}(React.Component);

var projects = {
    'EECS': {
        'projects': {
            'Mobile Audio System': 'electronics.jpg',
            'Quadcopter Control': 'image50.jpg',
            'Embedded Tetris': 'tetris_diagram.png'
        },
        'height': '280px'
    },
    'Applied Maths': {
        'projects': {
            'Ordinary Differential Equations': 'ODEs.jpg',
            'Golden Section Search': 'gss.jpg',
            'Three Body Problem': '3bp.jpg',
            'Public-Key Cryptography': 'crypt.jpg'
        },
        'height': '200px'
    },
    'CV/ML/AI': {
        'projects': {
            'CFU Tracker for Water Testing': 'waterscope-improc.png',
            'APV-MCTS for a newly released TCG': 'apv-mcts.png'
        },
        'height': '300px'
    }
};

ReactDOM.render(React.createElement(Projects, { projects: projects }), $('#projects')[0]);