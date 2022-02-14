const clc = document.querySelector('.cancel');
const arrow = document.querySelector('.icon');
const backContent = document.querySelector('.back-content');

arrow.addEventListener("click", () => {
    arrow.classList.add("active_arr");
    if (backContent.classList.contains("off")) {
        backContent.classList.remove("off");
        backContent.classList.add("active");
    }
});

clc.addEventListener("click", () => {
    arrow.classList.remove("active_arr");
    if (backContent.classList.contains("active")) {
        backContent.classList.remove("active");
        backContent.classList.add("off");
    }
});