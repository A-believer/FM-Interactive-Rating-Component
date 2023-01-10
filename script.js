
const ratingPage = document.querySelector("#rating-page")
const thankYouPage = document.querySelector("#thank-you-page")
const submitBtn = document.querySelector(".submit-btn")
const selectedRate = document.querySelector("#selected")
let rate = 0;
const ratingList = document.querySelectorAll(".rate")

ratingList.forEach(rated => {
    rated.addEventListener("click", function () {
        rate = this.innerHTML;
        ratingList.forEach(btn => btn.classList.remove("active"));
        this.classList.add('active');
    })
})

submitBtn.addEventListener("click", rateHandler)

function rateHandler() {
    if (rate === 0) {
        alert("Please rate us!")
    } else {
        selectedRate.innerHTML = rate;
        ratingPage.style.display = "none"
        thankYouPage.style.display = "block"
    }
}