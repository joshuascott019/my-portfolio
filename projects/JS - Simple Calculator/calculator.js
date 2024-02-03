//Arrays & Declarations
let inputArray = [];
let num1
let num2
let operator
let result

/*I feel like there's a dryer way 
to do all these selectors and event listeners, 
but it escapes me for the moment.*/

//Selectors
const btn0 = document.getElementById("btn0")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")
const btn7 = document.getElementById("btn7")
const btn8 = document.getElementById("btn8")
const btn9 = document.getElementById("btn9")
const btnPeriod = document.getElementById("btnPeriod")
const btnAdd = document.getElementById("btnAdd")
const btnSubtract = document.getElementById("btnSubtract")
const btnMultiply = document.getElementById("btnMultiply")
const btnDivide = document.getElementById("btnDivide")
const btnEqual = document.getElementById("btnEqual")
const display = document.getElementById("display")
const mem = document.getElementById("mem")
const btnClear = document.getElementById("btnClear")
const btnClearAll = document.getElementById("btnClearAll")
const btnBackspace = document.getElementById("btnBackspace")
const btnTest = document.getElementById("btnTest")

//Event Listeners
btn0.addEventListener("click", inputData)
btn1.addEventListener("click", inputData)
btn2.addEventListener("click", inputData)
btn3.addEventListener("click", inputData)
btn4.addEventListener("click", inputData)
btn5.addEventListener("click", inputData)
btn6.addEventListener("click", inputData)
btn7.addEventListener("click", inputData)
btn8.addEventListener("click", inputData)
btn9.addEventListener("click", inputData)
btnPeriod.addEventListener("click", inputData)
btnAdd.addEventListener("click", operation)
btnSubtract.addEventListener("click", operation)
btnMultiply.addEventListener("click", operation)
btnDivide.addEventListener("click", operation)
btnClear.addEventListener("click", clear)
btnClearAll.addEventListener("click", clearAll)
btnBackspace.addEventListener("click", backspace)
btnEqual.addEventListener("click", calculate)
btnTest.addEventListener("click", test)


//Console.Log Btn
function test(){
    console.clear();
    console.log(`Input Array = ${inputArray}`)
    console.log(`InputArray.length = ${inputArray.length}`)
    console.log(`num1 = ${num1}`)
    console.log(`num2 = ${num2}`)
    console.log(`operator = ${operator}`)
    console.log(`result = ${result}`)
}


//Functions
function inputData(e){
    if (inputArray.length < 13){
        inputArray.push(e.target.innerText);
        let number = +inputArray.join('');
        display.innerText = number.toLocaleString();
    }
}

function backspace(){
    inputArray.pop();
    let number = +inputArray.join('');
    display.innerText = number.toLocaleString();
}

function clear(){
    inputArray = [];
    display.innerText = 0;
}

function clearAll(){
    inputArray = [];
    num1 = null;
    num2 = null;
    result = null;
    operator = null;
    display.innerText = 0;
    mem.innerText = ""
    console.clear();
}

function operation(e){
    operator = e.target.innerText;
    if (num1 != null && inputArray[0] != null){
        calculate();
    }
    if (result != null){
        num1 = result;
    } else if (num1 == null){
        num1 = +inputArray.join('');
        inputArray = [];
    } else if (num2 == null){
        num2 = +inputArray.join('');
        inputArray = [];
    }
    mem.innerText = num1.toLocaleString()+operator;
}

function calculate(){
    if (inputArray[0] == null){
        num2 = num1;
    } else {
        num2 = +inputArray.join('');
        inputArray = [];
    }
    if (operator === "+"){
        result = num1+num2;
    } else if (operator === "-"){
        result = num1-num2;
    } else if (operator === "*"){
        result = num1*num2;
    } else if (operator === "/"){
        result = num1/num2;
    } else {
        console.log("ERROR: Not a recognized calculation")
    }
    mem.innerText = `${num1.toLocaleString()}${operator}${num2.toLocaleString()}=`;
    display.innerText = result.toLocaleString();
}