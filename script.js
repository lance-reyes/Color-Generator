const button = document.querySelector('button');
const rgb = document.querySelector('#rgb');
const hex = document.querySelector('#hex');

button.addEventListener('click', () => {
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor[0];
    rgb.innerText = newColor[0];
    hex.innerText = newColor[1];
})

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const rgb = `rgb(${r}, ${g}, ${b})`;
    const hex = rgbToHex(r, g, b);
    return [rgb, hex];
}

const rgbToHex = (r, g, b) => {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

