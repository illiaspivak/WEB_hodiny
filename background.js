let contentScriptTabId;
chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.query(
        { active: true, currentWindow: true },
        (arrayOfTabs) => {
            contentScriptTabId = arrayOfTabs[0].id
        }
    );
    chrome.windows.create({
        'url': 'index.html',
        'type': 'popup',
        'height': 1050,
        'width': 500,
        'left': 1
    });
});

chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        if (message.type === 'extension-loaded') {
            sendResponse(
                { contentScriptTabId:contentScriptTabId }
            )
        }
    }
)
