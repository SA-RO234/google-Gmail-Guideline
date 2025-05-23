document.addEventListener("DOMContentLoaded", function () {
  // Navigation functionality
  const navItems = document.querySelectorAll(".nav-section a");
  const mainContent = document.getElementById("main-content");
  const contentSections = document.querySelectorAll(".content-section");
  const getStartedBtn = document.getElementById("get-started-btn");

  // Hide all content sections initially
  contentSections.forEach((section) => {
    section.style.display = "none";
  });

  // Handle navigation clicks
  navItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the section ID from the href attribute
      const sectionId = this.getAttribute("href").substring(1);

      // Remove active class from all items
      navItems.forEach((i) => i.classList.remove("active"));

      // Add active class to clicked item
      this.classList.add("active");

      // Hide main content and show the selected section
      mainContent.style.display = "none";

      // Hide all sections first
      contentSections.forEach((section) => {
        section.style.display = "none";
      });

      // Show the selected section
      const selectedSection = document.getElementById(sectionId);
      if (selectedSection) {
        selectedSection.style.display = "block";

        // Scroll to top of the section
        selectedSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Get Started button opens the introduction section
  getStartedBtn.addEventListener("click", function () {
    // Find the introduction link and simulate a click
    const introLink = document.querySelector('a[href="#introduction"]');
    if (introLink) {
      introLink.click();
    }
  });

  // OS tabs functionality in the installation section
  const osTabs = document.querySelectorAll(".os-tab");
  const osContents = document.querySelectorAll(".os-content");

  osTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs
      osTabs.forEach((t) => t.classList.remove("active"));

      // Add active class to clicked tab
      this.classList.add("active");
      // Hide all content
      osContents.forEach((content) => {
        content.style.display = "none";
      });

      // Show the selected content
      const osType = this.getAttribute("data-os");
      const selectedContent = document.getElementById(`${osType}-install`);
      if (selectedContent) {
        selectedContent.style.display = "block";
      }
    });
  });

  // Add parallax effect to the email graphics
  const emails = document.querySelectorAll(".email-graphic");
  const contentArea = document.querySelector(".content");

  contentArea.addEventListener("mousemove", function (e) {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    emails.forEach((email, index) => {
      const factor = (index + 1) * 0.2;
      const rotation = index === 0 ? -15 : index === 1 ? 0 : 15;
      const translateX = index === 0 ? -250 : index === 1 ? 0 : 250;
      const translateY = index === 1 ? 0 : 100;

      email.style.transform = `rotateX(${60 + yAxis * factor}deg) rotateZ(${
        rotation + xAxis * factor
      }deg) translateX(${translateX + xAxis * 2}px) translateY(${
        translateY + yAxis * 2
      }px)`;
    });
  });

  // Reset email positions when mouse leaves
  contentArea.addEventListener("mouseleave", function () {
    emails.forEach((email, index) => {
      const rotation = index === 0 ? -15 : index === 1 ? 0 : 15;
      const translateX = index === 0 ? -250 : index === 1 ? 0 : 250;
      const translateY = index === 1 ? 0 : 100;

      email.style.transform = `rotateX(60deg) rotateZ(${rotation}deg) translateX(${translateX}px) translateY(${translateY}px)`;
    });
  });

  // Check if there's a hash in the URL and navigate to that section
  if (window.location.hash) {
    const hash = window.location.hash;
    const targetLink = document.querySelector(`a[href="${hash}"]`);
    if (targetLink) {
      targetLink.click();
    }
  }
});
