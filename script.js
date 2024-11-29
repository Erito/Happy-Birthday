function showSurprise() {
    const message = document.getElementById('message');
    const balloons = document.getElementById('balloons');

    message.textContent = "Surprise! 🎉🎈";

    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.backgroundColor = getRandomColor();
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDuration = Math.random() * 2 + 3 + 's';
        balloons.appendChild(balloon);

        balloon.addEventListener('animationend', () => {
            balloon.remove();
        });
    }
}

function getRandomColor() {
    const colors = ['#FF5733', '#FFBD33', '#75FF33', '#33FFBD', '#3375FF', '#8E33FF', '#FF33B2'];
    return colors[Math.floor(Math.random() * colors.length)];
}