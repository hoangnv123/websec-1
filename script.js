function buttonClick()
{
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var operator = document.getElementById("operator").value;
    var result = 0;
    if(isNaN(number1) || isNaN(number2))
    {
        alert("invalid number, please enter the right number")
    }
    else
    {
        if(operator == "+")
        {
            result = parseFloat(number1) + parseFloat(number2);
            document.getElementById("result").value = number1 + " + " + number2 + " = " + result;
        }
        if(operator == "-")
        {
            result = parseFloat(number1) - parseFloat(number2);
            document.getElementById("result").value = number1 + " - " + number2 + " = " + result;
        }
        if(operator == "*")
        {
            result = parseFloat(number1) * parseFloat(number2);
            document.getElementById("result").value = number1 + " * " + number2 + " = " + result;
        }
        if(operator == "/")
        {
            if(number2 == 0) alert("Cannot be divided by 0");
            else
            {
                result = parseFloat(number1) / parseFloat(number2);
                document.getElementById("result").value = number1 + " / " + number2 + " = " + result;
            }   
        }
    }
}