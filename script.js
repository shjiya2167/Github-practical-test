
function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}

// Close menu after clicking a navigation link

const links = document.querySelectorAll("#navLinks a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navLinks")
            .classList.remove("active");

    });

});

console.log("Portfolio website loaded successfully!");
