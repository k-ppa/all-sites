const count = document.getElementById("counter");
let pandar = 0;
let dark = false;
let target = false;
let interval = false;
const moreButton = document.getElementById("moreButton");
const modeButton = document.getElementById("modeButton");
const closeButton = document.getElementById("closeButton");
const link = document.querySelector("link");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

const maximum = document.getElementById("maximum");
const max = document.getElementById("max");
let maximumm = Number(max.value);
max.addEventListener("input", () => {
	maximumm = Number(max.value);
	maximum.innerText = String(maximumm);
});

const stepValue = document.getElementById("stepValue");
const stepLabel = document.getElementById("stepLabel");
const sliding = document.getElementById("sliding");
sliding.addEventListener("input", stepp);
let step = 1;

const speed = document.getElementById("speed");
const aim = document.getElementById("aim");
const gap = document.getElementById("gap");

function stepp() {
	if (!interval) {
		sliding.value = 0;
		step = 1;
	} else if (Number(sliding.value) >= 0) {
		step = Number(sliding.value) + 1;
	} else {
		step = Number(sliding.value);
	}
	stepValue.innerText = String(step);
	stepLabel.innerText = String(step);
}

function nash() {
	pandar += step;
	count.innerText = String(pandar);
	go();
}

function go() {
	if (!target) {
		count.style.background = "navajowhite";
	} else if (pandar === maximumm) {
		count.style.background = "green";
	} else if (0 > maximumm && maximumm > pandar) {
		count.style.background = "rgb(255, 50, 50)";
	} else if (0 < maximumm && pandar > maximumm) {
		count.style.background = "rgb(255, 50, 50)";
	} else {
		count.style.background = "navajowhite";
	}
}

function restart() {
	pandar = 0;
	count.innerText = String(pandar);
	go();
}

function darkMode() {
	if (!dark) {
		link.href = "ClickerDark.css";
		modeButton.src = "Icons/D_dark_mode.svg";
		moreButton.src = "Icons/D_more_vert.svg";
		closeButton.src = "Icons/D_arrow_back_ios.svg";
		dark = true;
	} else {
		link.href = "ClickerStyle.css";
		modeButton.src = "Icons/light_mode.svg";
		moreButton.src = "Icons/more_vert.svg";
		closeButton.src = "Icons/arrow_back_ios.svg";
		dark = false;
	}
}

function moree() {
	sideMenu.style.display = "block";
	overlay.style.display = "block";
	sideMenu.style.animation = "slideInLeft 0.1s ease-out forwards";
	overlay.style.animation = "fadeIn 0.1s ease-in forwards";
}

function closeMenu() {
	if (maximumm === 0 && target) {
		alert("Enter target number");
	} else {
		sideMenu.style.animation = "slideOutLeft 0.1s ease-in forwards";
		overlay.style.animation = "fadeOut 0.1s ease-in forwards";
		setTimeout(() => {
			sideMenu.style.display = "none";
			overlay.style.display = "none";
		}, 100);
		go();
	}
}

function targett() {
	if (!target) {
		maximum.style.display = "inline-block";
		aim.style.background = "rgb(150, 75, 140)";
		aim.style.color = "white";
		target = true;
	} else {
		maximum.style.display = "none";
		aim.style.background = "#f0f0f0";
		aim.style.color = "black";
		target = false;
	}
}

function intervall() {
	if (!interval) {
		interval = true;
		stepValue.style.display = "inline-block";
		stepLabel.style.display = "inline";
		gap.style.background = "rgb(150, 75, 140)";
		gap.style.color = "white";
		stepp();
	} else {
		interval = false;
		stepValue.style.display = "none";
		stepLabel.style.display = "none";
		gap.style.background = "#f0f0f0";
		gap.style.color = "black";
		stepp();
	}
}

function fast() {
	speed.style.background = "#f0f0f0";
	alert("Not yet ready, Work in progress");
}
