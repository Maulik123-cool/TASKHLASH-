let currentPoints = 200;
let damageGiven = 0;
let workoutTime = 0; // in seconds

function startBattle() {
  alert("✅ Battle Started! Now go exercise to earn points!");
  startTimer();
}

function startTimer() {
  setInterval(() => {
    workoutTime++;
    if (workoutTime % 10 === 0) {
      currentPoints += 10;
      document.getElementById("points").textContent = currentPoints;
    }
    document.getElementById("timer").textContent = formatTime(workoutTime);
  }, 1000);
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;
}

function useSpecialAttack(name, cost, damage) {
  if (currentPoints >= cost) {
    currentPoints -= cost;
    damageGiven += damage;
    document.getElementById("points").textContent = currentPoints;
    document.getElementById("damage").textContent = damageGiven;
    alert(`🔥 You used ${name} and caused ${damage} damage!`);
  } else {
    alert("❌ Not enough points!");
  }
}
