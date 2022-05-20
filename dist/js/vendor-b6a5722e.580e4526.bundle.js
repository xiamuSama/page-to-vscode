"use strict";
(self["webpackChunkwebpack_test"] = self["webpackChunkwebpack_test"] || []).push([[656],{

/***/ 3587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CSSMotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5662);
/* harmony import */ var _CSSMotionList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4173);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 826 == __webpack_require__.j ? (_CSSMotion__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z) : null));

/***/ }),

/***/ 1279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$D": () => (/* binding */ STEP_START),
/* harmony export */   "Df": () => (/* binding */ STATUS_ENTER),
/* harmony export */   "EQ": () => (/* binding */ STEP_NONE),
/* harmony export */   "LO": () => (/* binding */ STATUS_APPEAR),
/* harmony export */   "cD": () => (/* binding */ STEP_ACTIVATED),
/* harmony export */   "fh": () => (/* binding */ STEP_ACTIVE),
/* harmony export */   "ib": () => (/* binding */ STATUS_NONE),
/* harmony export */   "jf": () => (/* binding */ STATUS_LEAVE),
/* harmony export */   "yH": () => (/* binding */ STEP_PREPARE)
/* harmony export */ });
var STATUS_NONE = 'none';
var STATUS_APPEAR = 'appear';
var STATUS_ENTER = 'enter';
var STATUS_LEAVE = 'leave';
var STEP_NONE = 'none';
var STEP_PREPARE = 'prepare';
var STEP_START = 'start';
var STEP_ACTIVE = 'active';
var STEP_ACTIVATED = 'end';

/***/ }),

/***/ 2378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Td": () => (/* binding */ STATUS_REMOVED),
/* harmony export */   "ff": () => (/* binding */ STATUS_KEEP),
/* harmony export */   "l4": () => (/* binding */ parseKeys),
/* harmony export */   "p4": () => (/* binding */ STATUS_REMOVE),
/* harmony export */   "uz": () => (/* binding */ diffKeys),
/* harmony export */   "zM": () => (/* binding */ STATUS_ADD)
/* harmony export */ });
/* unused harmony export wrapKeyToObject */
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1413);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1002);
}


var STATUS_ADD = 'add';
var STATUS_KEEP = 'keep';
var STATUS_REMOVE = 'remove';
var STATUS_REMOVED = 'removed';
function wrapKeyToObject(key) {
  var keyObj;

  if (key && (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(key) === 'object' && 'key' in key) {
    keyObj = key;
  } else {
    keyObj = {
      key: key
    };
  }

  return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({}, keyObj), {}, {
    key: String(keyObj.key)
  });
}
function parseKeys() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return keys.map(wrapKeyToObject);
}
function diffKeys() {
  var prevKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var currentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var list = [];
  var currentIndex = 0;
  var currentLen = currentKeys.length;
  var prevKeyObjects = parseKeys(prevKeys);
  var currentKeyObjects = parseKeys(currentKeys); // Check prev keys to insert or keep

  prevKeyObjects.forEach(function (keyObj) {
    var hit = false;

    for (var i = currentIndex; i < currentLen; i += 1) {
      var currentKeyObj = currentKeyObjects[i];

      if (currentKeyObj.key === keyObj.key) {
        // New added keys should add before current key
        if (currentIndex < i) {
          list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function (obj) {
            return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({}, obj), {}, {
              status: STATUS_ADD
            });
          }));
          currentIndex = i;
        }

        list.push((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({}, currentKeyObj), {}, {
          status: STATUS_KEEP
        }));
        currentIndex += 1;
        hit = true;
        break;
      }
    } // If not hit, it means key is removed


    if (!hit) {
      list.push((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({}, keyObj), {}, {
        status: STATUS_REMOVE
      }));
    }
  }); // Add rest to the list

  if (currentIndex < currentLen) {
    list = list.concat(currentKeyObjects.slice(currentIndex).map(function (obj) {
      return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({}, obj), {}, {
        status: STATUS_ADD
      });
    }));
  }
  /**
   * Merge same key when it remove and add again:
   *    [1 - add, 2 - keep, 1 - remove] -> [1 - keep, 2 - keep]
   */


  var keys = {};
  list.forEach(function (_ref) {
    var key = _ref.key;
    keys[key] = (keys[key] || 0) + 1;
  });
  var duplicatedKeys = Object.keys(keys).filter(function (key) {
    return keys[key] > 1;
  });
  duplicatedKeys.forEach(function (matchKey) {
    // Remove `STATUS_REMOVE` node.
    list = list.filter(function (_ref2) {
      var key = _ref2.key,
          status = _ref2.status;
      return key !== matchKey || status !== STATUS_REMOVE;
    }); // Update `STATUS_ADD` to `STATUS_KEEP`

    list.forEach(function (node) {
      if (node.key === matchKey) {
        // eslint-disable-next-line no-param-reassign
        node.status = STATUS_KEEP;
      }
    });
  });
  return list;
}

/***/ }),

/***/ 4159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cq": () => (/* binding */ supportTransition),
/* harmony export */   "SG": () => (/* binding */ transitionEndName),
/* harmony export */   "mL": () => (/* binding */ getTransitionName),
/* harmony export */   "nI": () => (/* binding */ animationEndName)
/* harmony export */ });
/* unused harmony exports getVendorPrefixes, getVendorPrefixedEventName */
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1002);
}
/* harmony import */ var rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8924);

 // ================= Transition =================
// Event wrapper. Copy from react source code

function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
  prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
  prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
  prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
  return prefixes;
}

function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd')
  };

  if (domSupport) {
    if (!('AnimationEvent' in win)) {
      delete prefixes.animationend.animation;
    }

    if (!('TransitionEvent' in win)) {
      delete prefixes.transitionend.transition;
    }
  }

  return prefixes;
}
var vendorPrefixes = getVendorPrefixes((0,rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(), typeof window !== 'undefined' ? window : {});
var style = {};

if ((0,rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)()) {
  var _document$createEleme = document.createElement('div');

  style = _document$createEleme.style;
}

var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }

  var prefixMap = vendorPrefixes[eventName];

  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;

    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];

      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }

  return '';
}
var internalAnimationEndName = getVendorPrefixedEventName('animationend');
var internalTransitionEndName = getVendorPrefixedEventName('transitionend');
var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
var animationEndName = internalAnimationEndName || 'animationend';
var transitionEndName = internalTransitionEndName || 'transitionend';
function getTransitionName(transitionName, transitionType) {
  if (!transitionName) return null;

  if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(transitionName) === 'object') {
    var type = transitionType.replace(/-\w/g, function (match) {
      return match[1].toUpperCase();
    });
    return transitionName[type];
  }

  return "".concat(transitionName, "-").concat(transitionType);
}

/***/ }),

/***/ 2906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: 'Page',
  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages',
  page_size: 'Page Size'
});

/***/ }),

/***/ 8758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var locale = {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'OK',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 826 == __webpack_require__.j ? (locale) : null));

/***/ }),

/***/ 3413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4942);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3324);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5987);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1770);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5105);







var Switch = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (_ref, ref) {
  var _classNames;

  var _ref$prefixCls = _ref.prefixCls,
      prefixCls = _ref$prefixCls === void 0 ? 'rc-switch' : _ref$prefixCls,
      className = _ref.className,
      checked = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      disabled = _ref.disabled,
      loadingIcon = _ref.loadingIcon,
      checkedChildren = _ref.checkedChildren,
      unCheckedChildren = _ref.unCheckedChildren,
      onClick = _ref.onClick,
      onChange = _ref.onChange,
      onKeyDown = _ref.onKeyDown,
      restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_ref, ["prefixCls", "className", "checked", "defaultChecked", "disabled", "loadingIcon", "checkedChildren", "unCheckedChildren", "onClick", "onChange", "onKeyDown"]);

  var _useMergedState = (0,rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(false, {
    value: checked,
    defaultValue: defaultChecked
  }),
      _useMergedState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_useMergedState, 2),
      innerChecked = _useMergedState2[0],
      setInnerChecked = _useMergedState2[1];

  function triggerChange(newChecked, event) {
    var mergedChecked = innerChecked;

    if (!disabled) {
      mergedChecked = newChecked;
      setInnerChecked(mergedChecked);
      onChange === null || onChange === void 0 ? void 0 : onChange(mergedChecked, event);
    }

    return mergedChecked;
  }

  function onInternalKeyDown(e) {
    if (e.which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_3__/* ["default"].LEFT */ .Z.LEFT) {
      triggerChange(false, e);
    } else if (e.which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_3__/* ["default"].RIGHT */ .Z.RIGHT) {
      triggerChange(true, e);
    }

    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
  }

  function onInternalClick(e) {
    var ret = triggerChange(!innerChecked, e); // [Legacy] trigger onClick with value

    onClick === null || onClick === void 0 ? void 0 : onClick(ret, e);
  }

  var switchClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className, (_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(_classNames, "".concat(prefixCls, "-checked"), innerChecked), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", Object.assign({}, restProps, {
    type: "button",
    role: "switch",
    "aria-checked": innerChecked,
    disabled: disabled,
    className: switchClassName,
    ref: ref,
    onKeyDown: onInternalKeyDown,
    onClick: onInternalClick
  }), loadingIcon, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "".concat(prefixCls, "-inner")
  }, innerChecked ? checkedChildren : unCheckedChildren));
});
Switch.displayName = 'Switch';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 826 == __webpack_require__.j ? (Switch) : null));

/***/ }),

/***/ 4893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ rc_textarea_es)
});

// UNUSED EXPORTS: ResizableTextArea

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js
var createSuper = __webpack_require__(9388);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(344);
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(334);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js + 1 modules
var ref = __webpack_require__(1242);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/findDOMNode.js
var findDOMNode = __webpack_require__(4203);
// EXTERNAL MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__(1033);
;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/utils/observerUtil.js
 // =============================== Const ===============================

var elementListeners = new Map();

function onResize(entities) {
  entities.forEach(function (entity) {
    var _elementListeners$get;

    var target = entity.target;
    (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0 ? void 0 : _elementListeners$get.forEach(function (listener) {
      return listener(target);
    });
  });
} // Note: ResizeObserver polyfill not support option to measure border-box resize


var resizeObserver = new ResizeObserver_es/* default */.Z(onResize); // Dev env only

var _el = (/* unused pure expression or super */ null && ( false ? 0 : null)); // eslint-disable-line

var _rs = (/* unused pure expression or super */ null && ( false ? 0 : null)); // eslint-disable-line
// ============================== Observe ==============================

function observe(element, callback) {
  if (!elementListeners.has(element)) {
    elementListeners.set(element, new Set());
    resizeObserver.observe(element);
  }

  elementListeners.get(element).add(callback);
}
function unobserve(element, callback) {
  if (elementListeners.has(element)) {
    elementListeners.get(element).delete(callback);

    if (!elementListeners.get(element).size) {
      resizeObserver.unobserve(element);
      elementListeners.delete(element);
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/SingleObserver/DomWrapper.js





/**
 * Fallback to findDOMNode if origin ref do not provide any dom element
 */

var DomWrapper = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(DomWrapper, _React$Component);

  var _super = (0,createSuper/* default */.Z)(DomWrapper);

  function DomWrapper() {
    (0,classCallCheck/* default */.Z)(this, DomWrapper);

    return _super.apply(this, arguments);
  }

  (0,createClass/* default */.Z)(DomWrapper, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return DomWrapper;
}(react.Component);


;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/Collection.js

var CollectionContext = /*#__PURE__*/react.createContext(null);
/**
 * Collect all the resize event from children ResizeObserver
 */

function Collection(_ref) {
  var children = _ref.children,
      onBatchResize = _ref.onBatchResize;
  var resizeIdRef = react.useRef(0);
  var resizeInfosRef = react.useRef([]);
  var onCollectionResize = react.useContext(CollectionContext);
  var onResize = react.useCallback(function (size, element, data) {
    resizeIdRef.current += 1;
    var currentId = resizeIdRef.current;
    resizeInfosRef.current.push({
      size: size,
      element: element,
      data: data
    });
    Promise.resolve().then(function () {
      if (currentId === resizeIdRef.current) {
        onBatchResize === null || onBatchResize === void 0 ? void 0 : onBatchResize(resizeInfosRef.current);
        resizeInfosRef.current = [];
      }
    }); // Continue bubbling if parent exist

    onCollectionResize === null || onCollectionResize === void 0 ? void 0 : onCollectionResize(size, element, data);
  }, [onBatchResize, onCollectionResize]);
  return /*#__PURE__*/react.createElement(CollectionContext.Provider, {
    value: onResize
  }, children);
}
;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/SingleObserver/index.js







function SingleObserver(props) {
  var children = props.children,
      disabled = props.disabled;
  var elementRef = react.useRef(null);
  var wrapperRef = react.useRef(null);
  var onCollectionResize = react.useContext(CollectionContext); // =========================== Children ===========================

  var isRenderProps = typeof children === 'function';
  var mergedChildren = isRenderProps ? children(elementRef) : children; // ============================= Size =============================

  var sizeRef = react.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }); // ============================= Ref ==============================

  var canRef = !isRenderProps && /*#__PURE__*/react.isValidElement(mergedChildren) && (0,ref/* supportRef */.Yr)(mergedChildren);
  var originRef = canRef ? mergedChildren.ref : null;
  var mergedRef = react.useMemo(function () {
    return (0,ref/* composeRef */.sQ)(originRef, elementRef);
  }, [originRef, elementRef]); // =========================== Observe ============================

  var propsRef = react.useRef(props);
  propsRef.current = props; // Handler

  var onInternalResize = react.useCallback(function (target) {
    var _propsRef$current = propsRef.current,
        onResize = _propsRef$current.onResize,
        data = _propsRef$current.data;

    var _target$getBoundingCl = target.getBoundingClientRect(),
        width = _target$getBoundingCl.width,
        height = _target$getBoundingCl.height;

    var offsetWidth = target.offsetWidth,
        offsetHeight = target.offsetHeight;
    /**
     * Resize observer trigger when content size changed.
     * In most case we just care about element size,
     * let's use `boundary` instead of `contentRect` here to avoid shaking.
     */

    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);

    if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {
      var size = {
        width: fixedWidth,
        height: fixedHeight,
        offsetWidth: offsetWidth,
        offsetHeight: offsetHeight
      };
      sizeRef.current = size; // IE is strange, right?

      var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
      var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;

      var sizeInfo = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, size), {}, {
        offsetWidth: mergedOffsetWidth,
        offsetHeight: mergedOffsetHeight
      }); // Let collection know what happened


      onCollectionResize === null || onCollectionResize === void 0 ? void 0 : onCollectionResize(sizeInfo, target, data);

      if (onResize) {
        // defer the callback but not defer to next frame
        Promise.resolve().then(function () {
          onResize(sizeInfo, target);
        });
      }
    }
  }, []); // Dynamic observe

  react.useEffect(function () {
    var currentElement = (0,findDOMNode/* default */.Z)(elementRef.current) || (0,findDOMNode/* default */.Z)(wrapperRef.current);

    if (currentElement && !disabled) {
      observe(currentElement, onInternalResize);
    }

    return function () {
      return unobserve(currentElement, onInternalResize);
    };
  }, [elementRef.current, disabled]); // ============================ Render ============================

  return /*#__PURE__*/react.createElement(DomWrapper, {
    ref: wrapperRef
  }, canRef ? /*#__PURE__*/react.cloneElement(mergedChildren, {
    ref: mergedRef
  }) : mergedChildren);
}
;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/index.js






var INTERNAL_PREFIX_KEY = 'rc-observer-key';

function ResizeObserver(props) {
  var children = props.children;
  var childNodes = typeof children === 'function' ? [children] : (0,toArray/* default */.Z)(children);

  if (false) {}

  return childNodes.map(function (child, index) {
    var key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(INTERNAL_PREFIX_KEY, "-").concat(index);
    return /*#__PURE__*/react.createElement(SingleObserver, (0,esm_extends/* default */.Z)({}, props, {
      key: key
    }), child);
  });
}

ResizeObserver.Collection = Collection;
/* harmony default export */ const es = (ResizeObserver);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(8423);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./node_modules/rc-textarea/es/calculateNodeHeight.js
// Thanks to https://github.com/andreypopp/react-textarea-autosize/

/**
 * calculateNodeHeight(uiTextNode, useCache = false)
 */
var HIDDEN_TEXTAREA_STYLE = "\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n";
var SIZING_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'font-variant', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing', 'word-break'];
var computedStyleCache = {};
var hiddenTextarea;
function calculateNodeStyling(node) {
  var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var nodeRef = node.getAttribute('id') || node.getAttribute('data-reactid') || node.getAttribute('name');

  if (useCache && computedStyleCache[nodeRef]) {
    return computedStyleCache[nodeRef];
  }

  var style = window.getComputedStyle(node);
  var boxSizing = style.getPropertyValue('box-sizing') || style.getPropertyValue('-moz-box-sizing') || style.getPropertyValue('-webkit-box-sizing');
  var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
  var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
  var sizingStyle = SIZING_STYLE.map(function (name) {
    return "".concat(name, ":").concat(style.getPropertyValue(name));
  }).join(';');
  var nodeInfo = {
    sizingStyle: sizingStyle,
    paddingSize: paddingSize,
    borderSize: borderSize,
    boxSizing: boxSizing
  };

  if (useCache && nodeRef) {
    computedStyleCache[nodeRef] = nodeInfo;
  }

  return nodeInfo;
}
function calculateNodeHeight(uiTextNode) {
  var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var minRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var maxRows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    hiddenTextarea.setAttribute('tab-index', '-1');
    hiddenTextarea.setAttribute('aria-hidden', 'true');
    document.body.appendChild(hiddenTextarea);
  } // Fix wrap="off" issue
  // https://github.com/ant-design/ant-design/issues/6577


  if (uiTextNode.getAttribute('wrap')) {
    hiddenTextarea.setAttribute('wrap', uiTextNode.getAttribute('wrap'));
  } else {
    hiddenTextarea.removeAttribute('wrap');
  } // Copy all CSS properties that have an impact on the height of the content in
  // the textbox


  var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache),
      paddingSize = _calculateNodeStyling.paddingSize,
      borderSize = _calculateNodeStyling.borderSize,
      boxSizing = _calculateNodeStyling.boxSizing,
      sizingStyle = _calculateNodeStyling.sizingStyle; // Need to have the overflow attribute to hide the scrollbar otherwise
  // text-lines will not calculated properly as the shadow will technically be
  // narrower for content


  hiddenTextarea.setAttribute('style', "".concat(sizingStyle, ";").concat(HIDDEN_TEXTAREA_STYLE));
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';
  var minHeight = Number.MIN_SAFE_INTEGER;
  var maxHeight = Number.MAX_SAFE_INTEGER;
  var height = hiddenTextarea.scrollHeight;
  var overflowY;

  if (boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    height += borderSize;
  } else if (boxSizing === 'content-box') {
    // remove padding, since height = content
    height -= paddingSize;
  }

  if (minRows !== null || maxRows !== null) {
    // measure height of a textarea with a single row
    hiddenTextarea.value = ' ';
    var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;

      if (boxSizing === 'border-box') {
        minHeight = minHeight + paddingSize + borderSize;
      }

      height = Math.max(minHeight, height);
    }

    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;

      if (boxSizing === 'border-box') {
        maxHeight = maxHeight + paddingSize + borderSize;
      }

      overflowY = height > maxHeight ? '' : 'hidden';
      height = Math.min(maxHeight, height);
    }
  }

  return {
    height: height,
    minHeight: minHeight,
    maxHeight: maxHeight,
    overflowY: overflowY,
    resize: 'none'
  };
}
// EXTERNAL MODULE: ./node_modules/shallowequal/index.js
var shallowequal = __webpack_require__(6774);
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);
;// CONCATENATED MODULE: ./node_modules/rc-textarea/es/ResizableTextArea.js












 // eslint-disable-next-line @typescript-eslint/naming-convention

var RESIZE_STATUS;

(function (RESIZE_STATUS) {
  RESIZE_STATUS[RESIZE_STATUS["NONE"] = 0] = "NONE";
  RESIZE_STATUS[RESIZE_STATUS["RESIZING"] = 1] = "RESIZING";
  RESIZE_STATUS[RESIZE_STATUS["RESIZED"] = 2] = "RESIZED";
})(RESIZE_STATUS || (RESIZE_STATUS = {}));

var ResizableTextArea = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(ResizableTextArea, _React$Component);

  var _super = (0,createSuper/* default */.Z)(ResizableTextArea);

  function ResizableTextArea(props) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, ResizableTextArea);

    _this = _super.call(this, props);
    _this.nextFrameActionId = void 0;
    _this.resizeFrameId = void 0;
    _this.textArea = void 0;

    _this.saveTextArea = function (textArea) {
      _this.textArea = textArea;
    };

    _this.handleResize = function (size) {
      var resizeStatus = _this.state.resizeStatus;
      var _this$props = _this.props,
          autoSize = _this$props.autoSize,
          onResize = _this$props.onResize;

      if (resizeStatus !== RESIZE_STATUS.NONE) {
        return;
      }

      if (typeof onResize === 'function') {
        onResize(size);
      }

      if (autoSize) {
        _this.resizeOnNextFrame();
      }
    };

    _this.resizeOnNextFrame = function () {
      cancelAnimationFrame(_this.nextFrameActionId);
      _this.nextFrameActionId = requestAnimationFrame(_this.resizeTextarea);
    };

    _this.resizeTextarea = function () {
      var autoSize = _this.props.autoSize;

      if (!autoSize || !_this.textArea) {
        return;
      }

      var minRows = autoSize.minRows,
          maxRows = autoSize.maxRows;
      var textareaStyles = calculateNodeHeight(_this.textArea, false, minRows, maxRows);

      _this.setState({
        textareaStyles: textareaStyles,
        resizeStatus: RESIZE_STATUS.RESIZING
      }, function () {
        cancelAnimationFrame(_this.resizeFrameId);
        _this.resizeFrameId = requestAnimationFrame(function () {
          _this.setState({
            resizeStatus: RESIZE_STATUS.RESIZED
          }, function () {
            _this.resizeFrameId = requestAnimationFrame(function () {
              _this.setState({
                resizeStatus: RESIZE_STATUS.NONE
              });

              _this.fixFirefoxAutoScroll();
            });
          });
        });
      });
    };

    _this.renderTextArea = function () {
      var _this$props2 = _this.props,
          _this$props2$prefixCl = _this$props2.prefixCls,
          prefixCls = _this$props2$prefixCl === void 0 ? 'rc-textarea' : _this$props2$prefixCl,
          autoSize = _this$props2.autoSize,
          onResize = _this$props2.onResize,
          className = _this$props2.className,
          disabled = _this$props2.disabled;
      var _this$state = _this.state,
          textareaStyles = _this$state.textareaStyles,
          resizeStatus = _this$state.resizeStatus;
      var otherProps = (0,omit/* default */.Z)(_this.props, ['prefixCls', 'onPressEnter', 'autoSize', 'defaultValue', 'onResize']);
      var cls = classnames_default()(prefixCls, className, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-disabled"), disabled)); // Fix https://github.com/ant-design/ant-design/issues/6776
      // Make sure it could be reset when using form.getFieldDecorator

      if ('value' in otherProps) {
        otherProps.value = otherProps.value || '';
      }

      var style = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this.props.style), textareaStyles), resizeStatus === RESIZE_STATUS.RESIZING ? // React will warning when mix `overflow` & `overflowY`.
      // We need to define this separately.
      {
        overflowX: 'hidden',
        overflowY: 'hidden'
      } : null);

      return /*#__PURE__*/react.createElement(es, {
        onResize: _this.handleResize,
        disabled: !(autoSize || onResize)
      }, /*#__PURE__*/react.createElement("textarea", (0,esm_extends/* default */.Z)({}, otherProps, {
        className: cls,
        style: style,
        ref: _this.saveTextArea
      })));
    };

    _this.state = {
      textareaStyles: {},
      resizeStatus: RESIZE_STATUS.NONE
    };
    return _this;
  }

  (0,createClass/* default */.Z)(ResizableTextArea, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Re-render with the new content or new autoSize property then recalculate the height as required.
      if (prevProps.value !== this.props.value || !shallowequal_default()(prevProps.autoSize, this.props.autoSize)) {
        this.resizeTextarea();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      cancelAnimationFrame(this.nextFrameActionId);
      cancelAnimationFrame(this.resizeFrameId);
    } // https://github.com/ant-design/ant-design/issues/21870

  }, {
    key: "fixFirefoxAutoScroll",
    value: function fixFirefoxAutoScroll() {
      try {
        if (document.activeElement === this.textArea) {
          var currentStart = this.textArea.selectionStart;
          var currentEnd = this.textArea.selectionEnd;
          this.textArea.setSelectionRange(currentStart, currentEnd);
        }
      } catch (e) {// Fix error in Chrome:
        // Failed to read the 'selectionStart' property from 'HTMLInputElement'
        // http://stackoverflow.com/q/21177489/3040605
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.renderTextArea();
    }
  }]);

  return ResizableTextArea;
}(react.Component);

/* harmony default export */ const es_ResizableTextArea = (ResizableTextArea);
;// CONCATENATED MODULE: ./node_modules/rc-textarea/es/index.js








var TextArea = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(TextArea, _React$Component);

  var _super = (0,createSuper/* default */.Z)(TextArea);

  function TextArea(props) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, TextArea);

    _this = _super.call(this, props);
    _this.resizableTextArea = void 0;

    _this.focus = function () {
      _this.resizableTextArea.textArea.focus();
    };

    _this.saveTextArea = function (resizableTextArea) {
      _this.resizableTextArea = resizableTextArea;
    };

    _this.handleChange = function (e) {
      var onChange = _this.props.onChange;

      _this.setValue(e.target.value, function () {
        _this.resizableTextArea.resizeTextarea();
      });

      if (onChange) {
        onChange(e);
      }
    };

    _this.handleKeyDown = function (e) {
      var _this$props = _this.props,
          onPressEnter = _this$props.onPressEnter,
          onKeyDown = _this$props.onKeyDown;

      if (e.keyCode === 13 && onPressEnter) {
        onPressEnter(e);
      }

      if (onKeyDown) {
        onKeyDown(e);
      }
    };

    var value = typeof props.value === 'undefined' || props.value === null ? props.defaultValue : props.value;
    _this.state = {
      value: value
    };
    return _this;
  }

  (0,createClass/* default */.Z)(TextArea, [{
    key: "setValue",
    value: function setValue(value, callback) {
      if (!('value' in this.props)) {
        this.setState({
          value: value
        }, callback);
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      this.resizableTextArea.textArea.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement(es_ResizableTextArea, (0,esm_extends/* default */.Z)({}, this.props, {
        value: this.state.value,
        onKeyDown: this.handleKeyDown,
        onChange: this.handleChange,
        ref: this.saveTextArea
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return {
          value: nextProps.value
        };
      }

      return null;
    }
  }]);

  return TextArea;
}(react.Component);


/* harmony default export */ const rc_textarea_es = (TextArea);

/***/ })

}]);