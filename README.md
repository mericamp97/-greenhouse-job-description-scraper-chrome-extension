# Introduction
This GitHub repository hosts a Chrome extension developed for personal learning purposes. The extension is designed to interact with web pages, specifically targeting job descriptions on company websites that use Greenhouse for their human resources software. The choice of Greenhouse was due to its simple HTML structure, making it easier to interact with and extract information.

# Repository Contents
1. **background.js:** Sets up the background script of the Chrome extension. It handles browser events and coordinates between content scripts and popup scripts.
2. **content.js:** The content script that directly interacts with the content of the web pages. It's responsible for scraping job descriptions from Greenhouse-powered pages.
3. **manifest.json:** Contains metadata for the Chrome extension, like the version, name, permissions, and scripts included.
4. **popup.html:** HTML file for the popup UI of the extension. Provides a user interface to interact with the extension's functionality.
5. **popup.js:** Contains the JavaScript that powers the popup UI. It includes functions to fetch job requirements from the current tab and display them in the popup.

# Features
- Scraping job descriptions from web pages that use Greenhouse.
- Displaying the scraped job requirements in a popup window for easy access.
- Using background scripts to manage and coordinate the extension's operations.

# How to Use
1. Install the extension in Chrome.
2. Navigate to a web page with a job description using Greenhouse.
3. Click the extension's icon to view the job requirements extracted from the page.

# Disclaimer
This extension was developed as a learning project and is intended for educational purposes only.
