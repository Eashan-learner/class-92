playername1=localStorage.getItem("eashan");
playername2=localStorage.getItem("poooja");
playername1score=0;
playername2score=0;
document.getElementById("point1").innerHTML=playername1 +":";
document.getElementById("point2").innerHTML=playername2 +":";
document.getElementById("score1").innerHTML=playername1score ;
document.getElementById("score2").innerHTML=playername2score;
document.getElementById("que_turn").innerHTML="question_turn:"+playername1 ;
document.getElementById("que_turn2").innerHTML="answer_turn:"+playername2 ;
function brb123(){
grt_word=document.getElementById("anything").value;
ord=grt_word.toLowerCase();
console.log(ord);
eashan=ord.charAt(1);
console.log(eashan);
eashan2=Math.floor(ord.length/2);
eashan3=ord.charAt(eashan2);
console.log(eashan3);
eashan4=ord.length-1;
eashan5=ord.charAt(eashan4);
console.log(eashan5);
remove1=ord.replace(eashan,"_");
remove2=remove1.replace(eashan3,"_");
remove3=remove2.replace(eashan5,"_");
console.log(remove3);
question_word = "<h4 id='word_display'> Q. "+remove3+"</h4>";
 input_box = "<br>Answer : <input type='text' id='input_check_box'>";
  check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
   row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
     document.getElementById("anything").value = "";
}
question_turn="player1";
answer_turn="player2";
function check() {
    var1= document.getElementById("input_check_box").value;
    ans1= var1.toLowerCase();
if (ord==ans1){
if(answer_turn=="player1") {
playername1score=playername1score+1;
document.getElementById("score1").innerHTML=playername1score;
}
else {
    playername2score=playername2score+1;
document.getElementById("score2").innerHTML=playername2score;
}
}
if(question_turn=="player1") {
    question_turn="player2";
    document.getElementById("que_turn").innerHTML="question_turn:"+playername2 ;
}
else {
    question_turn="player1";
    document.getElementById("que_turn").innerHTML="question_turn:"+playername1 ;
}
if(answer_turn=="player1") {
    answer_turn="player2";
    document.getElementById("que_turn2").innerHTML="answer_turn:"+playername2 ;
}
else {
    answer_turn="player1";
    document.getElementById("que_turn2").innerHTML="answer_turn:"+playername1 ;
}
document.getElementById("output").innerHTML="";
}
