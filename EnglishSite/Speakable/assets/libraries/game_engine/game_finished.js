function displayFinish(container, score, onretry) {
	$(container).empty();
	$(container).append("<div class='finishprompt'><p>Result" + score + "!");
	$(container).append("<button onClick=" + onretry + "()>Retry!</button></div>");
}
