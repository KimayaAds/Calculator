var firstOperand = "";
var secondOperand = "";
var result = "";
var operator = "";
var queuedOperator = 0;
var calFinished = false;

//Function to access   inputNumber
function inputNumber(num) {

    display === document.getElementById("display");

    firstOperand = parseFloat(firstOperand);
    secondOperand = parseFloat(secondOperand);


    // checks if the operation is finished or not .ie. for queued operation
    if (calFinished == true) {
        display.value = num; // queuedOperation
        calFinished = false;
    }

    // displays the key pressed on the display screen
    else {
        display.value += num; // 
    }

}

function setOperator(command) {

    // Screen display 

    var display = document.getElementById("display"),

        firstOperand = display.value;

    switch (command) {
        case 'add': operator = 1;
            break;

        case 'subtract': operator = 2;
            break;

        case 'multiply': operator = 3;
            break;

        case 'divide': operator = 4;
            break;
    }




    // firstOperand is stored in new variable newSecondOperand
    var newSecondOperand = eval(firstOperand);
    var newFirstOperand = eval(secondOperand);
    if (queuedOperator == 0) {
        secondOperand = display.value;
    }


    switch (queuedOperator) {


        case 1: secondOperand = newFirstOperand + newSecondOperand;
            break;

        case 2: secondOperand = newFirstOperand - newSecondOperand;
            break;

        case 3: secondOperand = newFirstOperand * newSecondOperand;
            break;

        case 4: secondOperand = newFirstOperand / newSecondOperand;
            break;

    }

    // Then set the operator to the correct number
    display.value = + operator;
    queuedOperator = operator;

    // clear the display in order to recieve the next   inputNumber  
    display.value = '';
}

// Calculate function ()

function calculate() {

    display === document.getElementById("display");
    firstOperand = display.value;
    var newSecondOperand = eval(firstOperand),
        newFirstOperand = eval(secondOperand);

    switch (operator) {


        case 1: firstOperand = newFirstOperand + newSecondOperand;
            break;

        case 2: firstOperand = newFirstOperand - newSecondOperand;
            break;

        case 3: firstOperand = newFirstOperand * newSecondOperand;
            break;

        case 4: firstOperand = newFirstOperand / newSecondOperand;
            break;

    }

    display.value = firstOperand;
    result = firstOperand;

    if (operator != 0)
        calFinished = true;

    operator = 0;
    queuedOperator = 0;
    firstOperand = "";
    secondOperand = "";
}

///Function for Decimals

function decimal(dec) {
    display === document.getElementById("display");

    display.value += dec;
}

// Store the result 
function previousResult() {
    var display = document.getElementById("display");

    display.value = result;
}

//Function to reset
function reset() {
    document.getElementById("calculator").reset();
}
