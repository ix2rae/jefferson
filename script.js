function toggleNavbar() {
    const nav = document.getElementById("myTopnav");
    const eyeIcon = document.getElementById("eye-icon");

    if (nav.style.display === "flex") {
      nav.style.display = "none";
      eyeIcon.src = "img/close.webp"; // Closed eye image
    } else {
      nav.style.display = "flex";
      eyeIcon.src = "img/open.webp"; // Open eye image
    }
  }

  