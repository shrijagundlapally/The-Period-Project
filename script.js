/*FACT GENERATOR*/
var factList = [
  "The average women spends nearly seven years of her life      menstruating-that's roughly 400 to 500 periods, in a          lifetime.",
  "35 states do not exempt menstrual products from sales        tax.",
  "25 million women in the U.S. live in poverty, but food       stamps do not cover menstrual products.",
  "In India, only 12% of women have access to sanitary          products.",
  "Lack of access to period products may force women to use     newspapers, toilet paper, socks, clothes, rags, and even      plastic bags.",
  "1.25 billion women and girls worldwide don't have access to a safe and public toilet.",
  "526 million women and girls worldwide don't have access to a toilet at all."
];

var fact = document.getElementById("factText");
var factBtn = document.getElementById("factBtn");
var count = 0;

factBtn.addEventListener("click", displayFact);

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}

/*SCRIPT GENERATOR*/
var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript() {
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;

  displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I am reaching out to you about Period Poverty, and how you can support the cause. As a women, my day-to-day life depends on access to feminine hygiene products. For example, " + learning + ". Please support this cause by donating locally or work around your community to secure products and fight tax on products for underresourced females.";
}
