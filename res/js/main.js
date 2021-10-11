let ourdiv = document.getElementsByClassName('our-div');
let info = document.getElementById('info');

let count = ourdiv.length;
let finished = 0;
let limit = 4;

const change = () => {
    let element = event.target;
    if (!element.classList.contains('selected')) {
        element.innerText = '1';
    } else if (element.innerText < limit) {
        element.innerText++;
    }
    element.classList.add('selected');
    if (element.innerText < limit) {
        element.style.backgroundColor = 'red';
    } else if (element.innerText == limit) {
        element.innerText++;
        element.style.backgroundColor = 'green';
        finished++;
        if (finished === count) {
            info.style.display = 'block';
        }
    }
}

let i = 0;
for (i; i < count; i++) {
    ourdiv[i].onclick = change;
}