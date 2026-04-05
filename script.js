// Order Now tugmasi
const orderBtn = document.querySelector(".hero button");

if (orderBtn) {  // button mavjudligini tekshiramiz
    orderBtn.addEventListener("click", () => {
        alert("Your order will be ready soon!");
    });
}

const foodCards = document.querySelectorAll(".food-card");

foodCards.forEach(card => {
    card.addEventListener("click", () => {

        const popup = card.querySelector(".food-variants-popup");

        if (popup) {

            document.querySelectorAll(".food-variants-popup").forEach(p => {
                if (p !== popup) {
                    p.style.display = "none";
                }
            });

            if (popup.style.display === "block") {
                popup.style.display = "none";
            } else {
                popup.style.display = "block";
            }

        }

    });
});