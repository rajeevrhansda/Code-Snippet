const dark  = document.querySelector(".dark");
const light  = document.querySelector(".light");
const night  = document.querySelector(".night");
const sideMenu  = document.querySelector(".sideMenu");
const logo  = document.querySelector(".logo");
const logoTitle  = document.querySelector(".logoTitle");
const centerLogo  = document.querySelector(".centerLogo");
const centerLogoTitle  = document.querySelector(".centerLogoTitle");

dark.addEventListener("click", ()=>{
    sideMenu.className = "sideMenu"
    logo.className = "logo"
    logoTitle.className = "logoTitle"
    centerLogo.className = "centerLogo"
    centerLogoTitle.className = "centerLogoTitle"
});

light.addEventListener("click", ()=>{
    sideMenu.className = "sideMenu light"
    logo.className = "logo light"
    logoTitle.className = "logoTitle light"
    centerLogo.className = "centerLogo light"
    centerLogoTitle.className = "centerLogoTitle light"
});

night.addEventListener("click", ()=>{
    sideMenu.className = "sideMenu night"
    logo.className = "logo night"
    logoTitle.className = "logoTitle night"
    centerLogo.className = "centerLogo night"
    centerLogoTitle.className = "centerLogoTitle night"
});


console.log(sideMenu);