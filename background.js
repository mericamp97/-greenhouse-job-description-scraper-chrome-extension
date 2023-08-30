chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "fetchRequirements") {
      chrome.tabs.sendMessage(request.tabId, { request: request });
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "filledRequirements") {
    chrome.storage.local.set({
      storedRequirements: request.requirements
    }, function() {
      // Send a message to the popup script to notify that requirements are received
      chrome.runtime.sendMessage({ action: "requirementsReceived" });
    });
  }
});

