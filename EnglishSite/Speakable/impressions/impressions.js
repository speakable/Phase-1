var choices = ["Bowling", "Butterfly", "XBox", "Donut", "Fire", "Snowman", "Guitar", "iPad", "Pizza", "Plant", "Polar Bear", "Soccer Ball"];

var lastid = 1;
var time = 60000;
var correctanswers = 0;
var itimerid = 0;

function startimpressions() {
	var imagesrcs = [];
	for ( i = 1; i <= choices.length; i++) {
		imagesrcs.push("impressions/img/" + i + ".png");
	}
	imagesrcs.push("impressions/img/facehappy.png");
	imagesrcs.push("impressions/img/faceshocked.png");
	loadImages(imagesrcs, impressionsReady);
}

function impressionsReady() {
	time = 60000;
	lastid = 1;
	correctanswers = 0;
	itimerid = 0;

	$("#impressionscontainer").empty();
	$("#impressionscontainer").append("<div id='face'><div class='face_pic' id='facediv'></div></div>");
	$("#impressionscontainer").append("<div id='gamearea'></div>");
	$("#impressionscontainer").append("<div id='clock_div'><p id='impressiontime'>00:00:0000</div>");

	impressionsclock();
	$("#facediv").append("<img src='impressions/img/faceshocked.png' id = 'facei'>");
	$("#gamearea").append("<img id='icon' src='impressions/img/1.png'>");
	$("#gamearea").append("<br><br><br><br><br><br>");
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
		$("#facei").attr("src", "impressions/img/facehappy.png");
	} else {
		$("#facei").attr("src", "impressions/img/faceshocked.png");
		// if (correctanswers != 0) {
		// correctanswers--;
		// }
	}

	if (correctanswers == 9) {
		gamefinished(true);
	}
}

function gamefinished(completed) {
	clearInterval(itimerid);
	if (completed) {
		displayFinish("#impressionscontainer", (60000-time)/1000, "impressionsReady");
	} else {
		displayFinish("#impressionscontainer", "FAILED", "impressionsReady");
	}

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
		time = time - 9;
		if (time < 0) {
			gamefinished(false);
		}
		var millisec = pad(new Date(time).getMilliseconds());
		var seconds = pad(new Date(time).getSeconds());
		$("#impressiontime").html(seconds + ":" + millisec);
	}, 9);
}