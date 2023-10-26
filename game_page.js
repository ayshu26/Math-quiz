function send() {
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='number' id='input_check_box'>"
    check_button = "<br><br><button class= 'btn btn-info' onclick= 'check()'>Check</button>"
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
player1_name = localStorage.getItem("player1name")
player2_name = localStorage.getItem("player2name")
player1_score = 0
player2_score = 0

question_turn = "player2"
answer_turn = "player1"
document.getElementById("playerquestion").innerHTML = "Question Turn - " + player2_name
document.getElementById("playeranswer").innerHTML = "Answer Turn - " + player1_name
function check() {
    answer = document.getElementById("input_check_box").value
    if (actual_answer == answer) {
        console.log("correct");
        if (answer_turn == "player1") {
            update_player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score
        } else {
            update_player2_score = player2_score + 1
            document.getElementById("player2_score").innerHTML = update_player2_score
        }
        if (question_turn == "player1") {
            question_turn = "player2"
            answer_turn = "player1"
            document.getElementById("playerquestion").innerHTML = "Question Turn - " + player2_name
            document.getElementById("playeranswer").innerHTML = "Answer Turn - " + player1_name

        } else {
            question_turn = "player1"
            answer_turn = "player2"
            document.getElementById("playeranswer").innerHTML = "Answer Turn - " + player2_name

            document.getElementById("playerquestion").innerHTML = "Question Turn - " + player1_name

        }
    }

}




document.getElementById("p1name").innerHTML = player1_name
document.getElementById("p2name").innerHTML = player2_name
document.getElementById("p1score").innerHTML = player1_score
document.getElementById("p2score").innerHTML = player2_score