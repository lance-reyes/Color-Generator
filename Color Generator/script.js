const button = document.querySelector('button');
const rgb = document.querySelector('#rgb-text');
const hex = document.querySelector('#hex-text');
const hsl = document.querySelector('#hsl-text');

button.addEventListener('click', () => {
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor[0];
    rgb.innerText = newColor[0];
    hex.innerText = newColor[1];
    hsl.innerText = newColor[2];
})

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const rgb = `rgb(${r}, ${g}, ${b})`;
    const hex = rgbToHex(r, g, b);
    const hsl = rgbtoHsl(r, g, b);
    return [rgb, hex, hsl];
}

const rgbToHex = (r, g, b) => {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const rgbtoHsl = (r, g, b) => {
        // Make r, g, and b fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;
    
        // Find greatest and smallest channel values
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        if (delta == 0) h = 0;
        else if (cmax == r)
            // Red is max
            h = ((g - b) / delta) % 6;
        else if (cmax == g)
            // Green is max
            h = (b - r) / delta + 2;
        else
            // Blue is max
            h = (r - g) / delta + 4;
    
        h = Math.round(h * 60);
    
        // Make negative hues positive behind 360°
        if (h < 0) h += 360;
        // Calculate lightness
        l = (cmax + cmin) / 2;
    
        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        s = Math.round(s);
        l = Math.round(l);
    
        return `hsl(${h}, ${s}%, ${l}%)`;
}