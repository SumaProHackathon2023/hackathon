chrome.runtime.onInstalled.addListener(async(detail) => {
    if(detail.reason === "install"){
        const url = chrome.runtime.getURL("welcome/welcome.html")
        await chrome.tabs.create({url})
    }
})