
const pizzaPopup = document.getElementById("pizza-popup");
const burgerPopup = document.getElementById("burger-popup");
const pastaPopup = document.getElementById("pasta-popup");
const saladPopup = document.getElementById("salad-popup");
const soupPopup = document.getElementById("soup-popup");
const dessertPopup = document.getElementById("dessert-popup");
function barchasiniYopish(joriyOyna) {
    const hammasi = [pizzaPopup, burgerPopup, pastaPopup, saladPopup, soupPopup, dessertPopup];
    hammasi.forEach(popup => {
        // Agar oyna saytda bo'lsa va u hozir bosilgan oyna bo'lmasa - yopamiz
        if (popup && popup !== joriyOyna) {
            popup.style.display = "none";
        }
    });
}

// 3. PIZZA kartasi bosilganda faqat o'zini ochish
if (pizzaPopup) {
    const pizzaCard = pizzaPopup.closest('.food-card');
    if (pizzaCard) {
        pizzaCard.addEventListener("click", function(e) {
            if (e.target.closest('.food-variants-popup')) return; // popup ichi bosilsa yopilmasin
            barchasiniYopish(pizzaPopup); // pizzadan boshqasini yopadi
            pizzaPopup.style.display = (pizzaPopup.style.display === "block") ? "none" : "block";
            e.stopPropagation();
        });
    }
}

// 4. BURGER kartasi bosilganda faqat o'zini ochish
if (burgerPopup) {
    const burgerCard = burgerPopup.closest('.food-card');
    if (burgerCard) {
        burgerCard.addEventListener("click", function(e) {
            if (e.target.closest('.food-variants-popup')) return;
            barchasiniYopish(burgerPopup); // burgerdan boshqasini yopadi
            burgerPopup.style.display = (burgerPopup.style.display === "block") ? "none" : "block";
            e.stopPropagation();
        });
    }
}

// 5. PASTA kartasi bosilganda faqat o'zini ochish
if (pastaPopup) {
    const pastaCard = pastaPopup.closest('.food-card');
    if (pastaCard) {
        pastaCard.addEventListener("click", function(e) {
            if (e.target.closest('.food-variants-popup')) return;
            barchasiniYopish(pastaPopup); // pastadan boshqasini yopadi
            pastaPopup.style.display = (pastaPopup.style.display === "block") ? "none" : "block";
            e.stopPropagation();
        });
    }
}

// 6. SALAD kartasi bosilganda faqat o'zini ochish
if (saladPopup) {
    const saladCard = saladPopup.closest('.food-card');
    if (saladCard) {
        saladCard.addEventListener("click", function(e) {
            if (e.target.closest('.food-variants-popup')) return;
            barchasiniYopish(saladPopup);
            saladPopup.style.display = (saladPopup.style.display === "block") ? "none" : "block";
            e.stopPropagation();
        });
    }
}

// 7. SOUP kartasi bosilganda faqat o'zini ochish
if (soupPopup) {
    const soupCard = soupPopup.closest('.food-card');
    if (soupCard) {
        soupCard.addEventListener("click", function(e) {
            if (e.target.closest('.food-variants-popup')) return;
            barchasiniYopish(soupPopup);
            soupPopup.style.display = (soupPopup.style.display === "block") ? "none" : "block";
            e.stopPropagation();
        });
    }
}

// 8. DESSERT kartasi bosilganda faqat o'zini ochish
if (dessertPopup) {
    const dessertCard = dessertPopup.closest('.food-card');
    if (dessertCard) {
        dessertCard.addEventListener("click", function(e) {
            if (e.target.closest('.food-variants-popup')) return;
            barchasiniYopish(dessertPopup);
            dessertPopup.style.display = (dessertPopup.style.display === "block") ? "none" : "block";
            e.stopPropagation();
        });
    }
}

// 9. Saytning istalgan bo'sh joyi bosilganda hamma oyna yopilib ketishi uchun
document.addEventListener("click", function() {
    barchasiniYopish(null);
});


    document.addEventListener("click", () => {
        document.querySelectorAll(".food-variants-popup").forEach(p => {
            p.style.display = "none";
        });
    });


    document.addEventListener("DOMContentLoaded", function () {
        const allButtons = document.querySelectorAll(".order-btn");

        const contactSection = document.getElementById("contact");

        allButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                } else {
                    console.log("Xatolik: Saytda 'contact' ID li bo'lim topilmadi!");
                }
            });
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const bookingForm = document.getElementById("restaurantBookingForm");
        const successMessage = document.getElementById("successMessage");

        const TELEGRAM_TOKEN = "8738603093:AAHxIPDJm0zTod94GfUdtepXQwk9NGd4y-M";
        const TELEGRAM_CHAT_ID = "8134877349";

        if (bookingForm) {
            bookingForm.addEventListener("submit", function (event) {
                event.preventDefault();
                const submitBtn = bookingForm.querySelector('button[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.innerText = "Yuborilmoqda...";            
                const name = document.getElementById("clientName") ? document.getElementById("clientName").value : "Noma'lum";
                const phone = document.getElementById("clientPhone") ? document.getElementById("clientPhone").value : "Noma'lum";
                const guests = document.getElementById("guestCount") ? document.getElementById("guestCount").value : "1";
                const dateTime = document.getElementById("bookingDateTime") ? document.getElementById("bookingDateTime").value : "Vaqt ko'rsatilmagan";

                const formattedDate = dateTime.replace("T", "  Soat: ");

                const telegramMessage = `🔔 **YANGI STOL BUYURTMA QILINDI!**\n\n` +
                    `👤 Ism: ${name}\n` +
                    `📞 Tel: ${phone}\n` +
                    `👥 Mehmonlar: ${guests}\n` +
                    `📅 Sana va Vaqt: ${formattedDate}`;

                    
                fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        chat_id: TELEGRAM_CHAT_ID,
                        text: telegramMessage,
                        parse_mode: "Markdown"
                    })
                })
                    .then(response => {
                        if (response.ok) {
                            if (successMessage) {
                                successMessage.innerHTML = `🎉 Muhtaram <strong>${name}</strong>, joyingiz muvaffaqiyatli qabul qilindi!`;
                                successMessage.style.display = "block";
                            } else {
                                alert("🎉 Buyurtmangiz qabul qilindi!");
                            }

                            
                            bookingForm.reset();
                            setTimeout(() => {
                                submitBtn.disabled = false;
                                submitBtn.innerText = "Book Now"; 
                                if (successMessage) successMessage.style.display = "none";
                            }, 60000);

                        } else {
                            alert("Xatolik yuz berdi. Chat ID raqamingizni tekshiring.");
                            submitBtn.disabled = false;
                            submitBtn.innerText = "Book Now";
                        }
                    })
                    .catch(error => {
                        console.error("Xatolik:", error);
                        alert("Internet ulanishini tekshiring!");
                        submitBtn.disabled = false;
                        submitBtn.innerText = "Book Now";
                    });
            });
        }
    });


    const foodDescriptions = {
        "Osh (Palov)": "Haqiqiy o'zbekona osh! Sarxil qo'y go'shti, devzira guruchi, shirin sabzi va maxsus ziravorlar bilan pishirilgan an'anaviy taom.",
        "Gamburger": "Yangi pishgan issiqqina bulkacha, sharbatli mol go'shti kotleti, barra bodring, yangi pomidor va maxsus tayyorlangan sous.",
        "Pizza Margarita": "Yupqa italyancha xamir, maxsus pomidor sousi, ko'p miqdorda erigan mozzarella pishlog'i va xushbo'y reyhan barglari.",
        "Cheesecake": "Mayin va og'izda eriydigan pishloqli krem hamda krispi pechenye asosiga ega eng mashhur shirinlik.",
        "Somsa": "Tandirdan uzilgan, ichi lahm go'sht va mayda to'g'ralgan piyoz hamda dumi yog'i bilan to'ldirilgan qatlama somsa."
    };


    function showDetails(name, imgUrl, price) {
        const overlay = document.getElementById("foodDetailsPopup");
        document.getElementById("popTitle").innerText = name;
        document.getElementById("popImg").src = imgUrl;
        document.getElementById("popPrice").innerText = price;

        if (foodDescriptions[name]) {
            document.getElementById("popDesc").innerText = foodDescriptions[name];
        } else {

            document.getElementById("popDesc").innerText = `Bizning eng sara va halol mahsulotlardan maxsus retsept asosida tayyorlangan shirin hamda mazali ${name} taomimiz. Buyurtma berishga tayyor!`;
        }
        overlay.style.display = "flex";
    }


    function closeDetails() {
        const overlay = document.getElementById("foodDetailsPopup");
        overlay.style.display = "none";
    }
