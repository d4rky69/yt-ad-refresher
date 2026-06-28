# 🎬 Seamless YouTube Ad Skipper

A lightweight, blazing-fast browser extension that instantly skips YouTube ads without reloading the page. Built for Chromium browsers (Chrome, Brave, Edge).

## ✨ Features
* **Zero Reloads:** Fast-forwards and skips ads natively using the HTML5 video player.
* **Instant Mute:** Mutes the ad for the millisecond it exists to prevent audio glitches.
* **Lightweight:** No heavy background scripts or trackers; relies on a simple `MutationObserver`.
* **Brave Compatible:** Acts as a perfect fallback when YouTube bypasses native browser shields.

## 🚀 Installation (Developer Mode)

Since this extension is not currently on the Chrome Web Store, you can install it locally in just a few seconds.

1. **Download the code:** Clone this repository or click `Code` > `Download ZIP` and extract it.
2. **Open Extensions Page:** 
   * **Chrome:** Navigate to `chrome://extensions/`
   * **Brave:** Navigate to `brave://extensions/`
3. **Enable Developer Mode:** Toggle the switch in the top right corner.
4. **Load the Extension:** Click the **Load unpacked** button in the top left and select the folder you extracted in Step 1.
5. **Enjoy:** Open YouTube and watch ad-free!

## 🛠️ How it Works
Unlike traditional blockers that attempt to block network requests (which YouTube actively fights), this script monitors the DOM for YouTube's `.ad-showing` class. When triggered, it grabs the `<video>` element, sets the playback rate to 16x, jumps to the end of the ad, and programmatically clicks the "Skip" button. 

## 📝 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
**Author:** Shreyas Sahoo
