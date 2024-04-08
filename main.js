function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function generatePrimes() {
  const maxValue = document.getElementById("max-value").value;
  const primeList = document.getElementById("prime-list");
  primeList.innerHTML = "";

  for (let i = 2; i <= maxValue; i++) {
    if (isPrime(i)) {
      const li = document.createElement("li");
      li.textContent = i;
      primeList.appendChild(li);
    }
  }
}
function clearInput() {
  document.getElementById("max-value").value = "";
  document.getElementById("prime-list").innerHTML = "";
}