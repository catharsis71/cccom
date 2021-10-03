var timeoutID = -1;
var secondsCounter = 0;
var nextPageLocation = '';
var slideShowRunning = false;

var slideShowInterval = 5000;
var slideShowStartText = 'Slideshow';
var slideShowPauseText = 'Pause';
var slideShowStartImage = '../';
var slideShowPauseImage = '../';
var slideShowControlId = 'etg_slideshow_control_id';

function SSStateChanged(sender, addr) {
	nextPageLocation = addr;
	updateSlideshowControl(sender);

	if (slideShowRunning) {
		secondsCounter = 0;
		timeoutID = setTimeout("SSTimer()", 1000);
	}
	else {
		clearTimeout(timeoutID);
	}
}

function SSButtonClick(sender) {
	slideShowRunning = !slideShowRunning;
	SSStateChanged(sender, nextPageLocation);
}

function SSTimer() {
	secondsCounter += 1000;

	if (secondsCounter >= slideShowInterval) {
		clearTimeout(timeoutID);
		document.location=nextPageLocation + "?slideshow=yes";
	} else {
		timeoutID = setTimeout("SSTimer()", 1000);
	}
}

function getSSText() {
 	if (slideShowRunning) {
		return slideShowPauseText;
	} else {
		return slideShowStartText;
	}
}

function getSSImage() {
 	if (slideShowRunning) {
		return slideShowPauseImage;
	} else {
		return slideShowStartImage;
	}
}

function updateSlideshowControl(elem) {
	if (elem == null) {
		elem = document.getElementById(slideShowControlId);
	}
	
	if (elem == null) {
		return;
	}
	
	if (elem.tagName == 'INPUT') {
		elem.value = getSSText();
	} else if (elem.tagName == 'IMG') {
		elem.src = getSSImage();
		elem.alt = getSSText();
		elem.title = getSSText();
	} else if (elem.tagName == 'A') {
		elem.innerHTML = getSSText();
	}
}

address_str = document.location.search.substring(1);
if (address_str.indexOf('slideshow=') > -1) {
	slideShowRunning = true;
}
