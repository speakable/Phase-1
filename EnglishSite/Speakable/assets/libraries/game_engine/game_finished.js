function displayFinishImpressions(container, score, onretry) {
	$(container).empty();
	$(container).append("<div class='finishprompt'></div>");
	$('#backgroundSwitcher').empty();
	$('#backgroundSwitcher').append("<img class='profile_background' src='impressions/img/background2.png'>");	
	$('.finishprompt').append("<div class='resultWindow'><img id='resultGraphic' src='assets/img/share_panel.png'></div>");
	$('.resultWindow').append("<div id='scoreReportdiv'<p>" + score + "</p></div>");	
	$('.resultWindow').append("<div id='restartGamediv'onClick=" + onretry + "()></div>");
	$('.resultWindow').append("<a href='https://twitter.com/home?status=www.speakable.jp'><div id='twitterLinkdiv'></div></a>");
	$('.resultWindow').append("<a href='https://www.facebook.com/sharer/sharer.php?u=www.speakable.jp'><div id='facebookLinkdiv'></div></a>");		
}

function displayFinishRobot(container, score, onretry) {
	$(container).empty();
	$(container).append("<div class='finishprompt'></div>");z
	$('.finishprompt').append("<div class='resultWindow'><img id='resultGraphic' src='assets/img/share_panel.png'></div>");
	$('.resultWindow').append("<div id='scoreReportdiv'<p>" + score + "</p></div>");	
	$('.resultWindow').append("<div id='restartGamediv'onClick=" + onretry + "()></div>");
	$('.resultWindow').append("<a href='https://twitter.com/home?status=www.speakable.jp'><div id='twitterLinkdiv'></div></a>");
	$('.resultWindow').append("<a href='https://www.facebook.com/sharer/sharer.php?u=www.speakable.jp'><div id='facebookLinkdiv'></div></a>");		
}

function displayFinishFlashcards(container, score, onretry) {
	$(container).empty();
	$(container).append("<div class='finishprompt'></div>");
	$('.finishprompt').append("<div class='resultWindow'><img id='resultGraphic' src='assets/img/share_panel.png'></div>");
	$('.resultWindow').append("<div id='scoreReportdiv'<p>" + score + " points</p></div>");	
	$('.resultWindow').append("<div id='restartGamediv'onClick=" + onretry + "()></div>");
	$('.resultWindow').append("<a href='https://twitter.com/home?status=www.speakable.jp'><div id='twitterLinkdiv'></div></a>");
	$('.resultWindow').append("<a href='https://www.facebook.com/sharer/sharer.php?u=www.speakable.jp'><div id='facebookLinkdiv'></div></a>");		
}

// function displayFinish(container, score, onretry) {
	// $(container).empty();
	// $(container).append("<z class='finishprompt'><p>Result" + score + "!");
	// $(container).append("<button onClick=" + onretry + "()>Retry!</button></div>");
//}
