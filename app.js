const arrow = document.querySelector(".arrow");
const list = document.querySelector(".list");
const img = document.querySelector("img");
const imgSize = img.width + 20

const imgLength = list.querySelectorAll("img").length;
let clickCounter = 0;
const ratio = Math.floor(window.innerWidth / img.width);
const abc =  imgLength - ratio

arrow.addEventListener("click", () => {
    clickCounter++;
    if (clickCounter <= abc) {
        list.style.transform = `translateX(${list.computedStyleMap().get("transform")[0].x.value - imgSize}px)`;

    } else {
        list.style.transform = "translate(0)"
        clickCounter = 0;
    }
});


