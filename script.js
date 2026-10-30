/*let clhistory=["10","20","30","40","50"];

for (let i=0; i<clhistory.length; i++) {
   console.log(clhistory[i]);
}

for (let number of clhistory) {
   console.log(number);
}

console.log(clhistory);



function clickme() {

    let txtvalue=document.getElementById("txtsample").value;
    let txtvalue2=document.getElementById("txtsample2").value;
    let num1=parseInt(txtvalue);
    let num2=parseInt(txtvalue2);
    let sum=num1+num2;

    
    document.getElementById("lblsection").innerHTML = "<h1>"+sum+"</h1>";
    clhistory.push(txtvalue + "+" + txtvalue2 + "=" + sum);

rowdata();
}
function clickme1() {

let txtvalue=document.getElementById("txtsample").value;
    let txtvalue2=document.getElementById("txtsample2").value;
    let num1=parseInt(txtvalue);
    let num2=parseInt(txtvalue2);
    let sub=num1-num2;

    // console.log(sub);
    document.getElementById("lblsection").innerHTML = "<h1>"+sub+"</h1>";
    clhistory.push(txtvalue + "-" + txtvalue2 + "=" + sub);


rowdata();

}

function rowdata() {
    for (let i=0; i<clhistory.length; i++) {
        document.getElementById("lblsection").innerHTML += "<h1>"+clhistory[i]+"</h1>";
    }  
    console.log(clhistory); 

}
*/
let clhistory=[];
let num1="";
let num2="";
let operator="";
let isNewNumber=true;

function inputNumber(number) {

    let display = document.getElementById("result");

    if (isNewNumber) {

        display.innerHTML = number;
        isNewNumber = false;

    } else {

        if (display.innerHTML === "0") {
            display.innerHTML = number;
        } else {
            display.innerHTML += number;
        }
    }
}
function clickme() {

    let txtvalue=document.getElementById("txtsample").value;
    let txtvalue2=document.getElementById("txtsample2").value;
    let num1=parseInt(txtvalue);
    let num2=parseInt(txtvalue2);
    let sum=num1+num2;

    
    document.getElementById("lblsection").innerHTML = "<h1>"+sum+"</h1>";
    clhistory.push(txtvalue + "+" + txtvalue2 + "=" + sum);

rowdata();
}


