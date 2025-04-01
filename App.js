document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".resume-section");
    const homeSection = document.getElementById("home"); 
    if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth" });
    }

    // Highlight active section on scroll
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").slice(1) === current) {
                link.classList.add("active");
            }
        });
    });

    // Smooth scroll for navigation
    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Add active class to sections on scroll
    window.addEventListener("scroll", () => {
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 2) {
                section.classList.add("active");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabPanes = document.querySelectorAll(".tab-pane");

    // Function to switch tabs
    function switchTab(event) {
        // Remove active class from all buttons and panes
        tabButtons.forEach(button => button.classList.remove("active"));
        tabPanes.forEach(pane => pane.classList.remove("active"));

        // Add active class to the clicked button and corresponding pane
        const targetTab = this.getAttribute("data-tab");
        this.classList.add("active");
        document.getElementById(targetTab).classList.add("active");
    }

    // Add event listeners to tab buttons
    tabButtons.forEach(button => {
        button.addEventListener("click", switchTab);
    });

    // Show the first tab by default
    tabButtons[0].click();
});

const certificates = [
    { name: "AWS Academy Cloud Foundations", img: "aws.jpg" },
    { name: "AWS Cloud Practitioner Essentials", img: "aws2.jpg" },
    { name: "Oracle Cloud Infrastructure", img: "oracle.jpg" },
    { name: "Infosys SpringBoard - Programming using Java", img: "info.jpg" },
    { name: "NPTEL Data Base Management System", img: "db.jpg" },
    { name: "IIT Bombay - RDBMS PostgreSQL Training", img: "rdm.jpg" },
  ];
  
  let currentSlide = 0;
  
  // Function to render slides
  function renderSlides() {
      const slidesContainer = document.querySelector(".slides");
      slidesContainer.innerHTML = certificates
          .map(
              (certificate, index) => `
              <div class="slide ${index === currentSlide ? "active" : ""}">
                  <img src="${certificate.img}" alt="${certificate.name}" />
                  <h3>${certificate.name}</h3>
              </div>
          `
          )
          .join("");
  }
  
  // Function to move slides
  function moveSlide(direction) {
      const slides = document.querySelectorAll(".slide");
      const totalSlides = slides.length;
  
      // Hide the current slide
      slides[currentSlide].classList.remove("active");
  
      // Update the current slide index
      currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  
      // Show the new current slide
      slides[currentSlide].classList.add("active");
  }
  
  // Initialize slideshow
  document.addEventListener("DOMContentLoaded", () => {
      renderSlides();
  });