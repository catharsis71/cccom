/* jshint esversion: 8 */

async function main() {
	await new Promise(r => setTimeout(r, 5000));

	window.history.replaceState({}, document.title, mylocation);
}

var mylocation = document.currentScript.getAttribute('data-location');

if (mylocation == null) {
	mylocation = window.location.pathname;
}

main();
