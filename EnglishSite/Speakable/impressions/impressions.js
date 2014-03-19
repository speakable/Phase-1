var choices = ["Bowling", "Butterfly", "XBox", "Donut", "Fire", "Snowman", "Guitar", "iPad", "Pizza", "Plant", "Polar Bear", "Soccer Ball"];
var lastid = 1;
var time = 0;
var correctanswers = 0;
var itimerid = 0;

function startimpressions() {
	time = 0;
	lastid = 1;
	correctanswers = 0;
	
	$("#impressionscontainer").empty();
	$("#impressionscontainer").append("<div id='face'><div class='face_pic' id='facediv'></div></div>");
	$("#impressionscontainer").append("<div id='gamearea'></div>");
	$("#impressionscontainer").append("<div id='clock_div'><ul id='clock'><li id='isec'></li><li id='hour'></li><li id='min'></li></ul></div>");

	impressionsclock();
	$("#facediv").append("<img src='impressions/img/heads/h1.png' id = 'facei'>");
	$("#gamearea").append("<img src='impressions/img/1.png' id = 'icon'>");
	$("#gamearea").append("<br>");
	$("#gamearea").append("<button type='button' onClick = 'buttonClicked(1)' id = 'c1Btn'>Bowling</button>");
	$("#gamearea").append("<button type='button' onClick = 'buttonClicked(2)' id = 'c2Btn'>Butterfly</button>");
	$("#gamearea").append("<button type='button' onClick = 'buttonClicked(3)' id = 'c3Btn'>XBox</button>");

	grabImage();
	setButtonAnswers();
}

function buttonClicked(btnid) {
	checkAnswer(btnid);
	grabImage();
	setButtonAnswers();
}

function checkAnswer(btnid) {
	var selectedanswer = $("#c" + btnid + "Btn").html();
	if (selectedanswer == choices[lastid - 1]) {
		correctanswers++;
	} else {
		if (correctanswers != 0) {
			correctanswers--;
		}
	}

	$("#facei").attr("src", "impressions/img/heads/h" + (correctanswers + 1) + ".png");

	if (correctanswers == 9) {
		gamefinished();
	}
}

function gamefinished() {
	clearInterval(itimerid);
	$("#impressionscontainer").empty();
	$("#impressionscontainer").append("<div id='impressionsfinish'><p>Well done! Your time was " + time / 1000 + " seconds!");
	$("#impressionscontainer").append("<button onClick='startimpressions()'>Retry!</button></div>");
}

function grabImage() {
	lastid = getNum([lastid], choices.length);
	$("#icon").attr("src", "impressions/img/" + lastid + ".png");
}

function setButtonAnswers() {
	rightanswer = getNum(0, 3);
	answers = [lastid - 1];
	$("#c" + rightanswer + "Btn").html(choices[lastid - 1]);
	if (rightanswer != 1) {
		answer = getNum(answers, choices.length);
		answers = answers + answer;
		$("#c1Btn").html(choices[answer]);
	}
	if (rightanswer != 2) {
		answer = getNum(answers, choices.length);
		answers = answers + answer;
		$("#c2Btn").html(choices[answer]);
	}
	if (rightanswer != 3) {
		answer = getNum(answers, choices.length);
		$("#c3Btn").html(choices[answer]);
	}
}

function getNum(lastNum, limit) {
	var num = Math.ceil((Math.random() * limit));
	for (var i = 0; i < lastNum.length; i++) {
		if (num == lastNum[i]) {
			return getNum(lastNum, limit);
		}
	}
	return num;
}

function impressionsclock() {
	 itimerid = setInterval(function() {
		var seconds = new Date(time).getSeconds();
		var sdegree = seconds * 6;
		var srotate = "rotate(" + sdegree + "deg)";

		$("#isec").css({
			"transform" : srotate
		});

		time = time + 1000;
	}, 1000);
}