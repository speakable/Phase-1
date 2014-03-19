//http://buzz.jaysalvat.com/

var robotwords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
var toolwords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
var finishedids = new Array();
var time = 0;
var selectedrobotid = 0;
var selectedtoolid = 0;

function startrobot() {
	$("table#robot td").click(function() {
		var id = getId($(this).attr('id'));

		if ($.inArray(robotwords[id - 1], finishedids) != -1) {
			return;
		}

		$("#r" + selectedrobotid).css("background", "none");
		$(this).css("background", "red");
		if (id != selectedrobotid) {
			var mySound = new buzz.sound("robot/cartoon/" + robotwords[id - 1], {
				formats : ["mp3"]
			});
			mySound.play();
			selectedrobotid = id;
			checkPair();
		} else {
			$(this).css("background", "none");
			selectedrobotid = 0;
		}
	});

	$("table#tools td").click(function() {
		var id = getId($(this).attr('id'));

		if ($.inArray(toolwords[id - 1], finishedids) != -1) {
			return;
		}

		$("#t" + selectedtoolid).css("background", "none");
		$(this).css("background", "blue");

		if (id != selectedtoolid) {
			var mySound = new buzz.sound("robot/cartoon/" + toolwords[id - 1], {
				formats : ["mp3"]
			});
			mySound.play();
			selectedtoolid = id;
			checkPair();
		} else {
			$(this).css("background", "none");
			selectedtoolid = 0;
		}
	});

	robotwords = shuffleArray(robotwords);
	toolwords = shuffleArray(toolwords);

	clock();
}

function checkPair() {
	if (robotwords[selectedrobotid - 1] == toolwords[selectedtoolid - 1]) {
		$("#r" + selectedrobotid).css("background", "none");
		$("#rb" + selectedrobotid).attr({
			src : "robot/images/wholebody/robot_body_outlined_0" + selectedrobotid + ".png"
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

	setInterval(function() {
		var seconds = new Date(time).getSeconds();
		var sdegree = seconds * 6;
		var srotate = "rotate(" + sdegree + "deg)";

		$("#sec").css({
			"transform" : srotate
		});

		time = time + 1000;
	}, 1000);
}