chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        title: "打开vscode",
        id: "vscodeHelper",
        type: 'normal'
    });
  });


chrome.contextMenus.onClicked.addListener((item, tab) => {
    const tld = item.menuItemId;
    console.log(item,tab);
    if (tld === "vscodeHelper") {
        chrome.tabs.sendMessage(tab.id, { type: 'open_from_menu'})
    }
  });