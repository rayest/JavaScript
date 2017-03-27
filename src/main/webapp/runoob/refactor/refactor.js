/**
 * Created by lirui on 2017/3/26.
 */

var result_1;

function getFirstNumber() {
    var firstNumber = document.getElementById("first").value;
    return firstNumber;
}

function getSecondNumber() {
    var secondNumber = document.getElementById("second").value;
    return secondNumber;
}

function sendResult(result_1) {
    var number = document.getElementById("result");
    number.innerHTML = result_1;
}

function add() {
    var a = getFirstNumber();
    var b = getSecondNumber();
    var result = Number(a) + Number(b);
    sendResult(result);
}

function minus() {
    var a = getFirstNumber();
    var b = getSecondNumber();
    var result = a - b;
    sendResult(result);
}

function multiply() {
    var a = getFirstNumber();
    var b = getSecondNumber();
    var result = a * b;
    sendResult(result);
}

function divide() {
    var a = getFirstNumber();
    var b = getSecondNumber();
    var result = a / b;
    sendResult(result);
}
