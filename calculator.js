

var clickAnswerBasic = document.getElementById("basic-calc");


clickAnswerBasic.addEventListener("click",calculateBasic);






function calculateBasic() {
  
var basicNum1 = document.getElementById("basic-num-1").value;
 

var basicNum2 = document.getElementById("basic-num-2").value;
  

var basicOperation = document.getElementById("basic-operation").value;


var calculate = eval(basicNum1+basicOperation+basicNum2);


document.getElementById("basic-answer-alert").innerHTML = calculate;

}
  
 




/** sze wei answer for trip calculator **/

var clickTrip = document.getElementById('trip-calc');
clickTrip.addEventListener("click", trip);


function trip() {
    var distance = document.getElementById('trip-distance').value;
    var mpg = document.getElementById('trip-mpg').value;
    var cost = document.getElementById('trip-cost').value;
    var speed = document.getElementById('trip-speed').value;
    if(speed<=60) {
        var calculate = distance/mpg*cost;
    }
    else if(speed>60) {
        var calculate = distance/(mpg-(speed-60)*2)*cost;
    }
    document.getElementById("trip-answer-alert").innerHTML = calculate;}

/** BMI Calculator **/


var clickAnswerBmi = document.getElementById('bmi-calc');
clickAnswerBmi.addEventListener('click',calculateBmi);



function calculateBmi(){
	var height= document.getElementById('bmi-height').value;

	var weight=  document.getElementById('bmi-mass').value;

	
	var bmi =
        weight*2.20462/(height*39.3701*height*39.3701)*703;

  var answerBmiBox = document.getElementById('bmi-answer-alert');
  
	answerBmiBox.innerHTML = bmi;
	
}

/** mortgage payments **/



var clickAnswerMortgage = document.getElementById("mortgage-calc" );

clickAnswerMortgage.addEventListener("click",calculateMortgage);


function calculateMortgage(){

var loan = document.getElementById("mortgage-loan").value;

var apr = document.getElementById("mortgage-apr").value;

var term = document.getElementById("mortgage-term" ).value;

 var calculate = loan * apr/100 * Math.pow((1+(apr/100)/12), term) / ( Math.pow((1+(apr/100)/12), term) - 1)/12 ;

document.getElementById("mortgage-answer-alert").innerHTML = calculate;


}










