var loadedimages = 0;
var images = [];

function loadImages(imagesrcs, onload) {
	for ( i = 0; i < imagesrcs.length; i++) {
		var image = new Image();
		image.onload = imgLoaded(onload, imagesrcs.length);
		image.src = imagesrcs[i];
		images[i] = image;
	}
}

function imgLoaded(onload, imagestoload) {
	++loadedimages;
	if (loadedimages == imagestoload)
		onload;
}