'use strict';

const date = new Date();
const form = document.getElementById('form');

const currentYear = date.getFullYear();
form.addEventListener('submit', function calcAge(e) {
    e.preventDefault();

    const dob = document.getElementById('dob').value;
    const yob = dob.slice(0, 4);
    if (!dob) {
        alert('Please enter your date of birth.');
    } else {
        const res = document.getElementById('result');
        res.innerText = `Your Age is ${currentYear - yob - 1} years`
    }
});
