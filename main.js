let currentPoints = 200;

function startBattle() {
  alert("✅ Battle Started! Now go exercise to earn points!");
}

function useSpecialAttack(name, cost) {
  if (currentPoints >= cost) {
    currentPoints -= cost;
    document.getElementById("points").textContent = currentPoints;
    alert(`🔥 You used ${name}!`);
  } else {
    alert("❌ Not enough points!");
  }
}
