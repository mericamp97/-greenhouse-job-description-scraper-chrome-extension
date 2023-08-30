const fetchRequirements = async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const request = {
        action: "fetchRequirements",
        tabId: tab.id
    };
    chrome.runtime.sendMessage(request);
};

document.addEventListener("DOMContentLoaded", function() {
    const fetchRequirementsButton = document.getElementById("fetchRequirements");
  
    fetchRequirementsButton.addEventListener("click", async () => {
      await fetchRequirements();
    });
  
    // Listen for the message from the background script
    chrome.runtime.onMessage.addListener(function(message) {
      if (message.action === "requirementsReceived") {
        // Update the requirements in the popup
        updateRequirementsInPopup();
      }
    });
  });
  
  async function updateRequirementsInPopup() {
    const storedRequirements = await chrome.storage.local.get('storedRequirements');
    const matchedRequirementsList = document.getElementById("matchedRequirements");
    const requirementsHtml = storedRequirements.storedRequirements.map(requirement => {
      return `<div>${requirement}</div><br>`;
    }).join("");
    matchedRequirementsList.innerHTML = requirementsHtml;
  }
  
