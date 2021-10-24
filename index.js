function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}
function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 / num2;
}
function add()
{
    let num1 = document.getElementById("firstNumber").value;
    let num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = parseInt(num1) + parseInt(num2);
}

function subtract() 
{
        const num1 = parseInt(document.getElementById("firstNumber").value);
        const num2 = parseInt(document.getElementById("secondNumber").value);
        document.getElementById ("result").innerHTML = parseInt(num1) - parseInt(num2);
}



