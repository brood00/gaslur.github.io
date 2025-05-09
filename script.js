const auctionBtns = document.querySelectorAll(".auction-btns button")
const cardsDiscovers = document.querySelectorAll(".cards-discovers")

console.log(auctionBtns);
console.log(cardsDiscovers);


function hideAuctions(){
    cardsDiscovers.forEach(item => item.classList.add("hide"))
    auctionBtns.forEach(item => item.classList.remove("active"))
}


function showAuction(index){
    cardsDiscovers[index].classList.remove("hide")
    auctionBtns[index].classList.add("active")
}

hideAuctions();
showAuction(0);

auctionBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideAuctions();
    showAuction(index);
}))


const header = document.querySelector(".header");
const burger = header.querySelector(".burger__menu");
const burgerIcon = header.querySelector(".burger-menu");


burger.addEventListener("click", function() {
    header.classList.toggle("header--mobile");

    if (header.classList.contains("header--mobile")) {
          burgerIcon.src = "files/close-burger-menu.svg"
    } else {
        burgerIcon.src = "files/burger-menu.svg"
    }

  

})


const anchors = document.querySelectorAll(".header-list a")
const Anchors = document.querySelectorAll(".footer-desc a")

anchors.forEach(anc => {
    anc.addEventListener("click", function (event) {
        event.preventDefault();

        const id = anc.getAttribute("href");
        const elem = document.querySelector(id);
        
        window.scroll({
            top: elem.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

Anchors.forEach(anc => {
    anc.addEventListener("click", function (event) {
        event.preventDefault();

        const id = anc.getAttribute("href");
        const elem = document.querySelector(id);
        
        window.scroll({
            top: elem.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

