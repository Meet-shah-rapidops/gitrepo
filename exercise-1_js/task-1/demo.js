// ///////////////////////////////////////////////// For time//////////////////////////////////////////////////////
function time() {
	let t = new Date();
	document.getElementById('time').innerHTML = t.toLocaleTimeString();
	window.setInterval(time, 1000);
}
time();

// // ///////////////////////////////////////////////////// For Date/////////////////////////////////////////////////////
let month = new Array();
month[0] = 'January';
month[1] = 'February';
month[2] = 'March';
month[3] = 'April';
month[4] = 'May';
month[5] = 'June';
month[6] = 'July';
month[7] = 'August';
month[8] = 'September';
month[9] = 'October';
month[10] = 'November';
month[11] = 'December';
let d = new Date();
let date = d.getDate();
let m = month[d.getMonth()];
let year = d.getFullYear();
document.getElementById('date').innerHTML = ('0' + date).slice(-2) + ' ' + m + ' ' + year;

// //////////////////////////////////////////////////////// For stopwatch///////////////////////////////////////////////////////////////////////
let msCounter = 0,
	secCounter = 0,
	mCounter = 0,
	hCounter = 0,
	refreshId;

let startbtn = document.getElementById('start');
let stopbtn = document.getElementById('stop');
let resumebtn = document.getElementById('resume');
let resetbtn = document.getElementById('reset');

let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let millisecond = document.getElementById('millisecond');

load();

function load() {
	startbtn.disabled = false;
	stopbtn.disabled = true;
	resumebtn.disabled = true;
	resetbtn.disabled = true;
	hour.innerHTML = '00';
	minute.innerHTML = '00';
	second.innerHTML = '00';
	millisecond.innerHTML = '00';
}

function start() {
	refreshId = setInterval(function() {
		checkMs();
		startbtn.disabled = true;
		resumebtn.disabled = true;
		stopbtn.disabled = false;
		resetbtn.disabled = false;

		if (String(msCounter).length < 2) {
			document.getElementById('millisecond').innerHTML = `0${msCounter}`;
		}
		if (String(secCounter).length < 2) {
			document.getElementById('second').innerHTML = `0${secCounter}`;
		}
		if (String(mCounter).length < 2) {
			document.getElementById('minute').innerHTML = `0${mCounter}`;
		}
		if (String(hCounter).length < 2) {
			document.getElementById('hour').innerHTML = `0${hCounter}`;
		}
	}, 10);
}

function checkMs() {
	document.getElementById('millisecond').innerText = msCounter;

	if (++msCounter === 100) {
		checkSec();
		msCounter = 0;
	}
}

function checkSec() {
	document.getElementById('second').innerText = ++secCounter;
	if (secCounter === 60) {
		secCounter = 0;
		checkMin();
	}
}

function checkMin() {
	document.getElementById('minute').innerText = ++mCounter;
	if (mCounter === 60) {
		mCounter = 0;
		checkHour();
	}
}

function checkHour() {
	document.getElementById('hour').innerText = ++hCounter;
}

function stop() {
	clearInterval(refreshId);
	startbtn.disabled = true;
	resumebtn.disabled = false;
	stopbtn.disabled = true;
	resetbtn.disabled = false;
}

function reset() {
	msCounter = 0;
	secCounter = 0;
	mCounter = 0;
	hCounter = 0;
	clearInterval(refreshId);
	load();
}
