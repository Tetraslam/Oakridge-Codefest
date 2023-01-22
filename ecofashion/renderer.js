

try {
  
submit_button = document.getElementById('submit-button');
body = document.getElementsByTagName('body');
body.onload = removeLoader()

submit_button.onclick = function calculateImpact() {
  
  // Get the selected values from the form
  var material = document.getElementById("materials").value;
  var amount = document.getElementById("amount").value;
  var production = document.getElementById("production").value;
  var transportation = document.getElementById("transportation").value;
  
  // Initialize the impact variable
  var impact = 0;
  var cost = 0;
  var feedback = "";  
  var alternatives = "";
  var alternativeCost = 0;
  
  // Check if the user entered a valid amount of material used
  if (amount <= 0) {
      document.getElementById("impact-result").innerHTML = "<p style = 'margin-top: 5px; font-size: 25px; color: red;'> Please enter a valid amount of material used!</p>";
      return false;
  }
  
  // Use a switch statement to determine the impact based on the material
  switch (material) {
      case "cotton":
          impact += (10 * amount);
          cost += 170 * amount;
          alternativeCost += 150 * amount;
          feedback += "Cotton is a widely used material, but it can have a high environmental impact due to the use of pesticides and water. ";
          alternatives += "Consider using recycled cotton or other sustainable materials such as linen or hemp. If you use recycled cotton, the cost will come down to " + alternativeCost + ", a reduction of " + Math.round((((cost-alternativeCost)/cost)*100)) + "%.<br>";
          break;
      case "denim":
          impact += (20 * amount);
          cost += 450 * amount;
          alternativeCost += 240 * amount;
          feedback += "Denim is a durable material, but it requires a lot of water and energy to produce. ";
          alternatives += "Consider using sustainable denim made from organic cotton or recycled materials. If you use organic cotton, the cost will come down to " + alternativeCost + ", a reduction of " + Math.round((((cost-alternativeCost)/cost)*100)) + "%.<br>";
          break;
      case "leather":
          impact += (30 * amount);
          cost += 230 * amount;
          alternativeCost += 80 * amount;
          feedback += "Leather is a durable material, but it can have a high environmental impact due to the use of chemicals and water. ";
          alternatives += "Consider using sustainable alternatives such as PU leather or synthetic leather. If you use PU leather, the cost will come down to " + alternativeCost + ", a reduction of " + Math.round((((cost-alternativeCost)/cost)*100)) + "%.<br>";
          break;
      case "wool":
          impact += (15 * amount);
          cost += 1500 * amount;
          alternativeCost += (1200 * amount)
          feedback += "Wool is a natural material, but it can have a high environmental impact due to the use of pesticides and water. ";
          alternatives += "Consider using sustainable alternatives such as organic wool or alpaca wool. If you use organic wool, the cost will come down to " + alternativeCost + ", a reduction of " + Math.round((((cost-alternativeCost)/cost)*100)) + "%.<br>";
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
      feedback += "Air transportation has a high environmental impact due to the emissions. <br><br>";
      alternatives += "Consider using sea or land transportation. <br>";
      break;
  case "sea":
      impact += (2 * amount);
      feedback += "Sea transportation is more sustainable than air transportation. <br><br>";
      break;
  case "land":
      impact += (1 * amount);
      feedback += "Land transportation is the most sustainable option. <br><br>";
      break;
}

// Classify the impact score as high, medium, or low
var impactClassification = "";
if (impact >= 5000) {
  impactClassification = "High";
} else if (impact >= 1000 && impact < 5000) {
  impactClassification = "Medium";
} else {
  impactClassification = "Low";
}

// Display the impact result
document.getElementById("impact-result").innerHTML = "The environmental impact of this piece of clothing is: " + impact + " kg CO<sub>2</sub> emissions. <br> Impact Classification: " + impactClassification + "<br>" + feedback + alternatives + "<br>" + "The cost of production for the original choice of material in this quantity is ₹" + cost + "." + "<br>" ;
sessionStorage.setItem("co2", impact);
sessionStorage.setItem("class", impactClassification);
sessionStorage.setItem("feedback", feedback);
sessionStorage.setItem("alternatives", alternatives);
sessionStorage.setItem("cost", cost);
sessionStorage.setItem("alternativecost", alternativeCost);
window.open("./analysis.html")
return false;

}

function removeLoader(){
  
  setTimeout(()=>{
     let loader = document.getElementById('loader');
  
  // hide the loader
  loader.style = 'display: none;';
  },
             1000);  
}
}
catch {
  body.onload = removeLoader()
  function removeLoader(){
  
    setTimeout(()=>{
       let loader = document.getElementById('loader');
    
    // hide the loader
    loader.style = 'display: none;';
    },
               1000);  
  }
  eval = sessionStorage.getItem("class")
  if ( eval == "Low" ) {
    color = "lightgreen";
  }
  else if ( eval == "Medium" ) {
    color = "orange"
  }
  else {
    color = "red"
  }
  document.getElementById("co2").innerHTML = "<h2><span style = 'color:" + color + "';'>" + sessionStorage.getItem("co2") + "KG OF CO<sub>2</sub></span> emissions produced</h2>"
  document.getElementById("impactclass").innerHTML = "<h2>IMPACT CLASSIFICATION: <span style = 'color:" + color + "';'>" + sessionStorage.getItem("class") + " </h2>"
  document.getElementById("feedback").innerHTML = "<h2><span class = 'lgbtqlights'>SUSTAINABILITY EVALUATION: </span></h2>" + sessionStorage.getItem("feedback")
  document.getElementById("alternatives").innerHTML = "<h2>ALTERNATIVE MATERIALS: </h2>" + sessionStorage.getItem("alternatives")
  document.getElementById("cost").innerHTML = "<h2>ORIGINAL COST: </h2> <h3>₹" + sessionStorage.getItem("cost") + "</h3>"
  document.getElementById("alternativecost").innerHTML = "<h2>ALTERNATIVE COST: </h2> <h3>₹" + sessionStorage.getItem("alternativecost") + "</h3>"
  window.resizeTo("1920", "1080");
  // Get the current window
const currentWindow = window;

// Expand the window to fullscreen mode
currentWindow.document.body.requestFullscreen();
}