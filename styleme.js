const inputs = document.querySelectorAll('.controlledInput input');
const backg = document.querySelector('#box');
const range = document.querySelector('#degree');
// const gradientInfo = document.querySelector('#gradientOutput');
let gradientInfo = document.getElementById('gradientOutput');
const copyBtn = document.querySelector('#copyBtn');

window.addEventListener('load', gradientInformationFunc);
copyBtn.addEventListener('click', copyFunc);

function copyFunc() {
	gradientInfo.select();
	/*For mobile devices*/
	gradientInfo.setSelectionRange(0, 99999);
	/* Copy the text inside the text field */
	document.execCommand('copy');
	/* Add a text that says copied to clipboard */
	copyBtn.innerHTML = 'Copied!';
	setTimeout(() => {
		copyBtn.innerHTML = 'Copy to clipboard <i class="far fa-copy"></i>';
	}, 1000);
}

function gradientInformationFunc() {
	const style = getComputedStyle(backg);
	const backgrounnd = style.background.split(' ').slice(4, 13).join(' ');

	gradientInfo.innerHTML = `${backgrounnd}`;
}

function handleUpdate() {
	const deg = this.dataset.sizing || '';

	document.documentElement.style.setProperty(`--${this.name}`, this.value + deg);

	gradientInformationFunc();
}

inputs.forEach((input) => input.addEventListener('input', handleUpdate));
inputs.forEach((input) => input.addEventListener('input', handleUpdate));
