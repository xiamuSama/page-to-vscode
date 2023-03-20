/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 2957:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(1181);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js
var input = __webpack_require__(5537);
// EXTERNAL MODULE: ./node_modules/antd/es/radio/index.js + 2 modules
var es_radio = __webpack_require__(3003);
// EXTERNAL MODULE: ./node_modules/antd/es/switch/index.js
var es_switch = __webpack_require__(9314);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js + 1 modules
var DeleteOutlined = __webpack_require__(3171);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EditOutlined.js + 1 modules
var EditOutlined = __webpack_require__(8212);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckOutlined.js + 1 modules
var CheckOutlined = __webpack_require__(9508);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(4549);
;// CONCATENATED MODULE: ./src/popui/utils.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ChromeStorageManager {
  constructor(props) {
    _defineProperty(this, "storageFn", null);

    // @ts-ignore
    if (window.chrome && window.chrome.storage) {
      // @ts-ignore
      this.storageFn = props.useChromeStorageSyncFn ? window.chrome.storage.sync : window.chrome.storage.local;
    }
  }

  get(keyOrObj, callback) {
    this.storageFn.get(keyOrObj, callback);
  }

  set(obj, callback) {
    this.storageFn.set(obj, callback);
  }

}

const csmInstance = new ChromeStorageManager({
  useChromeStorageSyncFn: false
}); // 开关

const setCheckStorage = checked => {
  return new Promise(resolve => {
    csmInstance.set({
      "vscode-open-switch": checked ? "yes" : "no"
    }, resolve);
  });
};
const getCheckStorage = () => {
  return new Promise(resolve => {
    csmInstance.get("vscode-open-switch", result => resolve(result["vscode-open-switch"]));
  });
}; // 配置列表

const setRulesStorage = rules => {
  return new Promise(resolve => {
    csmInstance.set({
      "vscode-open-rule-list": rules
    }, resolve);
  });
};
const getRulesStorage = () => {
  return new Promise(resolve => {
    csmInstance.get("vscode-open-rule-list", result => resolve(result["vscode-open-rule-list"]));
  });
}; //当前选中配置

const setCheckedRuleStorage = rule => {
  return new Promise(resolve => {
    csmInstance.set({
      "vscode-open-check-rule": rule
    }, resolve);
  });
};
const getCheckedRuleStorage = () => {
  return new Promise(resolve => {
    csmInstance.get("vscode-open-check-rule", result => resolve(result["vscode-open-check-rule"]));
  });
}; // 主机配置

const setHostStorage = host => {
  return new Promise(resolve => {
    csmInstance.set({
      "vscode-open-host": host
    }, resolve);
  });
};
const getHostStorage = () => {
  return new Promise(resolve => {
    csmInstance.get("vscode-open-host", result => resolve(result["vscode-open-host"]));
  });
}; // 联动-开关

const postCheckStorage = val => {
  // @ts-ignore
  window.chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    // @ts-ignore
    window.chrome.tabs.sendMessage(tabs[0].id, {
      vscodeSwtich: val,
      type: "open_from_swtich"
    }, function (response) {
      console.log(response);
    });
  });
};
;// CONCATENATED MODULE: ./src/popui/Popui.tsx






const TextArea = input/* default.TextArea */.Z.TextArea;

function App() {
  const [checked, setChecked] = (0,react.useState)(true);
  const [host, setHost] = (0,react.useState)("");
  const [rule, setRule] = (0,react.useState)("");
  const [ruleList, setRuleList] = (0,react.useState)([]);
  const [checkedRule, setCheckedRule] = (0,react.useState)("default");
  (0,react.useEffect)(() => {
    fn();
  }, []);

  const fn = async () => {
    try {
      // 开关回填
      const checked = await getCheckStorage();
      setChecked(checked === "yes"); // 配置列表回填

      const rules = (await getRulesStorage()) || [];
      setRuleList(rules); // 选择配置回填

      const checkedRule = (await getCheckedRuleStorage()) || "default";
      setCheckedRule(checkedRule); // host回填

      const hosts = (await getHostStorage()) || {};
      console.log("hosts", hosts, checkedRule);
      setHost(hosts[checkedRule]);
    } catch (error) {
      console.error(11, error);
    }
  };

  const rulesChange = v => {
    const val = v.target.value;
    setCheckedRule(val);
    setCheckedRuleStorage(val); // host切换

    getHostStorage().then(function () {
      let host = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      setHost(host[val]);
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "App"
  }, /*#__PURE__*/react.createElement("div", {
    className: "left"
  }, /*#__PURE__*/react.createElement(es_radio/* default.Group */.ZP.Group, {
    defaultValue: "default",
    style: {
      width: "100%"
    },
    value: checkedRule,
    onChange: rulesChange
  }, /*#__PURE__*/react.createElement("div", {
    className: "radio-group"
  }, /*#__PURE__*/react.createElement("div", {
    className: "radio"
  }, /*#__PURE__*/react.createElement(es_radio/* default */.ZP, {
    value: "default"
  }, "\u9ED8\u8BA4"))), ruleList.map((v, index) => /*#__PURE__*/react.createElement("div", {
    className: "radio-group",
    key: v
  }, /*#__PURE__*/react.createElement("div", {
    className: "radio"
  }, /*#__PURE__*/react.createElement(es_radio/* default */.ZP, {
    value: v
  }, v)), /*#__PURE__*/react.createElement(DeleteOutlined/* default */.Z, {
    className: "del",
    onClick: () => {
      setRuleList(v => {
        v.splice(index, 1);
        setRulesStorage(v);
        rulesChange({
          target: {
            value: "default"
          }
        });
        return [].concat(v);
      });
    }
  })))), /*#__PURE__*/react.createElement(input/* default */.Z, {
    suffix: /*#__PURE__*/react.createElement(EditOutlined/* default */.Z, {
      onClick: () => {
        if (!rule) {
          return;
        }

        setRuleList(v => {
          v.push(rule);
          setRulesStorage(v);
          return [].concat(v);
        });
        setRule("");
      }
    }),
    placeholder: "add a rule ",
    className: "input",
    value: rule,
    onChange: e => {
      const val = e.target.value;
      setRule(val);
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "right"
  }, /*#__PURE__*/react.createElement(es_switch/* default */.Z, {
    checkedChildren: /*#__PURE__*/react.createElement(CheckOutlined/* default */.Z, null),
    unCheckedChildren: /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, null),
    onChange: val => {
      setChecked(val);
      setCheckStorage(val);
      postCheckStorage(val);
    },
    checked: checked
  }), /*#__PURE__*/react.createElement(TextArea, {
    rows: 2,
    placeholder: "\u672C\u673A\u4ED3\u5E93\u914D\u7F6E",
    style: {
      marginTop: 20
    },
    value: host,
    onChange: e => {
      const val = e.target.value;
      setHost(val);
      getHostStorage().then(function () {
        let v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        const cv = JSON.parse(JSON.stringify(v));
        cv[checkedRule] = val;
        setHostStorage(cv);
      });
    }
  })));
}

/* harmony default export */ const Popui = (App);
;// CONCATENATED MODULE: ./src/popui/index.tsx



react_dom.render( /*#__PURE__*/react.createElement(Popui, null), document.getElementById('root'));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	(() => {
/******/ 		__webpack_require__.j = 826;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			826: 0,
/******/ 			439: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_test"] = self["webpackChunkwebpack_test"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [302,439,35,392,437,916,657,13,973,656,33,237,30,815], () => (__webpack_require__(2957)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;