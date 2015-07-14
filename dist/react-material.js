'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var MaterialButton = (function (_React$Component) {
    function MaterialButton(props) {
        _classCallCheck(this, MaterialButton);

        _get(Object.getPrototypeOf(MaterialButton.prototype), 'constructor', this).call(this, props);

        this.CssClasses_ = {
            RIPPLE_EFFECT: 'mdl-js-ripple-effect',
            RIPPLE_CONTAINER: 'mdl-button__ripple-container',
            RIPPLE: 'mdl-ripple'
        };
    }

    _inherits(MaterialButton, _React$Component);

    _createClass(MaterialButton, [{
        key: 'render',
        value: function render() {
            var classList = React.addons.classSet({
                'mdl-button': true,
                'mdl-js-button': true,
                'mdl-button--raised': this.props.raised,
                'mdl-button--accent': this.props.accent,
                'mdl-button--colored': this.props.colored,
                'mdl-button--fab': this.props.fab,
                'mdl-button--mini-fab': this.props.miniFab,
                'mdl-button--icon': this.props.icon,
                'mdl-js-ripple-effect': this.props.ripple
            });

            return React.createElement('button', _extends({}, this.props, { className: classList }));
        }
    }], [{
        key: 'propTypes',
        value: {
            raised: React.PropTypes.bool,
            accent: React.PropTypes.bool,
            colored: React.PropTypes.bool,
            fab: React.PropTypes.bool,
            miniFab: React.PropTypes.bool,
            icon: React.PropTypes.bool,
            ripple: React.PropTypes.bool
        },
        enumerable: true
    }]);

    return MaterialButton;
})(React.Component);

var MaterialCard = (function (_React$Component2) {
    function MaterialCard(props) {
        _classCallCheck(this, MaterialCard);

        _get(Object.getPrototypeOf(MaterialCard.prototype), 'constructor', this).call(this, props);

        this.classList = ['mdl-card'];
    }

    _inherits(MaterialCard, _React$Component2);

    _createClass(MaterialCard, [{
        key: 'render',
        value: function render() {
            if (this.props.shadow > 0) {
                var shadowClass = 'mdl-shadow--' + this.props.shadow + 'dp';
                this.classList.push(shadowClass);
            }

            return React.createElement('div', _extends({}, this.props, { className: this.classList.join(' ') }));
        }
    }], [{
        key: 'propTypes',
        value: {
            shadow: React.PropTypes.number
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            shadow: 2
        },
        enumerable: true
    }]);

    return MaterialCard;
})(React.Component);

var MaterialCardTitle = (function (_React$Component3) {
    function MaterialCardTitle(props) {
        _classCallCheck(this, MaterialCardTitle);

        _get(Object.getPrototypeOf(MaterialCardTitle.prototype), 'constructor', this).call(this, props);

        this.classList = ['mdl-card__title'];
    }

    _inherits(MaterialCardTitle, _React$Component3);

    _createClass(MaterialCardTitle, [{
        key: 'render',
        value: function render() {
            if (this.props.expand) {
                this.classList.push('mdl-card--expand');
            }

            return React.createElement('div', _extends({}, this.props, { className: this.classList.join(' ') }));
        }
    }], [{
        key: 'propTypes',
        value: {
            expand: React.PropTypes.bool
        },
        enumerable: true
    }]);

    return MaterialCardTitle;
})(React.Component);

var MaterialCardTitleText = (function (_React$Component4) {
    function MaterialCardTitleText(props) {
        _classCallCheck(this, MaterialCardTitleText);

        _get(Object.getPrototypeOf(MaterialCardTitleText.prototype), 'constructor', this).call(this, props);
    }

    _inherits(MaterialCardTitleText, _React$Component4);

    _createClass(MaterialCardTitleText, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'h2',
                { className: 'mdl-card__title-text' },
                this.props.children
            );
        }
    }]);

    return MaterialCardTitleText;
})(React.Component);

var MaterialCardMedia = (function (_React$Component5) {
    function MaterialCardMedia(props) {
        _classCallCheck(this, MaterialCardMedia);

        _get(Object.getPrototypeOf(MaterialCardMedia.prototype), 'constructor', this).call(this, props);

        this.classList = ['mdl-card__media'];
    }

    _inherits(MaterialCardMedia, _React$Component5);

    _createClass(MaterialCardMedia, [{
        key: 'render',
        value: function render() {
            return React.createElement('div', _extends({}, this.props, { className: this.classList.join(' ') }));
        }
    }]);

    return MaterialCardMedia;
})(React.Component);

var MaterialCardSupportingText = (function (_React$Component6) {
    function MaterialCardSupportingText(props) {
        _classCallCheck(this, MaterialCardSupportingText);

        _get(Object.getPrototypeOf(MaterialCardSupportingText.prototype), 'constructor', this).call(this, props);

        this.classList = ['mdl-card__supporting-text'];
    }

    _inherits(MaterialCardSupportingText, _React$Component6);

    _createClass(MaterialCardSupportingText, [{
        key: 'render',
        value: function render() {
            return React.createElement('div', _extends({}, this.props, { className: this.classList.join(' ') }));
        }
    }]);

    return MaterialCardSupportingText;
})(React.Component);

var MaterialCardActions = (function (_React$Component7) {
    function MaterialCardActions(props) {
        _classCallCheck(this, MaterialCardActions);

        _get(Object.getPrototypeOf(MaterialCardActions.prototype), 'constructor', this).call(this, props);

        this.classList = ['mdl-card__actions'];
    }

    _inherits(MaterialCardActions, _React$Component7);

    _createClass(MaterialCardActions, [{
        key: 'render',
        value: function render() {
            if (this.props.border) {
                this.classList.push('mdl-card--border');
            }

            return React.createElement('div', _extends({}, this.props, { className: this.classList.join(' ') }));
        }
    }], [{
        key: 'propTypes',
        value: {
            border: React.PropTypes.bool
        },
        enumerable: true
    }]);

    return MaterialCardActions;
})(React.Component);

var MaterialCheckBox = (function (_React$Component8) {
    function MaterialCheckBox() {
        _classCallCheck(this, MaterialCheckBox);

        _get(Object.getPrototypeOf(MaterialCheckBox.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(MaterialCheckBox, _React$Component8);

    _createClass(MaterialCheckBox, [{
        key: 'render',
        value: function render() {
            var classList = React.addons.classSet({
                'mdl-checkbox': true,
                'mdl-js-checkbox': true,
                'mdl-js-ripple-effect': this.props.ripple,
                'is-disabled': this.props.disabled,
                'is-checked': this.props.checked,
                'is-upgraded': this.props.isUpgraded
            });

            var _props = this.props;
            var children = _props.children;

            var props = _objectWithoutProperties(_props, ['children']);

            return React.createElement(
                'label',
                { className: classList, htmlFor: this.props.id },
                React.createElement('input', _extends({}, props, { type: 'checkbox', className: 'mdl-checkbox__input' })),
                React.createElement(
                    'span',
                    { className: 'mdl-checkbox__label' },
                    children
                )
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            id: React.PropTypes.string.isRequired,
            checked: React.PropTypes.bool,
            disabled: React.PropTypes.bool,
            isUpgraded: React.PropTypes.bool
        },
        enumerable: true
    }]);

    return MaterialCheckBox;
})(React.Component);

var MaterialTable = (function (_React$Component9) {
    function MaterialTable() {
        _classCallCheck(this, MaterialTable);

        _get(Object.getPrototypeOf(MaterialTable.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(MaterialTable, _React$Component9);

    _createClass(MaterialTable, [{
        key: 'render',
        value: function render() {
            var classList = React.addons.classSet({
                'mdl-data-table': true,
                'mdl-js-data-table': !this.props.isUpgraded,
                'mdl-data-table--selectable': this.props.selectable,
                'is-upgraded': this.props.isUpgraded
            });
            if (this.props.shadow > 0) {
                var shadowClass = 'mdl-shadow--' + this.props.shadow + 'dp';
                classList = React.addons.classSet(classList, shadowClass);
            }

            return React.createElement('table', _extends({}, this.props, { className: classList }));
        }
    }], [{
        key: 'propTypes',
        value: {
            selectable: React.PropTypes.bool,
            isUpgraded: React.PropTypes.bool,
            shadow: React.PropTypes.number
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            shadow: 2
        },
        enumerable: true
    }]);

    return MaterialTable;
})(React.Component);

var MaterialTableColumn = (function (_React$Component10) {
    function MaterialTableColumn() {
        _classCallCheck(this, MaterialTableColumn);

        _get(Object.getPrototypeOf(MaterialTableColumn.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(MaterialTableColumn, _React$Component10);

    _createClass(MaterialTableColumn, [{
        key: 'render',
        value: function render() {
            var classList = React.addons.classSet({
                'mdl-data-table__cell--non-numeric': this.props.nonNumeric
            });

            return React.createElement('th', _extends({}, this.props, { className: classList }));
        }
    }], [{
        key: 'propTypes',
        value: {
            nonNumeric: React.PropTypes.bool,
            valueSelector: React.PropTypes.func
        },
        enumerable: true
    }]);

    return MaterialTableColumn;
})(React.Component);

var MaterialTableCell = (function (_React$Component11) {
    function MaterialTableCell() {
        _classCallCheck(this, MaterialTableCell);

        _get(Object.getPrototypeOf(MaterialTableCell.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(MaterialTableCell, _React$Component11);

    _createClass(MaterialTableCell, [{
        key: 'render',
        value: function render() {
            var classList = React.addons.classSet({
                'mdl-data-table__cell--non-numeric': this.props.nonNumeric
            });

            return React.createElement('td', _extends({}, this.props, { className: classList }));
        }
    }], [{
        key: 'propTypes',
        value: {
            nonNumeric: React.PropTypes.bool
        },
        enumerable: true
    }]);

    return MaterialTableCell;
})(React.Component);

var MaterialDataTable = (function (_React$Component12) {
    function MaterialDataTable() {
        _classCallCheck(this, MaterialDataTable);

        _get(Object.getPrototypeOf(MaterialDataTable.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(MaterialDataTable, _React$Component12);

    _createClass(MaterialDataTable, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var children = _props2.children;
            var data = _props2.data;
            var rowSelector = _props2.rowSelector;

            var others = _objectWithoutProperties(_props2, ['children', 'data', 'rowSelector']);

            rowSelector = rowSelector || function (item, rowIndex) {
                return false;
            };

            var rows = data.map(function (item, rowIndex) {
                var cells = children.map(function (column, cellIndex) {
                    var _column$props = column.props;
                    var valueSelector = _column$props.valueSelector;

                    var cellProps = _objectWithoutProperties(_column$props, ['valueSelector']);

                    valueSelector = valueSelector || function (item, column, rowIndex) {
                        return item[column.props.dataField];
                    };

                    var value = valueSelector(item, column, rowIndex);
                    return React.createElement(
                        MaterialTableCell,
                        _extends({ key: cellIndex }, cellProps),
                        value
                    );
                });
                var classList = React.addons.classSet({
                    'is-selected': rowSelector(item)
                });
                return React.createElement(
                    'tr',
                    { key: rowIndex, className: classList },
                    cells
                );
            });

            return React.createElement(
                MaterialTable,
                others,
                React.createElement(
                    'thead',
                    null,
                    React.createElement(
                        'tr',
                        null,
                        children
                    )
                ),
                React.createElement(
                    'tbody',
                    null,
                    rows
                )
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            nonNumeric: React.PropTypes.bool,
            rowSelector: React.PropTypes.func
        },
        enumerable: true
    }]);

    return MaterialDataTable;
})(React.Component);

var MaterialGrid = (function (_React$Component13) {
    function MaterialGrid() {
        _classCallCheck(this, MaterialGrid);

        _get(Object.getPrototypeOf(MaterialGrid.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(MaterialGrid, _React$Component13);

    _createClass(MaterialGrid, [{
        key: 'render',
        value: function render() {
            return React.createElement('div', _extends({}, this.props, { className: 'mdl-grid' }));
        }
    }]);

    return MaterialGrid;
})(React.Component);

var MaterialGridCell = (function (_React$Component14) {
    function MaterialGridCell() {
        _classCallCheck(this, MaterialGridCell);

        _get(Object.getPrototypeOf(MaterialGridCell.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(MaterialGridCell, _React$Component14);

    _createClass(MaterialGridCell, [{
        key: 'render',
        value: function render() {
            var cellClass = 'mdl-cell--' + this.props.col + '-col';
            var classList = React.addons.classSet({
                'mdl-cell': true,
                'mdl-cell--top': this.props.align === 'top',
                'mdl-cell--middle': this.props.align === 'middle',
                'mdl-cell--bottom': this.props.align === 'bottom'
            });
            classList = React.addons.classSet(classList, cellClass);

            return React.createElement('div', _extends({}, this.props, { className: classList }));
        }
    }], [{
        key: 'propTypes',
        value: {
            col: React.PropTypes.number.isRequired,
            align: React.PropTypes.oneOf(['top', 'middle', 'bottom'])
        },
        enumerable: true
    }]);

    return MaterialGridCell;
})(React.Component);

var MaterialMenu = (function (_React$Component15) {
    function MaterialMenu() {
        _classCallCheck(this, MaterialMenu);

        _get(Object.getPrototypeOf(MaterialMenu.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(MaterialMenu, _React$Component15);

    _createClass(MaterialMenu, [{
        key: 'render',
        value: function render() {
            var classList = React.addons.classSet({
                'mdl-menu': true,
                'mdl-js-menu': true,
                'mdl-js-ripple-effect': this.props.ripple,
                'mdl-menu--top-left': this.props.align === 'top-left',
                'mdl-menu--top-rigth': this.props.align === 'top-rigth',
                'mdl-menu--bottom-left': this.props.align === 'bottom-left',
                'mdl-menu--bottom-rigth': this.props.align === 'bottom-rigth'
            });

            return React.createElement('ul', _extends({}, this.props, { className: classList }));
        }
    }], [{
        key: 'propTypes',
        value: {
            htmlFor: React.PropTypes.string.isRequired,
            ripple: React.PropTypes.bool,
            align: React.PropTypes.oneOf(['top-left', 'top-rigth', 'bottom-left', 'bottom-rigth'])
        },
        enumerable: true
    }]);

    return MaterialMenu;
})(React.Component);

var MaterialMenuItem = (function (_React$Component16) {
    function MaterialMenuItem() {
        _classCallCheck(this, MaterialMenuItem);

        _get(Object.getPrototypeOf(MaterialMenuItem.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(MaterialMenuItem, _React$Component16);

    _createClass(MaterialMenuItem, [{
        key: 'render',
        value: function render() {
            return React.createElement('li', _extends({}, this.props, { className: 'mdl-menu__item' }));
        }
    }]);

    return MaterialMenuItem;
})(React.Component);

var MaterialSpinner = (function (_React$Component17) {
    function MaterialSpinner() {
        _classCallCheck(this, MaterialSpinner);

        _get(Object.getPrototypeOf(MaterialSpinner.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(MaterialSpinner, _React$Component17);

    _createClass(MaterialSpinner, [{
        key: 'render',
        value: function render() {
            var classList = React.addons.classSet({
                'mdl-spinner': true,
                'mdl-js-spinner': true,
                'is-active': this.props.isActive,
                'mdl-spinner--single-color': this.props.singleColor
            });

            return React.createElement(
                'div',
                _extends({}, this.props, { className: classList }),
                this.props.children
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            isActive: React.PropTypes.bool,
            singleColor: React.PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            isActive: true
        },
        enumerable: true
    }]);

    return MaterialSpinner;
})(React.Component);

var MaterialSwitch = (function (_React$Component18) {
    function MaterialSwitch() {
        _classCallCheck(this, MaterialSwitch);

        _get(Object.getPrototypeOf(MaterialSwitch.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(MaterialSwitch, _React$Component18);

    _createClass(MaterialSwitch, [{
        key: 'render',
        value: function render() {
            var classList = React.addons.classSet({
                'mdl-switch': true,
                'mdl-js-switch': true,
                'mdl-js-ripple-effect': this.props.ripple,
                'is-disabled': this.props.disabled,
                'is-checked': this.props.checked,
                'is-upgraded': this.props.isUpgraded
            });

            var _props3 = this.props;
            var children = _props3.children;

            var props = _objectWithoutProperties(_props3, ['children']);

            return React.createElement(
                'label',
                { className: classList, htmlFor: this.props.id },
                React.createElement('input', _extends({}, props, { type: 'checkbox', className: 'mdl-switch__input' })),
                React.createElement(
                    'span',
                    { className: 'mdl-switch__label' },
                    children
                )
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            id: React.PropTypes.string.isRequired,
            checked: React.PropTypes.bool,
            disabled: React.PropTypes.bool,
            isUpgraded: React.PropTypes.bool
        },
        enumerable: true
    }]);

    return MaterialSwitch;
})(React.Component);

var MaterialTabs = (function (_React$Component19) {
    function MaterialTabs() {
        _classCallCheck(this, MaterialTabs);

        _get(Object.getPrototypeOf(MaterialTabs.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(MaterialTabs, _React$Component19);

    _createClass(MaterialTabs, [{
        key: 'render',
        value: function render() {
            var classList = React.addons.classSet({
                'mdl-tabs': true,
                'mdl-js-tabs': true,
                'mdl-js-ripple-effect': this.props.ripple
            });

            return React.createElement('div', _extends({}, this.props, { className: classList }));
        }
    }], [{
        key: 'propTypes',
        value: {
            ripple: React.PropTypes.bool
        },
        enumerable: true
    }]);

    return MaterialTabs;
})(React.Component);

var MaterialTabsBar = (function (_React$Component20) {
    function MaterialTabsBar() {
        _classCallCheck(this, MaterialTabsBar);

        _get(Object.getPrototypeOf(MaterialTabsBar.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(MaterialTabsBar, _React$Component20);

    _createClass(MaterialTabsBar, [{
        key: 'render',
        value: function render() {
            var classList = React.addons.classSet({
                'mdl-tabs__tab-bar': true
            });

            return React.createElement('div', _extends({}, this.props, { className: classList }));
        }
    }]);

    return MaterialTabsBar;
})(React.Component);

var MaterialTabsTab = (function (_React$Component21) {
    function MaterialTabsTab() {
        _classCallCheck(this, MaterialTabsTab);

        _get(Object.getPrototypeOf(MaterialTabsTab.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(MaterialTabsTab, _React$Component21);

    _createClass(MaterialTabsTab, [{
        key: 'render',
        value: function render() {
            var classList = React.addons.classSet({
                'mdl-tabs__tab': true,
                'is-active': this.props.isActive
            });

            return React.createElement('a', _extends({}, this.props, { className: classList }));
        }
    }], [{
        key: 'propTypes',
        value: {
            isActive: React.PropTypes.bool
        },
        enumerable: true
    }]);

    return MaterialTabsTab;
})(React.Component);

var MaterialTabsPanel = (function (_React$Component22) {
    function MaterialTabsPanel() {
        _classCallCheck(this, MaterialTabsPanel);

        _get(Object.getPrototypeOf(MaterialTabsPanel.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(MaterialTabsPanel, _React$Component22);

    _createClass(MaterialTabsPanel, [{
        key: 'render',
        value: function render() {
            var classList = React.addons.classSet({
                'mdl-tabs__panel': true,
                'is-active': this.props.isActive
            });

            return React.createElement('div', _extends({}, this.props, { className: classList }));
        }
    }], [{
        key: 'propTypes',
        value: {
            isActive: React.PropTypes.bool
        },
        enumerable: true
    }]);

    return MaterialTabsPanel;
})(React.Component);

var MaterialCheckBoxUpgraded = (function (_React$Component23) {
    function MaterialCheckBoxUpgraded(props) {
        _classCallCheck(this, MaterialCheckBoxUpgraded);

        _get(Object.getPrototypeOf(MaterialCheckBoxUpgraded.prototype), 'constructor', this).call(this, props);

        this.Constant_ = {
            TINY_TIMEOUT: 1
        };

        this.CssClasses_ = {
            INPUT: 'mdl-checkbox__input',
            BOX_OUTLINE: 'mdl-checkbox__box-outline',
            FOCUS_HELPER: 'mdl-checkbox__focus-helper',
            TICK_OUTLINE: 'mdl-checkbox__tick-outline',
            RIPPLE_EFFECT: 'mdl-js-ripple-effect',
            RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
            RIPPLE_CONTAINER: 'mdl-checkbox__ripple-container',
            RIPPLE_CENTER: 'mdl-ripple--center',
            RIPPLE: 'mdl-ripple',
            IS_FOCUSED: 'is-focused',
            IS_DISABLED: 'is-disabled',
            IS_CHECKED: 'is-checked',
            IS_UPGRADED: 'is-upgraded'
        };

        this.classList = new Set(['mdl-checkbox', 'mdl-js-checkbox', this.CssClasses_.IS_UPGRADED]);

        this.onChange = (function (event) {
            this.setState({
                checked: !this.state.checked
            });
        }).bind(this);

        this.onFocus = (function (event) {
            this.setState({
                focused: true
            });
        }).bind(this);

        this.onMouseUp = (function (event) {
            this.blur();
        }).bind(this);

        this.onBlur = (function (event) {
            this.blur();
        }).bind(this);

        this.blur = function () {
            window.setTimeout((function () {
                this.setState({
                    focused: false
                });
            }).bind(this), this.Constant_.TINY_TIMEOUT);
        };

        this.state = {
            checked: this.props.checked || false,
            disabled: this.props.disabled || false,
            focused: false
        };
    }

    _inherits(MaterialCheckBoxUpgraded, _React$Component23);

    _createClass(MaterialCheckBoxUpgraded, [{
        key: 'render',
        value: function render() {
            if (this.state.disabled) {
                this.classList.add(this.CssClasses_.IS_DISABLED);
            } else {
                this.classList['delete'](this.CssClasses_.IS_DISABLED);
            }

            if (this.state.checked) {
                this.classList.add(this.CssClasses_.IS_CHECKED);
            } else {
                this.classList['delete'](this.CssClasses_.IS_CHECKED);
            }

            if (this.state.focused) {
                this.classList.add(this.CssClasses_.IS_FOCUSED);
            } else {
                this.classList['delete'](this.CssClasses_.IS_FOCUSED);
            }

            if (this.props.ripple) {
                this.classList.add(this.CssClasses_.RIPPLE_EFFECT);
                this.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
            }

            var rippleSpan = this.props.ripple ? React.createElement(
                'span',
                { className: 'mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center', onMouseUp: this.onMouseUp, onMouseDown: this.onFocus },
                React.createElement('span', { className: this.CssClasses_.RIPPLE })
            ) : null;

            return React.createElement(
                'label',
                { className: Array.from(this.classList).join(' '), htmlFor: this.props.id },
                React.createElement('input', _extends({}, this.props, { type: 'checkbox', id: this.props.id, className: this.CssClasses_.INPUT, checked: this.state.checked, onChange: this.onChange })),
                React.createElement(
                    'span',
                    { className: 'mdl-checkbox__label' },
                    this.props.label
                ),
                React.createElement('span', { className: this.CssClasses_.FOCUS_HELPER }),
                React.createElement(
                    'span',
                    { className: this.CssClasses_.BOX_OUTLINE },
                    React.createElement('span', { className: this.CssClasses_.TICK_OUTLINE })
                ),
                rippleSpan
            );
        }
    }]);

    return MaterialCheckBoxUpgraded;
})(React.Component);

/*onFocus={this.onFocus} onBlur={this.onBlur}*/
//# sourceMappingURL=react-material.js.map