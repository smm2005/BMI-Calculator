// Defined Immutable HTML Elements
const pr1 = document.getElementById("prompt1");
const pr2 = document.getElementById("prompt2");
const metricSel = document.getElementById("metricSel");
const impSel = document.getElementById("impSel");
const iptH = document.getElementById("iptH");
const iptW = document.getElementById("iptW");
const submitButton = document.getElementById("subBut");
const table = document.getElementById("tbl");
const resMes = document.getElementById("resMes");

// Booleans with different controls
var impClicked = false;
var metClicked = false;
var notValid = false;

// Event listeners
metricSel.addEventListener("click", () =>{
    pr1.innerHTML = "Enter your height in metres (do not include m)";
    pr2.innerHTML = "Enter your weight in kilograms (do not include kg)";
    iptH.style.visibility = "visible";
    iptW.style.visibility = "visible";
    submitButton.style.visibility = "visible";
    metClicked = true;
    impClicked = false;
})

impSel.addEventListener("click", () =>{
    pr1.innerHTML = "Enter your height in inches (do not include in)";
    pr2.innerHTML = "Enter your weight in pounds (do not include lbs)";
    iptH.style.visibility = "visible";
    iptW.style.visibility = "visible";
    submitButton.style.visibility = "visible";
    metClicked = false;
    impClicked = true;
})

submitButton.addEventListener("click", ()=>{
    try{
        const val = processInput(parseFloat(iptW.value, 10), parseFloat(iptH.value, 10)).toFixed(2);
        table.style.visibility = "visible";
        console.log(val);
        var declaration = null;
        if (isNaN(val)){
            notValid = true;
            throw "is undefined";
        }
        if (val < 18.5){
            declaration = "underweight";
        }
        else if (val >= 18.5 && val <= 24.99){
            declaration = "of healthy weight";
        }
        else if (val > 24.99 && val <= 29.99){
            declaration = "overweight";
        }
        else if (val > 29.99){
            declaration = "obese";
        }
        resMes.innerHTML = "You have a BMI of "+val+". This means you are "+declaration+".";
    }
    catch (err){
        resMes.innerHTML = "ERROR: Input "+err+". Use numbers only for weight and height.";
    }
})

// Processing input | Only works for numbers and not letters

function processInput (a, b){
    if (impClicked){
        return 703 * (a / Math.pow(b, 2))
    }

    else if (metClicked){
        return (a / Math.pow(b, 2))
    }
};