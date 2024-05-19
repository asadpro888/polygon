const btn = document.getElementById('btn');
let hex = document.getElementById('hexCode');

function randomColor (){
    let letters = "0123456789ABCDEF"
    let color = "#";
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
btn.addEventListener('click', () => {
    let color = randomColor();
    document.body.style.backgroundColor = color;
    hex.innerHTML = color;
    hex.style.color = color;
    btn.style.backgroundColor = color;
    btn.style.color = color;
    btn.style.borderColor = color;
    btn.style.boxShadow = `0 0 10px ${color}`;
    btn.style.transform = `translateY(-5px)`;
    setTimeout(() => {
        btn.style.transform = `translateY(0px)`;
    }, 100);
    btn.style.transition = `all 0.3s ease`;
    hex.style.transition = `all 0.3s ease`;
    hex.style.transform = `translateY(-5px)`; 
});