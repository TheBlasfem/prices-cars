ref = new Firebase('https://prices-cars.firebaseio.com/cars');
var FirebaseTokenGenerator = require("../bower_components/firebase-token-generator");
var tokenGenerator = new FirebaseTokenGenerator("YOUR SECRET TOKEN");
var token = tokenGenerator.createToken("YOUR PAYLOAD OBJECT");

ref.authWithCustomToken(token, function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
    runSeed();
  }
});

function runSeed(){
  ref.push({ 'brand': 'Toyoooo', 'model': 'Whatever', 'year': '2007', pricemin: 7500, pricemax: 8743 });
}