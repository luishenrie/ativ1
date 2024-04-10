const input = document.createElement('input');
input.type = 'text';
input.id = 'dateInput';
input.placeholder = 'dd/mm/aaaa';

const button = document.createElement('button');
button.textContent = 'Calculate';
button.onclick = calculateDays;

const resultDiv = document.createElement('div');
resultDiv.id = 'result';

document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(resultDiv);

function calculateDays() {
    const inputValue = document.getElementById('dateInput').value;
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/](19|20)\d\d$/;

    if (!dateRegex.test(inputValue)) {
        alert('Invalid date format. Please use dd/mm/aaaa.');
        document.getElementById('dateInput').value = '';
        document.getElementById('dateInput').focus();
        return;
    }

    const userDate = new Date(inputValue.split('/').reverse().join('/'));
    const currentDate = new Date();
    const diffInMilliseconds = Math.abs(userDate - currentDate);
    const diff = {
        years: Math.floor((diffInMilliseconds / (1000 * 60 * 60 * 24 * 365))),
        months: Math.floor((diffInMilliseconds / (1000 * 60 * 60 * 24 * 30))),
        days: Math.floor((diffInMilliseconds / (1000 * 60 * 60 * 24)))
    };

    resultDiv.innerHTML = `<p>Days: ${diff.days}</p><p>Months: ${diff.months}</p><p>Years: ${diff.years}</p>`;
}