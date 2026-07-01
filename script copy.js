// Footer year
document.getElementById("year").innerHTML =
`© ${new Date().getFullYear()} MyHotel Booking. All Rights Reserved.`;

// Book buttons
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Thank you for choosing MyHotel! Booking feature coming soon.");
    });
});

// Active navbar
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});