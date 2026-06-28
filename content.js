// Function to skip the ad seamlessly
function skipAd() {
  const player = document.querySelector('.html5-video-player');
  
  // Check if the player is currently in "ad showing" mode
  if (player && player.classList.contains('ad-showing')) {
    const video = document.querySelector('video');
    
    if (video) {
      // 1. Mute the video to prevent a split-second audio glitch
      video.muted = true;
      
      // 2. Fast-forward the video to just before the end
      if (!isNaN(video.duration)) {
        video.currentTime = video.duration - 0.1;
      }
      
      // 3. Max out the playback speed just in case
      video.playbackRate = 16;
    }

    // 4. Find the "Skip Ad" button (checking various class names YouTube uses) and click it
    const skipButton = document.querySelector('.ytp-ad-skip-button, .ytp-ad-skip-button-modern, .ytp-skip-ad-button');
    if (skipButton) {
      skipButton.click();
    }
  }
}

// Observe the DOM for YouTube's dynamic UI changes
function initObserver() {
  // We observe the body because YouTube injects and removes ad elements dynamically
  const targetNode = document.body;
  const config = { childList: true, subtree: true };

  const callback = function(mutationsList) {
    // Whenever elements change, check if the ad-showing class is present
    if (document.querySelector('.html5-video-player.ad-showing')) {
      skipAd();
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}

// Start watching
skipAd();
initObserver();