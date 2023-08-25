// Create a context menu item
chrome.contextMenus.create({
    title: "Copy API Name",
    id: "copyApiName",
    contexts: ["all"]
  });
  
  // Listen for context menu item click events
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "copyApiName") {
      // Copy API name to the clipboard
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: function() {
          const apiName = window.getSelection().toString();
          const input = document.createElement("input");
          document.body.appendChild(input);
          input.value = apiName;
          input.select();
          document.execCommand("copy");
          input.remove();
        }
      });
    }
  });
  