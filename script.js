$(document).ready(function(){
    //make sure that the total div doesn't overflow.
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };

    // set variables and set value of the totaldiv to 0
	var number = "";    //second number inputed  
    var newnumber = ""; //first number inputed
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");
    
    // when number is clicked, add it to current number, show it on totaldiv and check the length
    $("#numbers > a").not("#clear").click(function(){
        number += $(this).text();
        totaldiv.text(number);
        testNumLength(number);
    });  

    // when operator is clicked, store operator, set new number, clear number and clear total div
    $("#operators > a").not("#equals").click(function(){
        operator = $(this).text();
        newnumber = number;
        number = "";
        totaldiv.text("0");
    });  

    // when Clear is clicked, clear number, newnumber and total div
    $("#clear").click(function(){
        number = "";
        totaldiv.text("0");
        newnumber = "";
    });

    // When equals is clicked, perform the operation, to do that:
    // - check the operator inputed
    // - convert string of the number and new number to number
    // - perform operation
    // - convert answer back to string and change totaldiv to answer
    // - check the answer with testNumLength function to make sure that it isnt overflowing
    $("#equals").click(function(){
        if (operator === "+"){
            number = (parseFloat(number, 10) + parseFloat(newnumber,10)).toString(10);
        } else if (operator === "-"){
            number = (parseFloat(newnumber, 10) - parseFloat(number,10)).toString(10);
        } else if (operator === "÷"){
            number = (parseFloat(newnumber, 10) / parseFloat(number,10)).toString(10);
        } else if (operator === "×"){
            number = (parseFloat(newnumber, 10) * parseFloat(number,10)).toString(10);
        }
        totaldiv.text(number);
        testNumLength(number);
    });


    // Add a keyboard inputs
     $(document).keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 49) {
            $("#one").click();
       } else if (keycode === 50) {
            $("#two").click();
        } else if (keycode === 51) {
            $("#three").click();
        } else if (keycode === 52) {
            $("#four").click();
        } else if (keycode === 53) {
            $("#five").click();
        } else if (keycode === 54) {
            $("#six").click();
        } else if (keycode === 55) {
            $("#seven").click();
        } else if (keycode === 56) {
            $("#eight").click();
        } else if (keycode === 57) {
            $("#nine").click();
        } else if (keycode === 48) {
            $("#zero").click();
        } else if (keycode === 190) {
            $("#dot").click();
        } else if (keycode === 8) {
            $("#clear").click();
        } else if (keycode === 61) {
            $("#equals").click();
        } else if (keycode === 43) {
            $("#plus").click();
        } else if (keycode === 45 || 173 ) {
            $("#minus").click();
        } else if (keycode === 42 || keycode === 120) {
            $("#multiply").click();
        } else if (keycode === 47) {
            $("#divide").click();
        } 
    });
});