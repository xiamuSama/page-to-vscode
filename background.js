chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        title: "打开vscode",
        id: "vscodeHelper",
        type: 'normal'
    });
    // chrome.contextMenus.create({
    //   title: "打开vscode埋点",
    //   id: "vscodeHelperMenu",
    //   type: 'normal',
    //   parentId: "vscodeHelper"
    // });
  });


chrome.contextMenus.onClicked.addListener((item, tab) => {
    const tld = item.menuItemId;
    // console.log(item,tab);
    if (tld === "vscodeHelper") {
        chrome.tabs.sendMessage(tab.id, { type: 'open_from_menu'})
    }
});
  
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

  let requestType = message.type;

  switch (requestType) {
    case "init":
          sendResponse("收到了来自contentScript的消息");
          break;
    default:
      break;
  }
});
