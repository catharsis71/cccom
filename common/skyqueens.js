/* jshint esversion: 8 */

var skyqueensFall;
var pictureSrc = '/common/crotate.gif';
var pictureWidth = 121;
var pictureHeight = 132;
var numqueens = 20;
var downSpeed = 0.02;
var lrqueens = 10;
var Emergencyskyqueens = false;

if (typeof(numqueens) != 'number' || Math.round(numqueens) != numqueens || numqueens < 1) {
	numqueens = 10;
}

for (var x = 0; x < numqueens; x++) {
	if (document.layers) {
		document.write('<layer id="snFlkDiv' + x + '"><img src="' + pictureSrc + '" height="' + pictureHeight + '" width="' + pictureWidth + '" alt="*" border="0"></layer>');
	} else {
		document.write('<div style="position:absolute;" id="snFlkDiv' + x + '"><img src="' + pictureSrc + '" height="' + pictureHeight + '" width="' + pictureWidth + '" alt="*" border="0"></div>');
	}
}

var xcoords = new Array(),
	ycoords = new Array(),
	snFlkTemp;
for (var x = 0; x < numqueens; x++) {
	xcoords[x] = (x + 1) / (numqueens + 1);
	do {
		snFlkTemp = Math.round((numqueens - 1) * Math.random());
	} while (typeof(ycoords[snFlkTemp]) == 'number');
	ycoords[snFlkTemp] = x / numqueens;
}

function skyqueensFall() {
	if (!getRefToDivNest('snFlkDiv0')) {
		return;
	}
	var scrWidth = 0,
		scrHeight = 0,
		scrollHeight = 0,
		scrollWidth = 0;
	if (typeof(window.innerWidth) == 'number') {
		scrWidth = window.innerWidth;
		scrHeight = window.innerHeight;
	} else {
		if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
			scrWidth = document.documentElement.clientWidth;
			scrHeight = document.documentElement.clientHeight;
		} else {
			if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
				scrWidth = document.body.clientWidth;
				scrHeight = document.body.clientHeight;
			}
		}
	}
	if (typeof(window.pageYOffset) == 'number') {
		scrollHeight = pageYOffset;
		scrollWidth = pageXOffset;
	} else {
		if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
			scrollHeight = document.body.scrollTop;
			scrollWidth = document.body.scrollLeft;
		} else {
			if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
				scrollHeight = document.documentElement.scrollTop;
				scrollWidth = document.documentElement.scrollLeft;
			}
		}
	}
	for (var x = 0; x < numqueens; x++) {
		if (ycoords[x] * scrHeight > scrHeight - pictureHeight) {
			ycoords[x] = 0;
		}
		var divRef = getRefToDivNest('snFlkDiv' + x);
		if (!divRef) {
			return;
		}
		if (divRef.style) {
			divRef = divRef.style;
		}
		var oPix = document.childNodes ? 'px' : 0;
		divRef.top = (Math.round(ycoords[x] * scrHeight) + scrollHeight) + oPix;
		divRef.left = (Math.round(((xcoords[x] * scrWidth) - (pictureWidth / 2)) + ((scrWidth / ((numqueens + 1) * 4)) * (Math.sin(lrqueens * ycoords[x]) - Math.sin(3 * lrqueens * ycoords[x])))) + scrollWidth) + oPix;
		ycoords[x] += downSpeed;
	}
}

function getRefToDivNest(divName) {
	if (document.layers) {
		return document.layers[divName];
	}
	if (document[divName]) {
		return document[divName];
	}
	if (document.getElementById) {
		return document.getElementById(divName);
	}
	if (document.all) {
		return document.all[divName];
	}
	return false;
}

function dispenseskyqueens() {
	if (Emergencyskyqueens) {
		window.clearInterval(Emergencyskyqueens);
	} else {
		Emergencyskyqueens = window.setInterval('skyqueensFall();', 100);
	}
}
