const ball = document.querySelector(".ball");

const slider = document.querySelector(".slider");

ball.addEventListener("click", ()=>{

    console.log("BALL");
    
    slider.classList.toggle("active");
    ball.classList.toggle("active");
});