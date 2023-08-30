chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.request && request.request.action === "fetchRequirements") {
        const requirements = [];
        const contentDiv = document.getElementById("content");
        const contentElements = contentDiv.querySelectorAll("p, ul > li");
        for (const contentElement of contentElements) {
            requirements.push(contentElement.textContent);
        }
        chrome.runtime.sendMessage({
            action: "filledRequirements",
            requirements: requirements
        });
    }
});





  
  
