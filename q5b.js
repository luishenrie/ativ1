const now = new Date();
const hour = now.getHours();


if (hour >= 6 && hour < 12) {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
} else if (hour >= 12 && hour < 18) {
    document.body.style.backgroundColor = 'yellow';
    document.body.style.color = 'black';
} else if (hour >= 18 && hour < 24) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
} else if (hour >= 0 && hour < 6) {
    document.body.style.backgroundColor = 'blue';
    document.body.style.color = 'white';
}