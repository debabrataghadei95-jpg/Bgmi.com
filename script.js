function searchApp() {
    let input = document.getElementById('search').value.toLowerCase().trim();
    let keywords = input.split(" ").filter(k => k !== "");
    let cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {

        let titleEl = cards[i].getElementsByTagName("h2")[0];
        let descEl = cards[i].querySelector(".version");

        if (!titleEl || !descEl) continue;

        let title = titleEl.innerText.toLowerCase();
        let desc = descEl.innerText.toLowerCase();

        let fullText = title + " " + desc;

        let match = true;

        for (let j = 0; j < keywords.length; j++) {
            if (!fullText.includes(keywords[j])) {
                match = false;
                break;
            }
        }

        cards[i].style.display = match ? "flex" : "none";
    }
}


/* ⭐ STAR RATING SYSTEM (FIXED FOR MULTIPLE CARDS) */
document.addEventListener("DOMContentLoaded", function () {

    let ratingContainers = document.querySelectorAll(".rating");

    ratingContainers.forEach(container => {

        let stars = container.querySelectorAll("span");

        stars.forEach((star, index) => {

            star.addEventListener("click", () => {

                // reset all stars
                stars.forEach(s => s.classList.remove("active"));

                // activate clicked stars
                for (let i = 0; i <= index; i++) {
                    stars[i].classList.add("active");
                }

                let value = index + 1;
                console.log("Rated:", value);

                alert("You rated " + value + " stars ⭐");
            });

        });

    });

});
