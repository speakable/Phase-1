var choices = ["Bowling", "Butterfly", "XBox", "Donut", "Fire", "Snowman", "Guitar", "iPad", "Pizza", "Plant", "Polar Bear", "Soccer Ball"];
var lastid = 1;
var time = 0;
var correctanswers = 0;

function startgame()
{
clock();
$("#facediv").append("<img src='images/heads/h1.png' id = 'facei'>");
$("#gamearea").append("<img src='images/1.png' id = 'icon'>");
$("#gamearea").append("<br>");
$("#gamearea").append("<button type='button' onClick = 'buttonClicked(1)' id = 'c1Btn'>Bowling</button>");
$("#gamearea").append("<button type='button' onClick = 'buttonClicked(2)' id = 'c2Btn'>Butterfly</button>");
$("#gamearea").append("<button type='button' onClick = 'buttonClicked(3)' id = 'c3Btn'>XBox</button>");

$("#dialog").dialog({
	autoOpen: false,
    draggable: false,
    resizable: false,
    position: ['center', 'middle'],
    show: 'fade',
    hide: 'fade',
    width: 'auto',
	height:'auto'	
	});
}

function buttonClicked(btnid)
{
checkAnswer(btnid);
grabImage();
setButtonAnswers();
}

function checkAnswer(btnid)
{
var selectedanswer = $("#c" + btnid + "Btn").html();
if(selectedanswer == choices[lastid-1])
{
correctanswers++;
}
else
{
if(correctanswers !=0)
{correctanswers--;}
}

$("#facei").attr("src", "images/heads/h" + (correctanswers + 1) +".png");

if(correctanswers == 9)
{
gamefinished();
}
}

function gamefinished()
{
$("#dialog").html("Nice one! It took you " + time/1000 + " seconds to finish.<br><br>Why not play again and try beat your score?");
$("#dialog").dialog("open");
}

function grabImage()
{
lastid = getNum(lastid, choices.length);
$("#icon").attr("src", "images/" + lastid +".png");
}

function setButtonAnswers()
{
rightanswer = getNum(0, 3);
$("#c" + rightanswer + "Btn").html(choices[lastid - 1]);
if(rightanswer != 1)
{
$("#c1Btn").html(choices[getNum(lastid-1,choices.length)]);
}
if(rightanswer != 2)
{
$("#c2Btn").html(choices[getNum(lastid-1,choices.length)]);
}
if(rightanswer != 3)
{
$("#c3Btn").html(choices[getNum(lastid-1,choices.length)]);
}
}

function getNum(lastNum, limit)
{
var num = Math.ceil((Math.random()*limit));
if(num == lastNum)
{
	return getNum(lastNum, limit);
}
return num;
}

function clock(){
 
      setInterval( function() {
      var seconds = new Date(time).getSeconds();
      var sdegree = seconds * 6;
      var srotate = "rotate(" + sdegree + "deg)";
      
      $("#sec").css({ "transform": srotate });
	  
	  time = time + 1000;          
      }, 1000 ); 
}