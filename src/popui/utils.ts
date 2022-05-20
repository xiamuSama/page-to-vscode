class ChromeStorageManager {
    storageFn = null;
    constructor(props) {
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
    useChromeStorageSyncFn: false, 
});

export const setCheckStorage = (checked) => {
    return new Promise((resolve) => {
        csmInstance.set(
          {
            "vscode-open-switch": checked ? "yes" : "no"
          },
          resolve
        );
      });
}
export const getCheckStorage = () => {
    return new Promise((resolve) => {
        csmInstance.get(
            "vscode-open-switch",
          (result) => resolve(result["vscode-open-switch"])
        );
      });
}

export const setHostStorage = (host) => {
    return new Promise((resolve) => {
        csmInstance.set(
          {
            "vscode-open-host": host
          },
          resolve
        );
      });
}
export const getHostStorage : () => Promise<string>= () => {
    return new Promise((resolve) => {
        csmInstance.get(
            "vscode-open-host",
          (result) => resolve(result["vscode-open-host"])
        );
      });
}

export const postCheckStorage = (val) => {
   // @ts-ignore
  window.chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
     // @ts-ignore
     window.chrome.tabs.sendMessage(tabs[0].id, { vscodeSwtich: val, type: 'open_from_swtich' }, function(response) {
      console.log(response);
    });
  });
}