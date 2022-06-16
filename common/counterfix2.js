/* jshint esversion: 8 */

var image;
var isLoaded;

async function main() {
	await new Promise(r => setTimeout(r, 1000));
	image = document.querySelector("[id^='tmipTrT0']");
	if (image != undefined) {
		isLoaded = image.complete && image.naturalHeight > 1;
	}
	if (isLoaded != true || image == undefined) {
		console.log("Reloading counter");
		document.getElementById('elemID031021').innerHTML = '<a href="https://ipnoid.com/"><img id="tmipTrT0" alt="counter" src="https://ipnoid.com/tracker/1327/4684NR-IPIB/21925/1/12/ans/?' + performance.now() + '"></a>';
	}
	await new Promise(r => setTimeout(r, 1000));
	image = document.querySelector("[id^='tmipTrT0']");
	if (image != undefined) {
		isLoaded = image.complete && image.naturalHeight > 1;
	}
	if (isLoaded != true || image == undefined) {
		console.log("Reloading counter");
		document.getElementById('elemID031021').innerHTML = '<a href="https://ipnoid.com/"><img id="tmipTrT0" alt="counter" src="http://138.128.163.109/tracker/1327/4684NR-IPIB/21925/1/12/ans/?' + performance.now() + '"></a>';
	}
	await new Promise(r => setTimeout(r, 1000));
	image = document.querySelector("[id^='tmipTrT0']");
	if (image != undefined) {
		isLoaded = image.complete && image.naturalHeight > 1;
	}
	if (isLoaded != true || image == undefined) {
		console.log("Reloading counter");
		document.getElementById('elemID031021').innerHTML = '<img id="tmipTrT0" alt="you adblocked my counter, how dare you" title="you adblocked my counter, how dare you" src="/common/blocked.png"></a>';
	}
}
main();
