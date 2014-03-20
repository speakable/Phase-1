//http://buzz.jaysalvat.com/

var robotwords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
var toolwords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
var robotsounds = new Array();
var finishedids = new Array();
var rtime = 0;
var selectedrobotid = 0;
var selectedtoolid = 0;
var rtimerid = 0;

function startrobot() {

	for ( i = 0; i < robotwords.length; i++) {
		var mySound = new buzz.sound("robot/cartoon/" + robotwords[i], {
			formats : ["mp3"], preload : true
		});
		robotsounds.push(mySound);
	}

	var imagesrcs = [];
	for ( i = 1; i < 11; i++) {
		imagesrcs.push("robot/images/outlinedbody/" + i + ".png");
		imagesrcs.push("robot/images/wholebody/" + i + ".png");
	}
	imagesrcs.push("robot/images/outlinedbody/robot_body_outlined_01.png");
	imagesrcs.push("robot/images/outlinedbody/robot_body_outlined_03.png");
	imagesrcs.push("robot/images/outlinedbody/robot_body_outlined_10.png");
	imagesrcs.push("robot/images/outlinedbody/robot_body_outlined_12.png");
	imagesrcs.push("robot/images/outlinedbody/robot_body_outlined_13.png");
	imagesrcs.push("robot/images/outlinedbody/robot_body_outlined_14.png");
	imagesrcs.push("robot/images/outlinedbody/robot_body_outlined_17.png");
	imagesrcs.push("robot/images/outlinedbody/spacer.gif");
	imagesrcs.push("robot/images/wrench.png");

	loadImages(imagesrcs, robotReady);
}

function robotReady() {
	robotwords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
	toolwords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
	finishedids = new Array();
	rtime = 0;
	selectedrobotid = 0;
	selectedtoolid = 0;
	rtimerid = 0;

	$("#robotcontainer").empty();
	$("#robotcontainer").load("robot/robot.html");

	robotwords = shuffleArray(robotwords);
	toolwords = shuffleArray(toolwords);

	clock();
}

function robotFinished() {
	clearInterval(rtimerid);
	$("#robotcontainer").empty();
	$("#robotcontainer").append("<div id='robotfinish' class='finishprompt'><p>Well done! Your time was " + rtime / 1000 + " seconds!");
	$("#robotcontainer").append("<button onClick='startrobot()'>Retry!</button></div>");
}

function checkPair() {
	if (robotwords[selectedrobotid - 1] == toolwords[selectedtoolid - 1]) {
		$("#r" + selectedrobotid).css("background", "none");
		$("#rb" + selectedrobotid).attr({
			src : "robot/images/wholebody/" + selectedrobotid + ".png"
		});
		$("#t" + selectedtoolid).css("background", "none");
		$("#t" + selectedtoolid).html("");
		finishedids.push(robotwords[selectedrobotid - 1]);
	}

	if (selectedrobotid != 0 && selectedtoolid != 0) {
		$("#t" + selectedtoolid).css("background", "none");
		$("#r" + selectedrobotid).css("background", "none");
		selectedtoolid = 0;
		selectedrobotid = 0;
	}
}

function getId(code) {
	if (code.length == 2) {
		return code[1];
	} else {
		return code[1] + code[2];
	}

}

/**
 * Randomize array element order in-place.
 * Using Fisher-Yates shuffle algorithm.
 * http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

function clock() {
	rtimerid = setInterval(function() {
		rtime = rtime + 9;
		var millisec = pad(new Date(rtime).getMilliseconds());
		var seconds = pad(new Date(rtime).getSeconds());
		var minutes = pad(new Date(rtime).getMinutes());
		$("#robottime").html(minutes + ":" + seconds + ":" + millisec);
	}, 9);
}

function pad(number) {
	return (number < 10 ? '0' : '') + number;
}