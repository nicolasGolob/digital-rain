let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let string = 'こしあぶら、山うど、タラの芽、筍、春の香りがたまりません。';
let matrix = string.split("");
let font = 12;
let column = width / font;
let array = [];

for(let i = 0; i < column; i++) {
    array[i] = 1;
}
const draw = () => {
    context.fillStyle = 'rgba(0,0,5,0.04)';
    context.fillRect(0, 0, width, height);
    context.fillStyle = '#00FF05';
    context.font = `${font}px system-ui`;
    //system font
    for(let i = 0; i < array.length; i++) {
        let txt = matrix[Math.floor(Math.random() * matrix.length)];
        context.fillText(txt, i * font, array[i] * font);
        if(array[i] * font > height && Math.random() > 0.975) {
            array[i] = 0;
        }
        array[i]++;
    }
}
setInterval(draw, 20);
window.addEventListener('resize', () => location.reload());

