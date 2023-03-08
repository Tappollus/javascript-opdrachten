var weight = prompt("What is your weight in kg?");
var height = prompt("What is your height in meters?");
bmiCalculator(weight, height);

function bmiCalculator (weight, height) {
    var yourBmi = Math.round((weight / Math.pow(height, 2))*10)/10;

    
if (yourBmi < 18.5) {
    var interpretation = "Your BMI is " + yourBmi + ", so you are underweight.";
}
if (yourBmi >= 18.5 && yourBmi <= 24.9) {
    var interpretation = "Your BMI is " + yourBmi + ", so you have a normal weight.";
} 
if (yourBmi > 24.9) {
    var interpretation = "Your BMI is " + yourBmi + ", so you are overweight.";
}
    return interpretation;
}