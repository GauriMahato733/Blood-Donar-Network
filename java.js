// ================= MOBILE MENU =================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ================= BUTTON CLICK EFFECT =================

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.style.transform = "scale(0.95)";

    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 150);
  });
});

// ================= COUNT UP ANIMATION =================

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {

  const target = +counter.getAttribute("data-target");
  let count = 0;

  const updateCounter = () => {

    const increment = target / 100;

    if (count < target) {

      count += increment;

      counter.innerText = `${Math.ceil(count)}+`;

      setTimeout(updateCounter, 20);

    } else {

      counter.innerText = `${target}+`;

    }
  };

  updateCounter();
});

// ================= SEARCH BUTTON =================

const searchBtn = document.getElementById("searchBtn");

if (searchBtn) {

  searchBtn.addEventListener("click", () => {

    const bloodGroup = document.getElementById("bloodGroup").value;
    const location = document.getElementById("location").value;

    if (bloodGroup === "" || location === "") {

      alert("Please select blood group and location.");

    } else {

      alert(`Searching ${bloodGroup} donors near ${location}`);

    }
  });
}

// ================= DONOR CARD HOVER =================

const donorCards = document.querySelectorAll(".donor-card");

donorCards.forEach((card) => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0px) scale(1)";
  });
});

// ================= BLOOD CARD EFFECT =================

const bloodCards = document.querySelectorAll(".blood-card");

bloodCards.forEach((card) => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-12px) scale(1.03)";
  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0px) scale(1)";
  });

  card.addEventListener("click", () => {

    card.style.transform = "scale(0.96)";

    setTimeout(() => {

      card.style.transform = "scale(1)";

    }, 150);
  });
});

// ================= STEP CARD EFFECT =================

const stepCards = document.querySelectorAll(".step-card");

stepCards.forEach((card) => {

  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "0.6s ease";

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-12px)";
  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0px)";
  });
});

// ================= CHOOSE CARD EFFECT =================

const chooseCards = document.querySelectorAll(".choose-card");

chooseCards.forEach((card) => {

  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "0.6s ease";

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-12px)";
  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0px)";
  });
});

// ================= SCROLL ANIMATION =================

window.addEventListener("scroll", revealCards);

function revealCards() {

  const revealElements = document.querySelectorAll(
    ".step-card, .choose-card, .impact-card, .blood-card, .donor-card"
  );

  revealElements.forEach((element) => {

    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {

      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
}

revealCards();

// ================= EMERGENCY FORM =================

const bloodForm = document.getElementById("bloodForm");

if (bloodForm) {

  bloodForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert("Emergency Blood Request Sent Successfully!");

    bloodForm.reset();
  });
}

// ================= EMERGENCY BUTTON =================

const emergencyBtn = document.querySelector(".emergency-btn");

if (emergencyBtn) {

  emergencyBtn.addEventListener("click", () => {

    alert("Connecting to Emergency Support...");
  });

  emergencyBtn.addEventListener("mouseenter", () => {

    emergencyBtn.style.transform = "scale(1.05)";
  });

  emergencyBtn.addEventListener("mouseleave", () => {

    emergencyBtn.style.transform = "scale(1)";
  });
}

// ================= TESTIMONIAL CARDS =================

const testimonialCards = document.querySelectorAll(".testimonial-card");

testimonialCards.forEach((card) => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0px)";
  });
});

// ================= TESTIMONIAL SLIDER =================

const slider = document.querySelector(".testimonial-track");

if (slider) {

  slider.addEventListener("mouseenter", () => {

    slider.style.animationPlayState = "paused";
  });

  slider.addEventListener("mouseleave", () => {

    slider.style.animationPlayState = "running";
  });
}

// ================= SUBSCRIBE FORM =================

const subscribeForm = document.getElementById("subscribeForm");

if (subscribeForm) {

  subscribeForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email = document.getElementById("emailInput").value;

    if (email === "") {

      alert("Please enter your email.");

    } else {

      alert("Thank you for subscribing!");

      subscribeForm.reset();
    }
  });
}

// ================= FOOTER CARD EFFECT =================

const footerCards = document.querySelectorAll(".footer-box");

footerCards.forEach((card) => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-8px)";
  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0px)";
  });
});

// ================= SOCIAL ICON EFFECT =================

const socialIcons = document.querySelectorAll(".social-icons a");

socialIcons.forEach((icon) => {

  icon.addEventListener("mouseenter", () => {

    icon.style.transform =
      "translateY(-5px) scale(1.1) rotate(8deg)";
  });

  icon.addEventListener("mouseleave", () => {

    icon.style.transform =
      "translateY(0px) scale(1) rotate(0deg)";
  });
});
