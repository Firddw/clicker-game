// Initialize points and auto-clickers
let points = 0;
let autoClickers = 0;

// Get references to HTML elements
const clickButton = document.getElementById("clickButton");
const pointsDisplay = document.getElementById("points");
const autoClickersDisplay = document.getElementById("autoClickers");
const buyAutoClickerButton = document.getElementById("buyAutoClicker");

// Handle button clicks to earn points
clickButton.addEventListener("click", () => {
  points++; // Increment points by 1
  updateDisplay(); // Update the display
});

// Buy an auto-clicker
buyAutoClickerButton.addEventListener("click", () => {
  if (points >= 10) {
    points -= 10; // Deduct 10 points to buy an auto-clicker
    autoClickers++;
    updateDisplay();
  } else {
    alert("Not enough points to buy an auto-clicker!");
  }
});

// Auto-clicker functionality (adds points automatically every second)
setInterval(() => {
  points += autoClickers; // Add points equal to the number of auto-clickers
  updateDisplay();
}, 1000); // Runs every 1 second

// Update the game display
function updateDisplay() {
  pointsDisplay.textContent = points;
  autoClickersDisplay.textContent = autoClickers;
}
