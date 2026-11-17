
/* =========================================
   TRANQUIL MINDS INITIATIVE
   Main JavaScript File
========================================= */


/* =========================================
   1. WEBSITE WELCOME MESSAGE
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Welcome to Tranquil Minds Initiative!");

});


/* =========================================
   2. CURRENT YEAR IN FOOTER
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const footerYear = document.querySelector(".site-footer .copyright-year");

    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

});


/* =========================================
   3. ENQUIRY FORM VALIDATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const enquiryForm = document.querySelector(".form-container form");

    if (enquiryForm) {

        enquiryForm.addEventListener("submit", function (event) {

            const fullName = document.getElementById("full-name");
            const email = document.getElementById("email");
            const message = document.getElementById("message");

            if (!fullName.value.trim() ||
                !email.value.trim() ||
                !message.value.trim()) {

                event.preventDefault();

                alert("Please complete all required fields.");

            }

        });

    }

});


/* =========================================
   4. NAVIGATION ACTIVE PAGE
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const currentPage = window.location.pathname.split("/").pop();

    const navigationLinks = document.querySelectorAll(".main-nav a");

    navigationLinks.forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });

});
