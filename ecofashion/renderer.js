submit_button = document.getElementById('submit-button');

submit_button.onclick = function calculateImpact() {
  // Get the selected values from the form
  var material = document.getElementById("materials").value;
  var amount = document.getElementById("amount").value;
  var production = document.getElementById("production").value;
  var transportation = document.getElementById("transportation").value;
  
  // Initialize the impact variable
  var impact = 0;
  
  // Use a switch statement to determine the impact based on the material
  switch (material) {
      case "cotton":
          impact += 10;
          break;
      case "denim":
          impact += 20;
          break;
      case "leather":
          impact += 30;
          break;
      case "wool":
          impact += 15;
          break;
  }
  
  // Use a switch statement to determine the impact based on the production method
  switch (production) {
      case "organic":
          impact -= 5;
          break;
      case "conventional":
          impact += 10;
          break;
      case "sustainable":
          impact -= 15;
          break;
  }
  
  // Use a switch statement to determine the impact based on the transportation method
  switch (transportation) {
      case "air":
          impact += 5;
          break;
      case "sea":
          impact += 2;
          break;
      case "land":
          impact += 1;
          break;
  }
  
  // Multiply the impact by the amount of material used
  impact *= amount;
  
  // Display the impact result
  document.getElementById("impact-result").innerHTML = "The environmental impact of this piece of clothing is: " + impact + " points.";
}