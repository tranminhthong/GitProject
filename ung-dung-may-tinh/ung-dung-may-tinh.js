function Add(){
    let number1 = document.getElementById('num1').value;
    let number2  = document.getElementById('num2').value;
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    let result = number1 + number2;
    document.getElementById('result').innerHTML = result;
}
function Sub(){
    let number1 = document.getElementById('num1').value;
    let number2  = document.getElementById('num2').value;
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    let result = number1 - number2;
    document.getElementById('result').innerHTML = result;
}
function Mul(){
    let number1 = document.getElementById('num1').value;
    let number2  = document.getElementById('num2').value;
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    let result = number1 * number2;
    document.getElementById('result').innerHTML = result;
}
function Divi(){
    let number1 = document.getElementById('num1').value;
    let number2  = document.getElementById('num2').value;
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    let result = number1 / number2;
    document.getElementById('result').innerHTML = result;
}


