"use strict";
(self["webpackChunkwebpack_test"] = self["webpackChunkwebpack_test"] || []).push([[13],{

/***/ 3974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zb": () => (/* reexport */ FieldContext/* default */.Z)
});

// UNUSED EXPORTS: Field, FormProvider, List, ListContext, default, useForm, useWatch

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/rc-field-form/es/Field.js
var Field = __webpack_require__(2890);
// EXTERNAL MODULE: ./node_modules/rc-field-form/es/List.js
var List = __webpack_require__(5378);
// EXTERNAL MODULE: ./node_modules/rc-field-form/es/useForm.js
var useForm = __webpack_require__(5918);
// EXTERNAL MODULE: ./node_modules/rc-field-form/es/Form.js
var Form = __webpack_require__(5318);
// EXTERNAL MODULE: ./node_modules/rc-field-form/es/FormContext.js
var FormContext = __webpack_require__(1696);
// EXTERNAL MODULE: ./node_modules/rc-field-form/es/FieldContext.js
var FieldContext = __webpack_require__(8665);
// EXTERNAL MODULE: ./node_modules/rc-field-form/es/ListContext.js
var ListContext = __webpack_require__(2131);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js
var slicedToArray = __webpack_require__(3324);
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(334);
// EXTERNAL MODULE: ./node_modules/rc-field-form/es/utils/valueUtil.js
var valueUtil = __webpack_require__(3236);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/useWatch.js







function stringify(value) {
  try {
    return JSON.stringify(value);
  } catch (err) {
    return Math.random();
  }
}

function useWatch() {
  var dependencies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var form = arguments.length > 1 ? arguments[1] : undefined;

  var _useState = (0,react.useState)(),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var valueStr = (0,react.useMemo)(function () {
    return stringify(value);
  }, [value]);
  var valueStrRef = (0,react.useRef)(valueStr);
  valueStrRef.current = valueStr;
  var fieldContext = (0,react.useContext)(FieldContext/* default */.Z);
  var formInstance = form || fieldContext;
  var isValidForm = formInstance && formInstance._init; // Warning if not exist form instance

  if (false) {}

  var namePath = (0,valueUtil/* getNamePath */.gU)(dependencies);
  var namePathRef = (0,react.useRef)(namePath);
  namePathRef.current = namePath;
  (0,react.useEffect)(function () {
    // Skip if not exist form instance
    if (!isValidForm) {
      return;
    }

    var getFieldsValue = formInstance.getFieldsValue,
        getInternalHooks = formInstance.getInternalHooks;

    var _getInternalHooks = getInternalHooks(FieldContext/* HOOK_MARK */.k),
        registerWatch = _getInternalHooks.registerWatch;

    var cancelRegister = registerWatch(function (store) {
      var newValue = (0,valueUtil/* getValue */.NA)(store, namePathRef.current);
      var nextValueStr = stringify(newValue); // Compare stringify in case it's nest object

      if (valueStrRef.current !== nextValueStr) {
        setValue(newValue);
      }
    }); // TODO: We can improve this perf in future

    var initialValue = (0,valueUtil/* getValue */.NA)(getFieldsValue(), namePathRef.current);
    setValue(initialValue);
    return cancelRegister;
  }, // We do not need re-register since namePath content is the same
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  return value;
}

/* harmony default export */ const es_useWatch = (useWatch);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/index.js









var InternalForm = /*#__PURE__*/react.forwardRef(Form/* default */.Z);
var RefForm = InternalForm;
RefForm.FormProvider = FormContext/* FormProvider */.R;
RefForm.Field = Field/* default */.Z;
RefForm.List = List/* default */.Z;
RefForm.useForm = useForm/* default */.Z;
RefForm.useWatch = es_useWatch;

/* harmony default export */ const es = ((/* unused pure expression or super */ null && (RefForm)));

/***/ }),

/***/ 5918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export FormStore */
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3324);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1413);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5987);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9062);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3144);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5671);
}
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(334);
/* harmony import */ var _FieldContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8665);
if (826 == __webpack_require__.j) {
	/* harmony import */ var _utils_asyncUtil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(496);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var _utils_NameMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2332);
}
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2656);
if (826 == __webpack_require__.j) {
	/* harmony import */ var _utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3236);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var _utils_cloneDeep__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7434);
}






var _excluded = (/* runtime-dependent pure expression or super */ 826 == __webpack_require__.j ? (["name", "errors"]) : null);








var FormStore = /*#__PURE__*/(/* runtime-dependent pure expression or super */ 826 == __webpack_require__.j ? ((0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function FormStore(forceRootUpdate) {
  var _this = this;

  (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(this, FormStore);

  this.formHooked = false;
  this.forceRootUpdate = void 0;
  this.subscribable = true;
  this.store = {};
  this.fieldEntities = [];
  this.initialValues = {};
  this.callbacks = {};
  this.validateMessages = null;
  this.preserve = null;
  this.lastValidatePromise = null;

  this.getForm = function () {
    return {
      getFieldValue: _this.getFieldValue,
      getFieldsValue: _this.getFieldsValue,
      getFieldError: _this.getFieldError,
      getFieldWarning: _this.getFieldWarning,
      getFieldsError: _this.getFieldsError,
      isFieldsTouched: _this.isFieldsTouched,
      isFieldTouched: _this.isFieldTouched,
      isFieldValidating: _this.isFieldValidating,
      isFieldsValidating: _this.isFieldsValidating,
      resetFields: _this.resetFields,
      setFields: _this.setFields,
      setFieldsValue: _this.setFieldsValue,
      validateFields: _this.validateFields,
      submit: _this.submit,
      _init: true,
      getInternalHooks: _this.getInternalHooks
    };
  };

  this.getInternalHooks = function (key) {
    if (key === _FieldContext__WEBPACK_IMPORTED_MODULE_2__/* .HOOK_MARK */ .k) {
      _this.formHooked = true;
      return {
        dispatch: _this.dispatch,
        initEntityValue: _this.initEntityValue,
        registerField: _this.registerField,
        useSubscribe: _this.useSubscribe,
        setInitialValues: _this.setInitialValues,
        destroyForm: _this.destroyForm,
        setCallbacks: _this.setCallbacks,
        setValidateMessages: _this.setValidateMessages,
        getFields: _this.getFields,
        setPreserve: _this.setPreserve,
        getInitialValue: _this.getInitialValue,
        registerWatch: _this.registerWatch
      };
    }

    (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(false, '`getInternalHooks` is internal usage. Should not call directly.');
    return null;
  };

  this.useSubscribe = function (subscribable) {
    _this.subscribable = subscribable;
  };

  this.prevWithoutPreserves = null;

  this.setInitialValues = function (initialValues, init) {
    _this.initialValues = initialValues || {};

    if (init) {
      var _this$prevWithoutPres;

      var nextStore = (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .setValues */ .gg)({}, initialValues, _this.store); // We will take consider prev form unmount fields.
      // When the field is not `preserve`, we need fill this with initialValues instead of store.
      // eslint-disable-next-line array-callback-return

      (_this$prevWithoutPres = _this.prevWithoutPreserves) === null || _this$prevWithoutPres === void 0 ? void 0 : _this$prevWithoutPres.map(function (_ref) {
        var namePath = _ref.key;
        nextStore = (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .setValue */ .sO)(nextStore, namePath, (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .getValue */ .NA)(initialValues, namePath));
      });
      _this.prevWithoutPreserves = null;

      _this.updateStore(nextStore);
    }
  };

  this.destroyForm = function () {
    var prevWithoutPreserves = new _utils_NameMap__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z();

    _this.getFieldEntities(true).forEach(function (entity) {
      if (!entity.isPreserve()) {
        prevWithoutPreserves.set(entity.getNamePath(), true);
      }
    });

    _this.prevWithoutPreserves = prevWithoutPreserves;
  };

  this.getInitialValue = function (namePath) {
    var initValue = (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .getValue */ .NA)(_this.initialValues, namePath); // Not cloneDeep when without `namePath`

    return namePath.length ? (0,_utils_cloneDeep__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(initValue) : initValue;
  };

  this.setCallbacks = function (callbacks) {
    _this.callbacks = callbacks;
  };

  this.setValidateMessages = function (validateMessages) {
    _this.validateMessages = validateMessages;
  };

  this.setPreserve = function (preserve) {
    _this.preserve = preserve;
  };

  this.watchList = [];

  this.registerWatch = function (callback) {
    _this.watchList.push(callback);

    return function () {
      _this.watchList = _this.watchList.filter(function (fn) {
        return fn !== callback;
      });
    };
  };

  this.notifyWatch = function () {
    var namePath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    // No need to cost perf when nothing need to watch
    if (_this.watchList.length) {
      var values = _this.getFieldsValue();

      _this.watchList.forEach(function (callback) {
        callback(values, namePath);
      });
    }
  };

  this.timeoutId = null;

  this.warningUnhooked = function () {
    if (false) {}
  };

  this.updateStore = function (nextStore) {
    _this.store = nextStore;
  };

  this.getFieldEntities = function () {
    var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (!pure) {
      return _this.fieldEntities;
    }

    return _this.fieldEntities.filter(function (field) {
      return field.getNamePath().length;
    });
  };

  this.getFieldsMap = function () {
    var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var cache = new _utils_NameMap__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z();

    _this.getFieldEntities(pure).forEach(function (field) {
      var namePath = field.getNamePath();
      cache.set(namePath, field);
    });

    return cache;
  };

  this.getFieldEntitiesForNamePathList = function (nameList) {
    if (!nameList) {
      return _this.getFieldEntities(true);
    }

    var cache = _this.getFieldsMap(true);

    return nameList.map(function (name) {
      var namePath = (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .getNamePath */ .gU)(name);
      return cache.get(namePath) || {
        INVALIDATE_NAME_PATH: (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .getNamePath */ .gU)(name)
      };
    });
  };

  this.getFieldsValue = function (nameList, filterFunc) {
    _this.warningUnhooked();

    if (nameList === true && !filterFunc) {
      return _this.store;
    }

    var fieldEntities = _this.getFieldEntitiesForNamePathList(Array.isArray(nameList) ? nameList : null);

    var filteredNameList = [];
    fieldEntities.forEach(function (entity) {
      var _entity$isListField;

      var namePath = 'INVALIDATE_NAME_PATH' in entity ? entity.INVALIDATE_NAME_PATH : entity.getNamePath(); // Ignore when it's a list item and not specific the namePath,
      // since parent field is already take in count

      if (!nameList && ((_entity$isListField = entity.isListField) === null || _entity$isListField === void 0 ? void 0 : _entity$isListField.call(entity))) {
        return;
      }

      if (!filterFunc) {
        filteredNameList.push(namePath);
      } else {
        var meta = 'getMeta' in entity ? entity.getMeta() : null;

        if (filterFunc(meta)) {
          filteredNameList.push(namePath);
        }
      }
    });
    return (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .cloneByNamePathList */ .H_)(_this.store, filteredNameList.map(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .getNamePath */ .gU));
  };

  this.getFieldValue = function (name) {
    _this.warningUnhooked();

    var namePath = (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .getNamePath */ .gU)(name);
    return (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .getValue */ .NA)(_this.store, namePath);
  };

  this.getFieldsError = function (nameList) {
    _this.warningUnhooked();

    var fieldEntities = _this.getFieldEntitiesForNamePathList(nameList);

    return fieldEntities.map(function (entity, index) {
      if (entity && !('INVALIDATE_NAME_PATH' in entity)) {
        return {
          name: entity.getNamePath(),
          errors: entity.getErrors(),
          warnings: entity.getWarnings()
        };
      }

      return {
        name: (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .getNamePath */ .gU)(nameList[index]),
        errors: [],
        warnings: []
      };
    });
  };

  this.getFieldError = function (name) {
    _this.warningUnhooked();

    var namePath = (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .getNamePath */ .gU)(name);

    var fieldError = _this.getFieldsError([namePath])[0];

    return fieldError.errors;
  };

  this.getFieldWarning = function (name) {
    _this.warningUnhooked();

    var namePath = (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .getNamePath */ .gU)(name);

    var fieldError = _this.getFieldsError([namePath])[0];

    return fieldError.warnings;
  };

  this.isFieldsTouched = function () {
    _this.warningUnhooked();

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var arg0 = args[0],
        arg1 = args[1];
    var namePathList;
    var isAllFieldsTouched = false;

    if (args.length === 0) {
      namePathList = null;
    } else if (args.length === 1) {
      if (Array.isArray(arg0)) {
        namePathList = arg0.map(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .getNamePath */ .gU);
        isAllFieldsTouched = false;
      } else {
        namePathList = null;
        isAllFieldsTouched = arg0;
      }
    } else {
      namePathList = arg0.map(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .getNamePath */ .gU);
      isAllFieldsTouched = arg1;
    }

    var fieldEntities = _this.getFieldEntities(true);

    var isFieldTouched = function isFieldTouched(field) {
      return field.isFieldTouched();
    }; // ===== Will get fully compare when not config namePathList =====


    if (!namePathList) {
      return isAllFieldsTouched ? fieldEntities.every(isFieldTouched) : fieldEntities.some(isFieldTouched);
    } // Generate a nest tree for validate


    var map = new _utils_NameMap__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z();
    namePathList.forEach(function (shortNamePath) {
      map.set(shortNamePath, []);
    });
    fieldEntities.forEach(function (field) {
      var fieldNamePath = field.getNamePath(); // Find matched entity and put into list

      namePathList.forEach(function (shortNamePath) {
        if (shortNamePath.every(function (nameUnit, i) {
          return fieldNamePath[i] === nameUnit;
        })) {
          map.update(shortNamePath, function (list) {
            return [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(list), [field]);
          });
        }
      });
    }); // Check if NameMap value is touched

    var isNamePathListTouched = function isNamePathListTouched(entities) {
      return entities.some(isFieldTouched);
    };

    var namePathListEntities = map.map(function (_ref2) {
      var value = _ref2.value;
      return value;
    });
    return isAllFieldsTouched ? namePathListEntities.every(isNamePathListTouched) : namePathListEntities.some(isNamePathListTouched);
  };

  this.isFieldTouched = function (name) {
    _this.warningUnhooked();

    return _this.isFieldsTouched([name]);
  };

  this.isFieldsValidating = function (nameList) {
    _this.warningUnhooked();

    var fieldEntities = _this.getFieldEntities();

    if (!nameList) {
      return fieldEntities.some(function (testField) {
        return testField.isFieldValidating();
      });
    }

    var namePathList = nameList.map(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .getNamePath */ .gU);
    return fieldEntities.some(function (testField) {
      var fieldNamePath = testField.getNamePath();
      return (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .containsNamePath */ .T1)(namePathList, fieldNamePath) && testField.isFieldValidating();
    });
  };

  this.isFieldValidating = function (name) {
    _this.warningUnhooked();

    return _this.isFieldsValidating([name]);
  };

  this.resetWithFieldInitialValue = function () {
    var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // Create cache
    var cache = new _utils_NameMap__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z();

    var fieldEntities = _this.getFieldEntities(true);

    fieldEntities.forEach(function (field) {
      var initialValue = field.props.initialValue;
      var namePath = field.getNamePath(); // Record only if has `initialValue`

      if (initialValue !== undefined) {
        var records = cache.get(namePath) || new Set();
        records.add({
          entity: field,
          value: initialValue
        });
        cache.set(namePath, records);
      }
    }); // Reset

    var resetWithFields = function resetWithFields(entities) {
      entities.forEach(function (field) {
        var initialValue = field.props.initialValue;

        if (initialValue !== undefined) {
          var namePath = field.getNamePath();

          var formInitialValue = _this.getInitialValue(namePath);

          if (formInitialValue !== undefined) {
            // Warning if conflict with form initialValues and do not modify value
            (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(false, "Form already set 'initialValues' with path '".concat(namePath.join('.'), "'. Field can not overwrite it."));
          } else {
            var records = cache.get(namePath);

            if (records && records.size > 1) {
              // Warning if multiple field set `initialValue`and do not modify value
              (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(false, "Multiple Field with path '".concat(namePath.join('.'), "' set 'initialValue'. Can not decide which one to pick."));
            } else if (records) {
              var originValue = _this.getFieldValue(namePath); // Set `initialValue`


              if (!info.skipExist || originValue === undefined) {
                _this.updateStore((0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .setValue */ .sO)(_this.store, namePath, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(records)[0].value));
              }
            }
          }
        }
      });
    };

    var requiredFieldEntities;

    if (info.entities) {
      requiredFieldEntities = info.entities;
    } else if (info.namePathList) {
      requiredFieldEntities = [];
      info.namePathList.forEach(function (namePath) {
        var records = cache.get(namePath);

        if (records) {
          var _requiredFieldEntitie;

          (_requiredFieldEntitie = requiredFieldEntities).push.apply(_requiredFieldEntitie, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(records).map(function (r) {
            return r.entity;
          })));
        }
      });
    } else {
      requiredFieldEntities = fieldEntities;
    }

    resetWithFields(requiredFieldEntities);
  };

  this.resetFields = function (nameList) {
    _this.warningUnhooked();

    var prevStore = _this.store;

    if (!nameList) {
      _this.updateStore((0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .setValues */ .gg)({}, _this.initialValues));

      _this.resetWithFieldInitialValue();

      _this.notifyObservers(prevStore, null, {
        type: 'reset'
      });

      _this.notifyWatch();

      return;
    } // Reset by `nameList`


    var namePathList = nameList.map(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .getNamePath */ .gU);
    namePathList.forEach(function (namePath) {
      var initialValue = _this.getInitialValue(namePath);

      _this.updateStore((0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .setValue */ .sO)(_this.store, namePath, initialValue));
    });

    _this.resetWithFieldInitialValue({
      namePathList: namePathList
    });

    _this.notifyObservers(prevStore, namePathList, {
      type: 'reset'
    });

    _this.notifyWatch(namePathList);
  };

  this.setFields = function (fields) {
    _this.warningUnhooked();

    var prevStore = _this.store;
    var namePathList = [];
    fields.forEach(function (fieldData) {
      var name = fieldData.name,
          errors = fieldData.errors,
          data = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(fieldData, _excluded);

      var namePath = (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .getNamePath */ .gU)(name);
      namePathList.push(namePath); // Value

      if ('value' in data) {
        _this.updateStore((0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .setValue */ .sO)(_this.store, namePath, data.value));
      }

      _this.notifyObservers(prevStore, [namePath], {
        type: 'setField',
        data: fieldData
      });
    });

    _this.notifyWatch(namePathList);
  };

  this.getFields = function () {
    var entities = _this.getFieldEntities(true);

    var fields = entities.map(function (field) {
      var namePath = field.getNamePath();
      var meta = field.getMeta();

      var fieldData = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)({}, meta), {}, {
        name: namePath,
        value: _this.getFieldValue(namePath)
      });

      Object.defineProperty(fieldData, 'originRCField', {
        value: true
      });
      return fieldData;
    });
    return fields;
  };

  this.initEntityValue = function (entity) {
    var initialValue = entity.props.initialValue;

    if (initialValue !== undefined) {
      var namePath = entity.getNamePath();
      var prevValue = (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .getValue */ .NA)(_this.store, namePath);

      if (prevValue === undefined) {
        _this.updateStore((0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .setValue */ .sO)(_this.store, namePath, initialValue));
      }
    }
  };

  this.registerField = function (entity) {
    _this.fieldEntities.push(entity);

    var namePath = entity.getNamePath();

    _this.notifyWatch([namePath]); // Set initial values


    if (entity.props.initialValue !== undefined) {
      var prevStore = _this.store;

      _this.resetWithFieldInitialValue({
        entities: [entity],
        skipExist: true
      });

      _this.notifyObservers(prevStore, [entity.getNamePath()], {
        type: 'valueUpdate',
        source: 'internal'
      });
    } // un-register field callback


    return function (isListField, preserve) {
      var subNamePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      _this.fieldEntities = _this.fieldEntities.filter(function (item) {
        return item !== entity;
      }); // Clean up store value if not preserve

      var mergedPreserve = preserve !== undefined ? preserve : _this.preserve;

      if (mergedPreserve === false && (!isListField || subNamePath.length > 1)) {
        var defaultValue = isListField ? undefined : _this.getInitialValue(namePath);

        if (namePath.length && _this.getFieldValue(namePath) !== defaultValue && _this.fieldEntities.every(function (field) {
          return (// Only reset when no namePath exist
            !(0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .matchNamePath */ .LX)(field.getNamePath(), namePath)
          );
        })) {
          var _prevStore = _this.store;

          _this.updateStore((0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .setValue */ .sO)(_prevStore, namePath, defaultValue, true)); // Notify that field is unmount


          _this.notifyObservers(_prevStore, [namePath], {
            type: 'remove'
          }); // Dependencies update


          _this.triggerDependenciesUpdate(_prevStore, namePath);
        }
      }

      _this.notifyWatch([namePath]);
    };
  };

  this.dispatch = function (action) {
    switch (action.type) {
      case 'updateValue':
        {
          var namePath = action.namePath,
              value = action.value;

          _this.updateValue(namePath, value);

          break;
        }

      case 'validateField':
        {
          var _namePath = action.namePath,
              triggerName = action.triggerName;

          _this.validateFields([_namePath], {
            triggerName: triggerName
          });

          break;
        }

      default: // Currently we don't have other action. Do nothing.

    }
  };

  this.notifyObservers = function (prevStore, namePathList, info) {
    if (_this.subscribable) {
      var mergedInfo = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)({}, info), {}, {
        store: _this.getFieldsValue(true)
      });

      _this.getFieldEntities().forEach(function (_ref3) {
        var onStoreChange = _ref3.onStoreChange;
        onStoreChange(prevStore, namePathList, mergedInfo);
      });
    } else {
      _this.forceRootUpdate();
    }
  };

  this.triggerDependenciesUpdate = function (prevStore, namePath) {
    var childrenFields = _this.getDependencyChildrenFields(namePath);

    if (childrenFields.length) {
      _this.validateFields(childrenFields);
    }

    _this.notifyObservers(prevStore, childrenFields, {
      type: 'dependenciesUpdate',
      relatedFields: [namePath].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(childrenFields))
    });

    return childrenFields;
  };

  this.updateValue = function (name, value) {
    var namePath = (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .getNamePath */ .gU)(name);
    var prevStore = _this.store;

    _this.updateStore((0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .setValue */ .sO)(_this.store, namePath, value));

    _this.notifyObservers(prevStore, [namePath], {
      type: 'valueUpdate',
      source: 'internal'
    });

    _this.notifyWatch([namePath]); // Dependencies update


    var childrenFields = _this.triggerDependenciesUpdate(prevStore, namePath); // trigger callback function


    var onValuesChange = _this.callbacks.onValuesChange;

    if (onValuesChange) {
      var changedValues = (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .cloneByNamePathList */ .H_)(_this.store, [namePath]);
      onValuesChange(changedValues, _this.getFieldsValue());
    }

    _this.triggerOnFieldsChange([namePath].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(childrenFields)));
  };

  this.setFieldsValue = function (store) {
    _this.warningUnhooked();

    var prevStore = _this.store;

    if (store) {
      var nextStore = (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .setValues */ .gg)(_this.store, store);

      _this.updateStore(nextStore);
    }

    _this.notifyObservers(prevStore, null, {
      type: 'valueUpdate',
      source: 'external'
    });

    _this.notifyWatch();
  };

  this.getDependencyChildrenFields = function (rootNamePath) {
    var children = new Set();
    var childrenFields = [];
    var dependencies2fields = new _utils_NameMap__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z();
    /**
     * Generate maps
     * Can use cache to save perf if user report performance issue with this
     */

    _this.getFieldEntities().forEach(function (field) {
      var dependencies = field.props.dependencies;
      (dependencies || []).forEach(function (dependency) {
        var dependencyNamePath = (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .getNamePath */ .gU)(dependency);
        dependencies2fields.update(dependencyNamePath, function () {
          var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
          fields.add(field);
          return fields;
        });
      });
    });

    var fillChildren = function fillChildren(namePath) {
      var fields = dependencies2fields.get(namePath) || new Set();
      fields.forEach(function (field) {
        if (!children.has(field)) {
          children.add(field);
          var fieldNamePath = field.getNamePath();

          if (field.isFieldDirty() && fieldNamePath.length) {
            childrenFields.push(fieldNamePath);
            fillChildren(fieldNamePath);
          }
        }
      });
    };

    fillChildren(rootNamePath);
    return childrenFields;
  };

  this.triggerOnFieldsChange = function (namePathList, filedErrors) {
    var onFieldsChange = _this.callbacks.onFieldsChange;

    if (onFieldsChange) {
      var fields = _this.getFields();
      /**
       * Fill errors since `fields` may be replaced by controlled fields
       */


      if (filedErrors) {
        var cache = new _utils_NameMap__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z();
        filedErrors.forEach(function (_ref4) {
          var name = _ref4.name,
              errors = _ref4.errors;
          cache.set(name, errors);
        });
        fields.forEach(function (field) {
          // eslint-disable-next-line no-param-reassign
          field.errors = cache.get(field.name) || field.errors;
        });
      }

      var changedFields = fields.filter(function (_ref5) {
        var fieldName = _ref5.name;
        return (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .containsNamePath */ .T1)(namePathList, fieldName);
      });
      onFieldsChange(changedFields, fields);
    }
  };

  this.validateFields = function (nameList, options) {
    _this.warningUnhooked();

    var provideNameList = !!nameList;
    var namePathList = provideNameList ? nameList.map(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .getNamePath */ .gU) : []; // Collect result in promise list

    var promiseList = [];

    _this.getFieldEntities(true).forEach(function (field) {
      // Add field if not provide `nameList`
      if (!provideNameList) {
        namePathList.push(field.getNamePath());
      }
      /**
       * Recursive validate if configured.
       * TODO: perf improvement @zombieJ
       */


      if ((options === null || options === void 0 ? void 0 : options.recursive) && provideNameList) {
        var namePath = field.getNamePath();

        if ( // nameList[i] === undefined 说明是以 nameList 开头的
        // ['name'] -> ['name','list']
        namePath.every(function (nameUnit, i) {
          return nameList[i] === nameUnit || nameList[i] === undefined;
        })) {
          namePathList.push(namePath);
        }
      } // Skip if without rule


      if (!field.props.rules || !field.props.rules.length) {
        return;
      }

      var fieldNamePath = field.getNamePath(); // Add field validate rule in to promise list

      if (!provideNameList || (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__/* .containsNamePath */ .T1)(namePathList, fieldNamePath)) {
        var promise = field.validateRules((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)({
          validateMessages: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)({}, _utils_messages__WEBPACK_IMPORTED_MODULE_3__/* .defaultValidateMessages */ .y), _this.validateMessages)
        }, options)); // Wrap promise with field

        promiseList.push(promise.then(function () {
          return {
            name: fieldNamePath,
            errors: [],
            warnings: []
          };
        }).catch(function (ruleErrors) {
          var mergedErrors = [];
          var mergedWarnings = [];
          ruleErrors.forEach(function (_ref6) {
            var warningOnly = _ref6.rule.warningOnly,
                errors = _ref6.errors;

            if (warningOnly) {
              mergedWarnings.push.apply(mergedWarnings, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(errors));
            } else {
              mergedErrors.push.apply(mergedErrors, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(errors));
            }
          });

          if (mergedErrors.length) {
            return Promise.reject({
              name: fieldNamePath,
              errors: mergedErrors,
              warnings: mergedWarnings
            });
          }

          return {
            name: fieldNamePath,
            errors: mergedErrors,
            warnings: mergedWarnings
          };
        }));
      }
    });

    var summaryPromise = (0,_utils_asyncUtil__WEBPACK_IMPORTED_MODULE_12__/* .allPromiseFinish */ .v)(promiseList);
    _this.lastValidatePromise = summaryPromise; // Notify fields with rule that validate has finished and need update

    summaryPromise.catch(function (results) {
      return results;
    }).then(function (results) {
      var resultNamePathList = results.map(function (_ref7) {
        var name = _ref7.name;
        return name;
      });

      _this.notifyObservers(_this.store, resultNamePathList, {
        type: 'validateFinish'
      });

      _this.triggerOnFieldsChange(resultNamePathList, results);
    });
    var returnPromise = summaryPromise.then(function () {
      if (_this.lastValidatePromise === summaryPromise) {
        return Promise.resolve(_this.getFieldsValue(namePathList));
      }

      return Promise.reject([]);
    }).catch(function (results) {
      var errorList = results.filter(function (result) {
        return result && result.errors.length;
      });
      return Promise.reject({
        values: _this.getFieldsValue(namePathList),
        errorFields: errorList,
        outOfDate: _this.lastValidatePromise !== summaryPromise
      });
    }); // Do not throw in console

    returnPromise.catch(function (e) {
      return e;
    });
    return returnPromise;
  };

  this.submit = function () {
    _this.warningUnhooked();

    _this.validateFields().then(function (values) {
      var onFinish = _this.callbacks.onFinish;

      if (onFinish) {
        try {
          onFinish(values);
        } catch (err) {
          // Should print error if user `onFinish` callback failed
          console.error(err);
        }
      }
    }).catch(function (e) {
      var onFinishFailed = _this.callbacks.onFinishFailed;

      if (onFinishFailed) {
        onFinishFailed(e);
      }
    });
  };

  this.forceRootUpdate = forceRootUpdate;
})) : null);

function useForm(form) {
  var formRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState({}),
      _React$useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(_React$useState, 2),
      forceUpdate = _React$useState2[1];

  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      // Create a new FormStore if not provided
      var forceReRender = function forceReRender() {
        forceUpdate({});
      };

      var formStore = new FormStore(forceReRender);
      formRef.current = formStore.getForm();
    }
  }

  return [formRef.current];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 826 == __webpack_require__.j ? (useForm) : null));

/***/ }),

/***/ 2332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3324);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9062);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5671);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3144);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1002);
}





var SPLIT = '__@field_split__';
/**
 * Convert name path into string to fast the fetch speed of Map.
 */

function normalize(namePath) {
  return namePath.map(function (cell) {
    return "".concat((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(cell), ":").concat(cell);
  }) // Magic split
  .join(SPLIT);
}
/**
 * NameMap like a `Map` but accepts `string[]` as key.
 */


var NameMap = /*#__PURE__*/(/* runtime-dependent pure expression or super */ 826 == __webpack_require__.j ? (function () {
  function NameMap() {
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this, NameMap);

    this.kvs = new Map();
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(NameMap, [{
    key: "set",
    value: function set(key, value) {
      this.kvs.set(normalize(key), value);
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.kvs.get(normalize(key));
    }
  }, {
    key: "update",
    value: function update(key, updater) {
      var origin = this.get(key);
      var next = updater(origin);

      if (!next) {
        this.delete(key);
      } else {
        this.set(key, next);
      }
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      this.kvs.delete(normalize(key));
    } // Since we only use this in test, let simply realize this

  }, {
    key: "map",
    value: function map(callback) {
      return (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this.kvs.entries()).map(function (_ref) {
        var _ref2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        var cells = key.split(SPLIT);
        return callback({
          key: cells.map(function (cell) {
            var _cell$match = cell.match(/^([^:]*):(.*)$/),
                _cell$match2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_cell$match, 3),
                type = _cell$match2[1],
                unit = _cell$match2[2];

            return type === 'number' ? Number(unit) : unit;
          }),
          value: value
        });
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var json = {};
      this.map(function (_ref3) {
        var key = _ref3.key,
            value = _ref3.value;
        json[key.join('.')] = value;
        return null;
      });
      return json;
    }
  }]);

  return NameMap;
}()) : null);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 826 == __webpack_require__.j ? (NameMap) : null));

/***/ }),

/***/ 496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ allPromiseFinish)
/* harmony export */ });
function allPromiseFinish(promiseList) {
  var hasError = false;
  var count = promiseList.length;
  var results = [];

  if (!promiseList.length) {
    return Promise.resolve([]);
  }

  return new Promise(function (resolve, reject) {
    promiseList.forEach(function (promise, index) {
      promise.catch(function (e) {
        hasError = true;
        return e;
      }).then(function (result) {
        count -= 1;
        results[index] = result;

        if (count > 0) {
          return;
        }

        if (hasError) {
          reject(results);
        }

        resolve(results);
      });
    });
  });
}

/***/ }),

/***/ 7434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1002);
}


function cloneDeep(val) {
  if (Array.isArray(val)) {
    return cloneArrayDeep(val);
  } else if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(val) === 'object' && val !== null) {
    return cloneObjectDeep(val);
  }

  return val;
}

function cloneObjectDeep(val) {
  if (Object.getPrototypeOf(val) === Object.prototype) {
    var res = {};

    for (var key in val) {
      res[key] = cloneDeep(val[key]);
    }

    return res;
  }

  return val;
}

function cloneArrayDeep(val) {
  return val.map(function (item) {
    return cloneDeep(item);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 826 == __webpack_require__.j ? (cloneDeep) : null));

/***/ }),

/***/ 2656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ defaultValidateMessages)
/* harmony export */ });
var typeTemplate = "'${name}' is not a valid ${type}";
var defaultValidateMessages = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};

/***/ }),

/***/ 3409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ toArray)
/* harmony export */ });
function toArray(value) {
  if (value === undefined || value === null) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

/***/ }),

/***/ 416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ validateRules)
/* harmony export */ });
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9062);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4942);
}
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1413);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5861);
}
/* harmony import */ var async_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5715);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(334);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2656);
if (826 == __webpack_require__.j) {
	/* harmony import */ var _valueUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3236);
}









 // Remove incorrect original ts define

var AsyncValidator = async_validator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z;
/**
 * Replace with template.
 *   `I'm ${name}` + { name: 'bamboo' } = I'm bamboo
 */

function replaceMessage(template, kv) {
  return template.replace(/\$\{\w+\}/g, function (str) {
    var key = str.slice(2, -1);
    return kv[key];
  });
}

var CODE_LOGIC_ERROR = 'CODE_LOGIC_ERROR';

function validateRule(_x, _x2, _x3, _x4, _x5) {
  return _validateRule.apply(this, arguments);
}
/**
 * We use `async-validator` to validate the value.
 * But only check one value in a time to avoid namePath validate issue.
 */


function _validateRule() {
  _validateRule = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(name, value, rule, options, messageVariables) {
    var cloneRule, originValidator, subRuleField, validator, messages, result, subResults, kv, fillVariableResult;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            cloneRule = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, rule); // Bug of `async-validator`
            // https://github.com/react-component/field-form/issues/316
            // https://github.com/react-component/field-form/issues/313

            delete cloneRule.ruleIndex;

            if (cloneRule.validator) {
              originValidator = cloneRule.validator;

              cloneRule.validator = function () {
                try {
                  return originValidator.apply(void 0, arguments);
                } catch (error) {
                  console.error(error);
                  return Promise.reject(CODE_LOGIC_ERROR);
                }
              };
            } // We should special handle array validate


            subRuleField = null;

            if (cloneRule && cloneRule.type === 'array' && cloneRule.defaultField) {
              subRuleField = cloneRule.defaultField;
              delete cloneRule.defaultField;
            }

            validator = new AsyncValidator((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, name, [cloneRule]));
            messages = (0,_valueUtil__WEBPACK_IMPORTED_MODULE_8__/* .setValues */ .gg)({}, _messages__WEBPACK_IMPORTED_MODULE_3__/* .defaultValidateMessages */ .y, options.validateMessages);
            validator.messages(messages);
            result = [];
            _context2.prev = 9;
            _context2.next = 12;
            return Promise.resolve(validator.validate((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, name, value), (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, options)));

          case 12:
            _context2.next = 17;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](9);

            if (_context2.t0.errors) {
              result = _context2.t0.errors.map(function (_ref4, index) {
                var message = _ref4.message;
                var mergedMessage = message === CODE_LOGIC_ERROR ? messages.default : message;
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.isValidElement(mergedMessage) ?
                /*#__PURE__*/
                // Wrap ReactNode with `key`
                react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(mergedMessage, {
                  key: "error_".concat(index)
                }) : mergedMessage;
              });
            }

          case 17:
            if (!(!result.length && subRuleField)) {
              _context2.next = 22;
              break;
            }

            _context2.next = 20;
            return Promise.all(value.map(function (subValue, i) {
              return validateRule("".concat(name, ".").concat(i), subValue, subRuleField, options, messageVariables);
            }));

          case 20:
            subResults = _context2.sent;
            return _context2.abrupt("return", subResults.reduce(function (prev, errors) {
              return [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(prev), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(errors));
            }, []));

          case 22:
            // Replace message with variables
            kv = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, rule), {}, {
              name: name,
              enum: (rule.enum || []).join(', ')
            }, messageVariables);
            fillVariableResult = result.map(function (error) {
              if (typeof error === 'string') {
                return replaceMessage(error, kv);
              }

              return error;
            });
            return _context2.abrupt("return", fillVariableResult);

          case 25:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[9, 14]]);
  }));
  return _validateRule.apply(this, arguments);
}

function validateRules(namePath, value, rules, options, validateFirst, messageVariables) {
  var name = namePath.join('.'); // Fill rule with context

  var filledRules = rules.map(function (currentRule, ruleIndex) {
    var originValidatorFunc = currentRule.validator;

    var cloneRule = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, currentRule), {}, {
      ruleIndex: ruleIndex
    }); // Replace validator if needed


    if (originValidatorFunc) {
      cloneRule.validator = function (rule, val, callback) {
        var hasPromise = false; // Wrap callback only accept when promise not provided

        var wrappedCallback = function wrappedCallback() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          // Wait a tick to make sure return type is a promise
          Promise.resolve().then(function () {
            (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(!hasPromise, 'Your validator function has already return a promise. `callback` will be ignored.');

            if (!hasPromise) {
              callback.apply(void 0, args);
            }
          });
        }; // Get promise


        var promise = originValidatorFunc(rule, val, wrappedCallback);
        hasPromise = promise && typeof promise.then === 'function' && typeof promise.catch === 'function';
        /**
         * 1. Use promise as the first priority.
         * 2. If promise not exist, use callback with warning instead
         */

        (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(hasPromise, '`callback` is deprecated. Please return a promise instead.');

        if (hasPromise) {
          promise.then(function () {
            callback();
          }).catch(function (err) {
            callback(err || ' ');
          });
        }
      };
    }

    return cloneRule;
  }).sort(function (_ref, _ref2) {
    var w1 = _ref.warningOnly,
        i1 = _ref.ruleIndex;
    var w2 = _ref2.warningOnly,
        i2 = _ref2.ruleIndex;

    if (!!w1 === !!w2) {
      // Let keep origin order
      return i1 - i2;
    }

    if (w1) {
      return 1;
    }

    return -1;
  }); // Do validate rules

  var summaryPromise;

  if (validateFirst === true) {
    // >>>>> Validate by serialization
    summaryPromise = new Promise( /*#__PURE__*/function () {
      var _ref3 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(resolve, reject) {
        var i, rule, errors;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                i = 0;

              case 1:
                if (!(i < filledRules.length)) {
                  _context.next = 12;
                  break;
                }

                rule = filledRules[i];
                _context.next = 5;
                return validateRule(name, value, rule, options, messageVariables);

              case 5:
                errors = _context.sent;

                if (!errors.length) {
                  _context.next = 9;
                  break;
                }

                reject([{
                  errors: errors,
                  rule: rule
                }]);
                return _context.abrupt("return");

              case 9:
                i += 1;
                _context.next = 1;
                break;

              case 12:
                /* eslint-enable */
                resolve([]);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x6, _x7) {
        return _ref3.apply(this, arguments);
      };
    }());
  } else {
    // >>>>> Validate by parallel
    var rulePromises = filledRules.map(function (rule) {
      return validateRule(name, value, rule, options, messageVariables).then(function (errors) {
        return {
          errors: errors,
          rule: rule
        };
      });
    });
    summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then(function (errors) {
      // Always change to rejection for Field to catch
      return Promise.reject(errors);
    });
  } // Internal catch error to avoid console error log.


  summaryPromise.catch(function (e) {
    return e;
  });
  return summaryPromise;
}

function finishOnAllFailed(_x8) {
  return _finishOnAllFailed.apply(this, arguments);
}

function _finishOnAllFailed() {
  _finishOnAllFailed = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(rulePromises) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", Promise.all(rulePromises).then(function (errorsList) {
              var _ref5;

              var errors = (_ref5 = []).concat.apply(_ref5, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(errorsList));

              return errors;
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _finishOnAllFailed.apply(this, arguments);
}

function finishOnFirstFailed(_x9) {
  return _finishOnFirstFailed.apply(this, arguments);
}

function _finishOnFirstFailed() {
  _finishOnFirstFailed = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(rulePromises) {
    var count;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            count = 0;
            return _context4.abrupt("return", new Promise(function (resolve) {
              rulePromises.forEach(function (promise) {
                promise.then(function (ruleError) {
                  if (ruleError.errors.length) {
                    resolve([ruleError]);
                  }

                  count += 1;

                  if (count === rulePromises.length) {
                    resolve([]);
                  }
                });
              });
            }));

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _finishOnFirstFailed.apply(this, arguments);
}

/***/ }),

/***/ 3236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H_": () => (/* binding */ cloneByNamePathList),
/* harmony export */   "LX": () => (/* binding */ matchNamePath),
/* harmony export */   "NA": () => (/* binding */ getValue),
/* harmony export */   "T0": () => (/* binding */ isSimilar),
/* harmony export */   "T1": () => (/* binding */ containsNamePath),
/* harmony export */   "gU": () => (/* binding */ getNamePath),
/* harmony export */   "gg": () => (/* binding */ setValues),
/* harmony export */   "iZ": () => (/* binding */ defaultGetValueFromEvent),
/* harmony export */   "pB": () => (/* binding */ move),
/* harmony export */   "sO": () => (/* binding */ setValue)
/* harmony export */ });
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1413);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9062);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1002);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var rc_util_es_utils_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8306);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var rc_util_es_utils_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8880);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var _typeUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3409);
}
if (826 == __webpack_require__.j) {
	/* harmony import */ var _utils_cloneDeep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7434);
}







/**
 * Convert name to internal supported format.
 * This function should keep since we still thinking if need support like `a.b.c` format.
 * 'a' => ['a']
 * 123 => [123]
 * ['a', 123] => ['a', 123]
 */

function getNamePath(path) {
  return (0,_typeUtil__WEBPACK_IMPORTED_MODULE_0__/* .toArray */ .q)(path);
}
function getValue(store, namePath) {
  var value = (0,rc_util_es_utils_get__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(store, namePath);
  return value;
}
function setValue(store, namePath, value) {
  var removeIfUndefined = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var newStore = (0,rc_util_es_utils_set__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(store, namePath, value, removeIfUndefined);
  return newStore;
}
function cloneByNamePathList(store, namePathList) {
  var newStore = {};
  namePathList.forEach(function (namePath) {
    var value = getValue(store, namePath);
    newStore = setValue(newStore, namePath, value);
  });
  return newStore;
}
function containsNamePath(namePathList, namePath) {
  return namePathList && namePathList.some(function (path) {
    return matchNamePath(path, namePath);
  });
}

function isObject(obj) {
  return (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(obj) === 'object' && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
}
/**
 * Copy values into store and return a new values object
 * ({ a: 1, b: { c: 2 } }, { a: 4, b: { d: 5 } }) => { a: 4, b: { c: 2, d: 5 } }
 */


function internalSetValues(store, values) {
  var newStore = Array.isArray(store) ? (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(store) : (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, store);

  if (!values) {
    return newStore;
  }

  Object.keys(values).forEach(function (key) {
    var prevValue = newStore[key];
    var value = values[key]; // If both are object (but target is not array), we use recursion to set deep value

    var recursive = isObject(prevValue) && isObject(value);
    newStore[key] = recursive ? internalSetValues(prevValue, value || {}) : (0,_utils_cloneDeep__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(value); // Clone deep for arrays
  });
  return newStore;
}

function setValues(store) {
  for (var _len = arguments.length, restValues = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    restValues[_key - 1] = arguments[_key];
  }

  return restValues.reduce(function (current, newStore) {
    return internalSetValues(current, newStore);
  }, store);
}
function matchNamePath(namePath, changedNamePath) {
  if (!namePath || !changedNamePath || namePath.length !== changedNamePath.length) {
    return false;
  }

  return namePath.every(function (nameUnit, i) {
    return changedNamePath[i] === nameUnit;
  });
}
function isSimilar(source, target) {
  if (source === target) {
    return true;
  }

  if (!source && target || source && !target) {
    return false;
  }

  if (!source || !target || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(source) !== 'object' || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(target) !== 'object') {
    return false;
  }

  var sourceKeys = Object.keys(source);
  var targetKeys = Object.keys(target);
  var keys = new Set([].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(sourceKeys), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(targetKeys)));
  return (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(keys).every(function (key) {
    var sourceValue = source[key];
    var targetValue = target[key];

    if (typeof sourceValue === 'function' && typeof targetValue === 'function') {
      return true;
    }

    return sourceValue === targetValue;
  });
}
function defaultGetValueFromEvent(valuePropName) {
  var event = arguments.length <= 1 ? undefined : arguments[1];

  if (event && event.target && (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(event.target) === 'object' && valuePropName in event.target) {
    return event.target[valuePropName];
  }

  return event;
}
/**
 * Moves an array item from one position in an array to another.
 *
 * Note: This is a pure function so a new array will be returned, instead
 * of altering the array argument.
 *
 * @param array         Array in which to move an item.         (required)
 * @param moveIndex     The index of the item to move.          (required)
 * @param toIndex       The index to move item at moveIndex to. (required)
 */

function move(array, moveIndex, toIndex) {
  var length = array.length;

  if (moveIndex < 0 || moveIndex >= length || toIndex < 0 || toIndex >= length) {
    return array;
  }

  var item = array[moveIndex];
  var diff = moveIndex - toIndex;

  if (diff > 0) {
    // move left
    return [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(array.slice(0, toIndex)), [item], (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(array.slice(toIndex, moveIndex)), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(array.slice(moveIndex + 1, length)));
  }

  if (diff < 0) {
    // move right
    return [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(array.slice(0, moveIndex)), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(array.slice(moveIndex + 1, toIndex + 1)), [item], (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(array.slice(toIndex + 1, length)));
  }

  return array;
}

/***/ })

}]);