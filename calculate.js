var firstOperand = "";
var secondOperand = "";
var result="";
var operator = "";
var queuedoperator = 0;
var calFinished = false;
 
//Function to access input
function input(num) {

    var display = document.getElementById("display");
  
    

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
 
    firstOperand =  display.value;
     
        
    if (command == 'add') {
        operator = 1;
    
    }
        else if (command == 'subtract') {
        operator = 2;
        }
    if (command == 'multiply') {
        operator = 3;
    } 
    if (command == 'divide') {
        operator = 4;
    }

// firstOperand is stored in new variable evalSecondOperand
    var evalSecondOperand = eval(firstOperand),
        evalFirstOperand = eval(secondOperand);

    if (queuedoperator == 0) {
        secondOperand = display.value;
    }
    if (queuedoperator == 1) {
        secondOperand = evalFirstOperand + evalSecondOperand;
    }
        else if (queuedoperator == 2) {
            secondOperand = evalFirstOperand - evalSecondOperand;
            }
            else if (queuedoperator == 3) {
                secondOperand = evalFirstOperand * evalSecondOperand;
            }

                else if (queuedoperator == 4) {
     
                  secondOperand = evalFirstOperand / evalSecondOperand;
        
                }


    // Then set the operator to the correct number
                display.value =+ operator;
        queuedoperator = operator;

        // clear the display in order to recieve the next input 
        display.value = '';
}

// Calculate function ()

function calculate() {

    var display = document.getElementById("display");
    firstOperand = display.value;
    var evalSecondOperand = eval(firstOperand),
    evalFirstOperand = eval(secondOperand);

    if (operator == " ") {
            alert("Select numbers for calcualtion");
            return;
    }

    if (operator == 1) {
        
            firstOperand = evalFirstOperand + evalSecondOperand;  
    
    }

         else if (operator == 2) {

        firstOperand = evalFirstOperand - evalSecondOperand;
        }
            else if (operator == 3) {
            firstOperand = evalFirstOperand * evalSecondOperand;
            }
                else if (operator == 4) {
                firstOperand = evalFirstOperand / evalSecondOperand;
                 }

    display.value = firstOperand;
    result = firstOperand;

    if (operator != 0)
        calFinished = true;

    operator = 0;
    queuedoperator = 0;
    firstOperand = "";
    secondOperand = "";
}


///Function for Deci    mals

function decimal(dec    ) {
    var display = document.getElementById("display");

    // Loop through the current number to make sure there isn't already a decimal
    for (i = 0; i < display.value.length; i++)
        if (display.value.charAt(i) == '.') {
        
            return;
    }

        display.value += dec;
}

// Store the result 
function previousResult(){
    var display = document.getElementById("display");

    display.value=result;
}

//Function to reset
function reset() {
    document.getElementById("calculator").reset();
}
