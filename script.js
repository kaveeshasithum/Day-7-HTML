let clhistory=["10","20","30","40","50"];

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

    console.log(sum);
    document.getElementById("lblsection").innerHTML = "<h1>"+sum+"</h1>";
    clhistory.push(txtvalue + "+" + txtvalue2 + "=" + sum);
//console.log(document.getElementById("txtsample").value);
//console.log(document.getElementById("txtsample2").value);


//document.getElementById("lblsection").innerHTML = "<h1>"+(parseInt(document.getElementById("txtsample").value) +parseInt(document.getElementById("txtsample2").value)) + "</h1>";
//document.getElementById("lblsection").innerHTML += "<h1>"+(parseInt(document.getElementById("txtsample").value) -parseInt(document.getElementById("txtsample2").value)) + "</h1>";
rowdata();
}
function clickme1() {
//console.log(document.getElementById("txtsample").value);
//console.log(document.getElementById("txtsample2").value);
let txtvalue=document.getElementById("txtsample").value;
    let txtvalue2=document.getElementById("txtsample2").value;
    let num1=parseInt(txtvalue);
    let num2=parseInt(txtvalue2);
    let sub=num1-num2;

    console.log(sub);
    document.getElementById("lblsection").innerHTML = "<h1>"+sub+"</h1>";
    clhistory.push(txtvalue + "-" + txtvalue2 + "=" + sub);

//document.getElementById("lblsection").innerHTML += "<h1>"+(parseInt(document.getElementById("txtsample").value) -parseInt(document.getElementById("txtsample2").value)) + "</h1>";
rowdata();

}

function rowdata() {
    for (let i=0; i<clhistory.length; i++) {
        document.getElementById("lblsection").innerHTML += "<h1>"+clhistory[i]+"</h1>";
    }   

}