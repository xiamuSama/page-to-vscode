"use strict";
(self["webpackChunkwebpack_test"] = self["webpackChunkwebpack_test"] || []).push([[657],{

/***/ 132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7462);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4942);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5987);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1413);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5671);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3144);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);








// eslint-disable-next-line import/no-extraneous-dependencies



var Checkbox = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(Checkbox, _Component);

  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(Checkbox);

  function Checkbox(props) {
    var _this;

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(this, Checkbox);

    _this = _super.call(this, props);

    _this.handleChange = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange;

      if (disabled) {
        return;
      }

      if (!('checked' in _this.props)) {
        _this.setState({
          checked: e.target.checked
        });
      }

      if (onChange) {
        onChange({
          target: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, _this.props), {}, {
            checked: e.target.checked
          }),
          stopPropagation: function stopPropagation() {
            e.stopPropagation();
          },
          preventDefault: function preventDefault() {
            e.preventDefault();
          },
          nativeEvent: e.nativeEvent
        });
      }
    };

    _this.saveInput = function (node) {
      _this.input = node;
    };

    var checked = 'checked' in props ? props.checked : props.defaultChecked;
    _this.state = {
      checked: checked
    };
    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(Checkbox, [{
    key: "focus",
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          style = _this$props2.style,
          name = _this$props2.name,
          id = _this$props2.id,
          type = _this$props2.type,
          disabled = _this$props2.disabled,
          readOnly = _this$props2.readOnly,
          tabIndex = _this$props2.tabIndex,
          onClick = _this$props2.onClick,
          onFocus = _this$props2.onFocus,
          onBlur = _this$props2.onBlur,
          onKeyDown = _this$props2.onKeyDown,
          onKeyPress = _this$props2.onKeyPress,
          onKeyUp = _this$props2.onKeyUp,
          autoFocus = _this$props2.autoFocus,
          value = _this$props2.value,
          required = _this$props2.required,
          others = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(_this$props2, ["prefixCls", "className", "style", "name", "id", "type", "disabled", "readOnly", "tabIndex", "onClick", "onFocus", "onBlur", "onKeyDown", "onKeyPress", "onKeyUp", "autoFocus", "value", "required"]);

      var globalProps = Object.keys(others).reduce(function (prev, key) {
        if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
          // eslint-disable-next-line no-param-reassign
          prev[key] = others[key];
        }

        return prev;
      }, {});
      var checked = this.state.checked;
      var classString = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className, (_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(_classNames, "".concat(prefixCls, "-checked"), checked), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: classString,
        style: style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)({
        name: name,
        id: id,
        type: type,
        required: required,
        readOnly: readOnly,
        disabled: disabled,
        tabIndex: tabIndex,
        className: "".concat(prefixCls, "-input"),
        checked: !!checked,
        onClick: onClick,
        onFocus: onFocus,
        onBlur: onBlur,
        onKeyUp: onKeyUp,
        onKeyDown: onKeyDown,
        onKeyPress: onKeyPress,
        onChange: this.handleChange,
        autoFocus: autoFocus,
        ref: this.saveInput,
        value: value
      }, globalProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "".concat(prefixCls, "-inner")
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if ('checked' in props) {
        return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, state), {}, {
          checked: props.checked
        });
      }

      return null;
    }
  }]);

  return Checkbox;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

Checkbox.defaultProps = {
  prefixCls: 'rc-checkbox',
  className: '',
  style: {},
  type: 'checkbox',
  defaultChecked: false,
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  onKeyDown: function onKeyDown() {},
  onKeyPress: function onKeyPress() {},
  onKeyUp: function onKeyUp() {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 826 == __webpack_require__.j ? (Checkbox) : null));

/***/ }),

/***/ 2890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7462);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5987);
}
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4942);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1413);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9062);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5671);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3144);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7326);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9388);
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(344);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(334);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7294);
/* harmony import */ var _FieldContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8665);
/* harmony import */ var _utils_typeUtil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3409);
/* harmony import */ var _utils_validateUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(416);
/* harmony import */ var _utils_valueUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3236);










var _excluded = (/* runtime-dependent pure expression or super */ 826 == __webpack_require__.j ? (["name"]) : null);







var EMPTY_ERRORS = [];

function requireUpdate(shouldUpdate, prev, next, prevValue, nextValue, info) {
  if (typeof shouldUpdate === 'function') {
    return shouldUpdate(prev, next, 'source' in info ? {
      source: info.source
    } : {});
  }

  return prevValue !== nextValue;
} // We use Class instead of Hooks here since it will cost much code by using Hooks.


var Field = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(Field, _React$Component);

  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(Field);

  /**
   * Follow state should not management in State since it will async update by React.
   * This makes first render of form can not get correct state value.
   */

  /**
   * Mark when touched & validated. Currently only used for `dependencies`.
   * Note that we do not think field with `initialValue` is dirty
   * but this will be by `isFieldDirty` func.
   */
  // ============================== Subscriptions ==============================
  function Field(props) {
    var _this;

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(this, Field);

    _this = _super.call(this, props); // Register on init

    _this.state = {
      resetCount: 0
    };
    _this.cancelRegisterFunc = null;
    _this.mounted = false;
    _this.touched = false;
    _this.dirty = false;
    _this.validatePromise = null;
    _this.prevValidating = void 0;
    _this.errors = EMPTY_ERRORS;
    _this.warnings = EMPTY_ERRORS;

    _this.cancelRegister = function () {
      var _this$props = _this.props,
          preserve = _this$props.preserve,
          isListField = _this$props.isListField,
          name = _this$props.name;

      if (_this.cancelRegisterFunc) {
        _this.cancelRegisterFunc(isListField, preserve, (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_8__/* .getNamePath */ .gU)(name));
      }

      _this.cancelRegisterFunc = null;
    };

    _this.getNamePath = function () {
      var _this$props2 = _this.props,
          name = _this$props2.name,
          fieldContext = _this$props2.fieldContext;
      var _fieldContext$prefixN = fieldContext.prefixName,
          prefixName = _fieldContext$prefixN === void 0 ? [] : _fieldContext$prefixN;
      return name !== undefined ? [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(prefixName), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(name)) : [];
    };

    _this.getRules = function () {
      var _this$props3 = _this.props,
          _this$props3$rules = _this$props3.rules,
          rules = _this$props3$rules === void 0 ? [] : _this$props3$rules,
          fieldContext = _this$props3.fieldContext;
      return rules.map(function (rule) {
        if (typeof rule === 'function') {
          return rule(fieldContext);
        }

        return rule;
      });
    };

    _this.refresh = function () {
      if (!_this.mounted) return;
      /**
       * Clean up current node.
       */

      _this.setState(function (_ref) {
        var resetCount = _ref.resetCount;
        return {
          resetCount: resetCount + 1
        };
      });
    };

    _this.triggerMetaEvent = function (destroy) {
      var onMetaChange = _this.props.onMetaChange;
      onMetaChange === null || onMetaChange === void 0 ? void 0 : onMetaChange((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)({}, _this.getMeta()), {}, {
        destroy: destroy
      }));
    };

    _this.onStoreChange = function (prevStore, namePathList, info) {
      var _this$props4 = _this.props,
          shouldUpdate = _this$props4.shouldUpdate,
          _this$props4$dependen = _this$props4.dependencies,
          dependencies = _this$props4$dependen === void 0 ? [] : _this$props4$dependen,
          onReset = _this$props4.onReset;
      var store = info.store;

      var namePath = _this.getNamePath();

      var prevValue = _this.getValue(prevStore);

      var curValue = _this.getValue(store);

      var namePathMatch = namePathList && (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_8__/* .containsNamePath */ .T1)(namePathList, namePath); // `setFieldsValue` is a quick access to update related status

      if (info.type === 'valueUpdate' && info.source === 'external' && prevValue !== curValue) {
        _this.touched = true;
        _this.dirty = true;
        _this.validatePromise = null;
        _this.errors = EMPTY_ERRORS;
        _this.warnings = EMPTY_ERRORS;

        _this.triggerMetaEvent();
      }

      switch (info.type) {
        case 'reset':
          if (!namePathList || namePathMatch) {
            // Clean up state
            _this.touched = false;
            _this.dirty = false;
            _this.validatePromise = null;
            _this.errors = EMPTY_ERRORS;
            _this.warnings = EMPTY_ERRORS;

            _this.triggerMetaEvent();

            onReset === null || onReset === void 0 ? void 0 : onReset();

            _this.refresh();

            return;
          }

          break;

        /**
         * In case field with `preserve = false` nest deps like:
         * - A = 1 => show B
         * - B = 1 => show C
         * - Reset A, need clean B, C
         */

        case 'remove':
          {
            if (shouldUpdate) {
              _this.reRender();

              return;
            }

            break;
          }

        case 'setField':
          {
            if (namePathMatch) {
              var data = info.data;

              if ('touched' in data) {
                _this.touched = data.touched;
              }

              if ('validating' in data && !('originRCField' in data)) {
                _this.validatePromise = data.validating ? Promise.resolve([]) : null;
              }

              if ('errors' in data) {
                _this.errors = data.errors || EMPTY_ERRORS;
              }

              if ('warnings' in data) {
                _this.warnings = data.warnings || EMPTY_ERRORS;
              }

              _this.dirty = true;

              _this.triggerMetaEvent();

              _this.reRender();

              return;
            } // Handle update by `setField` with `shouldUpdate`


            if (shouldUpdate && !namePath.length && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
              _this.reRender();

              return;
            }

            break;
          }

        case 'dependenciesUpdate':
          {
            /**
             * Trigger when marked `dependencies` updated. Related fields will all update
             */
            var dependencyList = dependencies.map(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_8__/* .getNamePath */ .gU); // No need for `namePathMath` check and `shouldUpdate` check, since `valueUpdate` will be
            // emitted earlier and they will work there
            // If set it may cause unnecessary twice rerendering

            if (dependencyList.some(function (dependency) {
              return (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_8__/* .containsNamePath */ .T1)(info.relatedFields, dependency);
            })) {
              _this.reRender();

              return;
            }

            break;
          }

        default:
          // 1. If `namePath` exists in `namePathList`, means it's related value and should update
          //      For example <List name="list"><Field name={['list', 0]}></List>
          //      If `namePathList` is [['list']] (List value update), Field should be updated
          //      If `namePathList` is [['list', 0]] (Field value update), List shouldn't be updated
          // 2.
          //   2.1 If `dependencies` is set, `name` is not set and `shouldUpdate` is not set,
          //       don't use `shouldUpdate`. `dependencies` is view as a shortcut if `shouldUpdate`
          //       is not provided
          //   2.2 If `shouldUpdate` provided, use customize logic to update the field
          //       else to check if value changed
          if (namePathMatch || (!dependencies.length || namePath.length || shouldUpdate) && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
            _this.reRender();

            return;
          }

          break;
      }

      if (shouldUpdate === true) {
        _this.reRender();
      }
    };

    _this.validateRules = function (options) {
      // We should fixed namePath & value to avoid developer change then by form function
      var namePath = _this.getNamePath();

      var currentValue = _this.getValue(); // Force change to async to avoid rule OOD under renderProps field


      var rootPromise = Promise.resolve().then(function () {
        if (!_this.mounted) {
          return [];
        }

        var _this$props5 = _this.props,
            _this$props5$validate = _this$props5.validateFirst,
            validateFirst = _this$props5$validate === void 0 ? false : _this$props5$validate,
            messageVariables = _this$props5.messageVariables;

        var _ref2 = options || {},
            triggerName = _ref2.triggerName;

        var filteredRules = _this.getRules();

        if (triggerName) {
          filteredRules = filteredRules.filter(function (rule) {
            var validateTrigger = rule.validateTrigger;

            if (!validateTrigger) {
              return true;
            }

            var triggerList = (0,_utils_typeUtil__WEBPACK_IMPORTED_MODULE_11__/* .toArray */ .q)(validateTrigger);
            return triggerList.includes(triggerName);
          });
        }

        var promise = (0,_utils_validateUtil__WEBPACK_IMPORTED_MODULE_4__/* .validateRules */ .N)(namePath, currentValue, filteredRules, options, validateFirst, messageVariables);
        promise.catch(function (e) {
          return e;
        }).then(function () {
          var ruleErrors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : EMPTY_ERRORS;

          if (_this.validatePromise === rootPromise) {
            _this.validatePromise = null; // Get errors & warnings

            var nextErrors = [];
            var nextWarnings = [];
            ruleErrors.forEach(function (_ref3) {
              var warningOnly = _ref3.rule.warningOnly,
                  _ref3$errors = _ref3.errors,
                  errors = _ref3$errors === void 0 ? EMPTY_ERRORS : _ref3$errors;

              if (warningOnly) {
                nextWarnings.push.apply(nextWarnings, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(errors));
              } else {
                nextErrors.push.apply(nextErrors, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(errors));
              }
            });
            _this.errors = nextErrors;
            _this.warnings = nextWarnings;

            _this.triggerMetaEvent();

            _this.reRender();
          }
        });
        return promise;
      });
      _this.validatePromise = rootPromise;
      _this.dirty = true;
      _this.errors = EMPTY_ERRORS;
      _this.warnings = EMPTY_ERRORS;

      _this.triggerMetaEvent(); // Force trigger re-render since we need sync renderProps with new meta


      _this.reRender();

      return rootPromise;
    };

    _this.isFieldValidating = function () {
      return !!_this.validatePromise;
    };

    _this.isFieldTouched = function () {
      return _this.touched;
    };

    _this.isFieldDirty = function () {
      // Touched or validate or has initialValue
      if (_this.dirty || _this.props.initialValue !== undefined) {
        return true;
      } // Form set initialValue


      var fieldContext = _this.props.fieldContext;

      var _fieldContext$getInte = fieldContext.getInternalHooks(_FieldContext__WEBPACK_IMPORTED_MODULE_3__/* .HOOK_MARK */ .k),
          getInitialValue = _fieldContext$getInte.getInitialValue;

      if (getInitialValue(_this.getNamePath()) !== undefined) {
        return true;
      }

      return false;
    };

    _this.getErrors = function () {
      return _this.errors;
    };

    _this.getWarnings = function () {
      return _this.warnings;
    };

    _this.isListField = function () {
      return _this.props.isListField;
    };

    _this.isList = function () {
      return _this.props.isList;
    };

    _this.isPreserve = function () {
      return _this.props.preserve;
    };

    _this.getMeta = function () {
      // Make error & validating in cache to save perf
      _this.prevValidating = _this.isFieldValidating();
      var meta = {
        touched: _this.isFieldTouched(),
        validating: _this.prevValidating,
        errors: _this.errors,
        warnings: _this.warnings,
        name: _this.getNamePath()
      };
      return meta;
    };

    _this.getOnlyChild = function (children) {
      // Support render props
      if (typeof children === 'function') {
        var meta = _this.getMeta();

        return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)({}, _this.getOnlyChild(children(_this.getControlled(), meta, _this.props.fieldContext))), {}, {
          isFunction: true
        });
      } // Filed element only


      var childList = (0,rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(children);

      if (childList.length !== 1 || ! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.isValidElement(childList[0])) {
        return {
          child: childList,
          isFunction: false
        };
      }

      return {
        child: childList[0],
        isFunction: false
      };
    };

    _this.getValue = function (store) {
      var getFieldsValue = _this.props.fieldContext.getFieldsValue;

      var namePath = _this.getNamePath();

      return (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(store || getFieldsValue(true), namePath);
    };

    _this.getControlled = function () {
      var childProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props6 = _this.props,
          trigger = _this$props6.trigger,
          validateTrigger = _this$props6.validateTrigger,
          getValueFromEvent = _this$props6.getValueFromEvent,
          normalize = _this$props6.normalize,
          valuePropName = _this$props6.valuePropName,
          getValueProps = _this$props6.getValueProps,
          fieldContext = _this$props6.fieldContext;
      var mergedValidateTrigger = validateTrigger !== undefined ? validateTrigger : fieldContext.validateTrigger;

      var namePath = _this.getNamePath();

      var getInternalHooks = fieldContext.getInternalHooks,
          getFieldsValue = fieldContext.getFieldsValue;

      var _getInternalHooks = getInternalHooks(_FieldContext__WEBPACK_IMPORTED_MODULE_3__/* .HOOK_MARK */ .k),
          dispatch = _getInternalHooks.dispatch;

      var value = _this.getValue();

      var mergedGetValueProps = getValueProps || function (val) {
        return (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)({}, valuePropName, val);
      }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


      var originTriggerFunc = childProps[trigger];

      var control = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)({}, childProps), mergedGetValueProps(value)); // Add trigger


      control[trigger] = function () {
        // Mark as touched
        _this.touched = true;
        _this.dirty = true;

        _this.triggerMetaEvent();

        var newValue;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (getValueFromEvent) {
          newValue = getValueFromEvent.apply(void 0, args);
        } else {
          newValue = _utils_valueUtil__WEBPACK_IMPORTED_MODULE_8__/* .defaultGetValueFromEvent.apply */ .iZ.apply(void 0, [valuePropName].concat(args));
        }

        if (normalize) {
          newValue = normalize(newValue, value, getFieldsValue(true));
        }

        dispatch({
          type: 'updateValue',
          namePath: namePath,
          value: newValue
        });

        if (originTriggerFunc) {
          originTriggerFunc.apply(void 0, args);
        }
      }; // Add validateTrigger


      var validateTriggerList = (0,_utils_typeUtil__WEBPACK_IMPORTED_MODULE_11__/* .toArray */ .q)(mergedValidateTrigger || []);
      validateTriggerList.forEach(function (triggerName) {
        // Wrap additional function of component, so that we can get latest value from store
        var originTrigger = control[triggerName];

        control[triggerName] = function () {
          if (originTrigger) {
            originTrigger.apply(void 0, arguments);
          } // Always use latest rules


          var rules = _this.props.rules;

          if (rules && rules.length) {
            // We dispatch validate to root,
            // since it will update related data with other field with same name
            dispatch({
              type: 'validateField',
              namePath: namePath,
              triggerName: triggerName
            });
          }
        };
      });
      return control;
    };

    if (props.fieldContext) {
      var getInternalHooks = props.fieldContext.getInternalHooks;

      var _getInternalHooks2 = getInternalHooks(_FieldContext__WEBPACK_IMPORTED_MODULE_3__/* .HOOK_MARK */ .k),
          initEntityValue = _getInternalHooks2.initEntityValue;

      initEntityValue((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(_this));
    }

    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(Field, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props7 = this.props,
          shouldUpdate = _this$props7.shouldUpdate,
          fieldContext = _this$props7.fieldContext;
      this.mounted = true; // Register on init

      if (fieldContext) {
        var getInternalHooks = fieldContext.getInternalHooks;

        var _getInternalHooks3 = getInternalHooks(_FieldContext__WEBPACK_IMPORTED_MODULE_3__/* .HOOK_MARK */ .k),
            registerField = _getInternalHooks3.registerField;

        this.cancelRegisterFunc = registerField(this);
      } // One more render for component in case fields not ready


      if (shouldUpdate === true) {
        this.reRender();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelRegister();
      this.triggerMetaEvent(true);
      this.mounted = false;
    }
  }, {
    key: "reRender",
    value: function reRender() {
      if (!this.mounted) return;
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var resetCount = this.state.resetCount;
      var children = this.props.children;

      var _this$getOnlyChild = this.getOnlyChild(children),
          child = _this$getOnlyChild.child,
          isFunction = _this$getOnlyChild.isFunction; // Not need to `cloneElement` since user can handle this in render function self


      var returnChildNode;

      if (isFunction) {
        returnChildNode = child;
      } else if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.isValidElement(child)) {
        returnChildNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(child, this.getControlled(child.props));
      } else {
        (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(!child, '`children` of Field is not validate ReactElement.');
        returnChildNode = child;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        key: resetCount
      }, returnChildNode);
    }
  }]);

  return Field;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

Field.contextType = _FieldContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z;
Field.defaultProps = {
  trigger: 'onChange',
  valuePropName: 'value'
};

function WrapperField(_ref5) {
  var name = _ref5.name,
      restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_ref5, _excluded);

  var fieldContext = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_FieldContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
  var namePath = name !== undefined ? (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_8__/* .getNamePath */ .gU)(name) : undefined;
  var key = 'keep';

  if (!restProps.isListField) {
    key = "_".concat((namePath || []).join('_'));
  } // Warning if it's a directly list field.
  // We can still support multiple level field preserve.


  if (false) {}

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Field, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)({
    key: key,
    name: namePath
  }, restProps, {
    fieldContext: fieldContext
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 826 == __webpack_require__.j ? (WrapperField) : null));

/***/ }),

/***/ 8665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "k": () => (/* binding */ HOOK_MARK)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(334);


var HOOK_MARK = 'RC_FORM_INTERNAL_HOOKS'; // eslint-disable-next-line @typescript-eslint/no-explicit-any

var warningFunc = function warningFunc() {
  (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(false, 'Can not find FormContext. Please make sure you wrap Field under Form.');
};

var Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  getFieldValue: warningFunc,
  getFieldsValue: warningFunc,
  getFieldError: warningFunc,
  getFieldWarning: warningFunc,
  getFieldsError: warningFunc,
  isFieldsTouched: warningFunc,
  isFieldTouched: warningFunc,
  isFieldValidating: warningFunc,
  isFieldsValidating: warningFunc,
  resetFields: warningFunc,
  setFields: warningFunc,
  setFieldsValue: warningFunc,
  validateFields: warningFunc,
  submit: warningFunc,
  getInternalHooks: function getInternalHooks() {
    warningFunc();
    return {
      dispatch: warningFunc,
      initEntityValue: warningFunc,
      registerField: warningFunc,
      useSubscribe: warningFunc,
      setInitialValues: warningFunc,
      destroyForm: warningFunc,
      setCallbacks: warningFunc,
      registerWatch: warningFunc,
      getFields: warningFunc,
      setValidateMessages: warningFunc,
      setPreserve: warningFunc,
      getInitialValue: warningFunc
    };
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 826 == __webpack_require__.j ? (Context) : null));

/***/ }),

/***/ 5318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7462);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1413);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3324);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5987);
}
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _useForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5918);
/* harmony import */ var _FieldContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8665);
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1696);
if (826 == __webpack_require__.j) {
	/* harmony import */ var _utils_valueUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3236);
}




var _excluded = (/* runtime-dependent pure expression or super */ 826 == __webpack_require__.j ? (["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"]) : null);






var Form = function Form(_ref, ref) {
  var name = _ref.name,
      initialValues = _ref.initialValues,
      fields = _ref.fields,
      form = _ref.form,
      preserve = _ref.preserve,
      children = _ref.children,
      _ref$component = _ref.component,
      Component = _ref$component === void 0 ? 'form' : _ref$component,
      validateMessages = _ref.validateMessages,
      _ref$validateTrigger = _ref.validateTrigger,
      validateTrigger = _ref$validateTrigger === void 0 ? 'onChange' : _ref$validateTrigger,
      onValuesChange = _ref.onValuesChange,
      _onFieldsChange = _ref.onFieldsChange,
      _onFinish = _ref.onFinish,
      onFinishFailed = _ref.onFinishFailed,
      restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_ref, _excluded);

  var formContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_FormContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z); // We customize handle event since Context will makes all the consumer re-render:
  // https://reactjs.org/docs/context.html#contextprovider

  var _useForm = (0,_useForm__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(form),
      _useForm2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_useForm, 1),
      formInstance = _useForm2[0];

  var _formInstance$getInte = formInstance.getInternalHooks(_FieldContext__WEBPACK_IMPORTED_MODULE_2__/* .HOOK_MARK */ .k),
      useSubscribe = _formInstance$getInte.useSubscribe,
      setInitialValues = _formInstance$getInte.setInitialValues,
      setCallbacks = _formInstance$getInte.setCallbacks,
      setValidateMessages = _formInstance$getInte.setValidateMessages,
      setPreserve = _formInstance$getInte.setPreserve,
      destroyForm = _formInstance$getInte.destroyForm; // Pass ref with form instance


  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, function () {
    return formInstance;
  }); // Register form into Context

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    formContext.registerForm(name, formInstance);
    return function () {
      formContext.unregisterForm(name);
    };
  }, [formContext, formInstance, name]); // Pass props to store

  setValidateMessages((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, formContext.validateMessages), validateMessages));
  setCallbacks({
    onValuesChange: onValuesChange,
    onFieldsChange: function onFieldsChange(changedFields) {
      formContext.triggerFormChange(name, changedFields);

      if (_onFieldsChange) {
        for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          rest[_key - 1] = arguments[_key];
        }

        _onFieldsChange.apply(void 0, [changedFields].concat(rest));
      }
    },
    onFinish: function onFinish(values) {
      formContext.triggerFormFinish(name, values);

      if (_onFinish) {
        _onFinish(values);
      }
    },
    onFinishFailed: onFinishFailed
  });
  setPreserve(preserve); // Set initial value, init store value when first mount

  var mountRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  setInitialValues(initialValues, !mountRef.current);

  if (!mountRef.current) {
    mountRef.current = true;
  }

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    return destroyForm;
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  []); // Prepare children by `children` type

  var childrenNode;
  var childrenRenderProps = typeof children === 'function';

  if (childrenRenderProps) {
    var values = formInstance.getFieldsValue(true);
    childrenNode = children(values, formInstance);
  } else {
    childrenNode = children;
  } // Not use subscribe when using render props


  useSubscribe(!childrenRenderProps); // Listen if fields provided. We use ref to save prev data here to avoid additional render

  var prevFieldsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (!(0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_7__/* .isSimilar */ .T0)(prevFieldsRef.current || [], fields || [])) {
      formInstance.setFields(fields || []);
    }

    prevFieldsRef.current = fields;
  }, [fields, formInstance]);
  var formContextValue = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, formInstance), {}, {
      validateTrigger: validateTrigger
    });
  }, [formInstance, validateTrigger]);
  var wrapperNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FieldContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Provider */ .Z.Provider, {
    value: formContextValue
  }, childrenNode);

  if (Component === false) {
    return wrapperNode;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({}, restProps, {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      formInstance.submit();
    },
    onReset: function onReset(event) {
      var _restProps$onReset;

      event.preventDefault();
      formInstance.resetFields();
      (_restProps$onReset = restProps.onReset) === null || _restProps$onReset === void 0 ? void 0 : _restProps$onReset.call(restProps, event);
    }
  }), wrapperNode);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 826 == __webpack_require__.j ? (Form) : null));

/***/ }),

/***/ 1696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ FormProvider),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4942);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1413);
}
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);



var FormContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  triggerFormChange: function triggerFormChange() {},
  triggerFormFinish: function triggerFormFinish() {},
  registerForm: function registerForm() {},
  unregisterForm: function unregisterForm() {}
});

var FormProvider = function FormProvider(_ref) {
  var validateMessages = _ref.validateMessages,
      onFormChange = _ref.onFormChange,
      onFormFinish = _ref.onFormFinish,
      children = _ref.children;
  var formContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(FormContext);
  var formsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormContext.Provider, {
    value: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({}, formContext), {}, {
      validateMessages: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({}, formContext.validateMessages), validateMessages),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function triggerFormChange(name, changedFields) {
        if (onFormChange) {
          onFormChange(name, {
            changedFields: changedFields,
            forms: formsRef.current
          });
        }

        formContext.triggerFormChange(name, changedFields);
      },
      triggerFormFinish: function triggerFormFinish(name, values) {
        if (onFormFinish) {
          onFormFinish(name, {
            values: values,
            forms: formsRef.current
          });
        }

        formContext.triggerFormFinish(name, values);
      },
      registerForm: function registerForm(name, form) {
        if (name) {
          formsRef.current = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({}, formsRef.current), {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({}, name, form));
        }

        formContext.registerForm(name, form);
      },
      unregisterForm: function unregisterForm(name) {
        var newForms = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({}, formsRef.current);

        delete newForms[name];
        formsRef.current = newForms;
        formContext.unregisterForm(name);
      }
    })
  }, children);
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 826 == __webpack_require__.j ? (FormContext) : null));

/***/ }),

/***/ 5378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1413);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9062);
}
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(334);
/* harmony import */ var _FieldContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8665);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2890);
if (826 == __webpack_require__.j) {
	/* harmony import */ var _utils_valueUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3236);
}
/* harmony import */ var _ListContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2131);









var List = function List(_ref) {
  var name = _ref.name,
      initialValue = _ref.initialValue,
      children = _ref.children,
      rules = _ref.rules,
      validateTrigger = _ref.validateTrigger;
  var context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_FieldContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
  var keyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
    keys: [],
    id: 0
  });
  var keyManager = keyRef.current;
  var prefixName = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    var parentPrefixName = (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_5__/* .getNamePath */ .gU)(context.prefixName) || [];
    return [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(parentPrefixName), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)((0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_5__/* .getNamePath */ .gU)(name)));
  }, [context.prefixName, name]);
  var fieldContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, context), {}, {
      prefixName: prefixName
    });
  }, [context, prefixName]); // List context

  var listContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return {
      getKey: function getKey(namePath) {
        var len = prefixName.length;
        var pathName = namePath[len];
        return [keyManager.keys[pathName], namePath.slice(len + 1)];
      }
    };
  }, [prefixName]); // User should not pass `children` as other type.

  if (typeof children !== 'function') {
    (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(false, 'Form.List only accepts function as children.');
    return null;
  }

  var shouldUpdate = function shouldUpdate(prevValue, nextValue, _ref2) {
    var source = _ref2.source;

    if (source === 'internal') {
      return false;
    }

    return prevValue !== nextValue;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ListContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"].Provider */ .Z.Provider, {
    value: listContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FieldContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Provider */ .Z.Provider, {
    value: fieldContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Field__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    name: [],
    shouldUpdate: shouldUpdate,
    rules: rules,
    validateTrigger: validateTrigger,
    initialValue: initialValue,
    isList: true
  }, function (_ref3, meta) {
    var _ref3$value = _ref3.value,
        value = _ref3$value === void 0 ? [] : _ref3$value,
        onChange = _ref3.onChange;
    var getFieldValue = context.getFieldValue;

    var getNewValue = function getNewValue() {
      var values = getFieldValue(prefixName || []);
      return values || [];
    };
    /**
     * Always get latest value in case user update fields by `form` api.
     */


    var operations = {
      add: function add(defaultValue, index) {
        // Mapping keys
        var newValue = getNewValue();

        if (index >= 0 && index <= newValue.length) {
          keyManager.keys = [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(keyManager.keys.slice(0, index)), [keyManager.id], (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(keyManager.keys.slice(index)));
          onChange([].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(newValue.slice(0, index)), [defaultValue], (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(newValue.slice(index))));
        } else {
          if (false) {}

          keyManager.keys = [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(keyManager.keys), [keyManager.id]);
          onChange([].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(newValue), [defaultValue]));
        }

        keyManager.id += 1;
      },
      remove: function remove(index) {
        var newValue = getNewValue();
        var indexSet = new Set(Array.isArray(index) ? index : [index]);

        if (indexSet.size <= 0) {
          return;
        }

        keyManager.keys = keyManager.keys.filter(function (_, keysIndex) {
          return !indexSet.has(keysIndex);
        }); // Trigger store change

        onChange(newValue.filter(function (_, valueIndex) {
          return !indexSet.has(valueIndex);
        }));
      },
      move: function move(from, to) {
        if (from === to) {
          return;
        }

        var newValue = getNewValue(); // Do not handle out of range

        if (from < 0 || from >= newValue.length || to < 0 || to >= newValue.length) {
          return;
        }

        keyManager.keys = (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_5__/* .move */ .pB)(keyManager.keys, from, to); // Trigger store change

        onChange((0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_5__/* .move */ .pB)(newValue, from, to));
      }
    };
    var listValue = value || [];

    if (!Array.isArray(listValue)) {
      listValue = [];

      if (false) {}
    }

    return children(listValue.map(function (__, index) {
      var key = keyManager.keys[index];

      if (key === undefined) {
        keyManager.keys[index] = keyManager.id;
        key = keyManager.keys[index];
        keyManager.id += 1;
      }

      return {
        name: index,
        key: key,
        isListField: true
      };
    }), operations, meta);
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 826 == __webpack_require__.j ? (List) : null));

/***/ }),

/***/ 2131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

var ListContext = /*#__PURE__*/(/* runtime-dependent pure expression or super */ 826 == __webpack_require__.j ? (react__WEBPACK_IMPORTED_MODULE_0__.createContext(null)) : null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 826 == __webpack_require__.j ? (ListContext) : null));

/***/ })

}]);