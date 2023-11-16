var element = document.body;
var cards = document.getElementById("cards");
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var topmenu = document.getElementById("top-menu")
var paras = document.getElementsByTagName("p");

function blueTheme() {

    if (element.classList.contains("purple")) {
        element.classList.remove("purple");
        card2.classList.remove("active");
        for(var i = 0; i < paras.length; i++) {
            paras[i].classList.remove("purple");
        }
    }

    if (element.classList.contains("violet")) {
        element.classList.remove("violet");
        card3.classList.remove("active");
        for(var i = 0; i < paras.length; i++) {
            paras[i].classList.remove("violet");
        }
    }

    element.classList.add("blue");
    card1.classList.add("active");
    topmenu.classList.add("blue");
    for(var i = 0; i < paras.length; i++) {
        paras[i].classList.add("blue");
    }

    card1.style.zIndex = 11;
    card2.style.zIndex = 2;
    card3.style.zIndex = 1;
}

function purpleTheme() {
    if (element.classList.contains("blue")) {
        element.classList.remove("blue");
        card1.classList.remove("active");
        for(var i = 0; i < paras.length; i++) {
            paras[i].classList.remove("blue");
        }
    }

    if (element.classList.contains("violet")) {
        element.classList.remove("violet");
        card3.classList.remove("active");
        for(var i = 0; i < paras.length; i++) {
            paras[i].classList.remove("violet");
        }
    }

    element.classList.add("purple");
    card2.classList.add("active");
    topmenu.classList.add("purple");
    for(var i = 0; i < paras.length; i++) {
        paras[i].classList.add("purple");
    }

    card1.style.zIndex = 2;
    card3.style.zIndex = 1;
}

function violetTheme() {
    if (element.classList.contains("purple")) {
        element.classList.remove("purple");
        card2.classList.remove("active");
        for(var i = 0; i < paras.length; i++) {
            paras[i].classList.remove("purple");
        }
    }

    if (element.classList.contains("blue")) {
        element.classList.remove("blue");
        card1.classList.remove("active");
        for(var i = 0; i < paras.length; i++) {
            paras[i].classList.remove("blue");
        }
    }

    element.classList.add("violet");
    card3.classList.add("active");
    topmenu.classList.add("violet");
    for(var i = 0; i < paras.length; i++) {
        paras[i].classList.add("violet");
    }

    card3.style.zIndex = 11;
    card2.style.zIndex = 4;
    card1.style.zIndex = 2;
}