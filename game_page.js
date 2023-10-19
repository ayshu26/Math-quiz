function send() {
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;
    actual_answer = parseInt(number1)*parseInt(number2);
    question_number = "<h4>"+ number1 +" X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='number' id='input_check_box'>"
    check_button = "<br><br><button class= 'btn btn-info' onclick= 'check()'>Check</button>"
row = question_number +input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("num1").value = "";
document.getElementById("num2").value ="";
}
function check(){
answer=document.getElementById("input_check_box").value
if (actual_answer==answer) {
    console.log("correct");
}
}

p1name = localStorage.getItem("player1name")
p2name = localStorage.getItem("player2name")
p1score = 0
p2score = 0



document.getElementById("p1name").innerHTML = p1name
document.getElementById("p2name").innerHTML = p2name
document.getElementById("p1score").innerHTML = p1score
document.getElementById("p2score").innerHTML = p2score