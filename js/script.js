let input = document.querySelector('input');
const button = document.getElementById('button');
const div = document.getElementById('error');
const ol = document.createElement('ol');

document.body.append(ol);

let check = () => {
	if (input.value !== '') {
		div.textContent = '';
		const li = document.createElement('li');
		ol.appendChild(li);
		li.textContent = input.value;
		document.querySelector('input').value = '';
	} else {
		div.textContent = 'Nie podano co wstawić!';
		div.style.color = 'red';
	}
};
button.addEventListener('click', check);
input.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		check();
	}
});
