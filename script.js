const slider = document.getElementById("slider");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

let currentPosition = 0; // Track slider's position
const step = 190; // Move step size (pixels)

// Move Slider Left
leftBtn.addEventListener("click", () => {
    currentPosition += step;
    if (currentPosition > 0) {
        currentPosition = 0; // Prevent sliding past the first item
    }
    slider.style.transform = `translateX(${currentPosition}px)`;
});

// Move Slider Right
rightBtn.addEventListener("click", () => {
    const maxMove = -(slider.scrollWidth - slider.parentElement.offsetWidth);
    currentPosition -= step;
    if (currentPosition < maxMove) {
        currentPosition = maxMove; // Prevent sliding past the last item
    }
    slider.style.transform = `translateX(${currentPosition}px)`;
});
