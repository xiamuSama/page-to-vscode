class ChromeStorageManager {
  storageFn = null;
  constructor(props) {
    // @ts-ignore
    if (window.chrome && window.chrome.storage) {
      // @ts-ignore
      this.storageFn = props.useChromeStorageSyncFn
        ? window.chrome.storage.sync
        : window.chrome.storage.local;
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
  useChromeStorageSyncFn: false,
});

// 开关
export const setCheckStorage = (checked) => {
  return new Promise((resolve) => {
    csmInstance.set(
      {
        "vscode-open-switch": checked ? "yes" : "no",
      },
      resolve
    );
  });
};
export const getCheckStorage = () => {
  return new Promise((resolve) => {
    csmInstance.get("vscode-open-switch", (result) =>
      resolve(result["vscode-open-switch"])
    );
  });
};

// 配置列表

export const setRulesStorage = (rules) => {
  return new Promise((resolve) => {
    csmInstance.set(
      {
        "vscode-open-rule-list": rules,
      },
      resolve
    );
  });
};
export const getRulesStorage: () => Promise<string[]> = () => {
  return new Promise((resolve) => {
    csmInstance.get("vscode-open-rule-list", (result) =>
      resolve(result["vscode-open-rule-list"])
    );
  });
};

//当前选中配置
export const setCheckedRuleStorage = (rule) => {
  return new Promise((resolve) => {
    csmInstance.set(
      {
        "vscode-open-check-rule": rule,
      },
      resolve
    );
  });
};
export const getCheckedRuleStorage: () => Promise<string> = () => {
  return new Promise((resolve) => {
    csmInstance.get("vscode-open-check-rule", (result) =>
      resolve(result["vscode-open-check-rule"])
    );
  });
};

// 主机配置
export const setHostStorage = (host) => {
  return new Promise((resolve) => {
    csmInstance.set(
      {
        "vscode-open-host": host,
      },
      resolve
    );
  });
};
export const getHostStorage: () => Promise<object> = () => {
  return new Promise((resolve) => {
    csmInstance.get("vscode-open-host", (result) =>
      resolve(result["vscode-open-host"])
    );
  });
};

// 联动-开关
export const postCheckStorage = (val) => {
  // @ts-ignore
  window.chrome.tabs.query(
    { active: true, currentWindow: true },
    function (tabs) {
      // @ts-ignore
      window.chrome.tabs.sendMessage(
        tabs[0].id,
        { vscodeSwtich: val, type: "open_from_swtich" },
        function (response) {
          console.log(response);
        }
      );
    }
  );
};
