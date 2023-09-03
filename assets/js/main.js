// main.js
const playSoundButton = document.getElementById("nhac");
const audioElement = document.getElementById("audioElement");
playSoundButton.addEventListener("click", function () {
 {
        audioElement.play();
        playSoundButton.textContent = "W/n - id 072019";
    }
}); 
function incrementCount(element, targetCount) {
    let currentCount = 0;
    const duration = 2000; 
    const step = Math.ceil(targetCount / (duration / 1)); 
  
    function updateCount() {
      if (currentCount < targetCount) {
        currentCount += step;
        if (currentCount > targetCount) {
          currentCount = targetCount;
        }
        element.textContent = currentCount;
        setTimeout(updateCount, 10); 
      }
    }
  
    updateCount();
  }
  const followersCount = document.querySelector('.statistic-item .count[data-count="100"]');
  const projectsCount = document.querySelector('.statistic-item .count[data-count="50"]');
  
  incrementCount(followersCount, parseInt(followersCount.getAttribute('data-count')));
  incrementCount(projectsCount, parseInt(projectsCount.getAttribute('data-count')));