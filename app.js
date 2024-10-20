function bgred() {
	document.body.style.background = "red"
}
function bgblue() {
	document.body.style.background = "blue"
}
function bggreen() {
	document.body.style.background = "green"
}
function randomColor() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	const randomRGB = `rgb(${r}, ${g}, ${b})`;
	document.body.style.background = randomRGB;
}
