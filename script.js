// Number 7
function inputNumber7() {

    let txtvalue = document.getElementById("expression").value;
    document.getElementById("expression").value = txtvalue + "7";
}

// Number 8
function inputNumber8() {

    let txtvalue = document.getElementById("expression").value;
    document.getElementById("expression").value = txtvalue + "8";
}
// Number 9
function inputNumber9() {

    let txtvalue = document.getElementById("expression").value;
    document.getElementById("expression").value = txtvalue + "9";
}
// Number 4
function inputNumber4() {

    let txtvalue = document.getElementById("expression").value;
    document.getElementById("expression").value = txtvalue + "4";
}
// Number 5
function inputNumber5() {
    let txtvalue = document.getElementById("expression").value;
    document.getElementById("expression").value = txtvalue + "5";
}
// Number 6
function inputNumber6() {

    let txtvalue = document.getElementById("expression").value;
    document.getElementById("expression").value = txtvalue + "6";
}
// Number 1
function inputNumber1() {
    let txtvalue = document.getElementById("expression").value;
    document.getElementById("expression").value = txtvalue + "1";
}
// Number 2
function inputNumber2() {

    let txtvalue = document.getElementById("expression").value;
    document.getElementById("expression").value = txtvalue + "2";
}
// Number 3
function inputNumber3() {

    let txtvalue = document.getElementById("expression").value;
    document.getElementById("expression").value = txtvalue + "3";
}
// Number 0
function inputNumber0() {
    let txtvalue = document.getElementById("expression").value;
    document.getElementById("expression").value = txtvalue + "0";
}

function subs() {
    let txtvalue = document.getElementById("expression").value;
    document.getElementById("expression").value = txtvalue + "+";
}

function miners() {
    let txtvalue = document.getElementById("expression").value;
    document.getElementById("expression").value = txtvalue + "-";
}

function multiplie() {
    let txtvalue = document.getElementById("expression").value;
    document.getElementById("expression").value = txtvalue + "*";
}

function divide() {
    let txtvalue = document.getElementById("expression").value;
    document.getElementById("expression").value = txtvalue + "/";
}



function inputDecimal() {
    let txtvalue = document.getElementById("expression").value;
    document.getElementById("expression").value = txtvalue + ".";
}


// Equal
function equal() {
    let txtvalue = document.getElementById("expression").value;
    try {
        if (txtvalue.trim() === "" || !/^[0-9+\-*/.() ]+$/.test(txtvalue)) {
            return;
        }
        let answer = Function('"use strict"; return (' + txtvalue + ')')();
        if (!Number.isFinite(answer)) {
            alert("Invalid Calculation");
            return;
        }

document.getElementById("result").value = answer;
    } catch (error) {
        alert("Invalid Expression");
    }
}

function clearAll() {
    document.getElementById("expression").value = "";
    document.getElementById("result").value = "";

}

function clearEntry() {
    document.getElementById("expression").value = "";
    document.getElementById("result").value = "";

}

function backspace() {
    let txtvalue = document.getElementById("expression").value;
    document.getElementById("expression").value = txtvalue.slice(0, -1);

}
function percentage() {
    let txtvalue = document.getElementById("expression").value;
    if (txtvalue !== "") {
        document.getElementById("expression").value = txtvalue + "/100";
    }

}

function toggleSign() {
    let txtvalue = document.getElementById("expression").value;
    document.getElementById("expression").value = txtvalue + "(-";

}