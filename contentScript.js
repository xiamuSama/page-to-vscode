let insert = false;

chrome.runtime.sendMessage({ type: "init"}, (response) => {
    // console.log('background收到了消息的回调');
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    //   console.log(sender.tab ?
    //               "from a content script:" + sender.tab.url :
    //               "from the extension");

    //   console.log('request', request, sender);
      // 从popup.html 来的消息
      if (request.type === 'open_from_swtich') {
          request.vscodeSwtich ? insertHelperIcon() : removeHelperIcon();
          
      }
      // 从backgroud来的消息
      if (request.type === "open_from_menu") {
        handleLinkToVscode();
      }
      // 回消息
      sendResponse('已收到');
    }
  );

// 

function handleLinkToVscode(){
    let firstNode = document.querySelectorAll("[data-vscode-schema]")[0];
    let schema =  firstNode ? firstNode.getAttribute('data-vscode-schema'):  '';
    // if ()
    if (schema) { 
        getSchema(schema).then(url => window.open(url))
    }
}
function getSchema(schema) { 
    return window.chrome.storage.local.get().then(storage => {
        let hosts = storage["vscode-open-host"] || {};
        let checkedHost = storage["vscode-open-check-rule"] || 'default'
        let host = hosts[checkedHost]

        if (host[0] !== '/') {
            host = "/"+host
        }
        let url = new URL(`vscode://file${host}${schema}`)
        return url
    })
}

function getHost() { 
    return window.chrome.storage.local.get().then(storage => {
        let hosts = storage["vscode-open-host"] || {};
        let checkedHost = storage["vscode-open-check-rule"] || 'default'
        let host = hosts[checkedHost]
        
        if (host[0] !== '/') {
            host = "/"+host
        }
        return `vscode://file${host}`
    })
}

function getSchemaList() { 
    let list = [];
    let nodes = document.querySelectorAll("[data-vscode-schema]");
        for(let i=0;i<nodes.length;i++) {
            let node = nodes[i];
            let schema = node.getAttribute('data-vscode-schema');
            list.push(schema)
        }
    return list;
}


// helper图标
window.chrome.storage.local.get().then(storage => {
    let checked = storage["vscode-open-switch"] || "no";
    if (checked === 'yes') { 
        insertHelperIcon();
    }
})
// 页面注入helper 图标;
function insertHelperIcon() { 
    if ($('#vscode-schema-helper-icon').length) { 
        return;
    }
    // https://img0.baidu.com/it/u=1357890151,3876531850&fm=253&fmt=auto&app=138&f=JPEG
    let html=(`<a id="vscode-schema-helper-icon" style="position: fixed;bottom:50%;left:0%;z-index: 9999;cursor: pointer;"><img src="https://git.souban.io/uploads/-/system/user/avatar/180/avatar.png" style="width: 40px;height: 40px;"></a>`)
    $('html').prepend(html);
    $('#vscode-schema-helper-icon').click(function () {
        if ($('#vscode-schema-helper-icon-list').length) {
            $('#vscode-schema-helper-icon-list').remove();
        } else {
            getHost().then(host => { 
                const schemaLists = getSchemaList();
                let html = '';
                for (let i = 0; i < schemaLists.length; i++) {
                    // let item = schemaLists[i].split('/')
                    // // 最后一项
                    // let fileName = item[item.length - 1].split(':')[0];
                    let fileName = schemaLists[i].split(':')[0]
                    html+= getTplString(fileName, host+schemaLists[i])
                };
                $(this).prepend(`<div style="position: absolute;left: 45px;" id="vscode-schema-helper-icon-list">${html}</div>`)
            })
    
            
        }
    })
}

function removeHelperIcon() { 
    $('#vscode-schema-helper-icon').remove()
}
 
function getTplString(name, url) {
    return `<div style="width: auto;height: 32px;margin-bottom: 4px;text-align: center;font-size: 14px;line-height: 32px;background:rgb(22,119,255);border-radius:6px;white-space:nowrap;">
                <a href="${url}" target="_blank" style="color: #fff;">${name}</a>
            </div>`;
    
}
// 