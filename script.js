document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tripForm').addEventListener('submit', function(e) {
      e.preventDefault();
      var distance = parseFloat(document.getElementById('distance').value);
      var fuelEfficiency = parseFloat(document.getElementById('fuelEfficiency').value);
      var fuelPrice = parseFloat(document.getElementById('fuelPrice').value);
  
      if (isNaN(distance) || isNaN(fuelEfficiency) || isNaN(fuelPrice)) {
        alert('Please enter valid numbers');
        return;
      }
  
      var fuelCost = (distance / 100) * fuelEfficiency * fuelPrice;
      var resultElement = document.getElementById('result');
      resultElement.innerHTML = 'Total Fuel Cost: CA$' + fuelCost.toFixed(2);
    });
  });
  