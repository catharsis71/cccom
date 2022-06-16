window.addEventListener("keyup", checkKeyPressed, false);
var nextimg;

function bleed() {
	$('body').css("animation", "argh-my-eyes1 12s infinite");
	$('#header').css("animation", "argh-my-eyes1 10s infinite");
	$('#me1').css("animation", "argh-my-eyes1 8s infinite");
	$('#me2').css("animation", "argh-my-eyes1 6s infinite");
	console.log("Activated eyebleed (why did you do that)");
}

function hide() {
	$('#header').css("display", "none");
	$('#me1').css("maxHeight", "95%");
	$('#me2').css("maxHeight", "95%");
}

function choosenextimage() {
	nextimg = $.ajax({
		type: "GET",
		url: "randim.php",
		async: false
	}).responseText;
	console.log("Next image is " + nextimg);
}

function loadMe1() {
	console.log("Start loading " + nextimg + " in #me1");
	$('#me1').attr("src", nextimg);
	choosenextimage();
}

function loadMe2() {
	console.log("Start loading " + nextimg + " in #me2");
	$('#me2').attr("src", nextimg);
	choosenextimage();
}

function start() {
	console.log("First image is " + $('#me1').attr("src"));
	$('#me1').on("load", function() {
		console.log("Finished loading " + $('#me1').attr("src") + " in #me1");
	});
	$('#me2').on("load", function() {
		console.log("Finished loading " + $('#me2').attr("src") + " in #me2");
	});
	choosenextimage();
	loadMe2();
}

function clickMe1() {
	console.log("Making #me2 visible containing " + $('#me2').attr("src"));
	$('#me1').fadeOut('', function() {
		$('#me2').fadeIn('fast', function() {
			loadMe1();
		});
	});
}

function clickMe2() {
	console.log("Making #me1 visible containing " + $('#me1').attr("src"));
	$('#me2').fadeOut('', function() {
		$('#me1').fadeIn('fast', function() {
			loadMe2();
		});
	});
}

function checkKeyPressed(evt) {
	if (evt.key === " ") {
		if ($('#me1').is(":visible")) {
			clickMe1();
		} else {
			clickMe2();
		}
	}
}
