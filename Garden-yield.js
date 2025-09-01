function calculateGarden() {
    let length = parseFloat(document.getElementById('length').value);
    let width = parseFloat(document.getElementById('width').value);
    let crop = document.getElementById('crop');
    let spacing = parseFloat(crop.options[crop.selectedIndex].dataset.spacing);
    let yieldPerPlant = parseFloat(crop.options[crop.selectedIndex].dataset.yield);
    let waterPerPlant = parseFloat(crop.options[crop.selectedIndex].dataset.water);
    let pricePerKg = parseFloat(crop.options[crop.selectedIndex].dataset.price);

    if (isNaN(length) || isNaN(width)) {
      document.getElementById('results').innerHTML = "<p style='color:red'>Please enter valid garden dimensions.</p>";
      return;
    }

    let area = length * width;
    let plantSpacingArea = spacing * spacing;
    let numPlants = Math.floor(area / plantSpacingArea);

    let totalYield = numPlants * yieldPerPlant;
    let totalWater = numPlants * waterPerPlant;
    let savings = totalYield * pricePerKg;

    document.getElementById('results').innerHTML = `
      <h3>Results:</h3>
      <p>Garden Area: ${area.toFixed(2)} m²</p>
      <p>Number of Plants: ${numPlants}</p>
      <p>Total Water Needed: ${totalWater.toFixed(1)} L per week</p>
      <p>Estimated Harvest: ${totalYield.toFixed(1)} kg</p>
      <p>Estimated Savings: R${savings.toFixed(2)} per harvest</p>
    `;
  }