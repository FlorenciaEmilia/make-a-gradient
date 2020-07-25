const inputs = document.querySelectorAll('.controlledInput input');
const backg = document.querySelector('#box');
const range = document.querySelector('#degree');
const gradientInfo = document.querySelector('#gradientOutput');
// const initialStsate = document.querySelector('body');
window.addEventListener('load', testingThings);

function testingThings() {
	const style = getComputedStyle(backg);
	const backgrounnd = style.background.split(' ').slice(4, 13).join(' ');

	gradientInfo.innerHTML = `${backgrounnd}`;
}

function handleUpdate() {
	const deg = this.dataset.sizing || '';

	document.documentElement.style.setProperty(`--${this.name}`, this.value + deg);

	testingThings();
}

inputs.forEach((input) => input.addEventListener('input', handleUpdate));
inputs.forEach((input) => input.addEventListener('input', handleUpdate));
