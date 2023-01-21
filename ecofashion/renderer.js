submit_button = document.getElementById('submit-button');

submit_button.onclick = function calculateImpact() {
  // Get the selected values from the form
  var material = document.getElementById("materials").value;
  var amount = document.getElementById("amount").value;
  var production = document.getElementById("production").value;
  var transportation = document.getElementById("transportation").value;
  
  // Initialize the impact variable
  var impact = 0;
  var feedback = "";
  var alternatives = "";
  
  // Check if the user entered a valid amount of material used
  if (amount <= 0) {
      document.getElementById("impact-result").innerHTML = "Please enter a valid amount of material used.";
      return;
  }
  
  // Use a switch statement to determine the impact based on the material
  switch (material) {
      case "cotton":
          impact += (10 * amount);
          feedback += "Cotton is a widely used material, but it can have a high environmental impact due to the use of pesticides and water. ";
          alternatives += "Consider using organic cotton or other sustainable materials such as linen or hemp. ";
          break;
      case "denim":
          impact += (20 * amount);
          feedback += "Denim is a durable material, but it requires a lot of water and energy to produce. ";
          alternatives += "Consider using sustainable denim made from organic cotton or recycled materials. ";
          break;
      case "leather":
          impact += (30 * amount);
          feedback += "Leather is a durable material, but it can have a high environmental impact due to the use of chemicals and water. ";
          alternatives += "Consider using sustainable alternatives such as PU leather or synthetic leather. ";
          break;
      case "wool":
          impact += (15 * amount);
          feedback += "Wool is a natural material, but it can have a high environmental impact due to the use of pesticides and water. ";
          alternatives += "Consider using sustainable alternatives such as organic wool or alpaca. ";
          break;
  }
  
  // Use a switch statement to determine the impact based on the production method
  switch (production) {
      case "organic":
          impact -= (5 * amount);
          feedback += "Organic production methods use fewer pesticides and chemicals, reducing the environmental impact. ";
          break;
      case "conventional":
              impact += (10 * amount);
feedback += "Conventional production methods use more pesticides and chemicals, increasing the environmental impact. ";
alternatives += "Consider using sustainable or organic production methods. ";
break;
case "sustainable":
impact -= (15 * amount);
feedback += "Sustainable production methods use fewer pesticides and chemicals, and they also reduce the energy consumption and water usage. ";
break;
}
// Use a switch statement to determine the impact based on the transportation method
switch (transportation) {
  case "air":
      impact += (5 * amount);
      feedback += "Air transportation has a high environmental impact due to the emissions. ";
      alternatives += "Consider using sea or land transportation. ";
      break;
  case "sea":
      impact += (2 * amount);
      feedback += "Sea transportation is more sustainable than air transportation. ";
      break;
  case "land":
      impact += (1 * amount);
      feedback += "Land transportation is the most sustainable option. ";
      break;
}

// Classify the impact score as high, medium, or low
var impactClassification = "";
if (impact >= 30) {
  impactClassification = "High";
} else if (impact >= 15 && impact < 30) {
  impactClassification = "Medium";
} else {
  impactClassification = "Low";
}

// Display the impact result
document.getElementById("impact-result").innerHTML = "The environmental impact of this piece of clothing is: " + impact + " kg CO2e. <br> Impact Classification: " + impactClassification + "<br>" + feedback + alternatives;

return false;
}
