const arrow = document.querySelector(".arrow");
const list = document.querySelector(".list");
const img = document.querySelector("img");
//20 is for added paddingn
const imgSize = img.width + 20


const imgLength = list.querySelectorAll("img").length;
let clickCounter = 0;

arrow.addEventListener("click", () => {
    // list.style.backgroundColor = "red";
    // list.style.transform = "translateX(-100px)";
    clickCounter++;
    
    // list.style.transform = `translateX(${
        //     list.computedStyleMap().get("transform")[0].x.value - imgSize
        // }px)`;

        const ratio = Math.floor( window.innerWidth / img.width);
        
    if (imgLength - (5 + clickCounter) + (5 - ratio) >= 0)  {
        list.style.transform = `translateX(${list.computedStyleMap().get("transform")[0].x.value - imgSize}px)`;

    } else {
        list.style.transform = "translate(0)"
        clickCounter = 0;

    }

})
// console.log(arrow);
// console.log(list.style.transform);
// console.log(list.computedStyleMap());
// console.log(list.computedStyleMap().get("transform"));

// add this to list component in css transform: translateX(0);

// console.log(list.computedStyleMap().get("transform")[0].x.value);
// console.log(imgSize);
// console.log(list.querySelectorAll("img"));
// console.log(list.querySelectorAll("img").length);
// console.log(window.innerWidth);
// console.log(window.innerWidth / img.width);
console.log(Math.floor( window.innerWidth / img.width));
